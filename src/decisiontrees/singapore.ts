import { VisaDecisionTree } from './model';

export const singaporeVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the primary purpose of your visit to Singapore?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Leisure", nextQuestionId: "q2" },
        { id: "a2", text: "Business", nextQuestionId: "q3" },
        { id: "a3", text: "Work/Employment", nextQuestionId: "q4" },
        { id: "a4", text: "Study", nextQuestionId: "q5" },
        { id: "a5", text: "Family Visit", nextQuestionId: "q2" },
        { id: "a6", text: "Transit", nextQuestionId: "q6" },
        { id: "a7", text: "Long-term relocation", nextQuestionId: "q7" },
      ],
      helpText: "Select the main reason for your visit to Singapore",
    },

    q2: {
      id: "q2",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        { id: "a1", text: "Visa-free entry countries (most Western countries, ASEAN, etc.)", nextQuestionId: "r1" },
        { id: "a2", text: "Assessment Level I countries (Low immigration risk)", nextQuestionId: "r2" },
        { id: "a3", text: "Assessment Level II countries (Higher immigration risk)", nextQuestionId: "r3" },
      ],
      helpText: "Your nationality determines if you need a visa to enter Singapore for short visits",
    },

    q3: {
      id: "q3",
      text: "What type of business activities will you be conducting?",
      answerType: "single",
      options: [
        { id: "a1", text: "Meetings, conferences, negotiations (no work for local company)", nextQuestionId: "q2" },
        { id: "a2", text: "Short-term work assignment (less than 90 days)", nextQuestionId: "r4" },
        { id: "a3", text: "Trade fair or exhibition participation", nextQuestionId: "q2" },
      ],
      helpText: "Different business activities may require different visas or passes",
    },

    q4: {
      id: "q4",
      text: "What type of work will you be doing in Singapore?",
      answerType: "single",
      options: [
        { id: "a1", text: "Professional, managerial or executive role", nextQuestionId: "r5" },
        { id: "a2", text: "Mid-skilled technical job", nextQuestionId: "r6" },
        { id: "a3", text: "Highly skilled professional", nextQuestionId: "r7" },
        { id: "a4", text: "Entrepreneur/Business owner", nextQuestionId: "r8" },
        { id: "a5", text: "Domestic worker", nextQuestionId: "r9" },
      ],
      helpText: "Different work categories require different work passes",
    },

    q5: {
      id: "q5",
      text: "What type of study program will you be attending?",
      answerType: "single",
      options: [
        { id: "a1", text: "Full-time degree program (more than 30 days)", nextQuestionId: "r10" },
        { id: "a2", text: "Short course (less than 30 days)", nextQuestionId: "q2" },
        { id: "a3", text: "Exchange program", nextQuestionId: "r10" },
        { id: "a4", text: "Research", nextQuestionId: "r10" },
      ],
      helpText: "The type and duration of your studies determines which visa/pass you need",
    },

    q6: {
      id: "q6",
      text: "How long is your transit in Singapore?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 24 hours (staying in transit area)", nextQuestionId: "r11" },
        { id: "a2", text: "24-96 hours (leaving airport)", nextQuestionId: "q2" },
        { id: "a3", text: "More than 96 hours", nextQuestionId: "q2" },
      ],
      helpText: "Transit duration affects visa requirements",
    },

    q7: {
      id: "q7",
      text: "What type of long-term immigration are you seeking?",
      answerType: "single",
      options: [
        { id: "a1", text: "Permanent residency", nextQuestionId: "r12" },
        { id: "a2", text: "Retirement", nextQuestionId: "r13" },
        { id: "a3", text: "Family reunion with Singapore Citizen/PR", nextQuestionId: "r14" },
      ],
      helpText: "Different long-term immigration options have different requirements",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Visa-Free Entry",
      description: 
        "Citizens of many countries can enter Singapore without a visa for short-term visits (up to 30-90 days depending on nationality).",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Confirmed onward/return ticket",
        "Sufficient funds for the duration of stay",
        "Proof of accommodation in Singapore",
        "May be asked to show evidence of the purpose of visit",
      ],
      applicationLinks: [
        {
          text: "ICA Visa Requirements",
          url: "https://www.ica.gov.sg/enter-depart/entry_requirements",
        },
      ],
      processingTime: "Entry granted at immigration checkpoint",
      cost: {
        amount: 0,
        currency: "SGD",
      },
      alternativeOptions: [],
      applicableCountries: [
        "United States", "United Kingdom", "Australia", "New Zealand", "Canada", "Japan", "South Korea", 
        "All European Union countries", "Norway", "Switzerland", "Brunei", "Malaysia", "Thailand", 
        "Indonesia", "Philippines", "Vietnam", "Laos", "Myanmar", "Cambodia", "Hong Kong SAR", 
        "Macao SAR", "Taiwan", "and many more"
      ],
    },

    r2: {
      id: "r2",
      title: "Singapore Visa (Assessment Level I)",
      description: 
        "For visitors from Assessment Level I countries who require a visa to enter Singapore for short-term visits.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Visa fee payment receipt",
        "Confirmed onward/return ticket",
        "Proof of sufficient funds",
        "Travel itinerary",
      ],
      applicationLinks: [
        {
          text: "Singapore Visa Application",
          url: "https://www.ica.gov.sg/enter-depart/entry_requirements/visa_requirements",
        },
      ],
      processingTime: "3-5 working days",
      cost: {
        amount: 30,
        currency: "SGD",
      },
      alternativeOptions: [],
      applicableCountries: [
        "China", "India (certain categories)", "Armenia", "Azerbaijan", "Belarus", "Georgia", 
        "Kazakhstan", "Kyrgyzstan", "Moldova", "Russia", "Tajikistan", "Turkmenistan", 
        "Ukraine", "Uzbekistan"
      ],
    },

    r3: {
      id: "r3",
      title: "Singapore Visa (Assessment Level II)",
      description: 
        "For visitors from Assessment Level II countries who require a visa to enter Singapore for short-term visits. Additional documents required.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Visa fee payment receipt",
        "Confirmed onward/return ticket",
        "Proof of sufficient funds",
        "Travel itinerary",
        "Letter of introduction from local contact in Singapore",
        "Additional supporting documents may be required",
      ],
      applicationLinks: [
        {
          text: "Singapore Visa Application",
          url: "https://www.ica.gov.sg/enter-depart/entry_requirements/visa_requirements",
        },
      ],
      processingTime: "5-7 working days",
      cost: {
        amount: 30,
        currency: "SGD",
      },
      alternativeOptions: [],
      applicableCountries: [
        "Afghanistan", "Algeria", "Bangladesh", "Egypt", "Iran", "Iraq", "Jordan", "Lebanon", 
        "Libya", "Morocco", "Nigeria", "Pakistan", "Saudi Arabia", "Somalia", "Sudan", 
        "Syria", "Tunisia", "Yemen"
      ],
    },

    r4: {
      id: "r4",
      title: "Work Pass Exempt Activities",
      description: 
        "Certain business activities can be performed for short periods without a work pass, but may still require a visa depending on nationality.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Visa (if required based on nationality)",
        "Letter from your overseas employer",
        "Letter from the Singapore host company",
        "Activities must fall under work pass exempt categories",
        "Stay limited to 90 days or less in a calendar year",
      ],
      applicationLinks: [
        {
          text: "Work Pass Exempt Activities",
          url: "https://www.mom.gov.sg/passes-and-permits/work-pass-exempt-activities",
        },
      ],
      processingTime: "Depends on visa requirements",
      cost: {
        amount: 0,
        currency: "SGD (excluding visa fees if applicable)",
      },
      alternativeOptions: ["r5", "r6"],
      applicableCountries: ["All countries"],
    },

    r5: {
      id: "r5",
      title: "Employment Pass (EP)",
      description: 
        "For foreign professionals, managers and executives who earn at least SGD 5,000 per month.",
      requirements: [
        "Job offer from a Singapore employer",
        "Minimum monthly salary of SGD 5,000 (higher for older, more experienced candidates)",
        "Acceptable qualifications (usually degree from a reputable university)",
        "Relevant work experience",
        "Application must be submitted by the Singapore employer",
        "Pass Complementary Assessment Framework (COMPASS) points-based system",
      ],
      applicationLinks: [
        {
          text: "Employment Pass Information",
          url: "https://www.mom.gov.sg/passes-and-permits/employment-pass",
        },
      ],
      processingTime: "3 weeks for online applications",
      cost: {
        amount: 105,
        currency: "SGD (application fee) + SGD 225 (issuance fee)",
      },
      alternativeOptions: ["r6", "r7"],
      applicableCountries: ["All countries"],
    },

    r6: {
      id: "r6",
      title: "S Pass",
      description: 
        "For mid-skilled foreign employees who earn at least SGD 3,000 per month.",
      requirements: [
        "Job offer from a Singapore employer",
        "Minimum monthly salary of SGD 3,000 (higher for older, more experienced candidates)",
        "Acceptable qualifications (usually diploma or technical certificates)",
        "Relevant work experience",
        "Application must be submitted by the Singapore employer",
        "Employer must pay foreign worker levy",
        "Employer is subject to dependency ratio ceiling (quota)",
      ],
      applicationLinks: [
        {
          text: "S Pass Information",
          url: "https://www.mom.gov.sg/passes-and-permits/s-pass",
        },
      ],
      processingTime: "3 weeks for online applications",
      cost: {
        amount: 105,
        currency: "SGD (application fee) + SGD 225 (issuance fee)",
      },
      alternativeOptions: ["r5"],
      applicableCountries: ["All countries"],
    },

    r7: {
      id: "r7",
      title: "Personalised Employment Pass (PEP)",
      description: 
        "For high-earning foreign professionals who want the flexibility to switch employers in Singapore.",
      requirements: [
        "Current Employment Pass holders earning at least SGD 12,000 per month, or",
        "Overseas foreign professionals with last drawn monthly salary of at least SGD 21,000",
        "Valid for 3 years (non-renewable)",
        "Not tied to a specific employer",
        "Must not be unemployed for more than 6 months",
        "Must earn at least SGD 144,000 per calendar year",
      ],
      applicationLinks: [
        {
          text: "Personalised Employment Pass Information",
          url: "https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass",
        },
      ],
      processingTime: "3 weeks for online applications",
      cost: {
        amount: 105,
        currency: "SGD (application fee) + SGD 225 (issuance fee)",
      },
      alternativeOptions: ["r5"],
      applicableCountries: ["All countries"],
    },

    r8: {
      id: "r8",
      title: "EntrePass",
      description: 
        "For eligible foreign entrepreneurs who want to start and operate a business in Singapore.",
      requirements: [
        "Have a viable business idea/plan for a new venture in Singapore or",
        "Be an entrepreneur with significant business network and track record",
        "Business must be venture-backed or have innovative technological content",
        "Meet specific eligibility criteria in Innovation, Investment, or Track Record",
        "Business must be registered with ACRA as a private limited company with min. SGD 50,000 paid-up capital",
        "Applicant must hold at least 30% shareholding in the company",
      ],
      applicationLinks: [
        {
          text: "EntrePass Information",
          url: "https://www.mom.gov.sg/passes-and-permits/entrepass",
        },
      ],
      processingTime: "8 weeks or longer",
      cost: {
        amount: 105,
        currency: "SGD (application fee) + SGD 225 (issuance fee)",
      },
      alternativeOptions: ["r5"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "Work Permit for Domestic Worker",
      description: 
        "For foreign domestic workers (FDWs) to work in Singapore households.",
      requirements: [
        "Female aged 23-50 years old",
        "From an approved source country/region (Philippines, Indonesia, Myanmar, etc.)",
        "Minimum 8 years of formal education",
        "Employer must be eligible and pay security bond",
        "Employer must pay monthly foreign domestic worker levy",
        "Worker must pass medical examination",
        "Worker must attend the Settling-In Programme (SIP)",
      ],
      applicationLinks: [
        {
          text: "Work Permit for Domestic Worker Information",
          url: "https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker",
        },
      ],
      processingTime: "1-3 weeks",
      cost: {
        amount: 35,
        currency: "SGD (application fee) + SGD 70 (issuance fee)",
      },
      alternativeOptions: [],
      applicableCountries: [
        "Bangladesh", "Cambodia", "Hong Kong", "India", "Indonesia", "Macau", 
        "Malaysia", "Myanmar", "Philippines", "South Korea", "Sri Lanka", "Taiwan", "Thailand"
      ],
    },

    r10: {
      id: "r10",
      title: "Student's Pass",
      description: 
        "For foreigners who wish to pursue full-time studies in Singapore at an approved educational institution.",
      requirements: [
        "Acceptance into a full-time course at a Student's Pass approved institution in Singapore",
        "Application submitted by the educational institution via SOLAR system",
        "Valid passport",
        "Proof of financial ability to support studies and stay in Singapore",
        "May require medical examination",
      ],
      applicationLinks: [
        {
          text: "Student's Pass Information",
          url: "https://www.ica.gov.sg/reside/STP/apply",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 30,
        currency: "SGD (application fee) + SGD 60 (issuance fee)",
      },
      alternativeOptions: ["r1", "r2", "r3"],
      applicableCountries: ["All countries"],
    },

    r11: {
      id: "r11",
      title: "Transit Facility",
      description: 
        "For travelers transiting through Singapore airports for less than 24 hours and not clearing immigration.",
      requirements: [
        "Valid passport",
        "Confirmed onward ticket departing within 24 hours",
        "Remain in transit area of the airport",
        "May require a visa for certain nationalities even for transit",
      ],
      applicationLinks: [
        {
          text: "Transit in Singapore",
          url: "https://www.ica.gov.sg/enter-depart/entry_requirements/visa_requirements",
        },
      ],
      processingTime: "Not applicable for most nationalities",
      cost: {
        amount: 0,
        currency: "SGD (except if visa required)",
      },
      alternativeOptions: ["r1", "r2", "r3"],
      applicableCountries: ["All countries (some may require transit visa)"],
    },

    r12: {
      id: "r12",
      title: "Permanent Residence (PR)",
      description: 
        "For foreigners who want to settle permanently in Singapore.",
      requirements: [
        "Usually must have worked in Singapore for at least 6 months on valid pass",
        "For professionals/skilled workers: Current Employment Pass or S Pass holder",
        "For investors/entrepreneurs: Significant business track record and investment",
        "For family: Spouse or unmarried child under 21 of Singapore citizen/PR",
        "Good family and educational background",
        "Good employment track record",
        "Economic contributions to Singapore",
        "Integration into Singapore society",
        "Family ties to Singapore citizens/PRs",
      ],
      applicationLinks: [
        {
          text: "Permanent Residence Information",
          url: "https://www.ica.gov.sg/reside/PR/apply",
        },
      ],
      processingTime: "4-6 months",
      cost: {
        amount: 100,
        currency: "SGD (application fee per person)",
      },
      alternativeOptions: ["r5", "r7", "r14"],
      applicableCountries: ["All countries"],
    },

    r13: {
      id: "r13",
      title: "Long Term Visit Pass",
      description: 
        "For retirees or certain family members of Singapore Citizens, Permanent Residents, or pass holders.",
      requirements: [
        "For parents/parents-in-law of Singapore Citizens or PRs",
        "For common-law spouse of Employment Pass, S Pass, or EntrePass holder",
        "For family members under special circumstances",
        "For long-term social visitors with substantial ties to Singapore",
        "Application submitted by Singapore sponsor",
        "Proof of financial ability to support stay",
      ],
      applicationLinks: [
        {
          text: "Long Term Visit Pass Information",
          url: "https://www.ica.gov.sg/reside/LTVP/apply",
        },
      ],
      processingTime: "6 weeks or longer",
      cost: {
        amount: 30,
        currency: "SGD (application fee) + SGD 60 (issuance fee)",
      },
      alternativeOptions: ["r14"],
      applicableCountries: ["All countries"],
    },

    r14: {
      id: "r14",
      title: "Dependant's Pass",
      description: 
        "For legally married spouses and unmarried children under 21 of eligible Employment Pass, S Pass, or EntrePass holders.",
      requirements: [
        "Main pass holder must earn at least SGD 6,000 per month",
        "Legally married spouse or unmarried children under 21 years",
        "Application submitted by the employer of the main pass holder",
        "Birth/marriage certificates to prove relationship",
      ],
      applicationLinks: [
        {
          text: "Dependant's Pass Information",
          url: "https://www.mom.gov.sg/passes-and-permits/dependants-pass",
        },
      ],
      processingTime: "3 weeks for online applications",
      cost: {
        amount: 105,
        currency: "SGD (application fee) + SGD 225 (issuance fee)",
      },
      alternativeOptions: ["r13"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-20",
    author: "Emma",
    countries: ["Singapore"],
  },
};