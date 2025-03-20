import { logTreeAsMermaid } from './treeToMermaid';
import { usVisaDecisionTree } from '../src/decisiontrees/us';

// Example script to generate Mermaid markdown for the US visa decision tree
// Run this file with ts-node to see the output

// Generate Mermaid with default settings (30 char limit, 10 char preserve)
console.log("DEFAULT SETTINGS (30 char max, 10 char preserve):");
logTreeAsMermaid(usVisaDecisionTree);

// Generate Mermaid with more condensed text
console.log("\n\nCONDENSED SETTINGS (20 char max, 8 char preserve):");
logTreeAsMermaid(usVisaDecisionTree, 20, 8);

// Generate Mermaid with longer text
console.log("\n\nEXPANDED SETTINGS (50 char max, 15 char preserve):");
logTreeAsMermaid(usVisaDecisionTree, 50, 15);

// To use this output:
// 1. Copy the generated Mermaid markdown
// 2. Paste it into a Markdown file between ```mermaid and ``` tags
// 3. Or use an online Mermaid editor like https://mermaid.live/