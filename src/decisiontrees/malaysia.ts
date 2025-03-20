import { VisaDecisionTree } from "./model";

export const malaysiaVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the main purpose of your visit to Malaysia?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Visit", nextQuestionId: "q2" },
        { id: "a2", text: "Work", nextQuestionId: "q3" },
        { id: "a3", text: "Study", nextQuestionId: "q4" },
        { id: "a4", text: "Long-term Residence/Retirement", nextQuestionId: "q5" },
        { id: "a5", text: "Business/Conference", nextQuestionId: "q6" },
        { id: "a6", text: "Transit through Malaysia", nextQuestionId: "q7" },
        { id: "a7", text: "Medical Treatment", nextQuestionId: "q8" },
        { id: "a8", text: "Malaysia My Second Home (MM2H) Program", nextQuestionId: "r17" },
      ],
      helpText: "Select the main reason for your travel to Malaysia",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in Malaysia as a tourist?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 30 days", nextQuestionId: "q9" },
        { id: "a2", text: "30-90 days", nextQuestionId: "q9" },
        { id: "a3", text: "More than 90 days", nextQuestionId: "r2" },
      ],
      helpText: "Most tourist visas/visa-free entries allow stays between 30-90 days depending on nationality",
    },

    q3: {
      id: "q3",
      text: "What type of work will you be doing in Malaysia?",
      answerType: "single",
      options: [
        { id: "a1", text: "Employment with a Malaysian company", nextQuestionId: "r3" },
        { id: "a2", text: "Professional visit (short-term assignment)", nextQuestionId: "r4" },
        { id: "a3", text: "Digital nomad (Malaysia Digital Nomad Pass)", nextQuestionId: "r5" },
        { id: "a4", text: "Expatriate position/Executive", nextQuestionId: "r6" },
        { id: "a5", text: "Self-employment/Entrepreneur", nextQuestionId: "r7" },
      ],
      helpText: "Different types of work in Malaysia require different permits",
    },

    q4: {
      id: "q4",
      text: "What is the duration of your study program in Malaysia?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 3 months (short course)", nextQuestionId: "q9" },
        { id: "a2", text: "More than 3 months (semester/full degree program)", nextQuestionId: "r8" },
      ],
      helpText: "Longer study programs require student passes",
    },

    q5: {
      id: "q5",
      text: "What type of long-term residence are you interested in?",
      answerType: "single",
      options: [
        { id: "a1", text: "Malaysia My Second Home (MM2H) Program", nextQuestionId: "r17" },
        { id: "a2", text: "Premium Visa Program (PVP)", nextQuestionId: "r9" },
        { id: "a3", text: "Residence Pass-Talent (for skilled professionals)", nextQuestionId: "r10" },
        { id: "a4", text: "Dependent pass (joining family member)", nextQuestionId: "r11" },
      ],
      helpText: "Malaysia offers various long-term residence options based on different circumstances",
    },

    q6: {
      id: "q6",
      text: "How long will your business visit to Malaysia last?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 30 days (meetings, conferences, etc.)", nextQuestionId: "q9" },
        { id: "a2", text: "1-3 months", nextQuestionId: "q9" },
        { id: "a3", text: "More than 3 months", nextQuestionId: "r12" },
      ],
      helpText: "Short business trips can usually use social visit passes, longer stays may require business visas",
    },

    q7: {
      id: "q7",
      text: "How long will you be transiting through Malaysia?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 24 hours, staying in airport transit zone", nextQuestionId: "r13" },
        { id: "a2", text: "Will leave airport or transit over 24 hours", nextQuestionId: "q9" },
      ],
      helpText: "If you need to leave the airport transit area, you may need a visa or visa exemption",
    },

    q8: {
      id: "q8",
      text: "How long do you need to stay in Malaysia for medical treatment?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 30 days", nextQuestionId: "q9" },
        { id: "a2", text: "30-90 days", nextQuestionId: "r14" },
        { id: "a3", text: "More than 90 days", nextQuestionId: "r14" },
      ],
      helpText: "Malaysia offers special medical visit passes for those seeking treatment",
    },

    q9: {
      id: "q9",
      text: "What is your citizenship?",
      answerType: "single",
      options: [
        { id: "a1", text: "Visa-exempt country (most Western countries, ASEAN)", nextQuestionId: "r1" },
        { id: "a2", text: "eVisa eligible country", nextQuestionId: "r15" },
        { id: "a3", text: "Visa-required country", nextQuestionId: "r16" },
        { id: "a4", text: "Not sure if I need a visa", nextQuestionId: "r18" },
      ],
      helpText: "Your citizenship determines if you need a visa and what type for short stays",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Visa-Free Entry/Social Visit Pass",
      description: "Citizens of many countries can enter Malaysia without a visa and receive a Social Visit Pass upon arrival.",
      requirements: [
        "Valid passport with at least 6 months validity beyond your entry date",
        "Confirmed return or onward ticket",
        "Sufficient funds for your stay (may be asked to demonstrate this)",
        "Immigration officer will stamp passport with Social Visit Pass upon arrival",
        "Duration varies by nationality: typically 30 days (most countries) or 90 days (selected Western countries)",
        "Can sometimes be extended for 2 months (60 days) at immigration offices in Malaysia",
      ],
      applicationLinks: [
        {
          text: "Immigration Department of Malaysia - Visa Information",
          url: "https://www.imi.gov.my/portal2017/index.php/en/main-services/visa.html",
        },
      ],
      processingTime: "No processing time - entry permitted at border",
      cost: {
        amount: 0,
        currency: "MYR",
      },
      alternativeOptions: ["r15", "r16"],
      applicableCountries: [
        "ASEAN countries (Brunei, Cambodia, Indonesia, Laos, Myanmar, Philippines, Singapore, Thailand, Vietnam)",
        "Australia",
        "Canada",
        "Germany",
        "Ireland",
        "Italy",
        "Japan",
        "Netherlands",
        "New Zealand",
        "South Korea",
        "Turkey",
        "United Kingdom",
        "United States",
        "And many others (check Malaysian Immigration website for complete list)",
      ],
    },

    r2: {
      id: "r2",
      title: "Long-Term Social Visit Pass",
      description: "For tourists who want to stay in Malaysia for longer than the standard visa-free period.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Must apply before your current pass expires",
        "Completed application form",
        "Letter explaining why you need a longer stay",
        "Proof of sufficient funds",
        "Return ticket",
        "Usually granted for 2-3 months at immigration's discretion",
        "Generally difficult to obtain unless you have a strong reason for extended stay",
      ],
      applicationLinks: [
        {
          text: "Immigration Department of Malaysia - Pass Information",
          url: "https://www.imi.gov.my/portal2017/index.php/en/pass.html",
        },
      ],
      processingTime: "7-14 working days",
      cost: {
        amount: 100,
        currency: "MYR (approximate, fees vary)",
      },
      alternativeOptions: ["r17", "r9", "r14"],
      applicableCountries: ["All countries"],
    },

    r3: {
      id: "r3",
      title: "Employment Pass",
      description: "For foreigners who want to work for a Malaysian company in a managerial, technical, or executive position.",
      requirements: [
        "Valid passport with at least 12 months validity",
        "Job offer from Malaysian company",
        "Company must apply on your behalf through ESD (Expatriate Services Division) online system",
        "Minimum monthly salary of RM5,000 (Category I and II have different requirements)",
        "University degree and/or professional qualifications relevant to the position",
        "Relevant work experience (typically 3-5 years)",
        "Company must meet certain criteria (paid-up capital, local to foreign worker ratio)",
        "Initial duration typically 1-5 years depending on category and position",
      ],
      applicationLinks: [
        {
          text: "Expatriate Services Division (ESD)",
          url: "https://esd.imi.gov.my/portal/",
        },
      ],
      processingTime: "2-8 weeks",
      cost: {
        amount: 0,
        currency: "MYR (fees vary by pass category and duration, paid by employer)",
      },
      alternativeOptions: ["r4", "r6"],
      applicableCountries: ["All countries"],
    },

    r4: {
      id: "r4",
      title: "Professional Visit Pass (PVP)",
      description: "For short-term specialized work, training, or internship in Malaysia of up to 12 months.",
      requirements: [
        "Valid passport",
        "Invitation/appointment letter from Malaysian organization",
        "Company must apply on your behalf",
        "Proof of specialized skills/knowledge relevant to assignment",
        "Not for regular employment - only for temporary assignments, training, or research",
        "Maximum stay of 12 months (non-renewable)",
        "Applicants must maintain employment in home country",
      ],
      applicationLinks: [
        {
          text: "Expatriate Services Division (ESD) - Professional Visit Pass",
          url: "https://esd.imi.gov.my/portal/professional-visit-pass/",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 0,
        currency: "MYR (fees vary, paid by sponsoring company)",
      },
      alternativeOptions: ["r3", "r5"],
      applicableCountries: ["All countries"],
    },

    r5: {
      id: "r5",
      title: "Malaysia Digital Nomad Pass (DE Rantau)",
      description: "For remote workers and digital professionals who want to live in Malaysia while working for overseas employers.",
      requirements: [
        "Valid passport with at least 12 months validity",
        "Proof of employment with foreign company or overseas freelance work",
        "Minimum annual income of USD24,000 (or equivalent)",
        "Proof of medical insurance coverage",
        "Apply through DE Rantau program website",
        "Granted for 3-12 months initially, renewable for up to 12 more months",
      ],
      applicationLinks: [
        {
          text: "DE Rantau Digital Nomad Program",
          url: "https://www.malaysia.travel/de-rantau",
        },
      ],
      processingTime: "3-4 weeks",
      cost: {
        amount: 1000,
        currency: "MYR (approximately)",
      },
      alternativeOptions: ["r9", "r17"],
      applicableCountries: ["All countries"],
    },

    r6: {
      id: "r6",
      title: "Expatriate Pass - Categories I, II, and III",
      description: "Different categories of Employment Pass based on contract duration and monthly salary.",
      requirements: [
        "Category I: for positions with monthly salary ≥RM10,000, duration up to 5 years",
        "Category II: for positions with monthly salary RM5,000-9,999, duration up to 2 years",
        "Category III: for positions with monthly salary RM3,000-4,999, duration up to 12 months (maximum 2 years)",
        "Valid passport",
        "Employer must submit application via ESD",
        "Relevant qualifications and experience",
        "Company must meet certain criteria (paid-up capital, local to foreign worker ratio)",
        "Category I expatriates may bring dependents and can later apply for Residence Pass-Talent",
      ],
      applicationLinks: [
        {
          text: "Expatriate Services Division (ESD) - Employment Pass",
          url: "https://esd.imi.gov.my/portal/employment-pass/",
        },
      ],
      processingTime: "2-8 weeks depending on category",
      cost: {
        amount: 0,
        currency: "MYR (fees vary by category, paid by employer)",
      },
      alternativeOptions: ["r3", "r7"],
      applicableCountries: ["All countries"],
    },

    r7: {
      id: "r7",
      title: "Business Entrepreneur (Expatriate) Pass",
      description: "For foreign investors and entrepreneurs who want to start or operate a business in Malaysia.",
      requirements: [
        "Valid passport",
        "Must establish a company in Malaysia that is registered with Companies Commission (SSM)",
        "Minimum paid-up capital requirements:",
        "• 100% foreign ownership: RM1,000,000",
        "• Joint venture with Malaysian (foreign ownership ≥50%): RM500,000",
        "• Joint venture with Malaysian (foreign ownership <50%): RM350,000",
        "Business plan",
        "Evidence of sufficient funds to invest and sustain the business",
        "Application through ESD online system",
        "Initially granted for 1-5 years depending on business scale",
      ],
      applicationLinks: [
        {
          text: "Expatriate Services Division (ESD)",
          url: "https://esd.imi.gov.my/portal/",
        },
      ],
      processingTime: "1-2 months",
      cost: {
        amount: 0,
        currency: "MYR (fees vary by pass duration)",
      },
      alternativeOptions: ["r9", "r17"],
      applicableCountries: ["All countries"],
    },

    r8: {
      id: "r8",
      title: "Student Pass",
      description: "For international students enrolled in Malaysian educational institutions.",
      requirements: [
        "Valid passport with at least 12 months validity",
        "Acceptance letter from a Malaysian educational institution",
        "Application must be submitted by the educational institution",
        "School/university will process through EMGS (Education Malaysia Global Services)",
        "Medical examination upon arrival in Malaysia",
        "Proof of financial ability to support studies",
        "Medical insurance coverage",
        "Pass duration matches course duration (typically 1 year, renewable)",
      ],
      applicationLinks: [
        {
          text: "Education Malaysia Global Services (EMGS)",
          url: "https://educationmalaysia.gov.my/",
        },
      ],
      processingTime: "4-8 weeks",
      cost: {
        amount: 0,
        currency: "MYR (fees vary by nationality and course duration)",
      },
      alternativeOptions: ["r1", "r15"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "Premium Visa Program (PVP)",
      description: "A long-term visa option for wealthy global citizens seeking flexible, long-term stays in Malaysia.",
      requirements: [
        "Minimum offshore income of RM40,000 per month (≈USD 8,700)",
        "Minimum liquid assets of RM1,000,000 (≈USD 217,000)",
        "Valid passport with at least 12 months validity",
        "Proof of medical insurance",
        "No criminal record",
        "Deposit of RM1,000,000 in a Malaysian fixed deposit account (can withdraw up to 50% for approved expenses)",
        "Pass validity of 5 years (renewable)",
        "Allows multiple entry/exit",
        "Can bring spouse, children (under 21), and parents/parents-in-law as dependents",
      ],
      applicationLinks: [
        {
          text: "Malaysia Immigration Department - Premium Visa Program",
          url: "https://www.imi.gov.my/portal2017/index.php/en/premium-visa-programme.html",
        },
      ],
      processingTime: "1-3 months",
      cost: {
        amount: 0,
        currency: "MYR (application fees apply)",
      },
      alternativeOptions: ["r17", "r10"],
      applicableCountries: ["All countries"],
    },

    r10: {
      id: "r10",
      title: "Residence Pass-Talent (RP-T)",
      description: "A 10-year renewable pass for highly qualified expatriates to continue living and working in Malaysia.",
      requirements: [
        "Valid passport",
        "Currently working in Malaysia with valid Employment Pass for at least 3 years",
        "Minimum 3 years working experience in Malaysia",
        "Minimum monthly salary of RM15,000",
        "Tax payment record in Malaysia",
        "Applicants can apply directly (not through employer)",
        "Allows spouse and children (under 18) as dependents",
        "Spouse can work without separate work permit",
        "10-year validity with multiple entries",
      ],
      applicationLinks: [
        {
          text: "Talent Corporation Malaysia - Residence Pass-Talent",
          url: "https://www.talentcorp.com.my/initiatives/residence-pass-talent",
        },
      ],
      processingTime: "1-3 months",
      cost: {
        amount: 0,
        currency: "MYR (application fees apply)",
      },
      alternativeOptions: ["r3", "r9"],
      applicableCountries: ["All countries (but must have prior work experience in Malaysia)"],
    },

    r11: {
      id: "r11",
      title: "Dependent Pass",
      description: "For immediate family members of Employment Pass holders, MM2H participants, or other eligible pass holders.",
      requirements: [
        "Valid passport",
        "Proof of relationship to main pass holder:",
        "• Legal spouse",
        "• Children under 18 years old",
        "• Disabled children (any age)",
        "Main pass holder must apply on behalf of dependents",
        "Main pass holder must have minimum monthly salary of RM5,000 (for Employment Pass holders)",
        "Application through ESD online system",
        "Pass duration typically matches the main pass holder's permit",
        "Allows stay but not employment (special permission needed for work)",
      ],
      applicationLinks: [
        {
          text: "Expatriate Services Division (ESD) - Dependent Pass",
          url: "https://esd.imi.gov.my/portal/dependent-pass/",
        },
      ],
      processingTime: "2-4 weeks",
      cost: {
        amount: 0,
        currency: "MYR (fees vary)",
      },
      alternativeOptions: ["r14"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "Business Visa",
      description: "For business visitors who need to stay longer than the standard social visit pass allows.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Letter of invitation from Malaysian business partner/company",
        "Company profile and business registration documents",
        "Detailed purpose of visit",
        "Meeting/conference itinerary",
        "Return ticket",
        "Proof of accommodation",
        "Proof of sufficient funds",
        "Note: For actual business activities, not employment",
      ],
      applicationLinks: [
        {
          text: "Immigration Department of Malaysia - Visa Information",
          url: "https://www.imi.gov.my/portal2017/index.php/en/main-services/visa.html",
        },
      ],
      processingTime: "3-7 working days",
      cost: {
        amount: 0,
        currency: "MYR (fees vary by nationality)",
      },
      alternativeOptions: ["r4", "r1"],
      applicableCountries: ["Visa-required countries"],
    },

    r13: {
      id: "r13",
      title: "Transit without Visa",
      description: "For travelers transiting through Malaysian airports without leaving the transit area.",
      requirements: [
        "Valid passport",
        "Confirmed onward ticket departing within 24 hours",
        "Not leaving the international transit area",
        "Meeting entry requirements for your final destination",
        "No visa needed for most nationalities if staying in transit area",
        "If planning to exit the airport or transit longer than 24 hours, regular visa/entry requirements apply",
      ],
      applicationLinks: [
        {
          text: "Immigration Department of Malaysia - Transit Information",
          url: "https://www.imi.gov.my/portal2017/index.php/en/main-services/visa.html",
        },
      ],
      processingTime: "N/A - no visa required for transit",
      cost: {
        amount: 0,
        currency: "MYR",
      },
      alternativeOptions: ["r1", "r15"],
      applicableCountries: ["Most countries"],
    },

    r14: {
      id: "r14",
      title: "Medical Visit Pass",
      description: "For foreign patients seeking medical treatment in Malaysian hospitals and their companions.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Referral letter from doctor in home country (if available)",
        "Confirmation letter from Malaysian hospital/medical center",
        "Proof of sufficient funds for treatment and stay",
        "Medical report from home country",
        "Can be applied at Malaysian diplomatic mission or upon arrival",
        "Initial 3-month stay, extendable up to 12 months based on medical needs",
        "Can include one companion (spouse, parent, child, or sibling)",
      ],
      applicationLinks: [
        {
          text: "Malaysia Healthcare Travel Council",
          url: "https://www.mhtc.org.my/",
        },
      ],
      processingTime: "1-7 days",
      cost: {
        amount: 0,
        currency: "MYR (fees vary)",
      },
      alternativeOptions: ["r1", "r15"],
      applicableCountries: ["All countries"],
    },

    r15: {
      id: "r15",
      title: "Electronic Visa (eVisa)",
      description: "Online visa application system for eligible nationalities visiting Malaysia for tourism or business.",
      requirements: [
        "Valid passport with at least 6 months validity beyond entry date",
        "Recent passport-sized photo (digital upload)",
        "Return/onward ticket",
        "Proof of accommodation",
        "Apply online through official eVisa portal",
        "Payment by credit/debit card",
        "Visa issued electronically - must print and carry the approval",
        "Duration varies by nationality (typically 30 days, single or multiple entry)",
      ],
      applicationLinks: [
        {
          text: "Malaysia eVisa Portal",
          url: "https://www.windowmalaysia.my/evisa/evisa.jsp",
        },
      ],
      processingTime: "24-48 hours (standard) or 4-8 hours (urgent)",
      cost: {
        amount: 0,
        currency: "USD (fees vary by nationality, typically $20-$50 USD)",
      },
      alternativeOptions: ["r16", "r1"],
      applicableCountries: [
        "China",
        "India",
        "Sri Lanka",
        "Nepal",
        "Bangladesh",
        "Pakistan",
        "Myanmar",
        "Bhutan",
        "Serbia",
        "Montenegro",
        "And several others (check eVisa website for complete list)",
      ],
    },

    r16: {
      id: "r16",
      title: "Single-Entry Visa / Multiple-Entry Visa",
      description: "Traditional visa application through Malaysian diplomatic missions for nationalities not eligible for visa exemption or eVisa.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Recent passport-sized photos",
        "Return/onward ticket",
        "Proof of accommodation",
        "Itinerary of visit",
        "Proof of sufficient funds",
        "May require additional documents depending on nationality and purpose",
        "Must apply at Malaysian Embassy/Consulate",
        "Single or multiple entry options available",
      ],
      applicationLinks: [
        {
          text: "Immigration Department of Malaysia - Visa Information",
          url: "https://www.imi.gov.my/portal2017/index.php/en/main-services/visa.html",
        },
      ],
      processingTime: "3-7 working days",
      cost: {
        amount: 0,
        currency: "USD (fees vary by nationality and visa type)",
      },
      alternativeOptions: ["r15"],
      applicableCountries: [
        "Afghanistan",
        "Angola",
        "Burkina Faso",
        "Burundi",
        "Cameroon",
        "Central African Republic",
        "Chad",
        "Colombia",
        "Congo",
        "Côte d'Ivoire",
        "Djibouti",
        "Equatorial Guinea",
        "Eritrea",
        "Ethiopia",
        "Ghana",
        "Guinea-Bissau",
        "Liberia",
        "Mali",
        "Niger",
        "Nigeria",
        "Rwanda",
        "Western Sahara",
        "Sierra Leone",
        "And others (check with Malaysian diplomatic mission)",
      ],
    },

    r17: {
      id: "r17",
      title: "Malaysia My Second Home (MM2H) Program",
      description: "Long-term residence program for foreigners who want to live in Malaysia with a 5-year renewable visa.",
      requirements: [
        "Valid passport",
        "Minimum fixed deposit in Malaysian bank:",
        "• Applicants under 50 years: RM500,000",
        "• Applicants 50 years and above: RM350,000",
        "Offshore monthly income of at least RM40,000",
        "Liquid assets of RM1.5 million (applicants under 50) or RM1 million (applicants 50 and above)",
        "Medical insurance coverage",
        "Medical examination",
        "No criminal record",
        "Can include spouse and unmarried children under 21 as dependents",
        "After approval, can withdraw up to RM50,000 for approved expenses",
        "5-year multiple entry visa, renewable",
      ],
      applicationLinks: [
        {
          text: "Malaysia My Second Home Official Page",
          url: "https://www.mm2h.com/",
        },
      ],
      processingTime: "3-6 months",
      cost: {
        amount: 0,
        currency: "MYR (application fees apply, plus significant financial requirements)",
      },
      alternativeOptions: ["r9", "r10"],
      applicableCountries: ["All countries"],
    },

    r18: {
      id: "r18",
      title: "Malaysian Visa Eligibility Check",
      description: "Information on how to determine visa requirements based on your citizenship.",
      requirements: [
        "Check the Immigration Department of Malaysia website",
        "OR contact the nearest Malaysian Embassy/Consulate",
        "Requirements depend on:",
        "• Your citizenship",
        "• Purpose of visit",
        "• Length of stay",
        "• Current diplomatic relations",
      ],
      applicationLinks: [
        {
          text: "Immigration Department of Malaysia - Visa Information",
          url: "https://www.imi.gov.my/portal2017/index.php/en/main-services/visa.html",
        },
      ],
      processingTime: "Immediate (for eligibility check only)",
      cost: {
        amount: 0,
        currency: "MYR",
      },
      alternativeOptions: ["r1", "r15", "r16"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-20",
    author: "Emma",
    countries: ["Malaysia"],
  },
};