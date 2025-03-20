import { VisaDecisionTree } from './model';

export const uaeVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the primary purpose of your visit to the UAE?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Holiday", nextQuestionId: "q2" },
        { id: "a2", text: "Work/Business", nextQuestionId: "q3" },
        { id: "a3", text: "Study", nextQuestionId: "q8" },
        { id: "a4", text: "Visit Family/Friend", nextQuestionId: "q2" },
        { id: "a5", text: "Transit/Stopover", nextQuestionId: "q9" },
      ],
      helpText: "Select the main reason for your visit to the UAE",
    },

    q2: {
      id: "q2",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        { id: "a1", text: "GCC Countries (Bahrain, Kuwait, Oman, Qatar, Saudi Arabia)", nextQuestionId: "r1" },
        { id: "a2", text: "Visa-free entry countries (UK, USA, EU countries, Australia, etc.)", nextQuestionId: "r2" },
        { id: "a3", text: "Visa on arrival eligible countries (China, Russia, etc.)", nextQuestionId: "r3" },
        { id: "a4", text: "Other countries (requiring pre-arranged visa)", nextQuestionId: "r4" },
      ],
      helpText: "Your nationality determines the visa requirements for entering the UAE",
    },

    q3: {
      id: "q3",
      text: "What type of work will you be doing in the UAE?",
      answerType: "single",
      options: [
        { id: "a1", text: "Long-term employment with UAE company", nextQuestionId: "r5" },
        { id: "a2", text: "Short-term business visit (meetings, conferences)", nextQuestionId: "q4" },
        { id: "a3", text: "Freelance work", nextQuestionId: "r7" },
        { id: "a4", text: "Investor/Entrepreneur", nextQuestionId: "r8" },
      ],
      helpText: "Different work activities require different visa types",
    },

    q4: {
      id: "q4",
      text: "How long will your business visit last?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 30 days", nextQuestionId: "q2" },
        { id: "a2", text: "30-90 days", nextQuestionId: "r9" },
        { id: "a3", text: "More than 90 days", nextQuestionId: "r5" },
      ],
      helpText: "The duration of your business visit affects the type of visa you need",
    },

    q5: {
      id: "q5",
      text: "Do you have a sponsor in the UAE?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, a family member who is a UAE resident", nextQuestionId: "r10" },
        { id: "a2", text: "Yes, a UAE-based company", nextQuestionId: "r5" },
        { id: "a3", text: "No sponsor", nextQuestionId: "r4" },
      ],
      helpText: "Having a sponsor can determine your visa options",
    },

    q6: {
      id: "q6",
      text: "Are you planning to look for work while in the UAE?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes", nextQuestionId: "r11" },
        { id: "a2", text: "No, strictly tourism", nextQuestionId: "q2" },
      ],
      helpText: "Job seeking requires specific visa considerations",
    },

    q7: {
      id: "q7",
      text: "Will you be accompanied by family members?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, spouse and/or children", nextQuestionId: "r12" },
        { id: "a2", text: "No, traveling alone", nextQuestionId: "r5" },
      ],
      helpText: "Family members may need dependent visas",
    },

    q8: {
      id: "q8",
      text: "What type of educational program are you enrolled in?",
      answerType: "single",
      options: [
        { id: "a1", text: "Degree program at accredited UAE university", nextQuestionId: "r13" },
        { id: "a2", text: "Short course or training (less than 3 months)", nextQuestionId: "q2" },
        { id: "a3", text: "Language course", nextQuestionId: "r13" },
      ],
      helpText: "Different study programs may require different visa types",
    },

    q9: {
      id: "q9",
      text: "How long will your transit/stopover in the UAE last?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 24 hours, staying in airport transit area", nextQuestionId: "r14" },
        { id: "a2", text: "24-96 hours (planning to leave airport)", nextQuestionId: "r15" },
        { id: "a3", text: "More than 96 hours", nextQuestionId: "q2" },
      ],
      helpText: "Transit duration determines if you need a visa",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "GCC Resident Entry",
      description: 
        "Citizens of Gulf Cooperation Council (GCC) countries don't need a visa to enter the UAE.",
      requirements: [
        "Valid passport from a GCC country (Bahrain, Kuwait, Oman, Qatar, Saudi Arabia)",
        "Valid Emirates ID (for UAE residents)",
      ],
      applicationLinks: [
        {
          text: "UAE Entry Requirements for GCC Nationals",
          url: "https://u.ae/en/information-and-services/visa-and-emirates-id/visa-and-entry-permits",
        },
      ],
      processingTime: "Immediate entry at border",
      cost: {
        amount: 0,
        currency: "AED",
      },
      alternativeOptions: [],
      applicableCountries: [
        "Bahrain", "Kuwait", "Oman", "Qatar", "Saudi Arabia"
      ],
    },

    r2: {
      id: "r2",
      title: "Visa-Free Entry",
      description: 
        "Citizens of several countries can enter the UAE without obtaining a visa in advance for stays of 30-90 days.",
      requirements: [
        "Valid passport from an eligible country",
        "Return or onward ticket",
        "Sufficient funds for your stay",
      ],
      applicationLinks: [
        {
          text: "UAE Visa Information for Eligible Countries",
          url: "https://u.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae",
        },
      ],
      processingTime: "Entry granted at border/airport",
      cost: {
        amount: 0,
        currency: "AED",
      },
      alternativeOptions: ["r9"],
      applicableCountries: [
        "United States", "United Kingdom", "France", "Italy", "Germany", "Netherlands", "Belgium", 
        "Luxembourg", "Switzerland", "Austria", "Sweden", "Norway", "Denmark", "Portugal", "Ireland", 
        "Greece", "Finland", "Spain", "Monaco", "Iceland", "Andorra", "San Marino", "Liechtenstein", 
        "Australia", "New Zealand", "Japan", "Brunei", "Singapore", "Malaysia", "South Korea", 
        "Hong Kong", "Canada", "Bulgaria", "Croatia", "Czech Republic", "Estonia", "Hungary", "Latvia", 
        "Lithuania", "Malta", "Poland", "Romania", "Slovakia", "Slovenia", "Cyprus"
      ],
    },

    r3: {
      id: "r3",
      title: "Visa on Arrival",
      description: 
        "Citizens of certain countries can obtain a visa upon arrival in the UAE.",
      requirements: [
        "Valid passport from an eligible country",
        "Return or onward ticket",
        "Sufficient funds for your stay",
        "Fee payment at entry point",
      ],
      applicationLinks: [
        {
          text: "UAE Visa on Arrival Information",
          url: "https://u.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae",
        },
      ],
      processingTime: "Immediate at border/airport",
      cost: {
        amount: 100,
        currency: "AED",
      },
      alternativeOptions: ["r4"],
      applicableCountries: [
        "China", "Russia", "Mexico", "Cuba", "Saint Vincent and the Grenadines", "Peru"
      ],
    },

    r4: {
      id: "r4",
      title: "Tourist Visa",
      description: 
        "For visitors from countries requiring a pre-arranged visa to enter the UAE for tourism purposes.",
      requirements: [
        "Valid passport (with at least 6 months validity)",
        "Completed visa application",
        "Recent passport-size photograph",
        "Return ticket",
        "Booking confirmation from a UAE-approved hotel or host",
        "Proof of sufficient funds",
      ],
      applicationLinks: [
        {
          text: "UAE Tourist Visa Application",
          url: "https://u.ae/en/information-and-services/visa-and-emirates-id/types-of-visa/tourist-visa",
        },
      ],
      processingTime: "3-5 working days",
      cost: {
        amount: 300,
        currency: "AED (14-day visa) / 500 AED (30-day visa) / 650 AED (90-day visa)",
      },
      alternativeOptions: ["r9", "r10"],
      applicableCountries: ["All countries not eligible for visa-free or visa on arrival entry"],
    },

    r5: {
      id: "r5",
      title: "Employment Visa/Work Permit",
      description: 
        "For individuals who have secured a job with a UAE-based company.",
      requirements: [
        "Valid passport (with at least 6 months validity)",
        "Job offer from a UAE employer",
        "Employment contract",
        "Educational certificates attested by UAE embassy in home country",
        "Medical fitness certificate (obtained in UAE)",
        "Security clearance",
        "Emirates ID registration",
      ],
      applicationLinks: [
        {
          text: "UAE Work Visa Information",
          url: "https://u.ae/en/information-and-services/visa-and-emirates-id/types-of-visa/work-visa",
        },
      ],
      processingTime: "2-3 weeks (after employer initiates process)",
      cost: {
        amount: 3000,
        currency: "AED (approximately, varies by employer)",
      },
      alternativeOptions: ["r7", "r8"],
      applicableCountries: ["All countries"],
    },

    r7: {
      id: "r7",
      title: "Freelance Visa",
      description: 
        "For self-employed professionals who want to work in the UAE as freelancers.",
      requirements: [
        "Valid passport (with at least 6 months validity)",
        "Application through a UAE free zone",
        "Proof of expertise/portfolio",
        "Business plan",
        "Bank statements showing financial solvency",
        "Educational certificates",
        "No objection letter from sponsor (if applicable)",
      ],
      applicationLinks: [
        {
          text: "Freelance Visa Information - Dubai",
          url: "https://www.visitdubai.com/en/business-in-dubai/how-to-get-a-freelance-license-in-dubai",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 7500,
        currency: "AED (varies by free zone)",
      },
      alternativeOptions: ["r5", "r8"],
      applicableCountries: ["All countries"],
    },

    r8: {
      id: "r8",
      title: "Investor/Entrepreneur Visa",
      description: 
        "For individuals investing in or establishing a business in the UAE.",
      requirements: [
        "Valid passport (with at least 6 months validity)",
        "Business plan",
        "Proof of investment funds",
        "Initial approval from relevant economic department",
        "Trade license",
        "Office lease agreement",
        "Bank statements",
      ],
      applicationLinks: [
        {
          text: "UAE Investor Visa Information",
          url: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visa/long-term-residency-visas-in-the-uae",
        },
      ],
      processingTime: "4-6 weeks",
      cost: {
        amount: 5000,
        currency: "AED (plus business setup costs)",
      },
      alternativeOptions: ["r5", "r7"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "Business Visa",
      description: 
        "For short-term business visits such as meetings, conferences, or negotiations.",
      requirements: [
        "Valid passport (with at least 6 months validity)",
        "Letter of invitation from a UAE company",
        "Company registration documents of the inviting company",
        "Return ticket",
        "Hotel reservation",
      ],
      applicationLinks: [
        {
          text: "UAE Business Visa Information",
          url: "https://u.ae/en/information-and-services/visa-and-emirates-id/types-of-visa/entry-permits",
        },
      ],
      processingTime: "3-5 working days",
      cost: {
        amount: 450,
        currency: "AED",
      },
      alternativeOptions: ["r2", "r4"],
      applicableCountries: ["All countries"],
    },

    r10: {
      id: "r10",
      title: "Visit Visa (Family Sponsor)",
      description: 
        "For individuals visiting a family member who is a resident in the UAE.",
      requirements: [
        "Valid passport (with at least 6 months validity)",
        "Application by UAE resident sponsor",
        "Proof of relationship with sponsor",
        "Sponsor's residence visa copy",
        "Sponsor's salary certificate (minimum salary requirements apply)",
        "Security deposit (in some cases)",
      ],
      applicationLinks: [
        {
          text: "Family Visit Visa Information",
          url: "https://u.ae/en/information-and-services/visa-and-emirates-id/types-of-visa/visit-visa",
        },
      ],
      processingTime: "3-5 working days",
      cost: {
        amount: 350,
        currency: "AED (30-day visa) / 700 AED (90-day visa)",
      },
      alternativeOptions: ["r4"],
      applicableCountries: ["All countries"],
    },

    r11: {
      id: "r11",
      title: "Job Seekers Visa",
      description: 
        "A special visa allowing foreign nationals to enter the UAE to look for employment.",
      requirements: [
        "Valid passport (with at least 6 months validity)",
        "Educational certificates",
        "Resume/CV",
        "Bank statements showing sufficient funds",
        "Medical insurance valid in the UAE",
      ],
      applicationLinks: [
        {
          text: "UAE Job Seeker Visa Information",
          url: "https://u.ae/en/information-and-services/jobs/looking-for-a-job-in-uae",
        },
      ],
      processingTime: "5-7 working days",
      cost: {
        amount: 1100,
        currency: "AED",
      },
      alternativeOptions: ["r4"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "Dependent Visa",
      description: 
        "For family members of UAE residents or workers.",
      requirements: [
        "Valid passport for all family members (with at least 6 months validity)",
        "Sponsor's employment contract and salary certificate (minimum salary requirements apply)",
        "Marriage certificate (for spouse) or birth certificates (for children) attested by UAE embassy",
        "Tenancy contract in UAE",
        "Emirates ID of sponsor",
        "Medical insurance for all family members",
      ],
      applicationLinks: [
        {
          text: "UAE Dependent Visa Information",
          url: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visa/sponsoring-residency-visa-by-expatriates",
        },
      ],
      processingTime: "2-3 weeks",
      cost: {
        amount: 300,
        currency: "AED (per person, plus additional fees)",
      },
      alternativeOptions: ["r10"],
      applicableCountries: ["All countries"],
    },

    r13: {
      id: "r13",
      title: "Student Visa",
      description: 
        "For international students enrolled in educational institutions in the UAE.",
      requirements: [
        "Valid passport (with at least 6 months validity)",
        "Acceptance letter from a UAE-accredited educational institution",
        "Educational certificates from previous institutions",
        "Proof of payment of tuition fees",
        "Medical fitness certificate (obtained in UAE)",
        "Emirates ID registration",
      ],
      applicationLinks: [
        {
          text: "UAE Student Visa Information",
          url: "https://u.ae/en/information-and-services/education/higher-education/student-visa",
        },
      ],
      processingTime: "2-3 weeks",
      cost: {
        amount: 1100,
        currency: "AED (plus renewal fees)",
      },
      alternativeOptions: ["r4"],
      applicableCountries: ["All countries"],
    },

    r14: {
      id: "r14",
      title: "Airport Transit (No Visa Required)",
      description: 
        "For travelers transiting through UAE airports without leaving the transit area.",
      requirements: [
        "Valid passport",
        "Confirmed onward ticket",
        "Stay within airport transit area",
        "Transit time less than 24 hours",
      ],
      applicationLinks: [
        {
          text: "UAE Transit Information",
          url: "https://u.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae",
        },
      ],
      processingTime: "Not applicable",
      cost: {
        amount: 0,
        currency: "AED",
      },
      alternativeOptions: ["r15"],
      applicableCountries: ["All countries"],
    },

    r15: {
      id: "r15",
      title: "Transit Visa",
      description: 
        "For travelers with a short stopover in the UAE who wish to leave the airport.",
      requirements: [
        "Valid passport (with at least 6 months validity)",
        "Confirmed onward ticket",
        "Apply through airline or travel agency",
        "Transit period between 24-96 hours",
      ],
      applicationLinks: [
        {
          text: "UAE Transit Visa Information",
          url: "https://u.ae/en/information-and-services/visa-and-emirates-id/types-of-visa/transit-visa",
        },
      ],
      processingTime: "24-48 hours",
      cost: {
        amount: 50,
        currency: "AED (48-hour visa) / 100 AED (96-hour visa)",
      },
      alternativeOptions: ["r4"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-20",
    author: "Emma",
    countries: ["United Arab Emirates"],
  },
};