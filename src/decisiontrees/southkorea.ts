import { VisaDecisionTree } from './model';

export const southkoreaVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the primary purpose of your visit to South Korea?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism or short-term visit", nextQuestionId: "q2" },
        { id: "a2", text: "Study", nextQuestionId: "q3" },
        { id: "a3", text: "Work", nextQuestionId: "q4" },
        { id: "a4", text: "Business activities", nextQuestionId: "q5" },
        { id: "a5", text: "Join family or spouse", nextQuestionId: "q6" },
        { id: "a6", text: "Long-term residence or immigration", nextQuestionId: "q7" },
      ],
      helpText: "Select the main reason for your visit to South Korea",
    },

    q2: {
      id: "q2",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        { id: "a1", text: "Visa-free entry country (US, EU, UK, Japan, etc.)", nextQuestionId: "r1" },
        { id: "a2", text: "Visa-required country", nextQuestionId: "r2" },
        { id: "a3", text: "Eligible for K-ETA only (Canada, Australia, etc.)", nextQuestionId: "r3" },
      ],
      helpText: "Your nationality determines whether you need a visa or can enter visa-free for short visits",
    },

    q3: {
      id: "q3",
      text: "What type of educational program will you be attending?",
      answerType: "single",
      options: [
        { id: "a1", text: "Degree program at university or college", nextQuestionId: "r4" },
        { id: "a2", text: "Korean language program", nextQuestionId: "r5" },
        { id: "a3", text: "Short-term study (less than 90 days)", nextQuestionId: "q2" },
        { id: "a4", text: "Exchange program", nextQuestionId: "r4" },
      ],
      helpText: "Different study programs may require different types of visas",
    },

    q4: {
      id: "q4",
      text: "What type of work will you be doing in South Korea?",
      answerType: "single",
      options: [
        { id: "a1", text: "Professional work (E-1 to E-7 categories)", nextQuestionId: "r6" },
        { id: "a2", text: "Teaching English (E-2 visa)", nextQuestionId: "r7" },
        { id: "a3", text: "Working Holiday (for eligible countries)", nextQuestionId: "r8" },
        { id: "a4", text: "Entertainment or artistic performances", nextQuestionId: "r9" },
        { id: "a5", text: "Seasonal or low-skilled work", nextQuestionId: "r10" },
      ],
      helpText: "The type of work determines which specific work visa you need",
    },

    q5: {
      id: "q5",
      text: "What type of business activities will you conduct?",
      answerType: "single",
      options: [
        { id: "a1", text: "Short-term business meetings (less than 90 days)", nextQuestionId: "q2" },
        { id: "a2", text: "Investment in Korean business", nextQuestionId: "r11" },
        { id: "a3", text: "Intra-company transfer", nextQuestionId: "r12" },
        { id: "a4", text: "Start a business in South Korea", nextQuestionId: "r13" },
      ],
      helpText: "Different business activities require different types of visas",
    },

    q6: {
      id: "q6",
      text: "What is your relationship with the person in South Korea?",
      answerType: "single",
      options: [
        { id: "a1", text: "Spouse of Korean national", nextQuestionId: "r14" },
        { id: "a2", text: "Spouse of foreign resident in Korea", nextQuestionId: "r15" },
        { id: "a3", text: "Child of Korean national", nextQuestionId: "r16" },
        { id: "a4", text: "Parent of Korean national", nextQuestionId: "r16" },
      ],
      helpText: "Family visas depend on your relationship with the person in South Korea",
    },

    q7: {
      id: "q7",
      text: "What path to long-term residence are you pursuing?",
      answerType: "single",
      options: [
        { id: "a1", text: "Points-based Residence Visa (F-2-7)", nextQuestionId: "r17" },
        { id: "a2", text: "Permanent Residence (F-5)", nextQuestionId: "r18" },
        { id: "a3", text: "Overseas Korean (F-4)", nextQuestionId: "r19" },
        { id: "a4", text: "Retirement (F-2)", nextQuestionId: "r20" },
      ],
      helpText: "There are several pathways to long-term or permanent residence in South Korea",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Visa-free Entry",
      description: 
        "Citizens of many countries can enter South Korea for tourism or short business visits without a visa for up to 30-90 days.",
      requirements: [
        "Valid passport with at least 6 months validity beyond intended stay",
        "Confirmed return or onward ticket",
        "Sufficient funds for your stay",
        "K-ETA (Korea Electronic Travel Authorization) registration before travel",
        "No intention to work or engage in paid activities",
        "Maximum stay depends on nationality (30, 60, or 90 days)",
      ],
      applicationLinks: [
        {
          text: "K-ETA Official Website",
          url: "https://www.k-eta.go.kr/",
        },
      ],
      processingTime: "K-ETA approval typically within 24 hours (apply at least 72 hours before travel)",
      cost: {
        amount: 10000,
        currency: "KRW (approximately USD 8 for K-ETA)",
      },
      alternativeOptions: ["r2"],
      applicableCountries: [
        "United States", "Canada", "All EU countries", "United Kingdom", "Australia", 
        "New Zealand", "Japan", "Taiwan", "Hong Kong", "Singapore", "Malaysia", 
        "Thailand", "and many others (check with Korean embassy for complete list)"
      ],
    },

    r2: {
      id: "r2",
      title: "C-3 Short-term Visitor Visa",
      description: 
        "For tourists, family visitors, or short business trips from countries requiring a visa to enter South Korea.",
      requirements: [
        "Valid passport with at least 6 months validity beyond intended stay",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Proof of sufficient funds for your stay",
        "Round-trip flight reservation",
        "Travel itinerary",
        "Proof of accommodation",
        "May require additional documents depending on nationality and purpose",
      ],
      applicationLinks: [
        {
          text: "Visa Portal - Korea Visa Portal",
          url: "https://www.visa.go.kr/",
        },
      ],
      processingTime: "5-10 business days",
      cost: {
        amount: 40,
        currency: "USD (single entry, may vary by nationality)",
      },
      alternativeOptions: [],
      applicableCountries: ["All countries that require a visa for South Korea"],
    },

    r3: {
      id: "r3",
      title: "K-ETA (Korea Electronic Travel Authorization)",
      description: 
        "A mandatory travel authorization for visa-free visitors to South Korea.",
      requirements: [
        "Valid passport from an eligible country",
        "Complete the online K-ETA application",
        "Credit/debit card for payment",
        "Contact information and travel details",
        "Recent photo",
        "K-ETA is valid for 2 years or until passport expiration",
        "K-ETA is not a visa but a pre-screening for visa-free visitors",
      ],
      applicationLinks: [
        {
          text: "K-ETA Official Website",
          url: "https://www.k-eta.go.kr/",
        },
      ],
      processingTime: "Usually approved within 24 hours",
      cost: {
        amount: 10000,
        currency: "KRW (approximately USD 8)",
      },
      alternativeOptions: ["r2"],
      applicableCountries: [
        "United States", "United Kingdom", "European Union countries", "Canada", 
        "Australia", "New Zealand", "Taiwan", "and other visa-free countries"
      ],
    },

    r4: {
      id: "r4",
      title: "D-2 Student Visa",
      description: 
        "For international students pursuing a degree at a Korean university or participating in an exchange program.",
      requirements: [
        "Acceptance letter from a Korean university",
        "Proof of sufficient funds (bank statement showing approximately USD 10,000 or equivalent)",
        "Valid passport",
        "Completed visa application form",
        "Certificate of enrollment from your home university (for exchange students)",
        "Recent passport-sized color photograph",
        "Proof of accommodation in Korea (if available)",
        "Health check and/or health insurance may be required upon arrival",
      ],
      applicationLinks: [
        {
          text: "Study in Korea - Government Website",
          url: "https://www.studyinkorea.go.kr/",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 60,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r5"],
      applicableCountries: ["All countries"],
    },

    r5: {
      id: "r5",
      title: "D-4 Language Student Visa",
      description: 
        "For students enrolled in Korean language programs at universities or approved language institutes.",
      requirements: [
        "Acceptance letter from a Korean language institute",
        "Proof of tuition payment",
        "Proof of sufficient funds for living expenses",
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Study plan (sometimes required)",
        "Health insurance required upon arrival",
      ],
      applicationLinks: [
        {
          text: "Korean Language Programs Information",
          url: "https://www.studyinkorea.go.kr/",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 60,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r4"],
      applicableCountries: ["All countries"],
    },

    r6: {
      id: "r6",
      title: "E-Series Professional Work Visas",
      description: 
        "Various visa categories (E-1 through E-7) for professionals working in South Korea.",
      requirements: [
        "Job offer or employment contract from a Korean employer",
        "Relevant qualifications and experience for the position",
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Criminal background check (for some categories)",
        "Health certificate (for some categories)",
        "Documents proving qualifications (degrees, certificates, work experience)",
        "Employer must sponsor the visa application",
      ],
      applicationLinks: [
        {
          text: "Hi Korea - E-series Visa Information",
          url: "https://www.hikorea.go.kr/",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 60,
        currency: "USD (single entry, may vary by nationality and visa type)",
      },
      alternativeOptions: ["r12"],
      applicableCountries: ["All countries"],
    },

    r7: {
      id: "r7",
      title: "E-2 English Teaching Visa",
      description: 
        "Specifically for native English speakers teaching English in South Korea.",
      requirements: [
        "Job offer from a Korean school or language institute",
        "Bachelor's degree or higher from accredited institution",
        "Criminal background check apostilled by your government",
        "Health check upon arrival in Korea",
        "Native English speaker from eligible country",
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Sealed university transcripts",
      ],
      applicationLinks: [
        {
          text: "EPIK (English Program in Korea) - for public schools",
          url: "https://www.epik.go.kr/",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 60,
        currency: "USD (single entry, may vary by nationality)",
      },
      alternativeOptions: ["r6"],
      applicableCountries: [
        "United States", "Canada", "United Kingdom", "Ireland", "Australia", 
        "New Zealand", "South Africa"
      ],
    },

    r8: {
      id: "r8",
      title: "H-1 Working Holiday Visa",
      description: 
        "Allows young people from eligible countries to work and travel in South Korea for up to one year.",
      requirements: [
        "Age 18-30 (or 18-25 for some countries)",
        "Valid passport from an eligible country",
        "Sufficient funds (approximately KRW 3,000,000)",
        "Return flight ticket or sufficient funds to purchase one",
        "Health insurance for the duration of stay",
        "No accompanying dependents",
        "No previous Working Holiday visa for Korea",
        "Meet health and character requirements",
      ],
      applicationLinks: [
        {
          text: "Working Holiday Information",
          url: "https://www.whic.mofa.go.kr/",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 45,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r6", "r7"],
      applicableCountries: [
        "Australia", "Austria", "Belgium", "Canada", "Chile", "Czech Republic", 
        "Denmark", "France", "Germany", "Hong Kong", "Hungary", "Ireland", "Israel", 
        "Italy", "Japan", "Netherlands", "New Zealand", "Poland", "Portugal", 
        "Sweden", "Taiwan", "United Kingdom"
      ],
    },

    r9: {
      id: "r9",
      title: "E-6 Culture and Entertainment Visa",
      description: 
        "For artists, performers, athletes, and entertainment workers in South Korea.",
      requirements: [
        "Contract with a Korean entertainment company or event organizer",
        "Proof of relevant experience or skills",
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Criminal background check may be required",
        "Detailed performance or activity schedule",
        "Sponsor letter from Korean agency or company",
      ],
      applicationLinks: [
        {
          text: "Hi Korea - Arts & Entertainment Visa Information",
          url: "https://www.hikorea.go.kr/",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 60,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r6"],
      applicableCountries: ["All countries"],
    },

    r10: {
      id: "r10",
      title: "E-9 Non-professional Employment Visa",
      description: 
        "For foreign workers in certain industries such as manufacturing, construction, agriculture, and fishing.",
      requirements: [
        "Contract through the Employment Permit System (EPS)",
        "Passing the Korean language test (TOPIK)",
        "Medical examination",
        "Valid passport",
        "Meet age requirements (18-39 years old)",
        "No criminal record",
        "Not previously deported from Korea",
        "Note: This visa is only available through bilateral agreements with specific countries",
      ],
      applicationLinks: [
        {
          text: "Employment Permit System (EPS)",
          url: "https://www.eps.go.kr/",
        },
      ],
      processingTime: "Variable, depends on EPS process",
      cost: {
        amount: 60,
        currency: "USD (plus EPS application fees)",
      },
      alternativeOptions: ["r8"],
      applicableCountries: [
        "Bangladesh", "Cambodia", "China", "East Timor", "Indonesia", "Kyrgyzstan", 
        "Laos", "Mongolia", "Myanmar", "Nepal", "Pakistan", "Philippines", "Sri Lanka", 
        "Thailand", "Uzbekistan", "Vietnam"
      ],
    },

    r11: {
      id: "r11",
      title: "D-8 Corporate Investment Visa",
      description: 
        "For foreign investors who invest in a Korean company.",
      requirements: [
        "Minimum investment of KRW 100 million (approximately USD 80,000)",
        "Business registration documents",
        "Proof of investment funds and their source",
        "Business plan and feasibility study",
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Resume and relevant business experience",
      ],
      applicationLinks: [
        {
          text: "Invest Korea - Investment Visa Information",
          url: "https://www.investkorea.org/",
        },
      ],
      processingTime: "4-8 weeks",
      cost: {
        amount: 60,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r13"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "D-7 Intra-company Transfer Visa",
      description: 
        "For employees transferred to a Korean branch, subsidiary, or affiliate of a foreign company.",
      requirements: [
        "Employment verification from the sending company",
        "Proof of relationship between foreign and Korean companies",
        "Proof of employment with the foreign company for at least 1 year",
        "Appointment letter for the position in Korea",
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Business registration of the Korean company",
      ],
      applicationLinks: [
        {
          text: "Hi Korea - Intra-company Transfer Visa",
          url: "https://www.hikorea.go.kr/",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 60,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r6"],
      applicableCountries: ["All countries"],
    },

    r13: {
      id: "r13",
      title: "D-8-4 Start-up Visa",
      description: 
        "For entrepreneurs establishing a start-up business in South Korea.",
      requirements: [
        "Business plan for innovative start-up",
        "Intellectual property or technology with commercial potential",
        "Recommendation from a designated Korean start-up incubator or accelerator",
        "Minimum investment funds (variable depending on the business plan)",
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Resume and relevant background/experience",
      ],
      applicationLinks: [
        {
          text: "OASIS Program - Start-up Visa",
          url: "https://www.oasis-info.kr/",
        },
      ],
      processingTime: "4-8 weeks",
      cost: {
        amount: 60,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r11"],
      applicableCountries: ["All countries"],
    },

    r14: {
      id: "r14",
      title: "F-6 Marriage Visa",
      description: 
        "For foreign spouses of Korean nationals.",
      requirements: [
        "Marriage certificate",
        "Korean spouse's family register (Jumincungnodok)",
        "Korean spouse's certificate of residence (Jumindeungnokdeunbon)",
        "Proof of relationship (photos, communication records, etc.)",
        "Proof of meeting in person before marriage",
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Basic Korean language proficiency (TOPIK Level 1) or exemption",
        "Proof of housing and financial stability",
      ],
      applicationLinks: [
        {
          text: "Hi Korea - Marriage Visa Information",
          url: "https://www.hikorea.go.kr/",
        },
      ],
      processingTime: "2-3 months",
      cost: {
        amount: 60,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r15"],
      applicableCountries: ["All countries"],
    },

    r15: {
      id: "r15",
      title: "F-3 Dependent Family Visa",
      description: 
        "For spouses and unmarried children under 24 of foreign residents in Korea.",
      requirements: [
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Marriage certificate (for spouse) or birth certificate (for children)",
        "Copy of spouse's/parent's Alien Registration Card",
        "Copy of spouse's/parent's passport",
        "Proof of current status of the main visa holder",
        "Proof of financial ability to support dependents",
      ],
      applicationLinks: [
        {
          text: "Hi Korea - Dependent Family Visa",
          url: "https://www.hikorea.go.kr/",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 60,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: [],
      applicableCountries: ["All countries"],
    },

    r16: {
      id: "r16",
      title: "F-4 Overseas Korean Visa",
      description: 
        "For ethnic Koreans with foreign nationality.",
      requirements: [
        "Proof of Korean heritage (parents' or grandparents' family register)",
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Birth certificate showing relationship to Korean ancestors",
        "Criminal background check",
        "Note: Requirements vary depending on the country of citizenship",
      ],
      applicationLinks: [
        {
          text: "Hi Korea - Overseas Korean Visa",
          url: "https://www.hikorea.go.kr/",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 60,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r19"],
      applicableCountries: ["All countries, for individuals of Korean descent"],
    },

    r17: {
      id: "r17",
      title: "F-2-7 Points-based Residence Visa",
      description: 
        "A residence visa for highly skilled foreigners who acquire a minimum of 80 points under the points system.",
      requirements: [
        "Minimum of 80 points based on factors including:",
        "- Age, education, Korean language proficiency",
        "- Income, work experience, volunteer activities",
        "Current valid visa status (excluding tourist/short-term visas)",
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Proof of income and employment",
        "Academic certificates and TOPIK certification if applicable",
      ],
      applicationLinks: [
        {
          text: "Hi Korea - Points-based Residence Visa",
          url: "https://www.hikorea.go.kr/",
        },
      ],
      processingTime: "2-3 months",
      cost: {
        amount: 60,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r18"],
      applicableCountries: ["All countries"],
    },

    r18: {
      id: "r18",
      title: "F-5 Permanent Residence Visa",
      description: 
        "For long-term foreign residents who meet specific criteria for permanent residence in South Korea.",
      requirements: [
        "Minimum of 5 years of residence in Korea (may be shorter for investors or skilled professionals)",
        "Financial stability (income above average Korean GNI)",
        "Knowledge of Korean culture and language (TOPIK level 2 or higher)",
        "Clean criminal record",
        "Valid passport",
        "Current valid visa status",
        "Tax payment history",
        "Proof of accommodation",
        "Proof of health insurance",
      ],
      applicationLinks: [
        {
          text: "Hi Korea - Permanent Residence Information",
          url: "https://www.hikorea.go.kr/",
        },
      ],
      processingTime: "3-6 months",
      cost: {
        amount: 120,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r17"],
      applicableCountries: ["All countries"],
    },

    r19: {
      id: "r19",
      title: "F-4 Overseas Korean Visa",
      description: 
        "For foreign nationals who were previously Korean citizens or are of Korean descent.",
      requirements: [
        "Proof of previous Korean nationality or Korean ancestry (up to third generation)",
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Family relation certificate or other documents proving Korean heritage",
        "Birth certificate",
        "Note: Specific requirements may vary depending on country of citizenship",
      ],
      applicationLinks: [
        {
          text: "Hi Korea - Overseas Korean Visa",
          url: "https://www.hikorea.go.kr/",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 60,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r16"],
      applicableCountries: ["All countries, for individuals of Korean descent"],
    },

    r20: {
      id: "r20",
      title: "F-2 Long-term Residence Visa (Retirement)",
      description: 
        "For retirees who want to live in South Korea long-term.",
      requirements: [
        "Proof of stable retirement income (pension, investments, etc.)",
        "Minimum financial requirement (typically around KRW 300 million in assets or monthly income of KRW 3 million)",
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized color photograph",
        "Proof of accommodation in Korea",
        "Health insurance",
        "Age typically over 55 years",
      ],
      applicationLinks: [
        {
          text: "Hi Korea - Long-term Residence Information",
          url: "https://www.hikorea.go.kr/",
        },
      ],
      processingTime: "2-3 months",
      cost: {
        amount: 60,
        currency: "USD (may vary by nationality)",
      },
      alternativeOptions: ["r17"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-20",
    author: "Emma",
    countries: ["South Korea"],
  },
};