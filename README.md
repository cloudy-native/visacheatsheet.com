# Visa Cheatsheet

## Project Overview

Visa Cheatsheet is a web application designed to help travelers navigate the complex visa requirements for different countries. Using an interactive decision tree approach, users can answer a series of questions to determine which visa type they need for their travel situation. The site provides comprehensive information on visa types, requirements, application links, costs, and processing times for various countries.

## Technology Used

This project is built with:

- **Gatsby** - React-based static site generator for fast performance and SEO
- **TypeScript** - Strongly-typed JavaScript for better developer experience
- **Chakra UI** - Component library with built-in dark mode support
- **Markdown** - Content management for blog posts
- **Decision Tree Logic** - Custom implementation for visa requirement navigation

## Decision Tree Data Interfaces

The visa decision tree model is structured around these key interfaces:

### AnswerOption
Represents a single selectable option within a question:
```typescript
interface AnswerOption {
  id: string;
  text: string;
  nextQuestionId: string | null;
  additionalInfo?: string;
  countryCode?: string;
}
```

### Question
Represents a node in the decision tree:
```typescript
interface Question {
  id: string;
  text: string;
  helpText?: string;
  answerType: 'single' | 'multiple' | 'text' | 'number' | 'date';
  options: AnswerOption[];
  tags?: string[];
  conditionalQuestions?: {
    [previousQuestionId: string]: {
      [previousAnswerId: string]: string;
    };
  };
}
```

### VisaResult
Represents a terminal node with visa information:
```typescript
interface VisaResult {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  applicationLinks: { text: string; url: string; }[];
  processingTime?: string;
  cost?: { amount: number; currency: string; };
  alternativeOptions?: string[];
  applicableCountries: string[];
}
```

### VisaDecisionTree
The overall structure containing questions and results:
```typescript
interface VisaDecisionTree {
  startQuestionId: string;
  questions: Record<string, Question>;
  results: Record<string, VisaResult>;
  metadata: {
    version: string;
    lastUpdated: string;
    author: string;
    countries: string[];
  };
}
```

## Repository Files Overview

```
.
├── content/                # Blog content files
│   └── blog/               # Blog posts with Markdown + frontmatter
├── src/                    # Source code
│   ├── components/         # React UI components
│   │   ├── CountryCard.tsx # Country selection card
│   │   ├── Header.tsx      # Site navigation header
│   │   ├── Footer.tsx      # Site footer with links
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── VisaWizard.tsx  # Main wizard component
│   │   └── BuyMeCoffeeButton.tsx # Support button
│   ├── decisiontrees/      # Decision tree data and logic
│   │   ├── model.ts        # Core interfaces
│   │   ├── VisaDecisionTree.tsx # Decision tree component
│   │   ├── visas.ts        # Shared visa definitions
│   │   └── [countries]/    # Country-specific visa trees
│   ├── pages/              # Page components
│   │   ├── index.tsx       # Homepage
│   │   ├── 404.tsx         # 404 page
│   │   ├── visa-wizard.tsx # Visa wizard page
│   │   └── blog/index.tsx  # Blog listing page
│   ├── templates/          # Page templates
│   │   ├── blog-post.tsx   # Full-featured blog post template
│   │   └── blog-post-simple.tsx # Minimal blog post template
│   └── theme/              # Chakra UI theme customization
├── gatsby-browser.js       # Browser-specific configurations
├── gatsby-config.ts        # Gatsby configuration
├── gatsby-node.js          # Gatsby Node API implementations
└── package.json            # Project dependencies and scripts
```