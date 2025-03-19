import { VisaDecisionTree } from './model';

export const thaiVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the primary purpose of your visit to Thailand?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Leisure", nextQuestionId: "q2" },
        { id: "a2", text: "Business/Work", nextQuestionId: "q3" },
        { id: "a3", text: "Education/Study", nextQuestionId: "q4" },
        { id: "a4", text: "Retirement", nextQuestionId: "q5" },
        { id: "a5", text: "Medical Treatment", nextQuestionId: "q6" },
        { id: "a6", text: "Visiting Family/Friends", nextQuestionId: "q2" },
      ],
      helpText: "Select the main reason for your visit to Thailand",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in Thailand?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 30 days", nextQuestionId: "q7" },
        { id: "a2", text: "30-60 days", nextQuestionId: "q8" },
        { id: "a3", text: "61-90 days", nextQuestionId: "q9" },
        { id: "a4", text: "More than 90 days", nextQuestionId: "q10" },
      ],
      helpText:
        "The duration of your stay determines which visa options are available",
    },

    q3: {
      id: "q3",
      text: "What type of business activity will you be conducting?",
      answerType: "single",
      options: [
        { id: "a1", text: "Meetings/Conferences", nextQuestionId: "q11" },
        { id: "a2", text: "Paid Work/Employment", nextQuestionId: "q12" },
        { id: "a3", text: "Business Negotiation", nextQuestionId: "q11" },
        { id: "a4", text: "Investment Activities", nextQuestionId: "q13" },
        { id: "a5", text: "Digital Nomad/Remote Work", nextQuestionId: "q14" },
      ],
      helpText: "Different business activities require different visa types",
    },

    q4: {
      id: "q4",
      text: "What type of educational program will you be attending?",
      answerType: "single",
      options: [
        { id: "a1", text: "University Degree Program", nextQuestionId: "q15" },
        { id: "a2", text: "Language School", nextQuestionId: "q15" },
        { id: "a3", text: "Short-term Course (less than 90 days)", nextQuestionId: "q16" },
        { id: "a4", text: "Internship", nextQuestionId: "q17" },
      ],
      helpText: "Educational visas have different requirements based on program type",
    },

    q5: {
      id: "q5",
      text: "Are you 50 years or older?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes", nextQuestionId: "q18" },
        { id: "a2", text: "No", nextQuestionId: "r19" },
      ],
      helpText: "Thai retirement visas have a minimum age requirement of 50 years",
    },

    q6: {
      id: "q6",
      text: "How long will your medical treatment take?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 30 days", nextQuestionId: "q20" },
        { id: "a2", text: "30-90 days", nextQuestionId: "q21" },
        { id: "a3", text: "More than 90 days", nextQuestionId: "q22" },
      ],
      helpText: "Medical treatment duration affects the visa type you need",
    },

    q7: {
      id: "q7",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "From visa exemption country (e.g., US, UK, EU, Australia)",
          nextQuestionId: "r1",
        },
        {
          id: "a2",
          text: "From visa-on-arrival eligible country (e.g., India, China)",
          nextQuestionId: "r2",
        },
        { id: "a3", text: "Other nationality", nextQuestionId: "r3" },
      ],
      helpText:
        "Your nationality determines if you qualify for visa exemption or visa on arrival",
    },

    q8: {
      id: "q8",
      text: "Do you want to extend your stay beyond the initial period?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes", nextQuestionId: "q23" },
        { id: "a2", text: "No, just the initial period", nextQuestionId: "q7" },
      ],
      helpText: "Some visas can be extended while in Thailand",
    },

    q9: {
      id: "q9",
      text: "Are you planning multiple entries to Thailand during your stay?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Yes, I'll be leaving and re-entering",
          nextQuestionId: "r4",
        },
        {
          id: "a2",
          text: "No, just one continuous stay",
          nextQuestionId: "r5",
        },
      ],
      helpText: "Multiple entry visas allow you to leave and return to Thailand during your visa period",
    },

    q10: {
      id: "q10",
      text: "Do you have the financial means to support your extended stay?",
      helpText: "Long-term visas typically require proof of funds",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Yes, I can show proof of funds",
          nextQuestionId: "q24",
        },
        { id: "a2", text: "No/Not sure", nextQuestionId: "r6" },
      ],
    },

    q11: {
      id: "q11",
      text: "How long will your business activities take?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 15 days", nextQuestionId: "q7" },
        { id: "a2", text: "15-90 days", nextQuestionId: "r7" },
        { id: "a3", text: "More than 90 days", nextQuestionId: "r8" },
      ],
      helpText: "The duration of your business activities determines the appropriate visa",
    },

    q12: {
      id: "q12",
      text: "Do you have a job offer from a Thai employer?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Yes, with work permit sponsorship",
          nextQuestionId: "r9",
        },
        { id: "a2", text: "No", nextQuestionId: "r10" },
      ],
      helpText: "Working legally in Thailand requires both a visa and work permit",
    },

    q13: {
      id: "q13",
      text: "What type of investment are you planning?",
      answerType: "single",
      options: [
        { id: "a1", text: "Thailand Board of Investment (BOI) approved project", nextQuestionId: "r11" },
        { id: "a2", text: "Real estate investment", nextQuestionId: "q25" },
        { id: "a3", text: "Business investment/startup", nextQuestionId: "r8" },
      ],
      helpText: "Different investment types qualify for different visas",
    },

    q14: {
      id: "q14",
      text: "Are you eligible for the Thailand Long-Term Resident (LTR) visa?",
      helpText:
        "LTR visa requires high income, investments, or specialized skills",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Yes, I meet the income/investment criteria",
          nextQuestionId: "r12",
        },
        { id: "a2", text: "No/Not sure", nextQuestionId: "r13" },
      ],
    },

    q15: {
      id: "q15",
      text: "How long is your educational program?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 90 days", nextQuestionId: "r14" },
        { id: "a2", text: "90 days to 1 year", nextQuestionId: "r15" },
        { id: "a3", text: "More than 1 year", nextQuestionId: "r15" },
      ],
      helpText: "Program duration affects the visa type and extension options",
    },

    q16: {
      id: "q16",
      text: "Is your course at an accredited institution in Thailand?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes", nextQuestionId: "r14" },
        { id: "a2", text: "No/Not sure", nextQuestionId: "r3" },
      ],
      helpText: "Accreditation status affects visa eligibility",
    },

    q17: {
      id: "q17",
      text: "Is your internship paid or unpaid?",
      answerType: "single",
      options: [
        { id: "a1", text: "Paid internship", nextQuestionId: "r9" },
        { id: "a2", text: "Unpaid internship", nextQuestionId: "r15" },
      ],
      helpText: "Paid internships typically require a work permit",
    },

    q18: {
      id: "q18",
      text: "Do you meet the financial requirements for retirement visa?",
      helpText:
        "Typically 800,000 THB in Thai bank or 65,000 THB monthly income",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes", nextQuestionId: "r16" },
        { id: "a2", text: "No/Not sure", nextQuestionId: "r17" },
      ],
    },

    q20: {
      id: "q20",
      text: "Will you receive treatment at a certified hospital?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, at a certified hospital", nextQuestionId: "q7" },
        { id: "a2", text: "No/Not sure", nextQuestionId: "r3" },
      ],
      helpText: "For short treatments, you may be able to use a tourist visa",
    },

    q21: {
      id: "q21",
      text: "Do you have confirmation of medical treatment from a Thai hospital?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes", nextQuestionId: "r18" },
        { id: "a2", text: "No", nextQuestionId: "r3" },
      ],
      helpText: "Medical visa requires confirmation from a Thai medical facility",
    },

    q22: {
      id: "q22",
      text: "Do you have confirmation of long-term treatment from a certified Thai hospital?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes", nextQuestionId: "r18" },
        { id: "a2", text: "No", nextQuestionId: "r3" },
      ],
      helpText: "Long-term medical treatment requires documented evidence",
    },

    q23: {
      id: "q23",
      text: "Can you leave the country to apply for a proper long-term visa?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Yes, I can exit and re-enter",
          nextQuestionId: "r5",
        },
        {
          id: "a2",
          text: "No, I prefer to extend within Thailand",
          nextQuestionId: "r20",
        },
      ],
      helpText: "Some visa extensions require leaving the country",
    },

    q24: {
      id: "q24",
      text: "Are you planning to work or run a business during your stay?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes", nextQuestionId: "q3" },
        { id: "a2", text: "No, just for living/retirement", nextQuestionId: "r21" },
      ],
      helpText: "Long-term stay options vary based on your activities",
    },

    q25: {
      id: "q25",
      text: "Is your investment value 10 million THB or more?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes", nextQuestionId: "r22" },
        { id: "a2", text: "No", nextQuestionId: "r13" },
      ],
      helpText: "The investment value affects visa eligibility",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Visa Exemption",
      description:
        "You qualify for visa exemption entry which allows stay up to 30 days without applying for a visa.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Confirmed return ticket leaving Thailand within 30 days",
        "Proof of adequate finances (20,000 THB per person or 40,000 THB per family)",
        "Immigration may ask for proof of accommodation in Thailand",
      ],
      applicationLinks: [
        {
          text: "Thailand Immigration Bureau - Visa Exemption",
          url: "https://immigration.go.th/",
        },
      ],
      processingTime: "None (granted on arrival)",
      cost: {
        amount: 0,
        currency: "THB",
      },
      alternativeOptions: ["r3", "r5"],
      applicableCountries: [
        "United States",
        "United Kingdom",
        "Australia",
        "Canada",
        "Most EU countries",
        "Japan",
        "South Korea",
        "Singapore",
        "Malaysia",
        "Hong Kong",
        "and others",
      ],
    },

    r2: {
      id: "r2",
      title: "Visa On Arrival",
      description:
        "You can obtain a 15-day visa upon arrival at major entry points in Thailand.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa on arrival form (TM88)",
        "Recent passport-sized photograph",
        "Proof of onward travel within 15 days",
        "Proof of accommodation in Thailand",
        "Proof of adequate finances (20,000 THB per person or 40,000 THB per family)",
      ],
      applicationLinks: [
        {
          text: "Thailand Immigration Bureau - Visa On Arrival",
          url: "https://immigration.go.th/",
        },
      ],
      processingTime: "Upon arrival (expect 10-30 minutes)",
      cost: {
        amount: 2000,
        currency: "THB",
      },
      alternativeOptions: ["r3"],
      applicableCountries: [
        "India", 
        "China", 
        "Saudi Arabia", 
        "Taiwan", 
        "Ukraine",
        "Uzbekistan", 
        "and others"
      ],
    },

    r3: {
      id: "r3",
      title: "Tourist Visa (Single Entry)",
      description:
        "This visa allows a stay of up to 60 days and must be obtained before travelling to Thailand.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Proof of onward travel",
        "Proof of accommodation in Thailand",
        "Proof of adequate finances (at least 20,000 THB per person)",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Tourist Visa Application",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "3-5 business days",
      cost: {
        amount: 40,
        currency: "USD",
      },
      alternativeOptions: ["r4", "r5"],
      applicableCountries: ["All countries"],
    },

    r4: {
      id: "r4",
      title: "Tourist Visa (Multiple Entry)",
      description:
        "Allows multiple entries during a 6-month period with up to 60 days stay per entry.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Proof of financial means (at least 40,000 THB per person)",
        "Proof of accommodation in Thailand",
        "Itinerary showing multiple entries planned",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Tourist Visa Application",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "3-7 business days",
      cost: {
        amount: 200,
        currency: "USD",
      },
      alternativeOptions: ["r3", "r5"],
      applicableCountries: ["All countries"],
    },

    r5: {
      id: "r5",
      title: "Tourist Visa (Single Entry) with Extension",
      description:
        "60-day tourist visa that can be extended for an additional 30 days at an immigration office in Thailand.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Proof of onward travel",
        "Proof of accommodation in Thailand",
        "Proof of adequate finances (at least 20,000 THB per person)",
        "For extension: TM.7 form, 1,900 THB fee, passport photos",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Tourist Visa Application",
          url: "https://thaiembassy.org/",
        },
        {
          text: "Thailand Immigration - Visa Extension",
          url: "https://immigration.go.th/",
        },
      ],
      processingTime:
        "3-5 business days (initial visa) + same day processing for extension",
      cost: {
        amount: 40 + 60,
        currency: "USD (approx, includes extension fee)",
      },
      alternativeOptions: ["r4"],
      applicableCountries: ["All countries"],
    },

    r6: {
      id: "r6",
      title: "Tourist Visa with Limited Stay",
      description:
        "For those without sufficient financial proof, a standard tourist visa is recommended with a shorter stay.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Proof of onward travel",
        "Proof of accommodation in Thailand",
        "Available funds for your stay",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Tourist Visa Application",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "3-5 business days",
      cost: {
        amount: 40,
        currency: "USD",
      },
      alternativeOptions: ["r3"],
      applicableCountries: ["All countries"],
    },

    r7: {
      id: "r7",
      title: "Non-Immigrant B Visa (Business - Single Entry)",
      description:
        "For business meetings, conferences, and non-employment business activities in Thailand.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Letter of invitation from a Thai company",
        "Company registration documents of the Thai company",
        "Letter from your employer stating purpose of visit",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Non-B Visa",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "5-7 business days",
      cost: {
        amount: 80,
        currency: "USD",
      },
      alternativeOptions: ["r3", "r8"],
      applicableCountries: ["All countries"],
    },

    r8: {
      id: "r8",
      title: "Non-Immigrant B Visa (Business - Multiple Entry)",
      description:
        "For frequent business travelers to Thailand, valid for one year with 90 days stay per entry.",
      requirements: [
        "Valid passport with at least 18 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Letter of invitation from a Thai company",
        "Company registration documents of the Thai company",
        "Letter from your employer stating purpose of visits",
        "Evidence of previous business relations with Thailand",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Non-B Visa (Multiple Entry)",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "7-10 business days",
      cost: {
        amount: 200,
        currency: "USD",
      },
      alternativeOptions: ["r7"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "Non-Immigrant B Visa (Work)",
      description:
        "For those employed by a Thai company with proper work permit documentation.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Letter of approval from Thai Ministry of Labour",
        "Invitation letter from Thai employer",
        "Company registration and business license documents",
        "Employment contract",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Non-B Visa",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "5-7 business days",
      cost: {
        amount: 80,
        currency: "USD",
      },
      alternativeOptions: ["r10", "r12"],
      applicableCountries: ["All countries"],
    },

    r10: {
      id: "r10",
      title: "SMART Visa",
      description:
        "For high-skilled professionals, investors, or entrepreneurs in targeted industries.",
      requirements: [
        "Valid passport with at least 18 months validity",
        "Completed SMART visa application",
        "Qualification endorsement from relevant Thai agencies",
        "Evidence of expertise or investment in targeted S-Curve industries",
        "Minimum income or investment requirements (varies by SMART visa type)",
        "Health insurance coverage of at least 100,000 USD",
      ],
      applicationLinks: [
        {
          text: "Thailand Board of Investment - SMART Visa",
          url: "https://smart-visa.boi.go.th/",
        },
      ],
      processingTime: "30-60 days (includes qualification endorsement)",
      cost: {
        amount: 10000,
        currency: "THB",
      },
      alternativeOptions: ["r9", "r12"],
      applicableCountries: ["All countries"],
    },

    r11: {
      id: "r11",
      title: "Board of Investment (BOI) Promoted Visa",
      description:
        "For investors in projects promoted by Thailand's Board of Investment.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "BOI promotion certificate",
        "Letter of approval from BOI",
        "Company registration documents",
        "Evidence of investment capital",
      ],
      applicationLinks: [
        {
          text: "Thailand Board of Investment",
          url: "https://www.boi.go.th/",
        },
      ],
      processingTime: "2-4 weeks (after BOI approval)",
      cost: {
        amount: 80,
        currency: "USD",
      },
      alternativeOptions: ["r12", "r22"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "Long-Term Resident (LTR) Visa",
      description:
        "10-year visa for wealthy global citizens, retirees, and skilled professionals.",
      requirements: [
        "Valid passport with at least 12 months validity",
        "Minimum personal income of $80,000/year for past 2 years (varies by category)",
        "Minimum assets of $1,000,000 (varies by category)",
        "Health insurance with minimum $50,000 coverage",
        "Criminal background check",
        "For Wealthy Global Citizen: Minimum investment of $500,000 in Thailand",
        "For Work-from-Thailand Professional: Income of $80,000/year and 5 years work experience",
        "For Highly-Skilled Professional: Working in targeted industries with special expertise",
        "For Wealthy Pensioner: Age 50+ years and pension of $80,000/year or $40,000/year with $250,000 investment",
      ],
      applicationLinks: [
        {
          text: "Thailand Long-Term Resident Official Site",
          url: "https://ltr.thaievisa.go.th/",
        },
      ],
      processingTime: "15-30 business days",
      cost: {
        amount: 50000,
        currency: "THB",
      },
      alternativeOptions: ["r8", "r16"],
      applicableCountries: ["All countries"],
    },

    r13: {
      id: "r13",
      title: "Non-Immigrant O Visa (Multiple Purposes)",
      description:
        "A flexible visa for various purposes including accompanying a spouse, volunteering, or other specific activities.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Purpose-specific documentation (e.g., marriage certificate, volunteer organization letter)",
        "Proof of finances (20,000 THB per person)",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Non-O Visa",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "5-7 business days",
      cost: {
        amount: 80,
        currency: "USD",
      },
      alternativeOptions: ["r5", "r3"],
      applicableCountries: ["All countries"],
    },

    r14: {
      id: "r14",
      title: "Tourist Visa (Education/Short Course)",
      description:
        "For short educational courses that don't require a special education visa.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Letter of acceptance from educational institution",
        "Course details and schedule",
        "Proof of adequate finances (at least 20,000 THB per person)",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Tourist Visa",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "3-5 business days",
      cost: {
        amount: 40,
        currency: "USD",
      },
      alternativeOptions: ["r15"],
      applicableCountries: ["All countries"],
    },

    r15: {
      id: "r15",
      title: "Non-Immigrant ED Visa (Education)",
      description:
        "For students enrolled in formal education in Thailand, including universities, language schools, and certified educational institutions.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Letter of acceptance from accredited educational institution",
        "Ministry of Education approval (for some institutions)",
        "Proof of financial support (at least 20,000 THB per month)",
        "Transcript/educational records",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Education Visa",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "5-10 business days",
      cost: {
        amount: 80,
        currency: "USD",
      },
      alternativeOptions: ["r14"],
      applicableCountries: ["All countries"],
    },

    r16: {
      id: "r16",
      title: "Non-Immigrant O-A (Retirement) Visa",
      description:
        "Long-term visa for retirees aged 50+ with sufficient financial resources.",
      requirements: [
        "Age 50 or above",
        "Valid passport with at least 18 months validity",
        "Financial requirement: 800,000 THB in Thai bank or monthly income of at least 65,000 THB",
        "Police clearance certificate",
        "Medical certificate showing no prohibited diseases",
        "Health insurance with minimum coverage of 400,000 THB inpatient and 40,000 THB outpatient",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Retirement Visa",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "10-15 business days",
      cost: {
        amount: 60,
        currency: "USD",
      },
      alternativeOptions: ["r12", "r17"],
      applicableCountries: ["All countries"],
    },

    r17: {
      id: "r17",
      title: "Non-Immigrant O Visa (Retirement Base)",
      description:
        "A base visa for those planning to retire in Thailand but don't yet meet all O-A requirements.",
      requirements: [
        "Age 50 or above",
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Proof of retirement status",
        "Proof of finances (at least 200,000 THB)",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Non-O Visa",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "5-7 business days",
      cost: {
        amount: 80,
        currency: "USD",
      },
      alternativeOptions: ["r16", "r3"],
      applicableCountries: ["All countries"],
    },

    r18: {
      id: "r18",
      title: "Non-Immigrant O-M (Medical Treatment) Visa",
      description:
        "For those seeking medical treatment at certified hospitals in Thailand.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Confirmation letter from a certified Thai hospital/medical facility",
        "Medical history records",
        "Proof of adequate finances for treatment and stay",
        "Health insurance (recommended)",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Medical Visa",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "5-10 business days",
      cost: {
        amount: 80,
        currency: "USD",
      },
      alternativeOptions: ["r3", "r13"],
      applicableCountries: ["All countries"],
    },

    r19: {
      id: "r19",
      title: "No Retirement Visa Available",
      description:
        "Thai retirement visas are only available to those aged 50 and above. Consider other visa options.",
      requirements: [
        "If you're under 50, you cannot apply for a retirement visa in Thailand",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Other Visa Types",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "N/A",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r3", "r5", "r13"],
      applicableCountries: ["All countries"],
    },

    r20: {
      id: "r20",
      title: "Tourist Visa with Extension",
      description:
        "Standard tourist visa with a 30-day extension obtained within Thailand.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photograph",
        "Proof of onward travel",
        "Proof of accommodation in Thailand",
        "Proof of adequate finances (at least 20,000 THB per person)",
        "For extension: TM.7 form, 1,900 THB fee, passport photos",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Tourist Visa",
          url: "https://thaiembassy.org/",
        },
        {
          text: "Thailand Immigration - Extension",
          url: "https://immigration.go.th/",
        },
      ],
      processingTime: "3-5 business days + same day for extension",
      cost: {
        amount: 40 + 60,
        currency: "USD (approx, includes extension fee)",
      },
      alternativeOptions: ["r3", "r5"],
      applicableCountries: ["All countries"],
    },

    r21: {
      id: "r21",
      title: "Thailand Elite Visa",
      description:
        "Premium long-stay visa program with various packages for 5-20 year stays.",
      requirements: [
        "Valid passport with at least 18 months validity",
        "Application form and fee",
        "Background check",
        "No work permit needed (but still cannot work)",
        "Membership fee payment (ranges from 600,000 to 2,000,000 THB depending on package)",
      ],
      applicationLinks: [
        {
          text: "Thailand Elite - Premium Visa Program",
          url: "https://www.thailandelite.com/",
        },
      ],
      processingTime: "2-3 weeks",
      cost: {
        amount: 600000,
        currency: "THB minimum",
      },
      alternativeOptions: ["r16", "r12"],
      applicableCountries: ["All countries"],
    },

    r22: {
      id: "r22",
      title: "Investment Visa (Non-Immigrant B)",
      description:
        "For those making substantial investments in Thailand.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Proof of investment of at least 10 million THB in Thailand",
        "Business registration documents",
        "Financial statements",
        "Tax documentation",
      ],
      applicationLinks: [
        {
          text: "Royal Thai Embassy - Investment Visa",
          url: "https://thaiembassy.org/",
        },
      ],
      processingTime: "10-15 business days",
      cost: {
        amount: 80,
        currency: "USD",
      },
      alternativeOptions: ["r12", "r21"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.1.0",
    lastUpdated: "2025-03-19",
    author: "Max",
    countries: ["Thailand"],
  },
};