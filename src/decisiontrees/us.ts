import { VisaDecisionTree } from './model';

export const usVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the primary purpose of your visit to the United States?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Leisure", nextQuestionId: "q2" },
        { id: "a2", text: "Business/Work", nextQuestionId: "q3" },
        { id: "a3", text: "Education/Study", nextQuestionId: "q4" },
        { id: "a4", text: "Family/Immigration", nextQuestionId: "q5" },
        { id: "a5", text: "Investment/Trade", nextQuestionId: "q6" },
        { id: "a6", text: "Cultural Exchange", nextQuestionId: "q7" },
      ],
      helpText: "Select the primary reason for your visit to the United States",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in the United States?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 90 days", nextQuestionId: "q8" },
        { id: "a2", text: "More than 90 days", nextQuestionId: "q9" },
      ],
      helpText: "The duration affects which visa you need",
    },

    q3: {
      id: "q3",
      text: "What type of work will you be doing in the United States?",
      answerType: "single",
      options: [
        { id: "a1", text: "Temporary work (contract or employment)", nextQuestionId: "q10" },
        { id: "a2", text: "Intra-company transfer", nextQuestionId: "r1" },
        { id: "a3", text: "Person with extraordinary ability", nextQuestionId: "r2" },
        { id: "a4", text: "Seasonal/Agricultural work", nextQuestionId: "r3" },
        { id: "a5", text: "Business meetings/conferences only (no work)", nextQuestionId: "q8" },
      ],
      helpText: "Different work activities require different visa types",
    },

    q4: {
      id: "q4",
      text: "What type of educational program will you be attending?",
      answerType: "single",
      options: [
        { id: "a1", text: "Academic studies (university/college)", nextQuestionId: "r4" },
        { id: "a2", text: "Vocational/non-academic institution", nextQuestionId: "r5" },
        { id: "a3", text: "Exchange program/research", nextQuestionId: "r6" },
        { id: "a4", text: "Short courses or seminars (less than 90 days)", nextQuestionId: "q8" },
      ],
      helpText: "Your program type determines the visa category",
    },

    q5: {
      id: "q5",
      text: "What is your relationship with the US person?",
      answerType: "single",
      options: [
        { id: "a1", text: "Spouse of US citizen", nextQuestionId: "r7" },
        { id: "a2", text: "Fiancé(e) of US citizen", nextQuestionId: "r8" },
        { id: "a3", text: "Immediate relative (child, parent) of US citizen", nextQuestionId: "r9" },
        { id: "a4", text: "Other family member of US citizen or resident", nextQuestionId: "r10" },
        { id: "a5", text: "Just visiting family (no immigration intent)", nextQuestionId: "q8" },
      ],
      helpText: "Your relationship affects your eligibility for family-based visas",
    },

    q6: {
      id: "q6",
      text: "What type of investment or trade activity?",
      answerType: "single",
      options: [
        { id: "a1", text: "Substantial business investment", nextQuestionId: "r11" },
        { id: "a2", text: "Treaty trader (import/export business)", nextQuestionId: "r12" },
        { id: "a3", text: "Exploring business opportunities only", nextQuestionId: "q8" },
      ],
      helpText: "Investment amount and activities determine the visa type",
    },

    q7: {
      id: "q7",
      text: "What type of cultural exchange program?",
      answerType: "single",
      options: [
        { id: "a1", text: "Work and travel programs", nextQuestionId: "r13" },
        { id: "a2", text: "Au pair or camp counselor", nextQuestionId: "r13" },
        { id: "a3", text: "Government or international agency related", nextQuestionId: "r14" },
        { id: "a4", text: "Religious activities", nextQuestionId: "r15" },
      ],
      helpText: "Different exchange programs have different visa requirements",
    },

    q8: {
      id: "q8",
      text: "Are you from a Visa Waiver Program (VWP) country?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes", nextQuestionId: "r16" },
        { id: "a2", text: "No", nextQuestionId: "r17" },
      ],
      helpText: "Citizens of certain countries can travel to the US without a visa for short stays",
    },

    q9: {
      id: "q9",
      text: "What is the specific purpose of your long-term visit?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism and leisure only", nextQuestionId: "r17" },
        { id: "a2", text: "Visiting family or friends", nextQuestionId: "r17" },
        { id: "a3", text: "Medical treatment", nextQuestionId: "r18" },
        { id: "a4", text: "Retirement/long-term stay", nextQuestionId: "r19" },
      ],
      helpText: "The US generally doesn't have long-term tourist visas - this affects your options",
    },

    q10: {
      id: "q10",
      text: "What is your level of skill or profession?",
      answerType: "single",
      options: [
        { id: "a1", text: "Specialty occupation requiring at least a bachelor's degree", nextQuestionId: "r20" },
        { id: "a2", text: "Professional with advanced degree", nextQuestionId: "r21" },
        { id: "a3", text: "Skilled or unskilled labor for temporary work", nextQuestionId: "r22" },
        { id: "a4", text: "Nurse or healthcare worker", nextQuestionId: "r23" },
      ],
      helpText: "Your profession and education level determine your work visa category",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "L-1 Visa (Intracompany Transferee)",
      description: 
        "For employees transferring from a foreign office to a US office of the same company.",
      requirements: [
        "Current employment with foreign company for at least 1 year in the past 3 years",
        "US and foreign companies must be related (parent, subsidiary, affiliate, or branch)",
        "Position must be managerial, executive, or require specialized knowledge",
        "Employer must file Form I-129 petition",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "USCIS - L-1 Visa Information",
          url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/l-1-intracompany-transferee-executive-or-manager",
        },
        {
          text: "Department of State - L Visa Category",
          url: "https://travel.state.gov/content/travel/en/us-visas/employment/visas-intracompany-transferees-l.html",
        },
      ],
      processingTime: "2-3 months standard; 15 calendar days with premium processing",
      cost: {
        amount: 960,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r20", "r2"],
      applicableCountries: ["All countries"],
    },

    r2: {
      id: "r2",
      title: "O-1 Visa (Extraordinary Ability)",
      description: 
        "For individuals with extraordinary ability in sciences, arts, education, business, or athletics.",
      requirements: [
        "Evidence of extraordinary ability (national or international recognition)",
        "Coming to US to work in area of extraordinary ability",
        "Employer or agent must file Form I-129 petition",
        "Valid passport with at least 6-month validity beyond intended period of stay",
        "Consultation letter from relevant peer group, labor organization, or management organization",
      ],
      applicationLinks: [
        {
          text: "USCIS - O-1 Visa Information",
          url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement",
        },
      ],
      processingTime: "2-3 months standard; 15 calendar days with premium processing",
      cost: {
        amount: 960,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r20", "r1"],
      applicableCountries: ["All countries"],
    },

    r3: {
      id: "r3",
      title: "H-2A/H-2B Visa (Seasonal Workers)",
      description: 
        "For temporary agricultural (H-2A) or non-agricultural (H-2B) workers to fill seasonal jobs.",
      requirements: [
        "Job offer from US employer for seasonal or temporary work",
        "Employer must show no available US workers for the position",
        "US Department of Labor certification",
        "Employer must file Form I-129 petition",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "USCIS - H-2A Program",
          url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-2a-temporary-agricultural-workers",
        },
        {
          text: "USCIS - H-2B Program",
          url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-2b-non-agricultural-workers",
        },
      ],
      processingTime: "2-3 months standard",
      cost: {
        amount: 960,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r22", "r13"],
      applicableCountries: ["All countries"],
    },

    r4: {
      id: "r4",
      title: "F-1 Visa (Academic Student)",
      description: 
        "For individuals pursuing academic studies at a US college, university, or language program.",
      requirements: [
        "Acceptance at a Student and Exchange Visitor Program (SEVP)-certified school",
        "Form I-20 from the school",
        "Proof of financial support for entire course of study",
        "Evidence of ties to home country (intent to return)",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "Department of State - F-1 Visa Information",
          url: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
        },
      ],
      processingTime: "2-3 weeks to 2-3 months (varies by country)",
      cost: {
        amount: 185,
        currency: "USD (excluding SEVIS fee)",
      },
      alternativeOptions: ["r5", "r6"],
      applicableCountries: ["All countries"],
    },

    r5: {
      id: "r5",
      title: "M-1 Visa (Vocational Student)",
      description: 
        "For students attending vocational or other recognized non-academic institutions.",
      requirements: [
        "Acceptance at an M-approved school",
        "Form I-20 from the school",
        "Proof of financial support for entire course of study",
        "Evidence of ties to home country (intent to return)",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "Department of State - M-1 Visa Information",
          url: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
        },
      ],
      processingTime: "2-3 weeks to 2-3 months (varies by country)",
      cost: {
        amount: 185,
        currency: "USD (excluding SEVIS fee)",
      },
      alternativeOptions: ["r4"],
      applicableCountries: ["All countries"],
    },

    r6: {
      id: "r6",
      title: "J-1 Visa (Exchange Visitor)",
      description: 
        "For educational and cultural exchange programs, including research scholars, professors, and students.",
      requirements: [
        "Sponsorship by a designated exchange program",
        "Form DS-2019 from sponsor organization",
        "Proof of financial support",
        "Evidence of ties to home country (intent to return)",
        "Two-year home-country physical presence requirement may apply",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "Department of State - J-1 Visa Information",
          url: "https://travel.state.gov/content/travel/en/us-visas/study/exchange.html",
        },
      ],
      processingTime: "2-3 weeks to 2-3 months (varies by country)",
      cost: {
        amount: 185,
        currency: "USD (excluding SEVIS fee)",
      },
      alternativeOptions: ["r4", "r13"],
      applicableCountries: ["All countries"],
    },

    r7: {
      id: "r7",
      title: "IR-1/CR-1 Visa (Spouse of US Citizen)",
      description: 
        "For foreign spouses of US citizens to immigrate to the United States.",
      requirements: [
        "Legal marriage to a US citizen",
        "US citizen must file Form I-130 petition",
        "Proof of relationship authenticity",
        "Must meet income requirements (125% of Federal Poverty Guidelines)",
        "Medical examination",
        "Police clearance certificates",
        "Valid passport",
      ],
      applicationLinks: [
        {
          text: "USCIS - Family of US Citizens",
          url: "https://www.uscis.gov/family/family-of-us-citizens",
        },
      ],
      processingTime: "12-18 months total process",
      cost: {
        amount: 535,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r8", "r9"],
      applicableCountries: ["All countries"],
    },

    r8: {
      id: "r8",
      title: "K-1 Visa (Fiancé(e) of US Citizen)",
      description: 
        "For fiancé(e)s of US citizens to enter the US for marriage and subsequent permanent residence.",
      requirements: [
        "Intent to marry a US citizen within 90 days of arrival",
        "Must have met in person within 2 years prior to filing (with exceptions)",
        "US citizen must file Form I-129F petition",
        "Proof of relationship authenticity",
        "Medical examination",
        "Valid passport",
      ],
      applicationLinks: [
        {
          text: "USCIS - K-1 Fiancé(e) Visa",
          url: "https://www.uscis.gov/family/family-of-us-citizens/visas-for-fiancees-of-us-citizens",
        },
      ],
      processingTime: "6-9 months total process",
      cost: {
        amount: 535,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r7"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "IR-2/IR-5 Visa (Immediate Relative of US Citizen)",
      description: 
        "For children or parents of US citizens to immigrate to the United States.",
      requirements: [
        "For parents: US citizen child must be at least 21 years old",
        "For children: Must be under 21 and unmarried",
        "US citizen must file Form I-130 petition",
        "Proof of relationship",
        "Must meet income requirements (125% of Federal Poverty Guidelines) for some cases",
        "Medical examination",
        "Valid passport",
      ],
      applicationLinks: [
        {
          text: "USCIS - Family of US Citizens",
          url: "https://www.uscis.gov/family/family-of-us-citizens",
        },
      ],
      processingTime: "12-18 months total process",
      cost: {
        amount: 535,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r10"],
      applicableCountries: ["All countries"],
    },

    r10: {
      id: "r10",
      title: "Family Preference Immigrant Visa",
      description: 
        "For more distant relatives of US citizens or relatives of permanent residents with annual quotas.",
      requirements: [
        "Qualifying family relationship with US citizen or permanent resident",
        "US sponsor must file Form I-130 petition",
        "Proof of relationship",
        "Must meet income requirements (125% of Federal Poverty Guidelines)",
        "Medical examination",
        "Police clearance certificates",
        "Valid passport",
      ],
      applicationLinks: [
        {
          text: "USCIS - Family Preference Immigration",
          url: "https://www.uscis.gov/green-card/green-card-eligibility/green-card-for-family-preference-immigrants",
        },
      ],
      processingTime: "2-5+ years (depends on category and country of origin)",
      cost: {
        amount: 535,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r9", "r17"],
      applicableCountries: ["All countries"],
    },

    r11: {
      id: "r11",
      title: "EB-5 Visa (Immigrant Investor)",
      description: 
        "For investors who make a substantial capital investment in a US business that creates jobs.",
      requirements: [
        "Investment of $1.05 million (or $800,000 in targeted employment area)",
        "Must create or preserve 10 full-time jobs for US workers",
        "File Form I-526 petition",
        "Business must benefit the US economy",
        "Medical examination",
        "Valid passport",
      ],
      applicationLinks: [
        {
          text: "USCIS - EB-5 Investment Program",
          url: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/eb-5-immigrant-investor-program",
        },
      ],
      processingTime: "2-3+ years total process",
      cost: {
        amount: 3675,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r12", "r20"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "E-1/E-2 Visa (Treaty Trader/Investor)",
      description: 
        "For nationals of treaty countries who engage in substantial trade (E-1) or investment (E-2) in the US.",
      requirements: [
        "Must be national of a treaty country",
        "For E-1: Substantial trade between US and treaty country",
        "For E-2: Substantial investment in a US business",
        "Must be in a position to direct and develop the enterprise",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "Department of State - E Visa Information",
          url: "https://travel.state.gov/content/travel/en/us-visas/employment/treaty-trader-investor-visa-e.html",
        },
      ],
      processingTime: "1-2 months (varies by consulate)",
      cost: {
        amount: 205,
        currency: "USD",
      },
      alternativeOptions: ["r11", "r17"],
      applicableCountries: ["Treaty countries only"],
    },

    r13: {
      id: "r13",
      title: "J-1 Visa (Exchange Visitor - Work Programs)",
      description: 
        "For participants in work-based exchange programs, including Summer Work Travel, Au Pair, and Camp Counselor.",
      requirements: [
        "Sponsorship by a designated exchange program",
        "Form DS-2019 from sponsor organization",
        "Proof of financial support",
        "Evidence of ties to home country (intent to return)",
        "Two-year home-country physical presence requirement may apply",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "Department of State - J-1 Visa Programs",
          url: "https://j1visa.state.gov/programs",
        },
      ],
      processingTime: "2-8 weeks (varies by consulate)",
      cost: {
        amount: 185,
        currency: "USD (excluding SEVIS fee)",
      },
      alternativeOptions: ["r6", "r3"],
      applicableCountries: ["All countries"],
    },

    r14: {
      id: "r14",
      title: "A/G Visa (Diplomats and Government Officials)",
      description: 
        "For diplomats, government officials, and employees of international organizations.",
      requirements: [
        "Official diplomatic or governmental status",
        "Official note from government or international organization",
        "Letter of employment/assignment",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "Department of State - Diplomat and Foreign Government Official Visas",
          url: "https://travel.state.gov/content/travel/en/us-visas/other-visa-categories/visa-for-diplomats.html",
        },
      ],
      processingTime: "2-3 weeks (expedited for diplomatic personnel)",
      cost: {
        amount: 0,
        currency: "USD (often waived for diplomats)",
      },
      alternativeOptions: ["r6"],
      applicableCountries: ["All countries"],
    },

    r15: {
      id: "r15",
      title: "R-1 Visa (Religious Worker)",
      description: 
        "For ministers and religious workers coming to the US for religious work.",
      requirements: [
        "Membership in a religious denomination for at least 2 years",
        "Coming to work as a minister or in a religious occupation/vocation",
        "US employer must file Form I-129 petition",
        "Religious organization must be non-profit and tax-exempt",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "USCIS - R-1 Religious Worker Program",
          url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/r-1-temporary-religious-workers",
        },
      ],
      processingTime: "2-3 months standard; 15 calendar days with premium processing",
      cost: {
        amount: 960,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r13", "r6"],
      applicableCountries: ["All countries"],
    },

    r16: {
      id: "r16",
      title: "ESTA (Visa Waiver Program)",
      description: 
        "For citizens of VWP countries to visit the US for tourism or business for up to 90 days without a visa.",
      requirements: [
        "Citizenship in a Visa Waiver Program country",
        "Valid e-passport with electronic chip",
        "ESTA approval before travel",
        "Return or onward ticket",
        "Purpose of trip must be tourism or business",
        "Stay limited to 90 days or less",
      ],
      applicationLinks: [
        {
          text: "CBP - ESTA Application",
          url: "https://esta.cbp.dhs.gov/",
        },
        {
          text: "Department of State - Visa Waiver Program",
          url: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visa-waiver-program.html",
        },
      ],
      processingTime: "Usually approved within 72 hours",
      cost: {
        amount: 21,
        currency: "USD",
      },
      alternativeOptions: ["r17"],
      applicableCountries: [
        "Andorra", "Australia", "Austria", "Belgium", "Brunei", "Chile", "Croatia", 
        "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", 
        "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Japan", "Latvia", 
        "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Monaco", "Netherlands", 
        "New Zealand", "Norway", "Poland", "Portugal", "San Marino", "Singapore", 
        "Slovakia", "Slovenia", "South Korea", "Spain", "Sweden", "Switzerland", 
        "Taiwan", "United Kingdom", "and others"
      ],
    },

    r17: {
      id: "r17",
      title: "B-1/B-2 Visa (Business/Tourist)",
      description: 
        "For temporary visits to the US for business (B-1), tourism, pleasure, or medical treatment (B-2).",
      requirements: [
        "Proof of ties to home country (intent to return)",
        "Purpose of trip is temporary and legitimate",
        "Sufficient financial means to cover your stay",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "Department of State - Visitor Visa",
          url: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
        },
      ],
      processingTime: "2-3 weeks to several months (varies by country)",
      cost: {
        amount: 185,
        currency: "USD",
      },
      alternativeOptions: ["r16", "r18"],
      applicableCountries: ["All countries"],
    },

    r18: {
      id: "r18",
      title: "B-2 Visa (Medical Treatment)",
      description: 
        "For visitors seeking medical treatment in the United States.",
      requirements: [
        "Letter from physician explaining medical condition",
        "Letter from US doctor or medical facility willing to treat you",
        "Proof of ability to pay for treatment",
        "Proof of ties to home country (intent to return)",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "Department of State - Medical Tourism",
          url: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
        },
      ],
      processingTime: "2-3 weeks to several months (varies by country)",
      cost: {
        amount: 185,
        currency: "USD",
      },
      alternativeOptions: ["r17"],
      applicableCountries: ["All countries"],
    },

    r19: {
      id: "r19",
      title: "No Specific Retirement Visa",
      description: 
        "The US doesn't offer a specific retirement visa. Alternative options may include investment visas, family-based visas, or B-2 tourist visas with regular renewals.",
      requirements: [
        "No specific retirement visa exists",
        "Consider B-2 visa for temporary stays (up to 6 months)",
        "Consider EB-5 Investment Visa if eligible",
        "Consider family-based options if you have US citizen relatives",
      ],
      applicationLinks: [
        {
          text: "Department of State - Visitor Visa",
          url: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
        },
      ],
      processingTime: "Varies by alternative visa type",
      cost: {
        amount: 185,
        currency: "USD (varies by alternative visa type)",
      },
      alternativeOptions: ["r11", "r17", "r10"],
      applicableCountries: ["All countries"],
    },

    r20: {
      id: "r20",
      title: "H-1B Visa (Specialty Occupation)",
      description: 
        "For professionals working in specialty occupations that require theoretical and practical application of specialized knowledge.",
      requirements: [
        "Job must qualify as a specialty occupation",
        "Typically requires at least a bachelor's degree or equivalent",
        "US employer must file Form I-129 petition",
        "Labor Condition Application (LCA) approval",
        "Subject to annual caps (except for certain employers)",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "USCIS - H-1B Specialty Occupations",
          url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations",
        },
      ],
      processingTime: "2-3 months standard; 15 calendar days with premium processing",
      cost: {
        amount: 960,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r1", "r21"],
      applicableCountries: ["All countries"],
    },

    r21: {
      id: "r21",
      title: "EB-2 Visa (Advanced Degree Professionals)",
      description: 
        "For professionals with advanced degrees or exceptional ability seeking permanent residence.",
      requirements: [
        "Advanced degree (beyond bachelor's) or exceptional ability",
        "Job offer from US employer (with some exceptions)",
        "Labor certification approval (with some exceptions)",
        "Employer files Form I-140 petition",
        "Medical examination",
        "Valid passport",
      ],
      applicationLinks: [
        {
          text: "USCIS - EB-2 Advanced Degree Professionals",
          url: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2",
        },
      ],
      processingTime: "1-2+ years total process (varies by country)",
      cost: {
        amount: 700,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r20", "r2"],
      applicableCountries: ["All countries"],
    },

    r22: {
      id: "r22",
      title: "H-2B Visa (Temporary Non-Agricultural Workers)",
      description: 
        "For temporary non-agricultural workers filling jobs due to a one-time or seasonal need.",
      requirements: [
        "Job offer for temporary non-agricultural work",
        "US employer must demonstrate labor shortage",
        "US Department of Labor certification",
        "Employer must file Form I-129 petition",
        "Subject to annual caps",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "USCIS - H-2B Non-Agricultural Workers",
          url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-2b-non-agricultural-workers",
        },
      ],
      processingTime: "2-3 months standard",
      cost: {
        amount: 960,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r3", "r13"],
      applicableCountries: ["All countries"],
    },

    r23: {
      id: "r23",
      title: "H-1C/TN Visa (Healthcare Professionals)",
      description: 
        "For qualified healthcare professionals, especially nurses and physicians.",
      requirements: [
        "Licensed healthcare professional (specific requirements vary by profession)",
        "Job offer from US healthcare employer",
        "Employer must file petition (for H-1C)",
        "For TN: Must be citizen of Canada or Mexico under USMCA",
        "Credentials evaluation and/or licensing exams",
        "Valid passport with at least 6-month validity beyond intended period of stay",
      ],
      applicationLinks: [
        {
          text: "USCIS - Healthcare Worker Information",
          url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations",
        },
      ],
      processingTime: "2-3 months standard; 15 calendar days with premium processing",
      cost: {
        amount: 960,
        currency: "USD (plus additional fees)",
      },
      alternativeOptions: ["r20", "r22"],
      applicableCountries: ["All countries (H-1C); Canada and Mexico only (TN)"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-19",
    countries: ["United States"],
  },
};