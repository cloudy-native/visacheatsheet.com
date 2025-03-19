import { VisaDecisionTree } from "./model";

export const canadaVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the main purpose of your visit to Canada?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Visit", nextQuestionId: "q2" },
        { id: "a2", text: "Study", nextQuestionId: "q3" },
        { id: "a3", text: "Work", nextQuestionId: "q4" },
        {
          id: "a4",
          text: "Immigration/Permanent Residence",
          nextQuestionId: "q5",
        },
        { id: "a5", text: "Business", nextQuestionId: "q6" },
        { id: "a6", text: "Transit through Canada", nextQuestionId: "q12" },
        { id: "a7", text: "Family Reunification", nextQuestionId: "q7" },
      ],
      helpText: "Select the main reason for your travel to Canada",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in Canada?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 6 months", nextQuestionId: "q8" },
        { id: "a2", text: "More than 6 months", nextQuestionId: "r6" },
      ],
      helpText: "Most visitors can stay in Canada for up to 6 months",
    },

    q3: {
      id: "q3",
      text: "What is the length of your study program?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 6 months", nextQuestionId: "q9" },
        { id: "a2", text: "More than 6 months", nextQuestionId: "r2" },
      ],
      helpText:
        "Study permits are typically required for programs longer than 6 months",
    },

    q4: {
      id: "q4",
      text: "What type of work will you be doing in Canada?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Temporary work with employer-specific work permit",
          nextQuestionId: "r3",
        },
        { id: "a2", text: "Open work permit", nextQuestionId: "r4" },
        {
          id: "a3",
          text: "International Experience Canada (Working Holiday)",
          nextQuestionId: "r5",
        },
        {
          id: "a4",
          text: "Business visitor (no work permit needed)",
          nextQuestionId: "q6",
        },
        {
          id: "a5",
          text: "Not sure what work permit I need",
          nextQuestionId: "r12",
        },
      ],
      helpText: "Different types of work require different permits",
    },

    q5: {
      id: "q5",
      text: "Which immigration program are you interested in?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Express Entry (Federal Skilled Worker, Federal Skilled Trades, Canadian Experience Class)",
          nextQuestionId: "r7",
        },
        {
          id: "a2",
          text: "Provincial Nominee Program (PNP)",
          nextQuestionId: "r8",
        },
        { id: "a3", text: "Family Sponsorship", nextQuestionId: "r9" },
        { id: "a4", text: "Start-up Visa Program", nextQuestionId: "r10" },
        {
          id: "a5",
          text: "Self-employed Persons Program",
          nextQuestionId: "r11",
        },
        {
          id: "a6",
          text: "Not sure which program fits me",
          nextQuestionId: "r13",
        },
      ],
      helpText:
        "Canada has several immigration pathways based on different criteria",
    },

    q6: {
      id: "q6",
      text: "What type of business activities will you conduct?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Attending meetings or conferences",
          nextQuestionId: "q8",
        },
        {
          id: "a2",
          text: "Site visits or business consultations",
          nextQuestionId: "q8",
        },
        {
          id: "a3",
          text: "Training at Canadian branch/affiliate (under 6 months)",
          nextQuestionId: "q8",
        },
        {
          id: "a4",
          text: "Buying Canadian goods or services",
          nextQuestionId: "q8",
        },
        {
          id: "a5",
          text: "Direct work for a Canadian company/client",
          nextQuestionId: "r3",
        },
      ],
      helpText:
        "Some business activities are allowed without a work permit, while others require one",
    },

    q7: {
      id: "q7",
      text: "What is your relationship with the person in Canada?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Spouse/Partner of Canadian citizen or permanent resident",
          nextQuestionId: "r14",
        },
        {
          id: "a2",
          text: "Parent/Grandparent of Canadian citizen or permanent resident",
          nextQuestionId: "r15",
        },
        {
          id: "a3",
          text: "Child of Canadian citizen or permanent resident",
          nextQuestionId: "r16",
        },
        { id: "a4", text: "Other family relationship", nextQuestionId: "r17" },
        {
          id: "a5",
          text: "Just visiting family (not immigrating)",
          nextQuestionId: "q8",
        },
      ],
      helpText:
        "Family relationships determine which reunification programs you may be eligible for",
    },

    q8: {
      id: "q8",
      text: "What is your citizenship?",
      answerType: "single",
      options: [
        { id: "a1", text: "U.S. citizen", nextQuestionId: "r18" },
        {
          id: "a2",
          text: "Visa-exempt country (UK, EU, Australia, etc.)",
          nextQuestionId: "r1",
        },
        { id: "a3", text: "Visa-required country", nextQuestionId: "r19" },
        { id: "a4", text: "Not sure if I need a visa", nextQuestionId: "r20" },
      ],
      helpText:
        "Your citizenship determines if you need a visitor visa or just an eTA",
    },

    q9: {
      id: "q9",
      text: "What is your citizenship for the short-term study?",
      answerType: "single",
      options: [
        { id: "a1", text: "U.S. citizen", nextQuestionId: "r21" },
        {
          id: "a2",
          text: "Visa-exempt country (UK, EU, Australia, etc.)",
          nextQuestionId: "r22",
        },
        { id: "a3", text: "Visa-required country", nextQuestionId: "r23" },
      ],
      helpText:
        "Short-term studies under 6 months may not need a study permit, but entry requirements vary by citizenship",
    },

    q10: {
      id: "q10",
      text: "Do you intend to work while studying in Canada?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, on-campus only", nextQuestionId: "r24" },
        { id: "a2", text: "Yes, on and off-campus", nextQuestionId: "r24" },
        {
          id: "a3",
          text: "Yes, co-op/internship as part of my program",
          nextQuestionId: "r25",
        },
        { id: "a4", text: "No", nextQuestionId: "r2" },
      ],
      helpText:
        "Study permits often include limited work privileges, but special cases may need additional permits",
    },

    q11: {
      id: "q11",
      text: "Have you received a job offer from a Canadian employer?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, with LMIA approval", nextQuestionId: "r3" },
        {
          id: "a2",
          text: "Yes, LMIA-exempt under international agreements",
          nextQuestionId: "r26",
        },
        {
          id: "a3",
          text: "Yes, intra-company transfer",
          nextQuestionId: "r27",
        },
        { id: "a4", text: "No offer yet", nextQuestionId: "r28" },
      ],
      helpText:
        "The type of job offer affects the work permit application process",
    },

    q12: {
      id: "q12",
      text: "Will you leave the airport during your transit through Canada?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "No, staying in the international transit area",
          nextQuestionId: "q13",
        },
        { id: "a2", text: "Yes, will exit the airport", nextQuestionId: "q8" },
      ],
      helpText:
        "Transit requirements depend on whether you will leave the airport transit area",
    },

    q13: {
      id: "q13",
      text: "What is your citizenship for the transit?",
      answerType: "single",
      options: [
        { id: "a1", text: "U.S. citizen", nextQuestionId: "r29" },
        {
          id: "a2",
          text: "Transit without Visa Program eligible citizenship",
          nextQuestionId: "r30",
        },
        {
          id: "a3",
          text: "Visa-required country not in Transit without Visa Program",
          nextQuestionId: "r31",
        },
      ],
      helpText:
        "Some nationalities need transit visas even if staying in the international area of a Canadian airport",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Electronic Travel Authorization (eTA)",
      description:
        "For visa-exempt foreign nationals flying to or transiting through Canada. Not required for U.S. citizens or travelers entering by land or sea.",
      requirements: [
        "Valid passport from a visa-exempt country",
        "Valid email address",
        "Credit or debit card for payment",
        "Answer all questions truthfully on the application",
        "May need to provide additional documents if requested",
        "Valid for up to 5 years or until passport expiry",
      ],
      applicationLinks: [
        {
          text: "Official Canada eTA Application",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/apply.html",
        },
      ],
      processingTime:
        "Most applications are approved within minutes, but some may take several days",
      cost: {
        amount: 7,
        currency: "CAD",
      },
      alternativeOptions: ["r19"],
      applicableCountries: [
        "Andorra",
        "Australia",
        "Austria",
        "Bahamas",
        "Barbados",
        "Belgium",
        "Brunei",
        "Bulgaria",
        "Chile",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "Ireland",
        "Israel",
        "Italy",
        "Japan",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Mexico",
        "Monaco",
        "Netherlands",
        "New Zealand",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "San Marino",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Korea",
        "Spain",
        "Sweden",
        "Switzerland",
        "Taiwan",
        "United Kingdom",
        "Vatican City State",
        "and others",
      ],
    },

    r2: {
      id: "r2",
      title: "Study Permit",
      description:
        "Required for international students enrolled in programs longer than 6 months at designated learning institutions in Canada.",
      requirements: [
        "Acceptance letter from a designated learning institution in Canada",
        "Proof of financial support (tuition fees plus $10,000 CAD for living expenses per year)",
        "No criminal record (police certificates may be required)",
        "Medical exam may be required",
        "Proof you will leave Canada when your permit expires",
        "For Quebec: Certificate of Acceptance from Quebec (CAQ)",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Study Permit Application Guide",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html",
        },
      ],
      processingTime:
        "Varies by country, typically 4-12 weeks; check current processing times on the IRCC website",
      cost: {
        amount: 150,
        currency: "CAD (plus biometrics fee of 85 CAD)",
      },
      alternativeOptions: ["r22", "r23"],
      applicableCountries: ["All countries"],
    },

    r3: {
      id: "r3",
      title: "Employer-Specific Work Permit",
      description:
        "Allows you to work in Canada for a specific employer, in a specific position, for a limited time as stated on the work permit.",
      requirements: [
        "Job offer from a Canadian employer",
        "Labour Market Impact Assessment (LMIA) or proof of LMIA exemption",
        "Proof you meet the job requirements and will leave Canada when permit expires",
        "Proof of financial support",
        "No criminal record (police certificates may be required)",
        "Medical exam may be required",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Work Permit Application Guide",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/work-permit.html",
        },
      ],
      processingTime: "Varies by country and program, typically 4-20 weeks",
      cost: {
        amount: 155,
        currency: "CAD (plus biometrics fee of 85 CAD)",
      },
      alternativeOptions: ["r4", "r5", "r12"],
      applicableCountries: ["All countries"],
    },

    r4: {
      id: "r4",
      title: "Open Work Permit",
      description:
        "Allows you to work for any employer in Canada (with some exceptions). Available only in specific circumstances.",
      requirements: [
        "Eligibility for one of the open work permit categories:",
        "• Spouse/common-law partner of skilled worker or student",
        "• Recent graduate from a Canadian post-secondary institution",
        "• Refugee claimant, protected person, or family member",
        "• Temporary resident permit holder",
        "• Young worker under specific international exchange programs",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Open Work Permit Information",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/open-work-permit.html",
        },
      ],
      processingTime: "Varies by category and country, typically 4-16 weeks",
      cost: {
        amount: 155,
        currency:
          "CAD (work permit) + 100 CAD (open permit holder fee) + 85 CAD (biometrics)",
      },
      alternativeOptions: ["r3", "r5"],
      applicableCountries: [
        "All countries, but eligibility depends on specific circumstances",
      ],
    },

    r5: {
      id: "r5",
      title: "International Experience Canada (Working Holiday)",
      description:
        "Work permits for young adults (generally 18-35) from countries with youth mobility agreements with Canada.",
      requirements: [
        "Citizenship in a country with an IEC agreement with Canada",
        "Age 18-30 or 18-35 (varies by country agreement)",
        "Valid passport for the duration of stay",
        "Minimum CA$2,500 in funds for initial support",
        "Health insurance for the duration of stay",
        "Return ticket or sufficient funds to purchase one",
        "No dependents accompanying you",
        "Pay participation fee and work permit fee",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "International Experience Canada",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html",
        },
      ],
      processingTime:
        "Varies by country and pool draw timing, typically 4-8 weeks after invitation",
      cost: {
        amount: 153,
        currency:
          "CAD (participation fee) + 155 CAD (work permit) + 85 CAD (biometrics)",
      },
      alternativeOptions: ["r3", "r4"],
      applicableCountries: [
        "Australia",
        "Austria",
        "Belgium",
        "Chile",
        "Costa Rica",
        "Croatia",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "France",
        "Germany",
        "Greece",
        "Hong Kong",
        "Ireland",
        "Italy",
        "Japan",
        "Latvia",
        "Lithuania",
        "Luxembourg",
        "Mexico",
        "Netherlands",
        "New Zealand",
        "Norway",
        "Poland",
        "Portugal",
        "Slovakia",
        "Slovenia",
        "South Korea",
        "Spain",
        "Sweden",
        "Switzerland",
        "Taiwan",
        "United Kingdom",
      ],
    },

    r6: {
      id: "r6",
      title: "Temporary Resident Visa (Long Stay Visitor)",
      description:
        "For visitors planning to stay in Canada for an extended period (up to 6 months with possible extensions).",
      requirements: [
        "Proof of ties to your home country (property, family, job, etc.)",
        "Sufficient funds for your entire stay",
        "Travel history and compliance with immigration laws",
        "Purpose of visit clearly explained",
        "Letter of invitation (if applicable)",
        "Valid passport",
        "May need to undergo medical examination for stays over 6 months",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Visitor Visa Application",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html",
        },
      ],
      processingTime: "Varies by country, typically 2-12 weeks",
      cost: {
        amount: 100,
        currency: "CAD (plus biometrics fee of 85 CAD)",
      },
      alternativeOptions: ["r19", "r1"],
      applicableCountries: ["All visa-required countries"],
    },

    r7: {
      id: "r7",
      title: "Express Entry",
      description:
        "An online system that manages applications for permanent residence for skilled workers under Federal Skilled Worker Program, Federal Skilled Trades Program, and Canadian Experience Class.",
      requirements: [
        "Create Express Entry profile and be placed in the pool of candidates",
        "Receive sufficient Comprehensive Ranking System (CRS) points for an invitation to apply",
        "Education credentials assessment (for foreign education)",
        "Language testing (English and/or French)",
        "Proof of work experience",
        "Proof of funds (unless you have a valid job offer or are already working in Canada)",
        "Police certificates",
        "Medical exam",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Express Entry System",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html",
        },
      ],
      processingTime:
        "6 months or less for 80% of applications after invitation to apply",
      cost: {
        amount: 1325,
        currency:
          "CAD (principal applicant) + 1325 CAD (spouse) + 225 CAD (per child) + 85 CAD (biometrics per person)",
      },
      alternativeOptions: ["r8", "r9"],
      applicableCountries: ["All countries"],
    },

    r8: {
      id: "r8",
      title: "Provincial Nominee Program (PNP)",
      description:
        "Immigration programs run by provinces and territories to nominate individuals who wish to immigrate to a specific province and have the skills, education and work experience to contribute to that province's economy.",
      requirements: [
        "Requirements vary by province and specific program stream",
        "May need job offer in the province",
        "May need to live in the province for a certain time",
        "Usually need work experience in an in-demand occupation",
        "Language testing",
        "Education credentials assessment",
        "Proof of funds",
        "Provincial application first, then federal application after nomination",
        "Some PNPs are aligned with Express Entry system",
        "Medical exam and police certificates",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Provincial Nominee Programs",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html",
        },
      ],
      processingTime:
        "Varies by province (for nomination) + federal processing time (typically 6-18 months)",
      cost: {
        amount: 0,
        currency:
          "CAD (varies by province for nomination) + 1325 CAD (federal PR application) + 85 CAD (biometrics)",
      },
      alternativeOptions: ["r7", "r10"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "Family Sponsorship",
      description:
        "Canadian citizens and permanent residents can sponsor eligible family members to become permanent residents of Canada.",
      requirements: [
        "Sponsor must be Canadian citizen or permanent resident",
        "Sponsor must meet minimum income requirements (except spouse/partner sponsorship)",
        "Sponsor must sign undertaking to financially support family member",
        "Sponsored person must undergo medical examination, security checks",
        "Relationship must be genuine",
        "Documentation proving relationship",
        "For spouse/partner: marriage certificate or proof of common-law relationship",
        "For children: birth certificates showing parentage",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Family Sponsorship",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html",
        },
      ],
      processingTime:
        "12 months for spouse/partner/child; 20-24 months for parents/grandparents",
      cost: {
        amount: 1050,
        currency:
          "CAD (sponsorship fee + processing fee) + 85 CAD (biometrics) + 500 CAD (right of permanent residence fee)",
      },
      alternativeOptions: ["r14", "r15", "r16"],
      applicableCountries: ["All countries"],
    },

    r10: {
      id: "r10",
      title: "Start-up Visa Program",
      description:
        "For entrepreneurs with innovative business ideas who can obtain support from a designated Canadian organization and meet language and education requirements.",
      requirements: [
        "Qualifying business idea",
        "Letter of support from a designated organization (venture capital fund, angel investor group, or business incubator)",
        "Sufficient funds to settle in Canada",
        "Language proficiency (Canadian Language Benchmark 5 in English or French)",
        "Education (no minimum level required but points awarded in selection)",
        "Medical exam and police certificates",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Start-up Visa Program",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/start-visa.html",
        },
      ],
      processingTime: "12-16 months",
      cost: {
        amount: 1575,
        currency:
          "CAD (principal applicant) + 1575 CAD (spouse) + 225 CAD (per child) + 85 CAD (biometrics per person)",
      },
      alternativeOptions: ["r11", "r7"],
      applicableCountries: ["All countries"],
    },

    r11: {
      id: "r11",
      title: "Self-employed Persons Program",
      description:
        "For people who have relevant experience in cultural activities, athletics, or farm management and want to be self-employed in Canada.",
      requirements: [
        "Relevant experience in cultural activities, athletics, or farm management",
        "Intention and ability to be self-employed in Canada",
        "Meet selection criteria (experience, education, age, language proficiency, adaptability)",
        "Sufficient funds to establish yourself in Canada",
        "Medical exam and police certificates",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Self-employed Persons Program",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/self-employed.html",
        },
      ],
      processingTime: "22-36 months",
      cost: {
        amount: 1575,
        currency:
          "CAD (principal applicant) + 1575 CAD (spouse) + 225 CAD (per child) + 85 CAD (biometrics per person)",
      },
      alternativeOptions: ["r7", "r10"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "Work Permit Pathways Overview",
      description:
        "Guide to the different types of work permits available for working in Canada.",
      requirements: [
        "Temporary Foreign Worker Program (TFWP): Requires Labour Market Impact Assessment (LMIA)",
        "International Mobility Program (IMP): LMIA-exempt work permits",
        "CUSMA/NAFTA Professional: For citizens of US and Mexico in specific professions",
        "Intra-Company Transfers: For employees of multinational companies",
        "Post-Graduation Work Permit: For graduates of Canadian educational institutions",
        "Spousal Open Work Permit: For spouses of certain work permit or study permit holders",
        "Working Holiday/Young Professionals: Under International Experience Canada",
      ],
      applicationLinks: [
        {
          text: "Work in Canada - Overview",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html",
        },
      ],
      processingTime: "Varies by program and country",
      cost: {
        amount: 155,
        currency: "CAD (plus additional fees based on specific program)",
      },
      alternativeOptions: ["r3", "r4", "r5"],
      applicableCountries: [
        "All countries, though eligibility varies by program",
      ],
    },

    r13: {
      id: "r13",
      title: "Immigration Pathway Finder",
      description:
        "Information to help you determine which immigration program might be best for your situation.",
      requirements: [
        "Economic immigration: Express Entry, Provincial Nominee Programs, Atlantic Immigration Program",
        "Family sponsorship: Spouse, children, parents, grandparents, and other relatives",
        "Business immigration: Start-up Visa, Self-employed Persons, Provincial business programs",
        "Refugee and humanitarian programs: For those seeking protection or for humanitarian reasons",
        "Use the official Come to Canada tool to check eligibility for various programs",
      ],
      applicationLinks: [
        {
          text: "Come to Canada Tool",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/come-canada-tool.html",
        },
      ],
      processingTime: "N/A (informational only)",
      cost: {
        amount: 0,
        currency: "CAD",
      },
      alternativeOptions: ["r7", "r8", "r9", "r10"],
      applicableCountries: ["All countries"],
    },

    r14: {
      id: "r14",
      title: "Spousal/Partner Sponsorship",
      description:
        "For citizens and permanent residents of Canada to sponsor their spouse, common-law partner, or conjugal partner for permanent residence.",
      requirements: [
        "Sponsor must be Canadian citizen or permanent resident",
        "Prove genuine relationship (marriage certificate or proof of common-law/conjugal partnership)",
        "Sponsor must sign undertaking to support spouse/partner for 3 years",
        "Meet minimum income requirements (may be waived for spouse/partner sponsorship)",
        "Medical examination for applicant",
        "Police certificates for applicant",
        "Biometrics (fingerprints and photo)",
        "Both inland (applicant in Canada) and outland (applicant outside Canada) options available",
      ],
      applicationLinks: [
        {
          text: "Sponsor Your Spouse, Partner or Child",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/spouse-partner-children.html",
        },
      ],
      processingTime: "12 months for 80% of applications",
      cost: {
        amount: 1050,
        currency:
          "CAD (sponsorship fee + processing fee) + 85 CAD (biometrics) + 500 CAD (right of permanent residence fee)",
      },
      alternativeOptions: ["r1", "r4"],
      applicableCountries: ["All countries"],
    },

    r15: {
      id: "r15",
      title: "Parents and Grandparents Sponsorship",
      description:
        "For Canadian citizens and permanent residents to sponsor their parents and grandparents for permanent residence in Canada.",
      requirements: [
        "Sponsor must be Canadian citizen or permanent resident",
        "Meet minimum necessary income level for the past 3 tax years",
        "Financial support undertaking for 20 years",
        "Proof of relationship to parent/grandparent",
        "Medical exam for applicants",
        "Police certificates for applicants",
        "Biometrics (fingerprints and photo)",
        "Note: This program typically uses an interest to sponsor form and lottery system due to high demand",
      ],
      applicationLinks: [
        {
          text: "Parents and Grandparents Program",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html",
        },
      ],
      processingTime: "20-24 months after application is accepted",
      cost: {
        amount: 1050,
        currency:
          "CAD (sponsorship fee + processing fee) + 85 CAD (biometrics) + 500 CAD (right of permanent residence fee)",
      },
      alternativeOptions: ["r32", "r1"],
      applicableCountries: ["All countries"],
    },

    r16: {
      id: "r16",
      title: "Child Sponsorship",
      description:
        "For Canadian citizens and permanent residents to sponsor their dependent children for permanent residence.",
      requirements: [
        "Sponsor must be Canadian citizen or permanent resident",
        "Child must be under 22 and not married or in a common-law relationship",
        "Older children may qualify if they depend on parents due to physical or mental condition",
        "Proof of relationship (birth certificate, adoption papers)",
        "Undertaking to provide for child's needs",
        "Medical examination for child",
        "Biometrics if child is 14 or older",
      ],
      applicationLinks: [
        {
          text: "Sponsor Your Spouse, Partner or Child",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/spouse-partner-children.html",
        },
      ],
      processingTime: "12 months for 80% of applications",
      cost: {
        amount: 150,
        currency:
          "CAD (processing fee) + 85 CAD (biometrics if 14 or older) + 500 CAD (right of permanent residence fee if 22 or older)",
      },
      alternativeOptions: ["r1", "r2"],
      applicableCountries: ["All countries"],
    },

    r17: {
      id: "r17",
      title: "Other Family Sponsorship",
      description:
        "Information about sponsorship options for other family members not covered by spouse, child, or parent/grandparent categories.",
      requirements: [
        "Orphaned brother, sister, nephew, niece, or grandchild under 18 years old",
        "Relative of any age if sponsor has no spouse, common-law partner, conjugal partner, child, parent, grandparent, sibling, uncle, aunt, nephew or niece who is a Canadian citizen, permanent resident, or whose sponsorship you could apply for",
        "Proof of relationship",
        "Sponsor must meet minimum income requirements",
        "Undertaking to provide financial support",
        "Medical examination and police certificates",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Sponsor Other Relatives",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/other-relatives.html",
        },
      ],
      processingTime:
        "Varies by relationship and country of residence (typically 24+ months)",
      cost: {
        amount: 1050,
        currency:
          "CAD (sponsorship fee + processing fee) + 85 CAD (biometrics) + 500 CAD (right of permanent residence fee)",
      },
      alternativeOptions: ["r14", "r15", "r16"],
      applicableCountries: ["All countries"],
    },

    r18: {
      id: "r18",
      title: "U.S. Citizens Visitor Entry",
      description:
        "U.S. citizens do not need an Electronic Travel Authorization (eTA) or visitor visa to enter Canada as tourists.",
      requirements: [
        "Valid U.S. passport (recommended) or other proof of U.S. citizenship",
        "Declare purpose of visit at border",
        "Demonstrate ties to the U.S. (may be asked about job, home, finances)",
        "May need to show return/onward travel plans",
        "May need to show sufficient funds for your stay",
        "Cannot work without proper authorization",
        "Generally admitted for up to 6 months",
      ],
      applicationLinks: [
        {
          text: "U.S. Travelers to Canada",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/us-citizens.html",
        },
      ],
      processingTime: "Determination made at port of entry",
      cost: {
        amount: 0,
        currency: "CAD",
      },
      alternativeOptions: ["r1", "r19"],
      applicableCountries: ["United States"],
    },

    r19: {
      id: "r19",
      title: "Temporary Resident Visa (Visitor Visa)",
      description:
        "For citizens of visa-required countries planning to visit Canada temporarily as tourists or business visitors.",
      requirements: [
        "Valid passport",
        "Proof of ties to home country (job, property, family)",
        "Proof of sufficient funds for your stay",
        "Travel itinerary (flight reservations, tour bookings)",
        "Letter of invitation (if applicable)",
        "Purpose of travel clearly explained",
        "May need to undergo medical examination for specific countries",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Visitor Visa Application",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html",
        },
      ],
      processingTime: "Varies by country, typically 2-12 weeks",
      cost: {
        amount: 100,
        currency: "CAD (plus biometrics fee of 85 CAD)",
      },
      alternativeOptions: ["r1", "r6"],
      applicableCountries: [
        "Most countries in Africa, Middle East, South and Central Asia, Eastern Europe, and several in Latin America including China, India, Pakistan, Philippines, Russia, South Africa, Brazil, and Mexico",
      ],
    },

    r20: {
      id: "r20",
      title: "Visitor Visa Eligibility Check",
      description:
        "Tool to determine if you need a visitor visa or electronic travel authorization (eTA) to travel to Canada.",
      requirements: [
        "Use the official Canadian government tool to check requirements based on:",
        "• Your citizenship",
        "• Type of travel document you will travel with",
        "• Your current country of residence",
        "• Purpose of your visit",
      ],
      applicationLinks: [
        {
          text: "Find Out If You Need a Visa",
          url: "https://www.cic.gc.ca/english/visit/visas.asp",
        },
      ],
      processingTime: "Immediate (for eligibility check only)",
      cost: {
        amount: 0,
        currency: "CAD",
      },
      alternativeOptions: ["r1", "r19"],
      applicableCountries: ["All countries"],
    },

    r21: {
      id: "r21",
      title: "Short-term Study for U.S. Citizens",
      description:
        "U.S. citizens can study in Canada for up to 6 months without a study permit.",
      requirements: [
        "Valid U.S. passport",
        "Acceptance letter from a Canadian educational institution",
        "Proof of financial support for duration of studies",
        "Proof of ties to the U.S.",
        "Intent to leave Canada at the end of your authorized stay",
        "For courses longer than 6 months: study permit required",
      ],
      applicationLinks: [
        {
          text: "Study in Canada as a U.S. Citizen",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/eligibility.html",
        },
      ],
      processingTime: "Determination made at port of entry",
      cost: {
        amount: 0,
        currency: "CAD",
      },
      alternativeOptions: ["r2"],
      applicableCountries: ["United States"],
    },

    r22: {
      id: "r22",
      title: "Short-term Study with eTA",
      description:
        "Citizens from visa-exempt countries can study in Canada for up to 6 months with just an eTA.",
      requirements: [
        "Valid passport from visa-exempt country",
        "Electronic Travel Authorization (eTA)",
        "Acceptance letter from a Canadian educational institution",
        "Proof of financial support for duration of studies",
        "Proof of ties to home country",
        "Intent to leave Canada at the end of your authorized stay",
        "For courses longer than 6 months: study permit required",
      ],
      applicationLinks: [
        {
          text: "Apply for an eTA",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/apply.html",
        },
      ],
      processingTime: "Most eTAs are approved within minutes",
      cost: {
        amount: 7,
        currency: "CAD",
      },
      alternativeOptions: ["r2"],
      applicableCountries: [
        "Australia",
        "Austria",
        "Belgium",
        "Chile",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Japan",
        "South Korea",
        "Latvia",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Netherlands",
        "New Zealand",
        "Norway",
        "Poland",
        "Portugal",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "United Kingdom",
        "and others",
      ],
    },

    r23: {
      id: "r23",
      title: "Short-term Study with Visitor Visa",
      description:
        "Citizens from visa-required countries planning to study in Canada for less than 6 months.",
      requirements: [
        "Temporary Resident Visa (visitor visa)",
        "Acceptance letter from a Canadian educational institution",
        "Proof of financial support for duration of studies",
        "Proof of ties to home country",
        "Intent to leave Canada at the end of your authorized stay",
        "For courses longer than 6 months: study permit required",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Apply for a Visitor Visa",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html",
        },
      ],
      processingTime: "Varies by country, typically 2-12 weeks",
      cost: {
        amount: 100,
        currency: "CAD (plus biometrics fee of 85 CAD)",
      },
      alternativeOptions: ["r2"],
      applicableCountries: [
        "All visa-required countries including China, India, Pakistan, Brazil, etc.",
      ],
    },

    r24: {
      id: "r24",
      title: "Student Work Program",
      description:
        "Work opportunities for international students during their studies in Canada.",
      requirements: [
        "Valid study permit",
        "Enrolled full-time at a designated learning institution",
        "Program must be academic, vocational, or professional training of at least 6 months duration",
        "On-campus work: No additional work permit required",
        "Off-campus work: Can work up to 20 hours per week during academic sessions and full-time during scheduled breaks",
        "Social Insurance Number (SIN) required to work",
      ],
      applicationLinks: [
        {
          text: "Work While Studying",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html",
        },
      ],
      processingTime:
        "Work permission is included with study permit if eligible",
      cost: {
        amount: 0,
        currency: "CAD (included with study permit)",
      },
      alternativeOptions: ["r25", "r2"],
      applicableCountries: ["All countries"],
    },

    r25: {
      id: "r25",
      title: "Co-op Work Permit",
      description:
        "For international students who need to complete a co-op or internship as part of their study program.",
      requirements: [
        "Valid study permit",
        "Co-op or internship must be essential part of academic program",
        "Letter from school confirming all students must complete work placement to get degree",
        "Work component must be 50% or less of the total program",
        "Enrolled at designated learning institution",
        "Social Insurance Number (SIN) required to work",
      ],
      applicationLinks: [
        {
          text: "Co-op Work Permit",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/intern.html",
        },
      ],
      processingTime: "Varies by country, typically 4-8 weeks",
      cost: {
        amount: 155,
        currency: "CAD",
      },
      alternativeOptions: ["r24", "r2"],
      applicableCountries: ["All countries"],
    },

    r26: {
      id: "r26",
      title: "CUSMA/NAFTA Professional Work Permit",
      description:
        "Simplified work permit process for citizens of the United States and Mexico in specific professions under the Canada-United States-Mexico Agreement.",
      requirements: [
        "Citizenship in US or Mexico",
        "Job offer from Canadian employer",
        "Qualification in one of the CUSMA/NAFTA listed professions",
        "Appropriate qualifications for the profession",
        "Employment limited to the activity described on the work permit",
        "Americans can apply at port of entry; Mexicans need to apply in advance",
        "Valid passport",
        "Proof of professional qualifications",
      ],
      applicationLinks: [
        {
          text: "CUSMA/NAFTA Professionals",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/international-free-trade-agreements/north-american.html",
        },
      ],
      processingTime:
        "Same day at port of entry (US citizens) or 2-8 weeks in advance (Mexican citizens)",
      cost: {
        amount: 155,
        currency: "CAD (plus 85 CAD biometrics fee for Mexicans)",
      },
      alternativeOptions: ["r3", "r5"],
      applicableCountries: ["United States", "Mexico"],
    },

    r27: {
      id: "r27",
      title: "Intra-Company Transfer Work Permit",
      description:
        "For executives, managers, or employees with specialized knowledge transferring to a Canadian branch of their company.",
      requirements: [
        "Employed by multinational company outside Canada",
        "Being transferred to Canadian branch/subsidiary/affiliate",
        "Worked for company for at least one year in the past three years",
        "Position must be executive, managerial, or require specialized knowledge",
        "Canadian and foreign companies must have qualifying relationship",
        "Canadian company must be actively doing business",
        "Temporary position (typically 1-3 years, renewable)",
        "Valid passport and other personal documents",
      ],
      applicationLinks: [
        {
          text: "Intra-Company Transfers",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/intra-company-transferees.html",
        },
      ],
      processingTime: "Varies by country, typically 4-12 weeks",
      cost: {
        amount: 155,
        currency: "CAD (plus 85 CAD biometrics fee)",
      },
      alternativeOptions: ["r3", "r4"],
      applicableCountries: ["All countries"],
    },

    r28: {
      id: "r28",
      title: "Job Search Information",
      description:
        "Guidance for finding employment opportunities in Canada that could lead to work permit eligibility.",
      requirements: [
        "Most work permits require a job offer from a Canadian employer",
        "Search for jobs on Job Bank and other Canadian job sites",
        "Research employers in your field who hire internationally",
        "Check which occupations are in-demand in various provinces",
        "Consider applying to jobs under Global Talent Stream or other fast-track programs",
        "Network with industry professionals in Canada",
        "Consider provincial programs targeting specific skills",
      ],
      applicationLinks: [
        {
          text: "Job Bank - Canada's National Employment Service",
          url: "https://www.jobbank.gc.ca/",
        },
        {
          text: "Global Talent Stream",
          url: "https://www.canada.ca/en/employment-social-development/services/foreign-workers/global-talent.html",
        },
      ],
      processingTime: "N/A (informational only)",
      cost: {
        amount: 0,
        currency: "CAD",
      },
      alternativeOptions: ["r3", "r4", "r5"],
      applicableCountries: ["All countries"],
    },

    r29: {
      id: "r29",
      title: "Transit for U.S. Citizens",
      description:
        "U.S. citizens do not need any special documentation to transit through Canadian airports.",
      requirements: [
        "Valid U.S. passport",
        "Proof of onward travel to final destination",
        "Must meet entry requirements for final destination",
        "If leaving the airport during transit, normal entry requirements apply",
        "No visa or eTA required even for airport transit",
      ],
      applicationLinks: [
        {
          text: "Travel and Tourism for U.S. Citizens",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/us-citizens.html",
        },
      ],
      processingTime: "N/A",
      cost: {
        amount: 0,
        currency: "CAD",
      },
      alternativeOptions: ["r18"],
      applicableCountries: ["United States"],
    },

    r30: {
      id: "r30",
      title: "Transit Without Visa Program",
      description:
        "Allows citizens of certain countries to transit through Canadian airports without a visa when traveling to or from the United States.",
      requirements: [
        "Citizenship in an eligible country (Indonesia, Thailand, Taiwan, Philippines, etc.)",
        "Valid passport",
        "Valid visa for the U.S. (if required)",
        "Confirmed flights arriving from and departing to international destinations",
        "Transit must be less than 48 hours",
        "Must remain in the sterile transit area of the airport",
        "Transiting to/from the United States or have valid US visa",
      ],
      applicationLinks: [
        {
          text: "Transit Without Visa Program",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/transit/without-visa.html",
        },
      ],
      processingTime: "Verification upon arrival",
      cost: {
        amount: 0,
        currency: "CAD",
      },
      alternativeOptions: ["r31", "r19"],
      applicableCountries: [
        "Indonesia",
        "Thailand",
        "Taiwan",
        "Philippines",
        "Vietnam",
        "Samoa",
        "Fiji",
        "Nauru",
        "Solomon Islands",
        "Papua New Guinea",
        "Tonga",
        "Kiribati",
        "Tuvalu",
        "Vanuatu",
        "Others with specific requirements",
      ],
    },

    r31: {
      id: "r31",
      title: "Transit Visa",
      description:
        "Required for citizens of visa-required countries who will transit through a Canadian airport and either leave the airport or are not eligible for the Transit Without Visa Program.",
      requirements: [
        "Valid passport",
        "Proof of onward travel to final destination",
        "Purpose of transit",
        "Proof you will not be inadmissible to Canada",
        "Biometrics (fingerprints and photo)",
        "May need to show evidence of ties to home country",
        "Travel itinerary showing short transit time in Canada",
      ],
      applicationLinks: [
        {
          text: "Transit Visa",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/transit/apply-transit-visa.html",
        },
      ],
      processingTime: "Varies by country, typically 2-8 weeks",
      cost: {
        amount: 100,
        currency: "CAD (plus biometrics fee of 85 CAD)",
      },
      alternativeOptions: ["r19", "r30"],
      applicableCountries: [
        "All countries requiring visitor visas that are not eligible for Transit Without Visa Program",
      ],
    },

    r32: {
      id: "r32",
      title: "Super Visa for Parents and Grandparents",
      description:
        "Multiple-entry visa allowing parents and grandparents of Canadian citizens or permanent residents to visit for up to 2 years at a time.",
      requirements: [
        "Be the parent or grandparent of a Canadian citizen or permanent resident",
        "Letter of invitation from your child or grandchild in Canada",
        "Proof your child or grandchild meets minimum income threshold",
        "Proof of Canadian medical insurance coverage for at least one year (minimum $100,000 coverage)",
        "Medical examination",
        "Proof of ties to home country",
        "Valid for up to 10 years or passport expiry, allowing stays of up to 2 years per visit",
        "Biometrics (fingerprints and photo)",
      ],
      applicationLinks: [
        {
          text: "Super Visa for Parents and Grandparents",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa.html",
        },
      ],
      processingTime: "Varies by country, typically 2-12 weeks",
      cost: {
        amount: 100,
        currency: "CAD (plus biometrics fee of 85 CAD)",
      },
      alternativeOptions: ["r15", "r19"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-19",
    author: "Max",
    countries: ["Canada"],
  },
};
