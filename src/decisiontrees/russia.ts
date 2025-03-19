import { VisaDecisionTree } from './model';

export const russiaVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the main purpose of your visit to Russia?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism", nextQuestionId: "q2" },
        { id: "a2", text: "Business", nextQuestionId: "q3" },
        { id: "a3", text: "Work", nextQuestionId: "q4" },
        { id: "a4", text: "Study", nextQuestionId: "q5" },
        { id: "a5", text: "Family Visit", nextQuestionId: "q6" },
        { id: "a6", text: "Transit", nextQuestionId: "q13" },
        { id: "a7", text: "Humanitarian/Cultural", nextQuestionId: "q7" },
      ],
      helpText: "Select the primary reason for your visit to Russia",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in Russia?",
      answerType: "single",
      options: [
        { id: "a1", text: "Up to 8 days (Saint Petersburg e-visa eligible)", nextQuestionId: "q9" },
        { id: "a2", text: "Up to 16 days (Kaliningrad e-visa eligible)", nextQuestionId: "q9" },
        { id: "a3", text: "Up to 8 days (Far East e-visa eligible)", nextQuestionId: "q9" },
        { id: "a4", text: "Up to 30 days", nextQuestionId: "q8" },
        { id: "a5", text: "More than 30 days", nextQuestionId: "r9" },
      ],
      helpText: "Duration of stay affects visa type and eligibility for certain exemptions",
    },

    q3: {
      id: "q3",
      text: "What type of business activities will you be conducting?",
      answerType: "single",
      options: [
        { id: "a1", text: "Meetings and negotiations", nextQuestionId: "q8" },
        { id: "a2", text: "Conferences or trade exhibitions", nextQuestionId: "q8" },
        { id: "a3", text: "Contract signing or commercial discussions", nextQuestionId: "q8" },
        { id: "a4", text: "Assembly or repair of equipment purchased from your company", nextQuestionId: "q8" },
        { id: "a5", text: "Providing services under a contract (may require work visa)", nextQuestionId: "q4" },
      ],
      helpText: "Different business activities may qualify for different visa types",
    },

    q4: {
      id: "q4",
      text: "What kind of work will you be doing in Russia?",
      answerType: "single",
      options: [
        { id: "a1", text: "Regular employment with Russian company", nextQuestionId: "r2" },
        { id: "a2", text: "Highly Qualified Specialist (HQS)", nextQuestionId: "r3" },
        { id: "a3", text: "Work for a foreign company's Russian branch", nextQuestionId: "r2" },
        { id: "a4", text: "Teaching or research at educational institution", nextQuestionId: "r4" },
        { id: "a5", text: "Journalism or media activities", nextQuestionId: "r5" },
      ],
      helpText: "Different work categories have different visa requirements and processes",
    },

    q5: {
      id: "q5",
      text: "What type of educational program will you be attending?",
      answerType: "single",
      options: [
        { id: "a1", text: "Full-time degree program", nextQuestionId: "r6" },
        { id: "a2", text: "Language courses or short-term program (less than 3 months)", nextQuestionId: "r7" },
        { id: "a3", text: "Academic exchange program", nextQuestionId: "r6" },
        { id: "a4", text: "Scientific or research activity", nextQuestionId: "r8" },
      ],
      helpText: "Different educational programs require different visa types",
    },

    q6: {
      id: "q6",
      text: "What is your relationship with the person you're visiting in Russia?",
      answerType: "single",
      options: [
        { id: "a1", text: "Close family member (spouse, child, parent, etc.)", nextQuestionId: "q11" },
        { id: "a2", text: "Other relative or friend", nextQuestionId: "q8" },
      ],
      helpText: "Close family relationships may qualify for different visa categories",
    },

    q7: {
      id: "q7",
      text: "What is the nature of your humanitarian or cultural visit?",
      answerType: "single",
      options: [
        { id: "a1", text: "Cultural exchange or performance", nextQuestionId: "r10" },
        { id: "a2", text: "Religious activity", nextQuestionId: "r10" },
        { id: "a3", text: "Humanitarian aid or volunteer work", nextQuestionId: "r10" },
        { id: "a4", text: "Attending a sporting event", nextQuestionId: "q8" },
      ],
      helpText: "Humanitarian and cultural visits may qualify for specific visa categories",
    },

    q8: {
      id: "q8",
      text: "Do you have a letter of invitation (visa support) from a Russian host?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, from a Russian tour agency or hotel", nextQuestionId: "r1" },
        { id: "a2", text: "Yes, from a Russian business or organization", nextQuestionId: "r11" },
        { id: "a3", text: "No, I don't have an invitation yet", nextQuestionId: "r12" },
      ],
      helpText: "Most Russian visas require an official invitation or visa support document from a Russian host",
    },

    q9: {
      id: "q9",
      text: "Which region of Russia will you be visiting with an e-visa?",
      answerType: "single",
      options: [
        { id: "a1", text: "Saint Petersburg and Leningrad Region", nextQuestionId: "q10" },
        { id: "a2", text: "Kaliningrad Region", nextQuestionId: "q10" },
        { id: "a3", text: "Far East Region (Primorsky Krai, Kamchatka, etc.)", nextQuestionId: "q10" },
        { id: "a4", text: "Other regions not covered by e-visa", nextQuestionId: "q8" },
      ],
      helpText: "E-visas are only valid for specific regions of Russia and have entry/exit restrictions",
    },

    q10: {
      id: "q10",
      text: "Is your nationality eligible for Russian e-visa?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, my country is on the e-visa eligible list", nextQuestionId: "r13" },
        { id: "a2", text: "No, my country is not eligible", nextQuestionId: "q8" },
        { id: "a3", text: "I'm not sure", nextQuestionId: "r14" },
      ],
      helpText: "Only citizens of specific countries are eligible for Russian e-visas",
    },

    q11: {
      id: "q11",
      text: "Is your Russian family member a citizen or permanent resident?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, Russian citizen", nextQuestionId: "q12" },
        { id: "a2", text: "Yes, permanent resident of Russia", nextQuestionId: "q12" },
        { id: "a3", text: "No, they are on a temporary status", nextQuestionId: "q8" },
      ],
      helpText: "Family visa categories typically require the host to be a Russian citizen or permanent resident",
    },

    q12: {
      id: "q12",
      text: "Do you plan to stay long-term or eventually apply for residence in Russia?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, long-term stay or potential residence", nextQuestionId: "r15" },
        { id: "a2", text: "No, just visiting", nextQuestionId: "r16" },
      ],
      helpText: "Different visa categories exist for temporary visits vs. potential long-term residence",
    },

    q13: {
      id: "q13",
      text: "How long will your transit through Russia be?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 24 hours, staying in international airport area", nextQuestionId: "r17" },
        { id: "a2", text: "Up to 10 days, will leave airport transit area", nextQuestionId: "r18" },
      ],
      helpText: "Different transit scenarios require different visa types",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Tourist Visa",
      description: 
        "For foreign nationals traveling to Russia for tourism, leisure, or to visit friends (without business activities).",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Tourist voucher and confirmation of accommodation (usually provided by tour agency or hotel)",
        "Insurance policy valid in Russia with coverage of at least 30,000 EUR",
        "Visa processing fee payment",
        "Additional documents may be required depending on your nationality",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "7-10 business days (standard); 3-4 business days (urgent)",
      cost: {
        amount: 40,
        currency: "USD (single-entry, varies by country and consulate)",
      },
      alternativeOptions: ["r13", "r11"],
      applicableCountries: ["Most countries require a tourist visa for Russia"],
    },

    r2: {
      id: "r2",
      title: "Work Visa",
      description: 
        "For foreign nationals employed by Russian companies or organizations, or foreign companies operating in Russia.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Original invitation from the Russian Ministry of Interior (based on work permit)",
        "Work permit or authorization issued to the employer",
        "HIV test certificate (less than 3 months old)",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "10-20 business days (after work permit issuance)",
      cost: {
        amount: 160,
        currency: "USD (varies by country and consulate)",
      },
      alternativeOptions: ["r3", "r11"],
      applicableCountries: ["Most countries require a work visa for employment in Russia"],
    },

    r3: {
      id: "r3",
      title: "Highly Qualified Specialist (HQS) Work Visa",
      description: 
        "Special category for high-paid professionals with expertise in their field. Offers simplified procedures and longer validity.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Original invitation from the Russian Ministry of Interior",
        "HQS work permit (issued to employer) for positions paying at least 167,000 RUB per month (amount varies for specific categories)",
        "Employment contract or job offer specifying salary",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "10-14 business days (expedited processing available)",
      cost: {
        amount: 160,
        currency: "USD (varies by country and consulate)",
      },
      alternativeOptions: ["r2"],
      applicableCountries: ["All countries, subject to qualification as highly qualified specialist"],
    },

    r4: {
      id: "r4",
      title: "Work Visa (Educational/Scientific Activities)",
      description: 
        "For teachers, professors, and researchers working at accredited Russian educational or scientific institutions.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Original invitation from the Russian Ministry of Interior or educational institution",
        "Work permit (may be exempt for certain positions at state-accredited institutions)",
        "Employment contract or official invitation from the educational institution",
        "HIV test certificate (less than 3 months old)",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "10-20 business days",
      cost: {
        amount: 160,
        currency: "USD (varies by country and consulate)",
      },
      alternativeOptions: ["r2", "r8"],
      applicableCountries: ["Most countries require a work visa for teaching in Russia"],
    },

    r5: {
      id: "r5",
      title: "Journalist Visa",
      description: 
        "For accredited journalists, media correspondents, and film crews working in Russia.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Invitation from the Russian Ministry of Foreign Affairs (Press Department)",
        "Accreditation card or proof of media organization employment",
        "Letter from employer detailing purpose of journalistic activities",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "10-20 business days (may be expedited in special cases)",
      cost: {
        amount: 160,
        currency: "USD (varies by country and consulate)",
      },
      alternativeOptions: ["r11"],
      applicableCountries: ["Most countries require a special visa for journalistic activities in Russia"],
    },

    r6: {
      id: "r6",
      title: "Student Visa",
      description: 
        "For foreign nationals accepted to study at accredited Russian educational institutions.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Original invitation from the educational institution via Russian Ministry of Interior",
        "Acceptance letter or enrollment confirmation from Russian university/school",
        "HIV test certificate (less than 3 months old) for visas longer than 3 months",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "10-20 business days",
      cost: {
        amount: 40,
        currency: "USD (for initial single-entry; varies by country and consulate)",
      },
      alternativeOptions: ["r7", "r10"],
      applicableCountries: ["Most countries require a student visa for study in Russia"],
    },

    r7: {
      id: "r7",
      title: "Short-term Study Visa (Tourist or Business)",
      description: 
        "For language courses or short educational programs lasting less than 3 months.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Tourist voucher or business invitation",
        "Acceptance letter from educational institution",
        "Program details and duration",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "7-10 business days (standard); 3-4 business days (urgent)",
      cost: {
        amount: 40,
        currency: "USD (tourist) or 80 USD (business); varies by country and consulate",
      },
      alternativeOptions: ["r6", "r1"],
      applicableCountries: ["Most countries require a visa for short-term study in Russia"],
    },

    r8: {
      id: "r8",
      title: "Scientific-Technical Visa",
      description: 
        "For scientists, researchers, and specialists participating in scientific activities, projects, or conferences in Russia.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Original invitation from Russian Ministry of Interior (based on request from hosting institution)",
        "Document confirming scientific activities or participation in research project",
        "Letter from home institution confirming purpose of visit",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "10-20 business days",
      cost: {
        amount: 80,
        currency: "USD (varies by country and consulate)",
      },
      alternativeOptions: ["r4", "r11"],
      applicableCountries: ["Most countries require this visa for scientific activities in Russia"],
    },

    r9: {
      id: "r9",
      title: "Long-term Tourist Visa (Multiple Entry)",
      description: 
        "For tourists planning repeated visits to Russia over an extended period.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Tourist voucher and confirmation of accommodation for initial visit",
        "Previous Russian visa history may be required",
        "Justification for multiple entries",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
        "Some nationalities may have additional requirements",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "10-20 business days",
      cost: {
        amount: 100,
        currency: "USD (varies by country and consulate)",
      },
      alternativeOptions: ["r1", "r11"],
      applicableCountries: ["Available to most countries, though multiple-entry tourist visas may be restricted for some nationalities"],
    },

    r10: {
      id: "r10",
      title: "Humanitarian Visa",
      description: 
        "For cultural exchanges, charitable activities, sporting events, and scientific-technical or educational connections.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Original invitation from Russian Ministry of Interior or Ministry of Foreign Affairs",
        "Letter detailing purpose of humanitarian, cultural, or sporting activities",
        "Supporting documents from Russian hosting organization",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "10-20 business days",
      cost: {
        amount: 40,
        currency: "USD (single-entry; varies by country and consulate)",
      },
      alternativeOptions: ["r1", "r11"],
      applicableCountries: ["Most countries qualify for humanitarian visas"],
    },

    r11: {
      id: "r11",
      title: "Business Visa",
      description: 
        "For business activities such as negotiations, meetings, attending conferences, signing contracts, and maintaining business relationships with Russian partners.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Original invitation from a Russian company via Russian Ministry of Interior or Federal Migration Service",
        "Letter from your employer explaining purpose of visit",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
        "Additional documents may be required depending on nationality",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "7-10 business days (standard); 3-4 business days (urgent)",
      cost: {
        amount: 80,
        currency: "USD (single-entry) to 240 USD (multiple-entry for 1 year); varies by country and consulate",
      },
      alternativeOptions: ["r1", "r13"],
      applicableCountries: ["Most countries require a business visa for business activities in Russia"],
    },

    r12: {
      id: "r12",
      title: "How to Obtain a Visa Invitation/Support",
      description: 
        "Information on obtaining the required invitation or visa support document for a Russian visa application.",
      requirements: [
        "Tourist visa: Obtain voucher from Russian tour agency, hotel, or online visa support service",
        "Business visa: Get invitation from Russian business partner, company, or visa service",
        "Work visa: Employer must request invitation through Russian Ministry of Interior",
        "Student visa: Educational institution will arrange through Ministry of Interior",
        "Private visit: Russian host can arrange private visit invitation via local immigration office",
        "Timeframe: Allow 2-4 weeks for invitation processing (varies by type)",
        "Costs: May range from $15-50 for tourist support to several hundred dollars for work invitations",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center - Invitation Information",
          url: "https://russiavisa.info/russian-visa-invitation-letter.html",
        },
      ],
      processingTime: "14-30 days (varies by invitation type)",
      cost: {
        amount: 15,
        currency: "USD and up (varies by invitation type and service provider)",
      },
      alternativeOptions: ["r13"],
      applicableCountries: ["All countries requiring Russian visas"],
    },

    r13: {
      id: "r13",
      title: "Electronic Visa (e-visa)",
      description: 
        "Single-entry e-visa for short visits to specific regions of Russia (Saint Petersburg and Leningrad Region, Kaliningrad Region, or Far East).",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 1 blank page",
        "Digital photo in JPEG format (35mm x 45mm)",
        "Complete online application form at least 4 days before travel",
        "E-visa is free of charge",
        "No invitation required",
        "Insurance policy valid in Russia",
        "Valid only for purpose of travel indicated (tourism, business, humanitarian)",
        "Entry/exit only through designated checkpoints in the specified region",
        "Cannot be extended or changed to another visa category",
      ],
      applicationLinks: [
        {
          text: "Official Russian e-visa Portal",
          url: "https://electronic-visa.kdmid.ru/",
        },
      ],
      processingTime: "Up to 4 business days",
      cost: {
        amount: 0,
        currency: "USD (free)",
      },
      alternativeOptions: ["r1", "r11"],
      applicableCountries: [
        "EU countries, China, Japan, India, Turkey, Saudi Arabia, Kuwait, Mexico and various other countries (53 countries total)"
      ],
    },

    r14: {
      id: "r14",
      title: "E-visa Eligibility Check",
      description: 
        "Information to determine if your nationality is eligible for Russian e-visas for specific regions.",
      requirements: [
        "Citizens of 53 countries are eligible for e-visas including EU countries, China, Japan, India, Mexico",
        "Notable exceptions: United States, United Kingdom, Canada, Australia, New Zealand",
        "Complete eligibility list available on official e-visa website",
        "Limited to visits to specific regions (Saint Petersburg, Kaliningrad, or Far East)",
        "Valid only for tourism, business, or humanitarian purposes",
        "Must enter and exit through designated checkpoints in the specific region",
      ],
      applicationLinks: [
        {
          text: "Official Russian e-visa Portal - Eligible Countries",
          url: "https://electronic-visa.kdmid.ru/",
        },
      ],
      processingTime: "Immediate eligibility check",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r1", "r11"],
      applicableCountries: ["All countries can check eligibility"],
    },

    r15: {
      id: "r15",
      title: "Private Visa (Family Reunification)",
      description: 
        "For visiting close relatives who are Russian citizens or permanent residents, with potential for long-term stay.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Original invitation from the Russian Ministry of Interior (requested by the Russian host)",
        "Proof of relationship (marriage certificate, birth certificate, etc.)",
        "HIV test certificate (less than 3 months old) for stays over 3 months",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "10-20 business days",
      cost: {
        amount: 80,
        currency: "USD (varies by country and consulate)",
      },
      alternativeOptions: ["r16", "r1"],
      applicableCountries: ["Most countries require this visa for family visits"],
    },

    r16: {
      id: "r16",
      title: "Tourist or Private Visit Visa",
      description: 
        "For short-term visits to family members in Russia without intent to stay long-term.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Tourist voucher/confirmation or private visit invitation from Russian host",
        "For private visits: Original invitation from the Russian Ministry of Interior or notarized letter from Russian host",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "7-10 business days (standard); 3-4 business days (urgent)",
      cost: {
        amount: 40,
        currency: "USD (single-entry; varies by country and consulate)",
      },
      alternativeOptions: ["r1", "r15"],
      applicableCountries: ["Most countries require a visa for family visits to Russia"],
    },

    r17: {
      id: "r17",
      title: "Airport Transit (No Visa Required)",
      description: 
        "For travelers not leaving the international transit area of a Russian airport while waiting for a connecting flight.",
      requirements: [
        "Valid passport",
        "Confirmed onward ticket departing within 24 hours",
        "Must remain in the international transit area of the airport",
        "Applicable only at international airports with transit areas",
        "Not available for all nationalities (some may require transit visas)",
        "Check airline requirements before travel",
      ],
      applicationLinks: [
        {
          text: "Russian Consulate Information",
          url: "https://www.russianembassy.net/",
        },
      ],
      processingTime: "N/A",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r18"],
      applicableCountries: ["Many countries, but not all. Some nationalities require transit visas even for airport transit."],
    },

    r18: {
      id: "r18",
      title: "Transit Visa",
      description: 
        "For travelers passing through Russia en route to a third country when leaving the airport transit area or traveling by land/sea.",
      requirements: [
        "Valid passport with at least 6 months validity beyond visa expiration and 2 blank pages",
        "Completed visa application form",
        "Recent passport-size photo",
        "Visas and tickets for destination country",
        "Confirmed transportation tickets through Russia",
        "Transit time not exceeding 10 days",
        "Insurance policy valid in Russia",
        "Visa processing fee payment",
      ],
      applicationLinks: [
        {
          text: "Russian Visa Center",
          url: "https://russiavisa.info/",
        },
      ],
      processingTime: "5-10 business days",
      cost: {
        amount: 40,
        currency: "USD (varies by country and consulate)",
      },
      alternativeOptions: ["r1", "r17"],
      applicableCountries: ["Most countries require a transit visa for passage through Russia outside airport transit areas"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-19",
    author: "Max",
    countries: ["Russia"],
  },
};