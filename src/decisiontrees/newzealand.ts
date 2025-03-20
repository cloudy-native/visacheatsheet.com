import { VisaDecisionTree } from './model';

export const newzealandVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the primary purpose of your visit to New Zealand?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism or Visiting Family/Friends", nextQuestionId: "q2" },
        { id: "a2", text: "Work", nextQuestionId: "q3" },
        { id: "a3", text: "Study", nextQuestionId: "q4" },
        { id: "a4", text: "Business", nextQuestionId: "q5" },
        { id: "a5", text: "Long-term Migration/Settlement", nextQuestionId: "q6" },
      ],
      helpText: "Select the main reason for your visit to New Zealand",
    },

    q2: {
      id: "q2",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        { id: "a1", text: "Australian citizen or permanent resident", nextQuestionId: "r1" },
        { id: "a2", text: "Visa-waiver country (UK, US, Canada, most EU countries, etc.)", nextQuestionId: "r2" },
        { id: "a3", text: "Non-visa-waiver country", nextQuestionId: "r3" },
      ],
      helpText: "Your nationality determines the visa requirements for visiting New Zealand",
    },

    q3: {
      id: "q3",
      text: "What type of work will you be doing in New Zealand?",
      answerType: "single",
      options: [
        { id: "a1", text: "Skilled work with a job offer in a shortage area", nextQuestionId: "r4" },
        { id: "a2", text: "Working holiday (for eligible nationalities)", nextQuestionId: "r5" },
        { id: "a3", text: "Seasonal work (e.g., horticulture, viticulture)", nextQuestionId: "r6" },
        { id: "a4", text: "Essential skills with a job offer", nextQuestionId: "r7" },
        { id: "a5", text: "Specific purpose or event", nextQuestionId: "r8" },
      ],
      helpText: "Different work categories have different visa options",
    },

    q4: {
      id: "q4",
      text: "What type of study do you plan to undertake in New Zealand?",
      answerType: "single",
      options: [
        { id: "a1", text: "Short course (up to 3 months)", nextQuestionId: "q2" },
        { id: "a2", text: "Full-time study at a school or tertiary institution", nextQuestionId: "r9" },
        { id: "a3", text: "PhD or research-based postgraduate study", nextQuestionId: "r10" },
        { id: "a4", text: "English language course", nextQuestionId: "r9" },
      ],
      helpText: "The type and duration of your studies determines which visa you need",
    },

    q5: {
      id: "q5",
      text: "What type of business activities will you be conducting?",
      answerType: "single",
      options: [
        { id: "a1", text: "Meetings, conferences, negotiations (less than 3 months)", nextQuestionId: "q2" },
        { id: "a2", text: "Business representatives or investors", nextQuestionId: "r11" },
        { id: "a3", text: "Entrepreneur planning to establish a business", nextQuestionId: "r12" },
        { id: "a4", text: "Intra-company transfer", nextQuestionId: "r13" },
      ],
      helpText: "Different business activities may require different visas",
    },

    q6: {
      id: "q6",
      text: "What pathway to residence are you considering?",
      answerType: "single",
      options: [
        { id: "a1", text: "Skilled Migrant Category", nextQuestionId: "r14" },
        { id: "a2", text: "Residence from Work (after qualifying period)", nextQuestionId: "r15" },
        { id: "a3", text: "Family Category (partner, parent, or dependent child)", nextQuestionId: "r16" },
        { id: "a4", text: "Business/Investment Category", nextQuestionId: "r17" },
      ],
      helpText: "New Zealand offers several pathways to permanent residence",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Australian Citizen or Permanent Resident Entry",
      description: 
        "Australian citizens and permanent residents can visit, live and work in New Zealand indefinitely without applying for a visa first.",
      requirements: [
        "Valid Australian passport or foreign passport with Australian permanent resident visa",
        "Meet character requirements (no serious criminal history)",
        "Meet health requirements if planning to stay more than 3 months",
      ],
      applicationLinks: [
        {
          text: "Australian Citizen Arrival",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/visa-factsheet/australian-resident-visa",
        },
      ],
      processingTime: "Immediate entry on arrival",
      cost: {
        amount: 0,
        currency: "NZD",
      },
      alternativeOptions: [],
      applicableCountries: ["Australia"],
    },

    r2: {
      id: "r2",
      title: "NZeTA (New Zealand Electronic Travel Authority)",
      description: 
        "Visitors from visa-waiver countries must request an NZeTA before traveling to New Zealand for short visits (up to 3 months, or 6 months for UK citizens).",
      requirements: [
        "Valid passport from a visa-waiver country",
        "Request NZeTA before travel",
        "Pay International Visitor Conservation and Tourism Levy (IVL)",
        "Return or onward ticket",
        "Evidence of sufficient funds for stay (NZ$1,000 per month or NZ$400 per month with prepaid accommodation)",
        "Meet character and health requirements",
      ],
      applicationLinks: [
        {
          text: "Apply for NZeTA",
          url: "https://nzeta.immigration.govt.nz/",
        },
      ],
      processingTime: "Usually within 72 hours (apply at least 3 days before travel)",
      cost: {
        amount: 47,
        currency: "NZD (NZeTA NZ$17 + IVL NZ$35 when applying via app, higher if applying via website)",
      },
      alternativeOptions: ["r3"],
      applicableCountries: [
        "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", 
        "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", 
        "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", 
        "Spain", "Sweden", "United Kingdom", "United States", "Canada", "Brazil", "Mexico", "Argentina", 
        "Chile", "Israel", "Japan", "South Korea", "Singapore", "Taiwan", "Hong Kong SAR", "Macau SAR", 
        "Malaysia", "Andorra", "Bahrain", "Brunei", "Kuwait", "Liechtenstein", "Monaco", "Norway", 
        "Oman", "Qatar", "San Marino", "Saudi Arabia", "Seychelles", "Switzerland", "United Arab Emirates", "Uruguay"
      ],
    },

    r3: {
      id: "r3",
      title: "Visitor Visa",
      description: 
        "For tourists, business visitors, or people visiting family or friends from non-visa-waiver countries.",
      requirements: [
        "Valid passport",
        "Good health and character",
        "Return or onward ticket",
        "Evidence of sufficient funds for stay (NZ$1,000 per month or NZ$400 per month with prepaid accommodation)",
        "May need to provide additional documents (travel history, employment evidence, family ties)",
        "May need to undergo medical examinations",
      ],
      applicationLinks: [
        {
          text: "Visitor Visa Application",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/visitor-visa",
        },
      ],
      processingTime: "25-30 days for most applications",
      cost: {
        amount: 246,
        currency: "NZD",
      },
      alternativeOptions: [],
      applicableCountries: ["All countries not eligible for visa-waiver"],
    },

    r4: {
      id: "r4",
      title: "Accredited Employer Work Visa",
      description: 
        "For people who have a job offer from a New Zealand employer that is accredited by Immigration New Zealand.",
      requirements: [
        "Job offer from an accredited employer in New Zealand",
        "Job must pay at least the median wage (currently NZ$29.66 per hour)",
        "Job must be genuine and match your skills and experience",
        "Employer must have tried to hire New Zealanders first (in most cases)",
        "Meet health and character requirements",
        "Valid passport",
        "Relevant qualifications or experience",
      ],
      applicationLinks: [
        {
          text: "Accredited Employer Work Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/accredited-employer-work-visa",
        },
      ],
      processingTime: "25-60 days for most applications",
      cost: {
        amount: 750,
        currency: "NZD",
      },
      alternativeOptions: ["r7", "r15"],
      applicableCountries: ["All countries"],
    },

    r5: {
      id: "r5",
      title: "Working Holiday Visa",
      description: 
        "For young people from eligible countries who want to work and travel in New Zealand for up to 12 months (or 23 months if from the UK).",
      requirements: [
        "Age 18-30 (or 18-35 for some countries)",
        "Valid passport from an eligible country",
        "NZ$4,200 available funds for maintenance during stay",
        "Return ticket or sufficient funds to purchase one",
        "Meet health and character requirements",
        "Have not previously been approved for a Working Holiday Visa for New Zealand",
        "Primary purpose is holiday, with work being secondary",
      ],
      applicationLinks: [
        {
          text: "Working Holiday Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/options/work/thinking-about-coming-to-new-zealand-to-work/working-holiday-visa",
        },
      ],
      processingTime: "7-30 days",
      cost: {
        amount: 375,
        currency: "NZD (varies by country)",
      },
      alternativeOptions: ["r2", "r3"],
      applicableCountries: [
        "Argentina", "Austria", "Belgium", "Brazil", "Canada", "Chile", "China", "Croatia", 
        "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Hong Kong SAR", 
        "Hungary", "Ireland", "Israel", "Italy", "Japan", "Latvia", "Lithuania", "Luxembourg", 
        "Malaysia", "Malta", "Mexico", "Netherlands", "Norway", "Peru", "Philippines", "Poland", 
        "Portugal", "Singapore", "Slovakia", "Slovenia", "South Korea", "Spain", "Sweden", 
        "Taiwan", "Thailand", "Turkey", "United Kingdom", "United States", "Uruguay", "Vietnam"
      ],
    },

    r6: {
      id: "r6",
      title: "Recognised Seasonal Employer (RSE) Scheme",
      description: 
        "For workers from eligible Pacific countries to work in horticulture and viticulture for a specific season.",
      requirements: [
        "Be from an eligible Pacific country",
        "Have a job offer from an RSE-approved employer",
        "Meet health and character requirements",
        "Genuine intention to return home after work period",
        "Have a valid passport",
        "Employer must arrange accommodation and transport",
      ],
      applicationLinks: [
        {
          text: "Recognised Seasonal Employer Work Visa",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/recognised-seasonal-employer-limited-visa",
        },
      ],
      processingTime: "14-30 days",
      cost: {
        amount: 345,
        currency: "NZD",
      },
      alternativeOptions: ["r7"],
      applicableCountries: [
        "Fiji", "Kiribati", "Nauru", "Papua New Guinea", "Samoa", "Solomon Islands", 
        "Tonga", "Tuvalu", "Vanuatu"
      ],
    },

    r7: {
      id: "r7",
      title: "Essential Skills Work Visa",
      description: 
        "For people who have been offered a full-time job by a New Zealand employer and have the skills to do that job.",
      requirements: [
        "Job offer from a New Zealand employer",
        "Proof that the employer has genuinely searched for New Zealand workers",
        "The job must be on an Essential Skills in Demand List or employer must prove no New Zealanders available",
        "Qualification or relevant work experience for the role",
        "Meet health and character requirements",
        "Valid passport",
      ],
      applicationLinks: [
        {
          text: "Essential Skills Work Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/essential-skills-work-visa",
        },
      ],
      processingTime: "25-60 days",
      cost: {
        amount: 495,
        currency: "NZD",
      },
      alternativeOptions: ["r4", "r15"],
      applicableCountries: ["All countries"],
    },

    r8: {
      id: "r8",
      title: "Specific Purpose Work Visa",
      description: 
        "For people coming to New Zealand for a specific purpose or event, where they have unique or specialist skills.",
      requirements: [
        "Evidence of the specific purpose or event",
        "Proof of relevant skills, qualifications or experience",
        "Demonstrated economic benefit to New Zealand",
        "Valid passport",
        "Meet health and character requirements",
        "Genuine intention to leave after the purpose is completed",
      ],
      applicationLinks: [
        {
          text: "Specific Purpose Work Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/specific-purpose-or-event-work-visa",
        },
      ],
      processingTime: "25-45 days",
      cost: {
        amount: 365,
        currency: "NZD",
      },
      alternativeOptions: ["r4", "r7"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "Student Visa",
      description: 
        "For international students who want to study full-time in New Zealand for more than 3 months.",
      requirements: [
        "Offer of place from an approved NZ education provider",
        "Evidence of sufficient funds for maintenance (NZ$15,000 per year)",
        "Accommodation arrangements",
        "Return travel arrangements or sufficient funds to purchase return ticket",
        "Meet health and character requirements",
        "For courses longer than 12 months: English language proficiency evidence",
        "For students under 18: evidence of accommodation arrangements approved by education provider",
      ],
      applicationLinks: [
        {
          text: "Student Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/fee-paying-student-visa",
        },
      ],
      processingTime: "30-60 days",
      cost: {
        amount: 330,
        currency: "NZD",
      },
      alternativeOptions: ["r2", "r3"],
      applicableCountries: ["All countries"],
    },

    r10: {
      id: "r10",
      title: "PhD and Research Study Visa",
      description: 
        "For international students undertaking PhD or research-based postgraduate qualifications in New Zealand.",
      requirements: [
        "Offer of place for a PhD or research-based postgraduate qualification from a New Zealand institution",
        "Evidence of sufficient funds for maintenance",
        "Accommodation arrangements",
        "Meet health and character requirements",
        "Valid passport",
      ],
      applicationLinks: [
        {
          text: "PhD and Research Study Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/postgraduate-research-study-work-visa",
        },
      ],
      processingTime: "30-60 days",
      cost: {
        amount: 330,
        currency: "NZD",
      },
      alternativeOptions: ["r9"],
      applicableCountries: ["All countries"],
    },

    r11: {
      id: "r11",
      title: "Business Visitor Visa",
      description: 
        "For business people who need to work in New Zealand for short periods.",
      requirements: [
        "Evidence of business activities in New Zealand",
        "Letter from your overseas employer confirming your visit purpose",
        "Letter of invitation from the New Zealand company (if applicable)",
        "Valid passport",
        "Return or onward ticket",
        "Evidence of sufficient funds",
        "Meet health and character requirements",
      ],
      applicationLinks: [
        {
          text: "Business Visitor Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/business-visa",
        },
      ],
      processingTime: "25-30 days",
      cost: {
        amount: 246,
        currency: "NZD",
      },
      alternativeOptions: ["r2", "r3"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "Entrepreneur Work Visa",
      description: 
        "For people who want to purchase or establish a business in New Zealand.",
      requirements: [
        "Detailed business plan",
        "Minimum investment capital of NZ$100,000",
        "Meet minimum of 120 points on the Entrepreneur Work Visa points scale",
        "Meet health and character requirements",
        "English language proficiency",
        "Evidence of business experience relevant to the proposed business",
        "Evidence of sufficient maintenance funds (at least NZ$100,000)",
      ],
      applicationLinks: [
        {
          text: "Entrepreneur Work Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/entrepreneur-work-visa",
        },
      ],
      processingTime: "6-12 months",
      cost: {
        amount: 3910,
        currency: "NZD",
      },
      alternativeOptions: ["r17"],
      applicableCountries: ["All countries"],
    },

    r13: {
      id: "r13",
      title: "Intra-Company Transfer Work Visa",
      description: 
        "For employees of multinational companies who are transferring to the company's New Zealand office.",
      requirements: [
        "Current employment with the multinational company in a position outside New Zealand",
        "Transfer to fill a position in the New Zealand branch",
        "Position in New Zealand must be in the same company or related entity",
        "Evidence of specialized knowledge or senior position",
        "Meet health and character requirements",
        "Valid passport",
      ],
      applicationLinks: [
        {
          text: "Work Visa Information for Intra-Company Transfers",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/specific-purpose-or-event-work-visa",
        },
      ],
      processingTime: "25-50 days",
      cost: {
        amount: 595,
        currency: "NZD",
      },
      alternativeOptions: ["r4", "r7"],
      applicableCountries: ["All countries"],
    },

    r14: {
      id: "r14",
      title: "Skilled Migrant Category Resident Visa",
      description: 
        "A points-based residence visa for skilled workers who want to live in New Zealand permanently.",
      requirements: [
        "Score at least 160 points on the Skilled Migrant Category points scale",
        "Be 55 years or younger",
        "Meet health and character requirements",
        "English language proficiency",
        "Skilled employment or job offer in New Zealand",
        "Recognized qualifications or relevant work experience",
        "First submit an Expression of Interest, then if selected, apply for residence",
      ],
      applicationLinks: [
        {
          text: "Skilled Migrant Category Resident Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/skilled-migrant-category-resident-visa",
        },
      ],
      processingTime: "12-24 months for the complete process",
      cost: {
        amount: 4240,
        currency: "NZD (NZ$530 for EOI + NZ$3,710 for residence application)",
      },
      alternativeOptions: ["r15", "r17"],
      applicableCountries: ["All countries"],
    },

    r15: {
      id: "r15",
      title: "Residence from Work",
      description: 
        "A pathway to residence for people who have been working in New Zealand on specific work visas.",
      requirements: [
        "Currently hold an eligible work visa (Accredited Employer Work, Religious Worker, or Talent visa)",
        "Have held the eligible work visa and worked for the required period (usually 24 months)",
        "Still employed in the same role that supported your work visa",
        "Meet income requirements (generally at least twice the median wage)",
        "Meet health and character requirements",
        "Valid passport",
      ],
      applicationLinks: [
        {
          text: "Residence from Work Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/residence-from-work-visa",
        },
      ],
      processingTime: "6-12 months",
      cost: {
        amount: 3410,
        currency: "NZD",
      },
      alternativeOptions: ["r14"],
      applicableCountries: ["All countries"],
    },

    r16: {
      id: "r16",
      title: "Family Category Resident Visa",
      description: 
        "For partners, dependent children, and parents of New Zealand citizens or residents.",
      requirements: [
        "Partnership with a New Zealand citizen or resident (if applying as a partner)",
        "Be a dependent child of a New Zealand citizen or resident (if applying as a child)",
        "Be the parent of an adult New Zealand citizen or resident (if applying as a parent)",
        "Meet health and character requirements",
        "English language requirements may apply",
        "Evidence of genuine and stable relationship (for partners)",
        "Sponsor must meet income requirements (for parent category)",
      ],
      applicationLinks: [
        {
          text: "Partnership Resident Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/partnership-resident-visa",
        },
        {
          text: "Parent Resident Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/parent-resident-visa",
        },
      ],
      processingTime: "7-24 months depending on category",
      cost: {
        amount: 3710,
        currency: "NZD (varies by category)",
      },
      alternativeOptions: [],
      applicableCountries: ["All countries"],
    },

    r17: {
      id: "r17",
      title: "Investor Category Resident Visa",
      description: 
        "For people who want to gain residence in New Zealand through significant investments.",
      requirements: [
        "Investor 1 Category: Invest NZ$10 million for at least 3 years",
        "Investor 2 Category: Score 65+ points, be 65 or younger, have 3+ years business experience, invest NZ$3 million for 4 years",
        "Meet health and character requirements",
        "English language requirements",
        "For Investor 2: minimum of 3 years' business experience",
        "Evidence of legally earned investment funds",
        "Plan to spend at least 146 days in NZ in each of the last 3 years of investment (Investor 1) or 438 days over 4 years (Investor 2)",
      ],
      applicationLinks: [
        {
          text: "Investor 1 Resident Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/investor-1-resident-visa",
        },
        {
          text: "Investor 2 Resident Visa Information",
          url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/investor-2-resident-visa",
        },
      ],
      processingTime: "6-18 months",
      cost: {
        amount: 4240,
        currency: "NZD (NZ$530 for EOI + NZ$3,710 for residence application - Investor 2); NZ$4,745 for Investor 1",
      },
      alternativeOptions: ["r12", "r14"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-20",
    author: "Emma",
    countries: ["New Zealand"],
  },
};