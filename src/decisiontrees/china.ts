import { VisaDecisionTree } from "./model";

export const chinaVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the primary purpose of your visit to China?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Leisure", nextQuestionId: "q2" },
        { id: "a2", text: "Business/Trade", nextQuestionId: "q3" },
        { id: "a3", text: "Work/Employment", nextQuestionId: "q4" },
        { id: "a4", text: "Study/Education", nextQuestionId: "q5" },
        { id: "a5", text: "Family Visit/Reunion", nextQuestionId: "q6" },
        { id: "a6", text: "Transit Through China", nextQuestionId: "q11" },
        { id: "a7", text: "Journalism/Media Activities", nextQuestionId: "r8" },
      ],
      helpText: "Select the main reason for your visit to China",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in China?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 15 days", nextQuestionId: "q7" },
        { id: "a2", text: "15-30 days", nextQuestionId: "r1" },
        { id: "a3", text: "30-90 days", nextQuestionId: "r1" },
        { id: "a4", text: "More than 90 days", nextQuestionId: "r11" },
      ],
      helpText:
        "Duration affects visa type and eligibility for certain exemptions",
    },

    q3: {
      id: "q3",
      text: "What type of business activities will you be conducting?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Business meetings/negotiations",
          nextQuestionId: "q8",
        },
        { id: "a2", text: "Trade fair/exhibition", nextQuestionId: "q8" },
        {
          id: "a3",
          text: "Technology/knowledge transfer or training",
          nextQuestionId: "q8",
        },
        { id: "a4", text: "Investment activities", nextQuestionId: "q8" },
        { id: "a5", text: "Signing business contracts", nextQuestionId: "q8" },
      ],
      helpText:
        "Different business activities may qualify for different visa types",
    },

    q4: {
      id: "q4",
      text: "What type of work will you be doing in China?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Regular employment with Chinese company/organization",
          nextQuestionId: "r3",
        },
        {
          id: "a2",
          text: "Short-term work (under 90 days)",
          nextQuestionId: "r3",
        },
        {
          id: "a3",
          text: "High-level executive/specialist",
          nextQuestionId: "r4",
        },
        { id: "a4", text: "Teaching/education", nextQuestionId: "r5" },
        {
          id: "a5",
          text: "Cultural/entertainment performance",
          nextQuestionId: "r6",
        },
      ],
      helpText:
        "Work visa categories depend on the nature and duration of work",
    },

    q5: {
      id: "q5",
      text: "What type of educational program will you be attending?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Long-term degree program (6+ months)",
          nextQuestionId: "r7",
        },
        {
          id: "a2",
          text: "Short-term study (less than 6 months)",
          nextQuestionId: "r7",
        },
        { id: "a3", text: "Language program", nextQuestionId: "r7" },
        {
          id: "a4",
          text: "Research or academic exchange",
          nextQuestionId: "r9",
        },
        {
          id: "a5",
          text: "Internship as part of studies",
          nextQuestionId: "r10",
        },
      ],
      helpText:
        "Different educational programs may require different visa types",
    },

    q6: {
      id: "q6",
      text: "What is your relationship with the person you're visiting in China?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Spouse of Chinese citizen/permanent resident",
          nextQuestionId: "q9",
        },
        {
          id: "a2",
          text: "Parent/child of Chinese citizen/permanent resident",
          nextQuestionId: "q9",
        },
        {
          id: "a3",
          text: "Other relative of Chinese citizen/permanent resident",
          nextQuestionId: "r12",
        },
        { id: "a4", text: "Friend or non-relative", nextQuestionId: "r1" },
      ],
      helpText:
        "Family relationships affect the type of visa you may be eligible for",
    },

    q7: {
      id: "q7",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Eligible for visa-free transit (US, Canada, UK, etc.)",
          nextQuestionId: "r13",
        },
        {
          id: "a2",
          text: "Not eligible for visa-free transit",
          nextQuestionId: "r1",
        },
        {
          id: "a3",
          text: "Singapore, Brunei, or Japan national",
          nextQuestionId: "r14",
        },
      ],
      helpText:
        "Some nationalities qualify for visa exemptions or simplified procedures",
    },

    q8: {
      id: "q8",
      text: "How long will your business visit last?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 15 days", nextQuestionId: "q7" },
        { id: "a2", text: "15-30 days", nextQuestionId: "r2" },
        { id: "a3", text: "30-90 days", nextQuestionId: "r2" },
        { id: "a4", text: "More than 90 days", nextQuestionId: "r2" },
      ],
      helpText:
        "Duration affects visa type and eligibility for certain exemptions",
    },

    q9: {
      id: "q9",
      text: "How long do you plan to stay with your family member?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Short visit (less than 90 days)",
          nextQuestionId: "r12",
        },
        { id: "a2", text: "Long-term stay (90+ days)", nextQuestionId: "q10" },
        {
          id: "a3",
          text: "Planning to settle permanently",
          nextQuestionId: "r15",
        },
      ],
      helpText: "Duration of stay affects the appropriate visa type",
    },

    q10: {
      id: "q10",
      text: "Do you have documentation proving your family relationship?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Yes, I have marriage/birth certificates or official documents",
          nextQuestionId: "r12",
        },
        {
          id: "a2",
          text: "No, I don't have official documentation",
          nextQuestionId: "r16",
        },
      ],
      helpText:
        "Official documentation of family relationships is required for family reunion visas",
    },

    q11: {
      id: "q11",
      text: "How long will you be in transit through China?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Less than 24 hours (without leaving airport)",
          nextQuestionId: "r17",
        },
        {
          id: "a2",
          text: "24-72 hours (planning to leave airport)",
          nextQuestionId: "q12",
        },
        {
          id: "a3",
          text: "72-144 hours (planning to leave airport)",
          nextQuestionId: "q12",
        },
        { id: "a4", text: "More than 144 hours", nextQuestionId: "r1" },
      ],
      helpText:
        "Transit duration and whether you'll leave the airport affects visa requirements",
    },

    q12: {
      id: "q12",
      text: "Which major city will you enter through?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Shanghai, Guangzhou, Beijing, or other 144-hour visa-free transit city",
          nextQuestionId: "r18",
        },
        {
          id: "a2",
          text: "Chongqing, Xi'an, or other 72-hour visa-free transit city",
          nextQuestionId: "r19",
        },
        {
          id: "a3",
          text: "City not participating in transit visa exemption program",
          nextQuestionId: "r1",
        },
        { id: "a4", text: "I'm not sure", nextQuestionId: "r20" },
      ],
      helpText: "Transit visa exemption policies vary by entry point in China",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "L Visa (Tourist Visa)",
      description:
        "For foreign citizens entering China for tourism, family visits, or other personal matters.",
      requirements: [
        "Valid passport with at least 6 months validity and blank visa pages",
        "Completed visa application form",
        "Recent passport photo (48mm x 33mm with white background)",
        "Itinerary including flight reservation and hotel bookings",
        "For visiting family: Invitation letter from Chinese host",
        "Proof of sufficient funds for your stay",
        "Additional documents may be required based on nationality",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime:
        "4-5 business days (standard); 2-3 business days (express)",
      cost: {
        amount: 140,
        currency: "USD (for US citizens); varies for other nationalities",
      },
      alternativeOptions: ["r2", "r13"],
      applicableCountries: [
        "Most countries require this visa for tourism in China",
      ],
    },

    r2: {
      id: "r2",
      title: "M Visa (Business Visa)",
      description:
        "For foreign citizens entering China for commercial and trade activities.",
      requirements: [
        "Valid passport with at least 6 months validity and blank visa pages",
        "Completed visa application form",
        "Recent passport photo (48mm x 33mm with white background)",
        "Invitation letter from a Chinese business partner or trade fair",
        "Business license of the inviting Chinese company (copy)",
        "Additional documents may be required based on nationality",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime:
        "4-5 business days (standard); 2-3 business days (express)",
      cost: {
        amount: 140,
        currency: "USD (for US citizens); varies for other nationalities",
      },
      alternativeOptions: ["r1", "r3"],
      applicableCountries: [
        "Most countries require this visa for business activities in China",
      ],
    },

    r3: {
      id: "r3",
      title: "Z Visa (Work Visa)",
      description: "For foreign citizens taking up employment in China.",
      requirements: [
        "Valid passport with at least 6 months validity and blank visa pages",
        "Completed visa application form",
        "Recent passport photo (48mm x 33mm with white background)",
        "Notification Letter of Foreigner's Work Permit from Chinese employer",
        "Work permit issued by relevant Chinese authorities",
        "Physical examination record for stays longer than 6 months",
        "Non-criminal record from home country (authenticated)",
        "Employment license from Chinese employer",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime:
        "4-5 business days (standard); 2-3 business days (express)",
      cost: {
        amount: 140,
        currency: "USD (for US citizens); varies for other nationalities",
      },
      alternativeOptions: ["r4", "r2"],
      applicableCountries: [
        "Most countries require this visa for work in China",
      ],
    },

    r4: {
      id: "r4",
      title: "R Visa (Talent Visa)",
      description:
        "For high-level foreign talents or specialists needed in China.",
      requirements: [
        "Valid passport with at least 6 months validity and blank visa pages",
        "Completed visa application form",
        "Recent passport photo (48mm x 33mm with white background)",
        "Confirmation letter from National Immigration Administration",
        "Proof of specialized skills or high-level talent status",
        "Invitation from relevant Chinese organization",
        "Employment contract or assignment letter",
        "Educational and professional credentials",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime:
        "4-5 business days (standard); 2-3 business days (express)",
      cost: {
        amount: 140,
        currency: "USD (for US citizens); varies for other nationalities",
      },
      alternativeOptions: ["r3"],
      applicableCountries: [
        "All countries, subject to qualification as high-level talent",
      ],
    },

    r5: {
      id: "r5",
      title: "Foreign Expert Certificate and Z Visa",
      description:
        "For foreign teachers, educators, and other experts coming to work in China.",
      requirements: [
        "Valid passport with at least 6 months validity and blank visa pages",
        "Completed visa application form",
        "Recent passport photo (48mm x 33mm with white background)",
        "Foreign Expert Certificate or Notification Letter of Work Permit",
        "Invitation letter from Chinese educational institution",
        "Educational credentials (authenticated)",
        "Resume/CV and teaching experience documentation",
        "Physical examination record",
        "Non-criminal record (authenticated)",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime:
        "4-5 business days (standard); 2-3 business days (express)",
      cost: {
        amount: 140,
        currency: "USD (for US citizens); varies for other nationalities",
      },
      alternativeOptions: ["r3", "r7"],
      applicableCountries: [
        "Most countries require this visa for teaching in China",
      ],
    },

    r6: {
      id: "r6",
      title: "Commercial Performance (F Visa or Z Visa)",
      description:
        "For performers, entertainers, or artists participating in commercial performances in China.",
      requirements: [
        "Valid passport with at least 6 months validity and blank visa pages",
        "Completed visa application form",
        "Recent passport photo (48mm x 33mm with white background)",
        "Approval from Chinese Ministry of Culture (for commercial performances)",
        "Invitation letter from Chinese host/organizer",
        "Performance details including dates, venues, and content",
        "For short performances: F Visa may be sufficient",
        "For longer engagements: Work permit and Z Visa required",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime:
        "4-5 business days (standard); 2-3 business days (express)",
      cost: {
        amount: 140,
        currency: "USD (for US citizens); varies for other nationalities",
      },
      alternativeOptions: ["r2", "r3"],
      applicableCountries: [
        "Most countries require this visa for performances in China",
      ],
    },

    r7: {
      id: "r7",
      title: "X Visa (Student Visa)",
      description:
        "For foreign citizens coming to China for study, advanced education, or internship.",
      requirements: [
        "Valid passport with at least 6 months validity and blank visa pages",
        "Completed visa application form",
        "Recent passport photo (48mm x 33mm with white background)",
        "Admission Letter from Chinese educational institution",
        "JW201 or JW202 form (Visa Application for Study in China)",
        "Physical examination record for stays longer than 6 months",
        "For X1 Visa (long-term): Additional documentation may be required",
        "For X2 Visa (short-term, less than 180 days): Simplified requirements",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime:
        "4-5 business days (standard); 2-3 business days (express)",
      cost: {
        amount: 140,
        currency: "USD (for US citizens); varies for other nationalities",
      },
      alternativeOptions: ["r9", "r1"],
      applicableCountries: [
        "Most countries require this visa for studying in China",
      ],
    },

    r8: {
      id: "r8",
      title: "J Visa (Journalist Visa)",
      description:
        "For foreign journalists or media staff visiting China for news coverage or media activities.",
      requirements: [
        "Valid passport with at least 6 months validity and blank visa pages",
        "Completed visa application form",
        "Recent passport photo (48mm x 33mm with white background)",
        "Approval from Information Department of Ministry of Foreign Affairs",
        "Official letter from employing media organization",
        "Press card or journalist credentials",
        "J1 Visa: For resident journalists stationed in China",
        "J2 Visa: For short-term journalistic visits",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime:
        "7-10 business days or longer (requires special approval)",
      cost: {
        amount: 140,
        currency: "USD (for US citizens); varies for other nationalities",
      },
      alternativeOptions: ["r2"],
      applicableCountries: [
        "Most countries require this visa for journalistic activities in China",
      ],
    },

    r9: {
      id: "r9",
      title: "F Visa (Exchange and Visit Visa)",
      description:
        "For foreign citizens conducting exchanges, visits, or research that are not for commercial purposes.",
      requirements: [
        "Valid passport with at least 6 months validity and blank visa pages",
        "Completed visa application form",
        "Recent passport photo (48mm x 33mm with white background)",
        "Invitation letter from Chinese host organization/institution",
        "Details of exchange program or research activities",
        "For researchers: Research proposal and relevant credentials",
        "For academic exchanges: Details of the exchange program",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime:
        "4-5 business days (standard); 2-3 business days (express)",
      cost: {
        amount: 140,
        currency: "USD (for US citizens); varies for other nationalities",
      },
      alternativeOptions: ["r7", "r1"],
      applicableCountries: [
        "Most countries require this visa for exchanges and non-commercial visits to China",
      ],
    },

    r10: {
      id: "r10",
      title: "X2 Visa (Short-term Student Visa)",
      description:
        "For foreign students participating in short-term programs or internships in China.",
      requirements: [
        "Valid passport with at least 6 months validity and blank visa pages",
        "Completed visa application form",
        "Recent passport photo (48mm x 33mm with white background)",
        "Admission Letter from Chinese educational institution",
        "For internships: Additional approval from relevant authorities",
        "Proof of enrollment at home institution (for exchange students)",
        "Proof of financial support",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime:
        "4-5 business days (standard); 2-3 business days (express)",
      cost: {
        amount: 140,
        currency: "USD (for US citizens); varies for other nationalities",
      },
      alternativeOptions: ["r7", "r9"],
      applicableCountries: [
        "Most countries require this visa for short-term study in China",
      ],
    },

    r11: {
      id: "r11",
      title: "Long-term L Visa (Multiple Entry)",
      description:
        "For tourists requiring longer or multiple visits to China over an extended period.",
      requirements: [
        "Valid passport with at least 6 months validity and blank visa pages",
        "Completed visa application form",
        "Recent passport photo (48mm x 33mm with white background)",
        "Detailed itinerary covering the extended period",
        "Proof of sufficient funds for extended stay",
        "Prior travel history to China may be helpful",
        "Strong justification for long-term visa request",
        "Additional documents may be required based on nationality",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime:
        "4-5 business days (standard); 2-3 business days (express)",
      cost: {
        amount: 140,
        currency: "USD (for US citizens); varies for other nationalities",
      },
      alternativeOptions: ["r1", "r12"],
      applicableCountries: [
        "Most countries, though approval for long-term multiple entry visas varies by nationality",
      ],
    },

    r12: {
      id: "r12",
      title: "Q Visa (Family Reunion Visa)",
      description:
        "For relatives of Chinese citizens or permanent residents visiting for family reunion.",
      requirements: [
        "Valid passport with at least 6 months validity and blank visa pages",
        "Completed visa application form",
        "Recent passport photo (48mm x 33mm with white background)",
        "Invitation letter from Chinese family member",
        "Proof of relationship (marriage certificate, birth certificate, etc.)",
        "Copy of Chinese family member's ID or passport",
        "Q1 Visa: For long-term family reunion (over 180 days)",
        "Q2 Visa: For short-term family visits (under 180 days)",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime:
        "4-5 business days (standard); 2-3 business days (express)",
      cost: {
        amount: 140,
        currency: "USD (for US citizens); varies for other nationalities",
      },
      alternativeOptions: ["r1", "r15"],
      applicableCountries: [
        "Most countries, though documentation requirements may vary by nationality",
      ],
    },

    r13: {
      id: "r13",
      title: "Visa-Free Transit (24/72/144 hours)",
      description:
        "For eligible nationalities transiting through certain Chinese cities without a visa for limited duration.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Confirmed onward ticket to a third country (not the country you departed from)",
        "Stay within the administrative area of the entry port",
        "Enter and exit through eligible ports of entry",
        "Not applicable for all nationalities (53 countries currently eligible)",
        "Must not have a record of illegal stay or deportation from China",
      ],
      applicationLinks: [
        {
          text: "China Visa-Free Transit Information",
          url: "https://www.travelchinaguide.com/embassy/visa/free-transit-144hour.htm",
        },
      ],
      processingTime: "N/A (processed upon arrival)",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r1", "r17"],
      applicableCountries: [
        "53 countries including US, Canada, UK, Australia, most EU countries, Japan, South Korea, Russia, UAE, Qatar",
      ],
    },

    r14: {
      id: "r14",
      title: "Visa Exemption for Selected Countries",
      description:
        "For citizens of Singapore, Brunei, and Japan who qualify for visa-free short visits to China.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Return/onward ticket",
        "Singapore: Stay up to 15 days for business, tourism, or family visits",
        "Brunei: Stay up to 15 days for business, tourism, or family visits",
        "Japan: Only applies to specific visit types or under bilateral agreements",
        "Entry through authorized ports",
        "May require additional documentation",
      ],
      applicationLinks: [
        {
          text: "Chinese Embassy in Singapore",
          url: "http://www.chinaembassy.org.sg/eng/",
        },
      ],
      processingTime: "N/A (no visa required)",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r1", "r2"],
      applicableCountries: ["Singapore, Brunei, Japan (with limitations)"],
    },

    r15: {
      id: "r15",
      title: "Permanent Residence / Chinese Green Card",
      description:
        "For foreign nationals seeking permanent residence status in China based on family ties, investment, or extraordinary contributions.",
      requirements: [
        "Valid passport",
        "Application form for Permanent Residence of Aliens",
        "Health certificate issued by designated medical institution",
        "No criminal record certificate",
        "Proof of residence in China",
        "For family-based: Proof of relationship with Chinese citizen/permanent resident",
        "Married to Chinese citizen and lived in China for 5 years",
        "Substantial investment in China",
        "Made significant contributions to China",
        "Very difficult to obtain - approval rates are low",
      ],
      applicationLinks: [
        {
          text: "National Immigration Administration of China",
          url: "https://www.nia.gov.cn/",
        },
      ],
      processingTime: "6 months or longer",
      cost: {
        amount: 1500,
        currency: "CNY (approximately)",
      },
      alternativeOptions: ["r12", "r3"],
      applicableCountries: [
        "All countries, subject to strict qualification requirements",
      ],
    },

    r16: {
      id: "r16",
      title: "Documentation Requirements for Family Visa",
      description:
        "Important information for those lacking proper documentation for family reunion visas.",
      requirements: [
        "Official documentation of family relationships is mandatory",
        "Marriage certificates must be authenticated in your home country",
        "Birth certificates must be authenticated for parent-child relationships",
        "Documents not in Chinese require certified translation",
        "In absence of proper documentation, consider applying for L (Tourist) Visa instead",
        "Consult with the Chinese consulate about acceptable alternative documentation",
      ],
      applicationLinks: [
        {
          text: "Chinese Visa Application Service Center",
          url: "https://www.visaforchina.org/",
        },
      ],
      processingTime: "N/A (informational only)",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r1", "r12"],
      applicableCountries: ["All countries"],
    },

    r17: {
      id: "r17",
      title: "24-Hour Direct Transit Exemption",
      description:
        "For international travelers not leaving the international transit area of Chinese airports during transit of less than 24 hours.",
      requirements: [
        "Valid passport",
        "Confirmed onward ticket to a third country departing within 24 hours",
        "Remain in the international transit area",
        "Not applicable for all transit points in China",
        "Check with your airline in advance",
      ],
      applicationLinks: [
        {
          text: "China Visa-Free Transit Information",
          url: "https://www.travelchinaguide.com/embassy/visa/free-transit-144hour.htm",
        },
      ],
      processingTime: "N/A (processed upon arrival)",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r13", "r1"],
      applicableCountries: [
        "Most countries, though policies may vary by nationality",
      ],
    },

    r18: {
      id: "r18",
      title: "144-Hour Visa-Free Transit",
      description:
        "For eligible nationalities transiting through major Chinese cities with permission to stay up to 144 hours without a visa.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Confirmed ticket to a third country (not your departure country) within 144 hours",
        "Stay restricted to the administrative area of the entry point",
        "Eligible entry points include Shanghai, Beijing, Guangzhou, Shenzhen, Chengdu, Xi'an, and other designated cities/regions",
        "Complete temporary entry card on flight",
        "Nationality must be on the eligible countries list (53 countries)",
      ],
      applicationLinks: [
        {
          text: "China 144-Hour Visa-Free Transit Information",
          url: "https://www.travelchinaguide.com/embassy/visa/free-transit-144hour.htm",
        },
      ],
      processingTime: "Processed upon arrival",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r19", "r1"],
      applicableCountries: [
        "53 countries including US, Canada, UK, Australia, most EU countries, Japan, South Korea, Russia, UAE, Qatar",
      ],
    },

    r19: {
      id: "r19",
      title: "72-Hour Visa-Free Transit",
      description:
        "For eligible nationalities transiting through specific Chinese cities with permission to stay up to 72 hours without a visa.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Confirmed ticket to a third country (not your departure country) within 72 hours",
        "Stay restricted to the city of entry",
        "Eligible entry points include cities offering 72-hour transit policy",
        "Complete temporary entry card on flight",
        "Nationality must be on the eligible countries list (53 countries)",
      ],
      applicationLinks: [
        {
          text: "China 72-Hour Visa-Free Transit Information",
          url: "https://www.travelchinaguide.com/embassy/visa/free-transit-144hour.htm",
        },
      ],
      processingTime: "Processed upon arrival",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r18", "r1"],
      applicableCountries: [
        "53 countries including US, Canada, UK, Australia, most EU countries, Japan, South Korea, Russia, UAE, Qatar",
      ],
    },

    r20: {
      id: "r20",
      title: "Check Transit Visa Exemption Eligibility",
      description:
        "Information to determine if your transit city offers visa-free transit and if your nationality is eligible.",
      requirements: [
        "Currently 53 countries are eligible for transit visa exemptions",
        "Major eligible nationalities include US, Canada, UK, Australia, most EU countries",
        "Cities offering 144-hour policy: Shanghai, Jiangsu, Zhejiang, Beijing, Tianjin, Hebei, Guangdong, etc.",
        "Cities offering 72-hour policy: Chongqing, Xi'an, Guilin, Changsha, etc.",
        "Always check the latest policy as it may change",
        "Must have onward ticket to a third country (not country of departure)",
      ],
      applicationLinks: [
        {
          text: "China Transit Visa Policy Information",
          url: "https://www.travelchinaguide.com/embassy/visa/free-transit-144hour.htm",
        },
      ],
      processingTime: "N/A (informational only)",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r1", "r17"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-19",
    author: "Max",
    countries: ["China"],
  },
};
