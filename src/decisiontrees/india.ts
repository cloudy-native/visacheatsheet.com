import { VisaDecisionTree } from "./model";

export const indiaVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the purpose of your visit to India?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism", nextQuestionId: "q2" },
        { id: "a2", text: "Business", nextQuestionId: "q3" },
        { id: "a3", text: "Medical Treatment", nextQuestionId: "q4" },
        { id: "a4", text: "Study/Research", nextQuestionId: "q5" },
        { id: "a5", text: "Work/Employment", nextQuestionId: "q7" },
        { id: "a6", text: "Joining Family/Spouse", nextQuestionId: "q10" },
        { id: "a7", text: "Conference/Meeting", nextQuestionId: "q3" },
        { id: "a8", text: "Journalism/Media Activity", nextQuestionId: "r8" },
      ],
      helpText: "Select the primary reason for your visit to India",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in India?",
      answerType: "single",
      options: [
        { id: "a1", text: "Up to 30 days", nextQuestionId: "q8" },
        { id: "a2", text: "30-90 days", nextQuestionId: "r1" },
        { id: "a3", text: "90 days to 1 year", nextQuestionId: "r1" },
        { id: "a4", text: "More than 1 year", nextQuestionId: "r3" },
      ],
      helpText: "Duration of stay affects the type of visa you need",
    },

    q3: {
      id: "q3",
      text: "What is the nature of your business/conference visit?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Business meetings/discussions",
          nextQuestionId: "q9",
        },
        {
          id: "a2",
          text: "Attending conference/seminar",
          nextQuestionId: "q9",
        },
        {
          id: "a3",
          text: "Establishing business/industrial venture",
          nextQuestionId: "r2",
        },
        {
          id: "a4",
          text: "Sale/purchase of industrial/commercial products",
          nextQuestionId: "q9",
        },
      ],
      helpText:
        "The specific nature of business activity determines the appropriate visa",
    },

    q4: {
      id: "q4",
      text: "Are you visiting for medical treatment?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, for myself", nextQuestionId: "r4" },
        {
          id: "a2",
          text: "Yes, as an attendant/companion",
          nextQuestionId: "r4",
        },
        { id: "a3", text: "No, for other reasons", nextQuestionId: "q2" },
      ],
      helpText:
        "Medical visas are for those seeking treatment or accompanying patients",
    },

    q5: {
      id: "q5",
      text: "What type of educational program will you be pursuing?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Regular academic course (degree/diploma)",
          nextQuestionId: "q6",
        },
        {
          id: "a2",
          text: "Short-term course (less than 6 months)",
          nextQuestionId: "r6",
        },
        { id: "a3", text: "Research work", nextQuestionId: "r7" },
        { id: "a4", text: "Internship/training program", nextQuestionId: "r6" },
      ],
      helpText: "Different educational programs require different visa types",
    },

    q6: {
      id: "q6",
      text: "Have you secured admission to an Indian educational institution?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Yes, I have a confirmed admission",
          nextQuestionId: "r5",
        },
        { id: "a2", text: "No, I'm still applying", nextQuestionId: "r9" },
      ],
      helpText:
        "Student visas require confirmed admission to a recognized institution",
    },

    q7: {
      id: "q7",
      text: "What type of employment will you be engaged in?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Working for an Indian company/organization",
          nextQuestionId: "r10",
        },
        {
          id: "a2",
          text: "Working for a foreign company in India",
          nextQuestionId: "r10",
        },
        { id: "a3", text: "Volunteer work (unpaid)", nextQuestionId: "r12" },
        {
          id: "a4",
          text: "Digital nomad/remote work for non-Indian employer",
          nextQuestionId: "r14",
        },
      ],
      helpText: "Employment visa requirements vary based on type of work",
    },

    q8: {
      id: "q8",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Eligible for eVisa (US, UK, Canada, etc.)",
          nextQuestionId: "r1",
        },
        { id: "a2", text: "Not eligible for eVisa", nextQuestionId: "r15" },
        { id: "a3", text: "Not sure", nextQuestionId: "r16" },
      ],
      helpText: "eVisa eligibility depends on your nationality",
    },

    q9: {
      id: "q9",
      text: "How long will your business visit last?",
      answerType: "single",
      options: [
        { id: "a1", text: "Up to 30 days", nextQuestionId: "q8" },
        { id: "a2", text: "30-180 days", nextQuestionId: "r2" },
        { id: "a3", text: "More than 180 days", nextQuestionId: "r2" },
      ],
      helpText: "Duration affects the type of business visa needed",
    },

    q10: {
      id: "q10",
      text: "What is your relationship with the person in India?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Spouse of Indian citizen/OCI cardholder",
          nextQuestionId: "r11",
        },
        {
          id: "a2",
          text: "Child of Indian citizen/OCI cardholder",
          nextQuestionId: "r11",
        },
        {
          id: "a3",
          text: "Parent of Indian citizen/OCI cardholder",
          nextQuestionId: "r11",
        },
        {
          id: "a4",
          text: "Other relative (not immediate family)",
          nextQuestionId: "r1",
        },
      ],
      helpText:
        "Family relation determines eligibility for specific visa types",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Tourist Visa / e-Tourist Visa",
      description:
        "For foreigners who want to visit India for tourism, recreation, sightseeing, meeting friends/relatives, or attending yoga programs.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Proof of sufficient funds for stay in India",
        "Return/onward ticket",
        "Details of places to be visited",
        "Address of stay in India (hotel booking or invitation letter)",
        "E-visa: Online application form must be completed at least 4 days before arrival",
      ],
      applicationLinks: [
        {
          text: "India e-Visa Official Portal",
          url: "https://indianvisaonline.gov.in/evisa/tvoa.html",
        },
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime:
        "E-visa: 3-5 business days; Regular visa: 5-7 business days (varies by country)",
      cost: {
        amount: 25,
        currency:
          "USD (for e-Tourist visa up to 30 days); varies for regular tourist visa",
      },
      alternativeOptions: ["r2", "r12"],
      applicableCountries: [
        "Most countries are eligible for e-Tourist visa except certain restricted nationalities",
      ],
    },

    r2: {
      id: "r2",
      title: "Business Visa / e-Business Visa",
      description:
        "For foreigners coming to India for business activities like attending meetings, conferences, establishing industrial/business ventures, etc.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Business letter from the company in your country stating purpose of visit",
        "Invitation letter from Indian company/organization",
        "Proof of financial standing/company registration",
        "Return/onward ticket",
        "E-visa: Online application form must be completed at least 4 days before arrival",
      ],
      applicationLinks: [
        {
          text: "India e-Visa Official Portal",
          url: "https://indianvisaonline.gov.in/evisa/tvoa.html",
        },
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime:
        "E-visa: 3-5 business days; Regular visa: 7-10 business days (varies by country)",
      cost: {
        amount: 80,
        currency: "USD (for e-Business visa); varies for regular business visa",
      },
      alternativeOptions: ["r1", "r10"],
      applicableCountries: [
        "Most countries are eligible for e-Business visa except certain restricted nationalities",
      ],
    },

    r3: {
      id: "r3",
      title: "Long-Term Tourist Visa",
      description:
        "For extended tourism/recreation stays in India beyond the typical short-term tourist visa duration.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Proof of sufficient funds for extended stay",
        "Detailed travel itinerary",
        "Proof of accommodation arrangements",
        "Return/onward ticket",
        "May require additional documentation for extended stay justification",
      ],
      applicationLinks: [
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime: "10-15 business days (varies by country)",
      cost: {
        amount: 0,
        currency: "USD (varies by nationality and duration)",
      },
      alternativeOptions: ["r1", "r11"],
      applicableCountries: [
        "Most countries, though restrictions may apply for certain nationalities",
      ],
    },

    r4: {
      id: "r4",
      title: "Medical Visa / Medical Attendant Visa",
      description:
        "For foreigners seeking medical treatment in India or accompanying a patient as an attendant/companion.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Medical documents/diagnosis from home country",
        "Letter from receiving hospital in India confirming treatment",
        "Proof of sufficient funds for treatment and stay",
        "For attendant: Proof of relationship with patient",
        "E-visa available for short medical visits",
      ],
      applicationLinks: [
        {
          text: "India e-Visa Official Portal (Medical)",
          url: "https://indianvisaonline.gov.in/evisa/tvoa.html",
        },
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime:
        "E-visa: 3-5 business days; Regular visa: 5-7 business days (expedited processing available)",
      cost: {
        amount: 80,
        currency: "USD (for e-Medical visa); varies for regular medical visa",
      },
      alternativeOptions: ["r1"],
      applicableCountries: [
        "Most countries are eligible except certain restricted nationalities",
      ],
    },

    r5: {
      id: "r5",
      title: "Student Visa",
      description:
        "For foreigners coming to study at recognized educational institutions in India for regular academic courses.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Admission letter/confirmation from recognized Indian educational institution",
        "Proof of sufficient funds for course fees and living expenses",
        "Details of courses to be studied",
        "Educational certificates/transcripts",
        "Police clearance certificate may be required (country-specific)",
      ],
      applicationLinks: [
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime: "10-15 business days (varies by country)",
      cost: {
        amount: 0,
        currency: "USD (varies by nationality)",
      },
      alternativeOptions: ["r6", "r7"],
      applicableCountries: [
        "Most countries, though restrictions may apply for certain nationalities",
      ],
    },

    r6: {
      id: "r6",
      title: "Student Visa (Short-term)",
      description:
        "For short-term courses, training programs, or internships less than 6 months in duration.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Admission/acceptance letter from Indian institution/organization",
        "Course/program details and duration",
        "Proof of sufficient funds for course fees and living expenses",
        "For internships: Letter from receiving organization in India",
      ],
      applicationLinks: [
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime: "7-10 business days (varies by country)",
      cost: {
        amount: 0,
        currency: "USD (varies by nationality)",
      },
      alternativeOptions: ["r1", "r5"],
      applicableCountries: [
        "Most countries, though restrictions may apply for certain nationalities",
      ],
    },

    r7: {
      id: "r7",
      title: "Research Visa",
      description:
        "For foreign scholars/researchers conducting research at Indian institutions, often requiring special clearance.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Detailed research proposal",
        "Letter from Indian host institution/organization",
        "Educational and professional credentials",
        "Letter from home institution (if applicable)",
        "Research subjects in sensitive areas may require additional security clearances",
      ],
      applicationLinks: [
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime: "2-3 months (due to security clearances)",
      cost: {
        amount: 0,
        currency: "USD (varies by nationality)",
      },
      alternativeOptions: ["r5"],
      applicableCountries: [
        "Most countries, though restrictions may apply for certain nationalities and research topics",
      ],
    },

    r8: {
      id: "r8",
      title: "Journalist Visa",
      description:
        "For professional journalists, photographers, and media personnel traveling to India for media-related activities.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Letter from employing media organization",
        "Detailed description of media projects/coverage plans",
        "Professional credentials/press card",
        "Additional clearance from Indian Ministry of External Affairs required",
      ],
      applicationLinks: [
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime: "3-4 weeks or more (requires special clearance)",
      cost: {
        amount: 0,
        currency: "USD (varies by nationality)",
      },
      alternativeOptions: ["r2"],
      applicableCountries: [
        "Most countries, though processing time and scrutiny vary by nationality",
      ],
    },

    r9: {
      id: "r9",
      title: "Provisional Student Visa",
      description:
        "Guidance for those still in the process of securing admission to Indian educational institutions.",
      requirements: [
        "Generally, a confirmed admission is required for student visa",
        "Consider applying for tourist visa to visit institutions in person",
        "Once admission is confirmed, apply for proper student visa",
        "Some consulates may offer provisional visa if admission is in advanced stages",
      ],
      applicationLinks: [
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime: "Varies based on circumstances",
      cost: {
        amount: 0,
        currency: "USD (depends on visa type eventually applied for)",
      },
      alternativeOptions: ["r1", "r5"],
      applicableCountries: [
        "Most countries, though restrictions may apply for certain nationalities",
      ],
    },

    r10: {
      id: "r10",
      title: "Employment Visa",
      description:
        "For foreigners coming to work in India with Indian companies, organizations, or foreign companies with operations in India.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Employment contract/appointment letter",
        "Educational and professional qualifications",
        "Employer's registration/incorporation documents",
        "Minimum salary typically USD 25,000 per annum",
        "Position should typically be skilled/professional (not clerical/secretarial)",
      ],
      applicationLinks: [
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime: "2-3 weeks (varies by country)",
      cost: {
        amount: 0,
        currency: "USD (varies by nationality)",
      },
      alternativeOptions: ["r2", "r13"],
      applicableCountries: [
        "Most countries, though restrictions may apply for certain nationalities",
      ],
    },

    r11: {
      id: "r11",
      title: "Entry Visa (Family)",
      description:
        "For spouses or dependent family members of Indian citizens or Overseas Citizen of India (OCI) cardholders.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Proof of relationship (marriage certificate, birth certificate)",
        "Proof of Indian citizenship/OCI status of the relative",
        "Letter of invitation from the Indian citizen/OCI cardholder",
        "Proof of accommodation in India",
      ],
      applicationLinks: [
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime: "10-15 business days (varies by country)",
      cost: {
        amount: 0,
        currency: "USD (varies by nationality)",
      },
      alternativeOptions: ["r1"],
      applicableCountries: [
        "Most countries, though restrictions may apply for certain nationalities",
      ],
    },

    r12: {
      id: "r12",
      title: "Volunteer Visa",
      description:
        "For foreigners coming to volunteer with registered NGOs/organizations in India without payment/stipend.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Invitation letter from registered Indian NGO/organization",
        "Organization's registration details",
        "Detailed volunteer work plan and duration",
        "Proof of sufficient funds for stay",
        "Prior clearance from Ministry of Home Affairs may be required",
      ],
      applicationLinks: [
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime: "2-4 weeks (varies by country and organization)",
      cost: {
        amount: 0,
        currency: "USD (varies by nationality)",
      },
      alternativeOptions: ["r1", "r10"],
      applicableCountries: [
        "Most countries, though restrictions may apply for certain nationalities",
      ],
    },

    r13: {
      id: "r13",
      title: "Project Visa",
      description:
        "For skilled foreign workers coming to execute specific projects in power and steel sectors.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Project contract details",
        "Letter from Indian company executing the project",
        "Professional qualifications relevant to project work",
        "Specific to power plants, steel mills, and similar industrial projects",
      ],
      applicationLinks: [
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime: "2-3 weeks (varies by country)",
      cost: {
        amount: 0,
        currency: "USD (varies by nationality)",
      },
      alternativeOptions: ["r10"],
      applicableCountries: [
        "Most countries, though restrictions may apply for certain nationalities",
      ],
    },

    r14: {
      id: "r14",
      title: "Not eligible for work visa",
      description:
        "India does not offer specific digital nomad or remote work visas. Working remotely for foreign employers while in India on tourist visa is technically not permitted.",
      requirements: [
        "Working remotely on tourist visa may violate visa conditions",
        "Consider business visa if activities involve engaging with Indian entities",
        "Employment visa requires Indian employer/entity",
        "Longer stays with remote work would technically require proper work authorization",
      ],
      applicationLinks: [
        {
          text: "Tourist Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
        {
          text: "Business Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime: "N/A",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r1", "r2", "r10"],
      applicableCountries: ["All countries"],
    },

    r15: {
      id: "r15",
      title: "Regular Tourist Visa (Non-eVisa Eligible)",
      description:
        "Traditional paper visa application for tourists from countries not eligible for India's eVisa program.",
      requirements: [
        "Valid passport with at least 6 months validity and 2 blank pages",
        "Recent passport-sized photograph (2x2 inches, white background)",
        "Completed visa application form",
        "Proof of sufficient funds for stay in India",
        "Return/onward ticket",
        "Details of places to be visited",
        "Address of stay in India (hotel booking or invitation letter)",
        "Apply at Indian Embassy/Consulate or authorized visa center",
      ],
      applicationLinks: [
        {
          text: "Regular Visa Application",
          url: "https://indianvisaonline.gov.in/visa/",
        },
      ],
      processingTime: "5-10 business days (varies by country)",
      cost: {
        amount: 0,
        currency: "USD (varies by nationality)",
      },
      alternativeOptions: ["r2", "r12"],
      applicableCountries: [
        "Countries not eligible for eVisa, including but not limited to certain regions",
      ],
    },

    r16: {
      id: "r16",
      title: "Check eVisa Eligibility",
      description:
        "Information to determine if your nationality qualifies for India's eVisa program.",
      requirements: [
        "Currently, citizens of most countries are eligible for eVisa except some restricted nationalities",
        "Key eligible countries include USA, UK, Canada, Australia, most European nations, and many Asian countries",
        "Pakistan, Bangladesh, and some other countries have restrictions",
        "Visit the official eVisa website to check your eligibility",
      ],
      applicationLinks: [
        {
          text: "India eVisa Eligibility Check",
          url: "https://indianvisaonline.gov.in/evisa/tvoa.html",
        },
      ],
      processingTime: "Immediate eligibility check",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r1", "r15"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-19",
    author: "Max",
    countries: ["India"],
  },
};
