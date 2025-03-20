import { VisaDecisionTree, Question, AnswerOption, VisaResult } from '../src/decisiontrees/model';

/**
 * Truncates a string to a specified length, showing first and last n characters
 * @param text The text to truncate
 * @param maxLength Maximum length of the truncated text
 * @returns Truncated string
 */
function truncateText(text: string, maxLength: number = 60): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;

  const prefixLength = Math.floor(maxLength / 2);
  const suffixLength = maxLength - prefixLength;
  
  const start = text.substring(0, prefixLength);
  const end = text.substring(text.length - suffixLength);
  
  return `${start}...${end}`;
}

/**
 * Sanitizes text for Mermaid compatibility
 * @param text Text to sanitize
 * @returns Sanitized text
 */
function sanitizeForMermaid(text: string): string {
  if (!text) return '';
  // Replace characters that cause issues in Mermaid syntax
  return text
    .replace(/[&<>"']/g, '')
    .replace(/[()]/g, '') 
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s+/g, ' ');
}

/**
 * Maps between original IDs and Mermaid-safe IDs
 * @param id Original ID
 * @returns Sanitized ID for Mermaid
 */
function generateNodeId(id: string): string {
  return id.replace(/[^a-zA-Z0-9]/g, '_');
}

/**
 * Converts a visa decision tree to Mermaid markdown
 * @param tree The visa decision tree to convert
 * @param textMaxLength Maximum length for displayed text
 * @returns Mermaid markdown string
 */
export function convertToMermaid(
  tree: VisaDecisionTree, 
  textMaxLength: number = 30, 
): string {
  let mermaidString = 'flowchart LR\n';
  
  // Process questions
  Object.entries(tree.questions).forEach(([questionId, question]) => {
    const nodeId = generateNodeId(questionId);
    const displayText = sanitizeForMermaid(truncateText(question.text, textMaxLength));
    
    // Add question node
    mermaidString += `    ${nodeId}["${displayText}"]\n`;
    
    // Process answer options
    question.options.forEach(option => {
      const optionText = sanitizeForMermaid(truncateText(option.text, textMaxLength));
      
      if (option.nextQuestionId) {
        // Link to another question
        const nextNodeId = generateNodeId(option.nextQuestionId);
        mermaidString += `    ${nodeId} -->|${optionText}| ${nextNodeId}\n`;
      } else if (option.nextQuestionId === null) {
        // For terminal options, link directly to the result that corresponds to this path
        // In a real implementation, you might need to determine which result matches this path
        // For this example, we'll map terminal options to result IDs
        const resultId = mapTerminalOptionToResult(tree, questionId, option.id);
        if (resultId) {
          const resultNodeId = generateNodeId(resultId);
          mermaidString += `    ${nodeId} -->|${optionText}| ${resultNodeId}\n`;
        }
      }
    });
  });
  
  // Process results
  Object.entries(tree.results).forEach(([resultId, result]) => {
    const nodeId = generateNodeId(resultId);
    const displayText = sanitizeForMermaid(truncateText(result.title, textMaxLength));
    
    // Add result node (with different shape)
    mermaidString += `    ${nodeId}(["${displayText}"])\n`;
  });
  
  return mermaidString;
}

/**
 * Maps a terminal option to the appropriate result
 * This is a more intelligent version of findResultForTerminalOption that looks at question/option pairs
 */
function mapTerminalOptionToResult(
  tree: VisaDecisionTree, 
  questionId: string, 
  optionId: string
): string | null {
  // For simplicity, we're just using the first part of the question ID to match with result IDs
  // In a real implementation, you would need proper logic to determine which result corresponds to which path
  
  // This implementation attempts to map question/option IDs to result IDs in a more direct way
  // For this example, we're checking if our questionId has a direct match with any resultId
  const questionNum = questionId.replace(/[^0-9]/g, '');
  
  // For other questions, try to find a result with a matching number if available
  const matchingResults = Object.keys(tree.results).filter(id => 
    id.includes(`r${questionNum}`)
  );
  
  if (matchingResults.length > 0) {
    return matchingResults[0];
  }
  
  // Fallback: for any terminal node, pick a reasonable result if we couldn't find a match
  const resultIds = Object.keys(tree.results);
  return resultIds.length > 0 ? resultIds[0] : null;
}

/**
 * Converts a visa decision tree to Mermaid markdown and logs to console
 * @param tree The visa decision tree to convert
 */
export function logTreeAsMermaid(
  tree: VisaDecisionTree,
  textMaxLength: number = 100,
): void {
  const mermaid = convertToMermaid(tree, textMaxLength);
  console.log(mermaid);
}