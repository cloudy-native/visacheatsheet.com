// Define the types of answers a user can select
export type AnswerType = 'single' | 'multiple' | 'text' | 'number' | 'date';

// Define a single answer option
export interface AnswerOption {
  id: string;
  text: string;
  // The ID of the next question to navigate to when this answer is selected
  nextQuestionId: string | null; // null for terminal nodes
  // Optional additional information to display with this answer
  additionalInfo?: string;
  // Optional country code for displaying flags (for country-specific options)
  countryCode?: string;
}

// Define a question node in the decision tree
export interface Question {
  id: string;
  text: string;
  // Help text to provide additional context
  helpText?: string;
  // Type of answer expected for this question
  answerType: AnswerType;
  // Available answer options for this question
  options: AnswerOption[];
  // Optional tags for categorizing questions (e.g., "duration", "purpose")
  tags?: string[];
  // Optional map of conditional questions based on previous answers
  conditionalQuestions?: {
    [previousQuestionId: string]: {
      [previousAnswerId: string]: string; // Points to alternate next question ID
    };
  };
}

// Define a terminal result node (visa recommendation)
export interface VisaResult {
  id: string;
  title: string;
  description: string;
  // Requirements for this visa
  requirements: string[];
  // Official application links
  applicationLinks: {
    text: string;
    url: string;
  }[];
  // Estimated processing time
  processingTime?: string;
  // Estimated cost
  cost?: {
    amount: number;
    currency: string;
  };
  // Alternative visa options if this one doesn't work
  alternativeOptions?: string[]; // IDs of alternative visa results
  // Countries this visa applies to
  applicableCountries: string[];
}

// The overall decision tree structure
export interface VisaDecisionTree {
  // The first question to display
  startQuestionId: string;
  // All questions in the tree
  questions: Record<string, Question>;
  // All terminal results in the tree
  results: Record<string, VisaResult>;
  // Metadata about the tree
  metadata: {
    version: string;
    lastUpdated: string;
    countries: string[]; // List of all countries covered
  };
}

// User's journey through the decision tree
export interface UserJourney {
  // Track the path the user has taken
  path: {
    questionId: string;
    answerId: string;
  }[];
  // Current question ID
  currentQuestionId: string | null;
  // Final result ID if reached
  resultId: string | null;
}