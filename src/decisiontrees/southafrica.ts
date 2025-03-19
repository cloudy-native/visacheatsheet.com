import { VisaDecisionTree } from './model';

export const southafricaVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the purpose of your visit to South Africa?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Leisure", nextQuestionId: "q2" },
        { id: "a2", text: "Business", nextQuestionId: "q3" },
        { id: "a3", text: "Work", nextQuestionId: "q4" },
        { id: "a4", text: "Study", nextQuestionId: "q5" },
        { id: "a5", text: "Joining Family/Partner", nextQuestionId: "q6" },
        { id: "a6", text: "Medical Treatment", nextQuestionId: "q7" },
        { id: "a7", text: "Retirement", nextQuestionId: "r11" },
        { id: "a8", text: "Transit Through South Africa", nextQuestionId: "q8" },
      ],
      helpText: "Select the main reason for your visit to South Africa",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in South Africa as a tourist?",
      answerType: "single",
      options: [
        { id: "a1", text: "Up to 90 days", nextQuestionId: "q9" },
        { id: "a2", text: "More than 90 days", nextQuestionId: "r7" },
      ],
      helpText: "Duration of stay affects visa requirements",
    },

    q3: {
      id: "q3",
      text: "What type of business activities will you be conducting?",
      answerType: "single",
      options: [
        { id: "a1", text: "Business meetings/conferences", nextQuestionId: "q9" },
        { id: "a2", text: "Market research/client visits", nextQuestionId: "q9" },
        { id: "a3", text: "Contract negotiations/signing", nextQuestionId: "q9" },
        { id: "a4", text: "Equipment installation/repair (technical work)", nextQuestionId: "q4" },
        { id: "a5", text: "Participating in film production", nextQuestionId: "r6" },
      ],
      helpText: "Some business activities may require specific visa types",
    },

    q4: {
      id: "q4",
      text: "What type of work will you be doing in South Africa?",
      answerType: "single",
      options: [
        { id: "a1", text: "General work (employment contract)", nextQuestionId: "r2" },
        { id: "a2", text: "Critical skills work (in-demand occupation)", nextQuestionId: "r3" },
        { id: "a3", text: "Intra-company transfer", nextQuestionId: "r4" },
        { id: "a4", text: "Corporate visa holder", nextQuestionId: "r5" },
        { id: "a5", text: "Short-term technical work (less than 90 days)", nextQuestionId: "r6" },
      ],
      helpText: "Different work categories require different visa types",
    },

    q5: {
      id: "q5",
      text: "What type of study program will you be attending?",
      answerType: "single",
      options: [
        { id: "a1", text: "Higher education (university/college)", nextQuestionId: "r8" },
        { id: "a2", text: "School (primary/secondary)", nextQuestionId: "r8" },
        { id: "a3", text: "Language course or short program (less than 90 days)", nextQuestionId: "q9" },
        { id: "a4", text: "Exchange program", nextQuestionId: "r8" },
        { id: "a5", text: "Research as part of academic program", nextQuestionId: "r8" },
      ],
      helpText: "Study visas are typically required for programs longer than 90 days",
    },

    q6: {
      id: "q6",
      text: "What is your relationship with the person in South Africa?",
      answerType: "single",
      options: [
        { id: "a1", text: "Spouse of South African citizen/permanent resident", nextQuestionId: "r9" },
        { id: "a2", text: "Life partner of South African citizen/permanent resident", nextQuestionId: "r9" },
        { id: "a3", text: "Child of South African citizen/permanent resident", nextQuestionId: "r9" },
        { id: "a4", text: "Parent of South African citizen/permanent resident", nextQuestionId: "r9" },
        { id: "a5", text: "Other family relationship (visiting only)", nextQuestionId: "q9" },
      ],
      helpText: "Close family relationships may qualify for specific visas",
    },

    q7: {
      id: "q7",
      text: "Are you coming to South Africa for medical treatment?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, for less than 90 days", nextQuestionId: "q9" },
        { id: "a2", text: "Yes, for more than 90 days", nextQuestionId: "r10" },
        { id: "a3", text: "No, I'm coming for another reason", nextQuestionId: "q1" },
      ],
      helpText: "Medical treatment may require a specific visa for longer stays",
    },

    q8: {
      id: "q8",
      text: "How long will your transit through South Africa be?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 24 hours, staying in airport transit area", nextQuestionId: "q9" },
        { id: "a2", text: "Less than 24 hours, leaving airport transit area", nextQuestionId: "q9" },
        { id: "a3", text: "More than 24 hours", nextQuestionId: "q9" },
      ],
      helpText: "Even for transit, visa requirements depend on your nationality",
    },

    q9: {
      id: "q9",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        { id: "a1", text: "Visa-exempt country (most Western nations)", nextQuestionId: "r1" },
        { id: "a2", text: "Visa-required country", nextQuestionId: "r12" },
        { id: "a3", text: "Not sure if I need a visa", nextQuestionId: "r13" },
      ],
      helpText: "Your nationality determines whether you need a visa for short visits",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Visa-Free Entry (Visitor's Permit)",
      description: 
        "Citizens of visa-exempt countries can enter South Africa without a visa for stays up to 90 days for tourism, business meetings, or visiting family/friends.",
      requirements: [
        "Valid passport with at least 30 days validity beyond your intended departure from South Africa",
        "At least 2 blank visa pages in your passport",
        "Proof of sufficient funds for your stay",
        "Return or onward ticket",
        "Proof of accommodation in South Africa",
        "Yellow fever vaccination certificate (if arriving from a yellow fever endemic country)",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs",
          url: "http://www.dha.gov.za/index.php/immigration-services/exempt-countries",
        },
      ],
      processingTime: "Visitors permit issued upon arrival at port of entry",
      cost: {
        amount: 0,
        currency: "ZAR",
      },
      alternativeOptions: ["r7", "r12"],
      applicableCountries: [
        "Australia", "Austria", "Belgium", "Botswana", "Canada", "Chile", "Czech Republic", 
        "Denmark", "Ecuador", "Finland", "France", "Germany", "Greece", "Iceland", "Ireland", 
        "Israel", "Italy", "Jamaica", "Japan", "Liechtenstein", "Luxembourg", "Malta", "Monaco", 
        "Namibia", "Netherlands", "New Zealand", "Norway", "Panama", "Portugal", "Russia", 
        "Saint Vincent and the Grenadines", "San Marino", "Singapore", "Spain", "Sweden", 
        "Switzerland", "Tanzania", "Trinidad and Tobago", "United Kingdom", "United States", 
        "Uruguay", "Venezuela", "Zambia", "Zimbabwe", "and others"
      ],
    },

    r2: {
      id: "r2",
      title: "General Work Visa",
      description: 
        "For foreign nationals who have a permanent job offer from a South African employer and don't qualify for a critical skills or intra-company transfer visa.",
      requirements: [
        "Valid passport with at least 30 days validity beyond the intended visa period",
        "Completed visa application form (BI-1738)",
        "Job offer/employment contract from South African employer",
        "Certificate from Department of Labor confirming that no suitable South African citizen/resident could fill the position",
        "Proof of qualifications and experience (SAQA verified)",
        "Registration with professional body/board/council (if applicable)",
        "Medical and radiological reports",
        "Police clearance certificates from all countries lived in for 12+ months since age 18",
        "Proof of sufficient financial means",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs - Work Visas",
          url: "http://www.dha.gov.za/index.php/immigration-services/types-of-visas",
        },
      ],
      processingTime: "4-8 weeks (varies by location)",
      cost: {
        amount: 1520,
        currency: "ZAR (additional fees may apply for Department of Labor certification)",
      },
      alternativeOptions: ["r3", "r4"],
      applicableCountries: ["All countries"],
    },

    r3: {
      id: "r3",
      title: "Critical Skills Work Visa",
      description: 
        "For individuals with qualifications and experience in occupations deemed critical for South Africa's economic growth.",
      requirements: [
        "Valid passport with at least 30 days validity beyond the intended visa period",
        "Completed visa application form (BI-1738)",
        "Proof of qualifications (SAQA verified)",
        "Proof that skills/qualifications fall within critical skills list",
        "Registration with professional body/board/council in South Africa",
        "Proof of experience relevant to the critical skill",
        "Letter of motivation from applicant with CV",
        "Job offer from South African employer (not mandatory but helpful)",
        "Medical and radiological reports",
        "Police clearance certificates from all countries lived in for 12+ months since age 18",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs - Critical Skills Visa",
          url: "http://www.dha.gov.za/index.php/immigration-services/scarce-skills-work-permits",
        },
      ],
      processingTime: "4-8 weeks (varies by location)",
      cost: {
        amount: 1520,
        currency: "ZAR",
      },
      alternativeOptions: ["r2", "r4"],
      applicableCountries: ["All countries"],
    },

    r4: {
      id: "r4",
      title: "Intra-Company Transfer Work Visa",
      description: 
        "For employees being transferred from a foreign office to a South African branch, subsidiary, or affiliate of the same company.",
      requirements: [
        "Valid passport with at least 30 days validity beyond the intended visa period",
        "Completed visa application form (BI-1738)",
        "Letter from foreign company confirming employment for at least 6 months",
        "Letter from South African company confirming transfer and position",
        "Proof of multinational relationship between the companies",
        "Proof of qualifications and skills transfer plan",
        "Medical and radiological reports",
        "Police clearance certificates from all countries lived in for 12+ months since age 18",
        "Valid for up to 4 years and not renewable",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs - Intra-Company Transfer",
          url: "http://www.dha.gov.za/index.php/immigration-services/types-of-visas",
        },
      ],
      processingTime: "4-8 weeks (varies by location)",
      cost: {
        amount: 1520,
        currency: "ZAR",
      },
      alternativeOptions: ["r2", "r3"],
      applicableCountries: ["All countries"],
    },

    r5: {
      id: "r5",
      title: "Corporate Visa",
      description: 
        "For South African companies needing to employ a group of foreign workers for specific projects or sectors.",
      requirements: [
        "Company applies for corporate visa first (not individual workers)",
        "Company must provide proof of need to employ foreign workers",
        "Department of Labor certificate confirming skills are needed",
        "Corporate visa holder (worker) requirements:",
        "• Valid passport",
        "• Completed visa application form",
        "• Contract of employment in line with corporate visa terms",
        "• Medical and radiological reports",
        "• Police clearance certificates",
        "Individual workers apply after company obtains corporate visa approval",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs - Corporate Visa",
          url: "http://www.dha.gov.za/index.php/immigration-services/types-of-visas",
        },
      ],
      processingTime: "2-3 months for corporate visa; 4-8 weeks for individual workers",
      cost: {
        amount: 1520,
        currency: "ZAR per individual worker (higher fee for initial corporate visa application)",
      },
      alternativeOptions: ["r2", "r4"],
      applicableCountries: ["All countries"],
    },

    r6: {
      id: "r6",
      title: "Short-term Work/Technical Visit",
      description: 
        "For short-term technical work, film crews, or specialized work requiring entry for less than 90 days.",
      requirements: [
        "Valid passport with at least 30 days validity beyond your stay",
        "Completed visa application form (if from visa-required country)",
        "Letter from South African company requesting technical expertise",
        "Letter from employer explaining technical nature of visit",
        "Proof of qualifications",
        "Proof of sufficient funds",
        "Return ticket",
        "May be issued as a Visitor's Visa with work endorsement or Section 11(2) authorization",
        "For film production: additional approval from Department of Communications and Digital Technologies",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs - Visitor's Visa",
          url: "http://www.dha.gov.za/index.php/immigration-services/types-of-visas",
        },
      ],
      processingTime: "5-10 business days (varies by location)",
      cost: {
        amount: 1800,
        currency: "ZAR (visa fee plus work authorization)",
      },
      alternativeOptions: ["r2", "r12"],
      applicableCountries: ["All countries"],
    },

    r7: {
      id: "r7",
      title: "Long-term Visitor's Visa",
      description: 
        "For extended tourism, visiting family, or sabbatical stays longer than 90 days up to 3 years.",
      requirements: [
        "Valid passport with at least 30 days validity beyond the intended visa period",
        "Completed visa application form (BI-1738)",
        "Proof of sufficient financial means to cover stay (bank statements)",
        "Return ticket or proof of funds to purchase one",
        "Proof of accommodation for duration of stay",
        "Medical and radiological reports",
        "Police clearance certificates from all countries lived in for 12+ months since age 18",
        "Yellow fever vaccination certificate (if applicable)",
        "Detailed letter explaining purpose and duration of extended visit",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs - Visitor's Visa",
          url: "http://www.dha.gov.za/index.php/immigration-services/types-of-visas",
        },
      ],
      processingTime: "4-8 weeks (varies by location)",
      cost: {
        amount: 1800,
        currency: "ZAR",
      },
      alternativeOptions: ["r1", "r11"],
      applicableCountries: ["All countries"],
    },

    r8: {
      id: "r8",
      title: "Study Visa",
      description: 
        "For international students attending South African educational institutions for programs longer than 90 days.",
      requirements: [
        "Valid passport with at least 30 days validity beyond the intended visa period",
        "Completed visa application form (BI-1738)",
        "Acceptance letter from registered South African educational institution",
        "Proof of sufficient financial means to cover tuition and living expenses",
        "Medical and radiological reports",
        "Police clearance certificates from all countries lived in for 12+ months since age 18",
        "Medical insurance from South African provider",
        "Yellow fever vaccination certificate (if applicable)",
        "Minors: additional documentation including parental consent",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs - Study Visa",
          url: "http://www.dha.gov.za/index.php/immigration-services/types-of-visas",
        },
      ],
      processingTime: "4-8 weeks (varies by location)",
      cost: {
        amount: 1800,
        currency: "ZAR",
      },
      alternativeOptions: ["r1", "r12"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "Relative's Visa",
      description: 
        "For immediate family members (spouses, life partners, children, parents) of South African citizens or permanent residents.",
      requirements: [
        "Valid passport with at least 30 days validity beyond the intended visa period",
        "Completed visa application form (BI-1738)",
        "Proof of relationship (marriage certificate, birth certificate, etc.)",
        "Proof that South African citizen/resident can financially support applicant",
        "Commitment by South African citizen/resident for medical costs",
        "Medical and radiological reports",
        "Police clearance certificates from all countries lived in for 12+ months since age 18",
        "For spouses/life partners: proof of relationship for at least 2 years",
        "For life partners: notarial agreement",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs - Relative's Visa",
          url: "http://www.dha.gov.za/index.php/immigration-services/types-of-visas",
        },
      ],
      processingTime: "4-8 weeks (varies by location)",
      cost: {
        amount: 1800,
        currency: "ZAR",
      },
      alternativeOptions: ["r1", "r12"],
      applicableCountries: ["All countries"],
    },

    r10: {
      id: "r10",
      title: "Medical Treatment Visa",
      description: 
        "For foreign nationals requiring medical treatment in South Africa for periods longer than 90 days.",
      requirements: [
        "Valid passport with at least 30 days validity beyond the intended visa period",
        "Completed visa application form (BI-1738)",
        "Letter from your doctor specifying the need for medical treatment in South Africa",
        "Letter from the South African medical facility confirming arrangements",
        "Details of the person/institution responsible for medical costs",
        "Proof of sufficient funds to cover medical costs and living expenses",
        "Police clearance certificates from all countries lived in for 12+ months since age 18",
        "Yellow fever vaccination certificate (if applicable)",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs - Medical Treatment Visa",
          url: "http://www.dha.gov.za/index.php/immigration-services/types-of-visas",
        },
      ],
      processingTime: "4-8 weeks (varies by location)",
      cost: {
        amount: 1800,
        currency: "ZAR",
      },
      alternativeOptions: ["r1", "r7"],
      applicableCountries: ["All countries"],
    },

    r11: {
      id: "r11",
      title: "Retired Person Visa",
      description: 
        "For retirees with guaranteed lifetime income planning to retire in South Africa.",
      requirements: [
        "Valid passport with at least 30 days validity beyond the intended visa period",
        "Completed visa application form (BI-1738)",
        "Proof of minimum monthly income of R37,000 from pension, retirement account, or irrevocable annuity",
        "Medical and radiological reports",
        "Police clearance certificates from all countries lived in for 12+ months since age 18",
        "Yellow fever vaccination certificate (if applicable)",
        "Can be issued for up to 4 years and is renewable",
        "Can lead to permanent residence if financial requirements are maintained",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs - Retired Person Visa",
          url: "http://www.dha.gov.za/index.php/immigration-services/types-of-visas",
        },
      ],
      processingTime: "4-8 weeks (varies by location)",
      cost: {
        amount: 1800,
        currency: "ZAR",
      },
      alternativeOptions: ["r7", "r12"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "Visitor's Visa (Tourist/Business)",
      description: 
        "For citizens of visa-required countries visiting South Africa for tourism, business meetings, or family visits up to 90 days.",
      requirements: [
        "Valid passport with at least 30 days validity beyond your intended departure from South Africa",
        "At least 2 blank visa pages in your passport",
        "Completed visa application form (BI-1738)",
        "Two identical passport photos",
        "Proof of sufficient funds for your stay",
        "Return or onward ticket",
        "Proof of accommodation in South Africa",
        "For business visits: letter of invitation from South African company",
        "Yellow fever vaccination certificate (if arriving from a yellow fever endemic country)",
        "Visa must be obtained before travel",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs - Visitor's Visa",
          url: "http://www.dha.gov.za/index.php/immigration-services/types-of-visas",
        },
      ],
      processingTime: "5-10 business days (varies by location)",
      cost: {
        amount: 1800,
        currency: "ZAR",
      },
      alternativeOptions: ["r7", "r1"],
      applicableCountries: [
        "Afghanistan", "Albania", "Algeria", "Angola", "Bangladesh", "Belarus", "Cambodia", 
        "China", "Colombia", "Cuba", "Democratic Republic of Congo", "Egypt", "Ethiopia", 
        "Ghana", "India", "Indonesia", "Iran", "Iraq", "Jordan", "Kenya", "Lebanon", "Libya", 
        "Mexico", "Mongolia", "Morocco", "Myanmar", "Nepal", "Nigeria", "North Korea", 
        "Pakistan", "Philippines", "Rwanda", "Saudi Arabia", "Somalia", "Sri Lanka", "Sudan", 
        "Syria", "Taiwan", "Thailand", "Turkey", "Ukraine", "Vietnam", "Yemen", "and others"
      ],
    },

    r13: {
      id: "r13",
      title: "Visa Requirement Check",
      description: 
        "Information to determine if you need a visa to enter South Africa based on your nationality.",
      requirements: [
        "Check the South African Department of Home Affairs website or contact the nearest South African embassy/consulate",
        "Citizens of many countries can visit South Africa for up to 90 days without a visa",
        "Visa exemption periods vary: 30 days, 90 days or 120 days depending on nationality",
        "All visitors require a passport valid for at least 30 days beyond planned departure date",
        "All visitors need at least 2 blank visa pages in their passport",
        "Even if visa-exempt, you must meet other entry requirements (funds, return ticket, etc.)",
      ],
      applicationLinks: [
        {
          text: "South African Department of Home Affairs - Exempt Countries",
          url: "http://www.dha.gov.za/index.php/immigration-services/exempt-countries",
        },
      ],
      processingTime: "N/A - informational only",
      cost: {
        amount: 0,
        currency: "ZAR",
      },
      alternativeOptions: ["r1", "r12"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-19",
    author: "Max",
    countries: ["South Africa"],
  },
};