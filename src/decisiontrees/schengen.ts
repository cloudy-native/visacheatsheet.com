import { VisaDecisionTree } from './model';

export const schengenVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the primary purpose of your visit to the Schengen Area?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Leisure", nextQuestionId: "q2" },
        { id: "a2", text: "Business or Conference", nextQuestionId: "q3" },
        { id: "a3", text: "Visiting Family/Friends", nextQuestionId: "q4" },
        { id: "a4", text: "Study/Research (Short-term)", nextQuestionId: "q5" },
        { id: "a5", text: "Medical Treatment", nextQuestionId: "q6" },
        { id: "a6", text: "Long-term Stay or Work", nextQuestionId: "q7" },
        { id: "a7", text: "Airport Transit", nextQuestionId: "q8" },
      ],
      helpText: "Select the main reason for your visit to any Schengen country",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in the Schengen Area?",
      answerType: "single",
      options: [
        { id: "a1", text: "Up to 90 days in a 180-day period", nextQuestionId: "q9" },
        { id: "a2", text: "More than 90 days in a 180-day period", nextQuestionId: "q7" },
      ],
      helpText: "The standard Schengen visa is for short stays up to 90 days within any 180-day period",
    },

    q3: {
      id: "q3",
      text: "What type of business activity will you be undertaking?",
      answerType: "single",
      options: [
        { id: "a1", text: "Business meetings/conferences (no work)", nextQuestionId: "q2" },
        { id: "a2", text: "Paid activities/work", nextQuestionId: "q7" },
        { id: "a3", text: "Trade fair or exhibition", nextQuestionId: "q2" },
        { id: "a4", text: "Contract negotiation/signing", nextQuestionId: "q2" },
      ],
      helpText: "Business visitors can typically use a Schengen visa unless performing paid work",
    },

    q4: {
      id: "q4",
      text: "Are you visiting family/friends for a short stay or for family reunification?",
      answerType: "single",
      options: [
        { id: "a1", text: "Short visit (up to 90 days)", nextQuestionId: "q2" },
        { id: "a2", text: "Family reunification/long-term stay", nextQuestionId: "q7" },
      ],
      helpText: "Short visits use a standard Schengen visa; family reunification requires a national visa",
    },

    q5: {
      id: "q5",
      text: "How long will your study or research activity last?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 90 days", nextQuestionId: "q2" },
        { id: "a2", text: "More than 90 days", nextQuestionId: "q7" },
      ],
      helpText: "Short-term study can use a standard Schengen visa; longer study requires a national visa",
    },

    q6: {
      id: "q6",
      text: "How long will your medical treatment last?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 90 days", nextQuestionId: "q2" },
        { id: "a2", text: "More than 90 days", nextQuestionId: "q7" },
      ],
      helpText: "Short-term medical treatment can use a standard Schengen visa; longer treatment requires a national visa",
    },

    q7: {
      id: "q7",
      text: "For long-term stays (over 90 days), which specific Schengen country will be your main destination?",
      answerType: "single",
      options: [
        { id: "a1", text: "Germany", nextQuestionId: "r10" },
        { id: "a2", text: "France", nextQuestionId: "r10" },
        { id: "a3", text: "Italy", nextQuestionId: "r10" },
        { id: "a4", text: "Spain", nextQuestionId: "r10" },
        { id: "a5", text: "Other Schengen country", nextQuestionId: "r10" },
      ],
      helpText: "Long-term stays require a national visa from the specific country, not a Schengen visa",
    },

    q8: {
      id: "q8",
      text: "Will you be leaving the international transit area of the airport?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, I'll exit the transit area", nextQuestionId: "q9" },
        { id: "a2", text: "No, I'll stay in the transit area", nextQuestionId: "q10" },
      ],
      helpText: "If you leave the international transit area, you'll need a regular Schengen visa",
    },

    q9: {
      id: "q9",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        { id: "a1", text: "EU/EEA/Switzerland citizen", nextQuestionId: "r1" },
        { id: "a2", text: "Visa-exempt nationality (e.g., USA, Canada, Japan)", nextQuestionId: "r2" },
        { id: "a3", text: "Visa-required nationality", nextQuestionId: "q11" },
        { id: "a4", text: "I'm not sure", nextQuestionId: "q12" },
      ],
      helpText: "Your nationality determines whether you need a Schengen visa",
    },

    q10: {
      id: "q10",
      text: "What is your nationality for airport transit purposes?",
      answerType: "single",
      options: [
        { id: "a1", text: "Nationality requiring Airport Transit Visa", nextQuestionId: "r9" },
        { id: "a2", text: "Nationality exempt from Airport Transit Visa", nextQuestionId: "r8" },
        { id: "a3", text: "I'm not sure", nextQuestionId: "q13" },
      ],
      helpText: "Only citizens of certain countries need an Airport Transit Visa",
    },

    q11: {
      id: "q11",
      text: "Have you previously been issued a Schengen visa?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, and I always respected the rules", nextQuestionId: "r3" },
        { id: "a2", text: "Yes, but I overstayed", nextQuestionId: "r7" },
        { id: "a3", text: "No, this is my first application", nextQuestionId: "r3" },
      ],
      helpText: "Previous visa history can affect your application process",
    },

    q12: {
      id: "q12",
      text: "Select your country of citizenship to check if you need a visa:",
      answerType: "single",
      options: [
        { id: "a1", text: "EU/EEA countries or Switzerland", nextQuestionId: "r1" },
        { id: "a2", text: "USA, Canada, Japan, South Korea, Australia, New Zealand, etc.", nextQuestionId: "r2" },
        { id: "a3", text: "Most other countries (e.g., India, China, Russia, etc.)", nextQuestionId: "r3" },
      ],
      helpText: "This helps determine if you need a Schengen visa",
    },

    q13: {
      id: "q13",
      text: "Select your country of citizenship to check if you need an Airport Transit Visa:",
      answerType: "single",
      options: [
        { id: "a1", text: "Afghanistan, Bangladesh, Eritrea, Ethiopia, Ghana, Iran, Iraq, Nigeria, Pakistan, Somalia, Sri Lanka, etc.", nextQuestionId: "r9" },
        { id: "a2", text: "Any other country", nextQuestionId: "r8" },
      ],
      helpText: "Citizens of certain countries need an Airport Transit Visa even if just changing planes",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "No Visa Required - EU/EEA/Swiss Citizens",
      description: 
        "As a citizen of an EU country, European Economic Area (EEA) country, or Switzerland, you have the right of free movement within the Schengen Area.",
      requirements: [
        "Valid national ID card or passport",
        "No restrictions on duration for tourism, business, or visiting family",
        "For stays longer than 90 days, registration requirements may apply in some countries",
      ],
      applicationLinks: [
        {
          text: "EU Free Movement Rights",
          url: "https://europa.eu/youreurope/citizens/travel/entry-exit/eu-citizen/index_en.htm",
        },
      ],
      processingTime: "No processing - immediate entry with valid ID/passport",
      cost: {
        amount: 0,
        currency: "EUR",
      },
      alternativeOptions: [],
      applicableCountries: [
        "All EU countries",
        "Iceland",
        "Liechtenstein",
        "Norway",
        "Switzerland",
      ],
    },

    r2: {
      id: "r2",
      title: "No Visa Required - Visa-Exempt Nationalities",
      description: 
        "Citizens of visa-exempt countries can enter the Schengen Area without a visa for short stays of up to 90 days within any 180-day period.",
      requirements: [
        "Valid passport (valid for at least 3 months beyond planned departure date)",
        "Proof of sufficient funds for your stay",
        "Proof of accommodation arrangements",
        "Return/onward ticket",
        "Travel medical insurance (recommended)",
        "ETIAS authorization (starting 2024/2025)",
      ],
      applicationLinks: [
        {
          text: "European Travel Information and Authorization System (ETIAS)",
          url: "https://www.etiasvisa.com/",
        },
      ],
      processingTime: "ETIAS: 96 hours (when implemented)",
      cost: {
        amount: 7,
        currency: "EUR (for ETIAS when implemented)",
      },
      alternativeOptions: ["r3"],
      applicableCountries: [
        "Albania", "Andorra", "Antigua and Barbuda", "Argentina", "Australia",
        "Bahamas", "Barbados", "Bosnia and Herzegovina", "Brazil", "Brunei",
        "Canada", "Chile", "Colombia", "Costa Rica", "Dominica",
        "El Salvador", "Georgia", "Grenada", "Guatemala", "Honduras",
        "Hong Kong", "Israel", "Japan", "Kiribati", "Macao",
        "Malaysia", "Marshall Islands", "Mauritius", "Mexico", "Micronesia",
        "Moldova", "Monaco", "Montenegro", "New Zealand", "Nicaragua",
        "North Macedonia", "Palau", "Panama", "Paraguay", "Peru",
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent", "Samoa", "San Marino",
        "Serbia", "Seychelles", "Singapore", "Solomon Islands", "South Korea",
        "Taiwan", "Timor-Leste", "Tonga", "Trinidad and Tobago", "Tuvalu",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Vanuatu", "Vatican City", "Venezuela"
      ],
    },

    r3: {
      id: "r3",
      title: "Schengen Visa (Type C) - Short Stay",
      description: 
        "A short-stay visa for tourism, business, visiting family/friends, or other short-term purposes for up to 90 days within any 180-day period.",
      requirements: [
        "Valid passport (valid for at least 3 months beyond planned departure)",
        "Completed visa application form",
        "Recent passport-sized photos",
        "Travel medical insurance (minimum coverage €30,000)",
        "Round-trip reservation or itinerary",
        "Proof of accommodation",
        "Proof of financial means (approximately €75-100 per day of stay)",
        "Evidence of employment/student status",
        "Purpose of visit documentation (e.g., invitation letters, conference registration)",
      ],
      applicationLinks: [
        {
          text: "Schengen Visa Information",
          url: "https://www.schengenvisainfo.com/",
        },
      ],
      processingTime: "15 calendar days (can be extended to 45 days in certain cases)",
      cost: {
        amount: 80,
        currency: "EUR (adults); 40 EUR (children 6-12)",
      },
      alternativeOptions: ["r4", "r5", "r6"],
      applicableCountries: ["All countries not in the visa-exempt list"],
    },

    r4: {
      id: "r4",
      title: "Schengen Visa - Multiple Entry",
      description: 
        "A multiple-entry visa allowing several entries into the Schengen Area within the validity period, while respecting the 90/180 day rule.",
      requirements: [
        "Same as standard Schengen visa",
        "Proof of need for multiple entries (business, family, etc.)",
        "Travel history showing previous compliance with visa rules",
        "More substantial proof of stable financial situation",
      ],
      applicationLinks: [
        {
          text: "Multiple-Entry Schengen Visa Guide",
          url: "https://www.schengenvisainfo.com/multiple-entry-visa/",
        },
      ],
      processingTime: "15 calendar days (can be extended to 45 days in certain cases)",
      cost: {
        amount: 80,
        currency: "EUR (adults); 40 EUR (children 6-12)",
      },
      alternativeOptions: ["r3", "r6"],
      applicableCountries: ["All countries not in the visa-exempt list"],
    },

    r5: {
      id: "r5",
      title: "Schengen Visa - Limited Territorial Validity",
      description: 
        "A special visa valid only for the Schengen state that issued it (or in some cases, certain specified Schengen states), not the entire Schengen Area.",
      requirements: [
        "Similar to standard Schengen visa",
        "Issued for humanitarian reasons, national interest, or international obligations",
        "Usually issued when all standard Schengen visa requirements are not fully met",
      ],
      applicationLinks: [
        {
          text: "Schengen Visa Types",
          url: "https://www.schengenvisainfo.com/schengen-visa-types/",
        },
      ],
      processingTime: "15 calendar days (can be extended to 45 days in certain cases)",
      cost: {
        amount: 80,
        currency: "EUR (adults); 40 EUR (children 6-12)",
      },
      alternativeOptions: ["r3"],
      applicableCountries: ["All countries not in the visa-exempt list"],
    },

    r6: {
      id: "r6",
      title: "Schengen Visa with Extended Validity (1-5 years)",
      description: 
        "A multiple-entry visa with extended validity of 1-5 years for frequent travelers with good visa history, while still respecting the 90/180 day rule.",
      requirements: [
        "Same as standard Schengen visa",
        "Proof of need for frequent travel to Schengen Area",
        "Clean travel history showing previous compliance with visa rules",
        "Usually requires at least 2-3 previous Schengen visas used properly",
        "Stable financial and personal situation",
      ],
      applicationLinks: [
        {
          text: "Long-validity Schengen Visa Guide",
          url: "https://www.schengenvisainfo.com/long-validity-visa/",
        },
      ],
      processingTime: "15 calendar days (can be extended to 45 days in certain cases)",
      cost: {
        amount: 80,
        currency: "EUR (adults); 40 EUR (children 6-12)",
      },
      alternativeOptions: ["r3", "r4"],
      applicableCountries: ["All countries not in the visa-exempt list"],
    },

    r7: {
      id: "r7",
      title: "Previous Overstay - Special Application",
      description: 
        "If you previously overstayed in the Schengen Area, your new visa application will face additional scrutiny and may be denied.",
      requirements: [
        "All standard Schengen visa requirements",
        "Explanation letter for previous overstay",
        "Additional proof of ties to home country",
        "More substantial financial guarantees",
        "May require interview at consulate",
        "Higher risk of rejection",
      ],
      applicationLinks: [
        {
          text: "Schengen Visa After Overstay",
          url: "https://www.schengenvisainfo.com/visa-after-overstay/",
        },
      ],
      processingTime: "Up to 45 days (likely extended review)",
      cost: {
        amount: 80,
        currency: "EUR (adults); 40 EUR (children 6-12)",
      },
      alternativeOptions: ["r3"],
      applicableCountries: ["All countries not in the visa-exempt list"],
    },

    r8: {
      id: "r8",
      title: "No Airport Transit Visa Required",
      description: 
        "Most nationalities don't need an airport transit visa when remaining in the international transit area of an airport in the Schengen Area.",
      requirements: [
        "Valid passport",
        "Valid visa for destination country (if required)",
        "Confirmed onward flight ticket",
        "Must remain in the international transit area",
      ],
      applicationLinks: [
        {
          text: "Transit Visa Information",
          url: "https://www.schengenvisainfo.com/transit-schengen-visa/",
        },
      ],
      processingTime: "No processing required",
      cost: {
        amount: 0,
        currency: "EUR",
      },
      alternativeOptions: ["r3"],
      applicableCountries: ["Most countries except those specifically requiring Airport Transit Visas"],
    },

    r9: {
      id: "r9",
      title: "Airport Transit Visa (ATV)",
      description: 
        "Required for citizens of certain countries even when just changing flights and remaining in the international transit area of an airport in the Schengen Area.",
      requirements: [
        "Valid passport",
        "Completed visa application form",
        "Recent passport-sized photos",
        "Valid visa for destination country (if required)",
        "Confirmed onward flight ticket",
        "Proof of reason for journey",
      ],
      applicationLinks: [
        {
          text: "Airport Transit Visa Information",
          url: "https://www.schengenvisainfo.com/airport-transit-visa/",
        },
      ],
      processingTime: "15 calendar days (can be extended to 45 days in certain cases)",
      cost: {
        amount: 80,
        currency: "EUR (adults); 40 EUR (children 6-12)",
      },
      alternativeOptions: ["r3"],
      applicableCountries: [
        "Afghanistan", "Bangladesh", "Democratic Republic of Congo", "Eritrea", "Ethiopia", 
        "Ghana", "Iran", "Iraq", "Nigeria", "Pakistan", "Somalia", "Sri Lanka", "South Sudan"
      ],
    },

    r10: {
      id: "r10",
      title: "National Visa (Type D) - Long Stay",
      description: 
        "For stays longer than 90 days, you need a national visa (Type D) from the specific Schengen country where you will be staying, not a Schengen visa.",
      requirements: [
        "Requirements vary by country and purpose (work, study, family reunion, etc.)",
        "Valid passport (valid beyond intended stay)",
        "Proof of purpose of stay (work contract, university admission, etc.)",
        "Proof of accommodation",
        "Proof of financial means",
        "Health insurance",
        "Usually requires in-person application and biometrics",
      ],
      applicationLinks: [
        {
          text: "National Visa Information",
          url: "https://www.schengenvisainfo.com/national-visa/",
        },
      ],
      processingTime: "Varies by country - typically 1-3 months",
      cost: {
        amount: 0,
        currency: "EUR (varies by country, typically 75-100 EUR)",
      },
      alternativeOptions: ["r3"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-19",
    countries: [
      "Austria", "Belgium", "Croatia", "Czech Republic", "Denmark", 
      "Estonia", "Finland", "France", "Germany", "Greece", 
      "Hungary", "Iceland", "Italy", "Latvia", "Liechtenstein", 
      "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", 
      "Poland", "Portugal", "Slovakia", "Slovenia", "Spain", 
      "Sweden", "Switzerland"
    ],
  },
};