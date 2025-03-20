import { VisaDecisionTree } from './model';

export const northkoreaVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is your primary purpose for visiting North Korea (DPRK)?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism with an organized tour group", nextQuestionId: "q2" },
        { id: "a2", text: "Business/Official visit", nextQuestionId: "q3" },
        { id: "a3", text: "Journalism or media-related activities", nextQuestionId: "r3" },
        { id: "a4", text: "Diplomatic mission", nextQuestionId: "r4" },
        { id: "a5", text: "Humanitarian work", nextQuestionId: "q4" },
      ],
      helpText: "Note: Independent travel to North Korea is not permitted. All visitors must have pre-arranged travel with authorized agencies.",
    },

    q2: {
      id: "q2",
      text: "What is your citizenship?",
      answerType: "single",
      options: [
        { id: "a1", text: "United States (US citizen or using US passport)", nextQuestionId: "r5" },
        { id: "a2", text: "South Korean", nextQuestionId: "r6" },
        { id: "a3", text: "Chinese", nextQuestionId: "r7" },
        { id: "a4", text: "Other nationality", nextQuestionId: "r1" },
      ],
      helpText: "Some nationalities face additional restrictions or different procedures for North Korean entry.",
    },

    q3: {
      id: "q3",
      text: "What type of business or official activities will you conduct?",
      answerType: "single",
      options: [
        { id: "a1", text: "Trade delegation or economic cooperation", nextQuestionId: "r2" },
        { id: "a2", text: "Academic or educational exchange", nextQuestionId: "r2" },
        { id: "a3", text: "Cultural or sports exchange", nextQuestionId: "r2" },
        { id: "a4", text: "Scientific cooperation", nextQuestionId: "r2" },
      ],
      helpText: "Business visits require invitation from a North Korean organization and government approval.",
    },

    q4: {
      id: "q4",
      text: "Do you represent a recognized international humanitarian organization?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, with pre-approval from North Korean authorities", nextQuestionId: "r8" },
        { id: "a2", text: "No, or uncertain status", nextQuestionId: "r9" },
      ],
      helpText: "Humanitarian work requires specific approval and is typically limited to recognized international organizations.",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Tourist Visa for North Korea",
      description: 
        "A visa for foreigners visiting North Korea as part of an authorized tour group. Independent travel is not permitted.",
      requirements: [
        "Valid passport with at least 6 months validity beyond intended stay",
        "Confirmed booking with an authorized North Korean tour agency",
        "Letter of invitation from a North Korean travel partner",
        "Completed visa application form",
        "Two passport-sized photos",
        "Visa application must be processed through the North Korean embassy or consulate in your country or a third country",
        "Tour booking typically includes visa processing services",
        "Must enter and exit with tour group",
        "All itineraries must be pre-approved and visitors must be accompanied by government guides at all times",
      ],
      applicationLinks: [
        {
          text: "Contact authorized tour agencies for visa assistance",
          url: "https://koryogroup.com/travel-to-north-korea",
        },
      ],
      processingTime: "2-4 weeks (varies by embassy and nationality)",
      cost: {
        amount: 50,
        currency: "EUR (approximate fee, may vary)",
      },
      alternativeOptions: [],
      applicableCountries: ["Most countries except South Korea, US (special permission required), and others with specific restrictions"],
    },

    r2: {
      id: "r2",
      title: "Business/Official Visa for North Korea",
      description: 
        "A visa for business delegates, academic exchanges, or official visitors to North Korea.",
      requirements: [
        "Valid passport with at least 6 months validity beyond intended stay",
        "Official invitation letter from a North Korean organization",
        "Approval from relevant North Korean government departments",
        "Detailed schedule and purpose of visit",
        "Company or organization letter indicating the purpose of your visit",
        "Completed visa application form",
        "Two passport-sized photos",
        "Visa application must be processed through the North Korean embassy or consulate",
        "Visitors must be accompanied by government-approved guides/minders",
      ],
      applicationLinks: [
        {
          text: "Contact the DPRK embassy or consulate in your country",
          url: "https://www.embassypages.com/korea-democratic-peoples-republic-of",
        },
      ],
      processingTime: "3-6 weeks",
      cost: {
        amount: 60,
        currency: "EUR (approximate fee, may vary)",
      },
      alternativeOptions: [],
      applicableCountries: ["Most countries with diplomatic relations with North Korea, with exceptions"],
    },

    r3: {
      id: "r3",
      title: "Journalist Visa (Restricted)",
      description: 
        "A highly restricted visa for accredited journalists visiting North Korea for specific, approved events.",
      requirements: [
        "Valid press credentials and accreditation",
        "Formal invitation to cover a specific event",
        "Prior approval from the North Korean Ministry of Foreign Affairs",
        "Detailed declaration of all media equipment",
        "Security clearance and background check",
        "Strict limitations on movement and reporting",
        "Accompanied by government minders at all times",
        "Content review before leaving the country",
        "Note: Rarely granted outside of major state events",
      ],
      applicationLinks: [
        {
          text: "Applications must be made through diplomatic channels",
          url: "https://www.embassypages.com/korea-democratic-peoples-republic-of",
        },
      ],
      processingTime: "1-3 months (if approved)",
      cost: {
        amount: 80,
        currency: "EUR (approximate fee, may vary)",
      },
      alternativeOptions: ["r1"],
      applicableCountries: ["Highly selective; generally limited to countries with good relations with North Korea"],
    },

    r4: {
      id: "r4",
      title: "Diplomatic Visa",
      description: 
        "For accredited diplomats and official representatives to North Korea.",
      requirements: [
        "Diplomatic passport",
        "Official government assignment to North Korea",
        "Formal diplomatic credentials",
        "Note verbal from sending ministry of foreign affairs",
        "Approval from North Korean Ministry of Foreign Affairs",
        "Typical diplomatic protocols apply",
      ],
      applicationLinks: [
        {
          text: "Process handled through diplomatic channels",
          url: "https://www.embassypages.com/korea-democratic-peoples-republic-of",
        },
      ],
      processingTime: "Variable, depending on diplomatic relations",
      cost: {
        amount: 0,
        currency: "EUR (typically no fee for diplomatic visas)",
      },
      alternativeOptions: [],
      applicableCountries: ["Countries with diplomatic relations with North Korea"],
    },

    r5: {
      id: "r5",
      title: "Special Validation Passport (US Citizens)",
      description: 
        "US citizens require a special validation on their passport from the US Department of State to travel to North Korea, in addition to a North Korean visa.",
      requirements: [
        "US passport with special validation from US Department of State (extremely limited)",
        "Compelling humanitarian reason for travel",
        "US national interest justification",
        "Application for special validation through US State Department",
        "North Korean tourist visa requirements (if special validation is granted)",
        "Note: US travel ban to North Korea has been in effect since September 2017",
        "Special validations are granted only in extremely limited circumstances",
      ],
      applicationLinks: [
        {
          text: "US Special Validation Information",
          url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/KoreaDemocraticPeoplesRepublicof.html",
        },
      ],
      processingTime: "Variable, case-by-case basis",
      cost: {
        amount: 0,
        currency: "USD (for special validation; regular North Korean visa fees would still apply)",
      },
      alternativeOptions: [],
      applicableCountries: ["United States"],
    },

    r6: {
      id: "r6",
      title: "Not Available (South Korean Citizens)",
      description: 
        "South Korean citizens are generally not permitted to visit North Korea without special authorization.",
      requirements: [
        "South Korean citizens are prohibited from traveling to North Korea under South Korean law (National Security Act)",
        "Special permission from both South Korean and North Korean governments would be required",
        "Typically limited to very specific diplomatic, humanitarian, or reunification events",
        "Direct contact between the two Koreas is heavily restricted",
      ],
      applicationLinks: [
        {
          text: "South Korean Ministry of Unification (for exceptional cases)",
          url: "https://www.unikorea.go.kr/eng_unikorea/",
        },
      ],
      processingTime: "Not applicable for standard tourism",
      cost: {
        amount: 0,
        currency: "KRW (Not applicable for standard tourism)",
      },
      alternativeOptions: [],
      applicableCountries: ["South Korea"],
    },

    r7: {
      id: "r7",
      title: "Chinese Tourist Travel Document",
      description: 
        "Chinese citizens have a simplified process for traveling to North Korea, particularly from border regions.",
      requirements: [
        "Valid Chinese passport or border pass (for residents of border regions)",
        "Group tour booking through authorized Chinese travel agencies",
        "Simplified visa process compared to other nationalities",
        "Border permits available for day trips from Dandong to Sinuiju",
        "All tours still require North Korean guides",
        "Pre-arranged itinerary",
      ],
      applicationLinks: [
        {
          text: "Travel agencies in China specializing in North Korean tours",
          url: "https://www.chinakoreatour.com/north-korea-tours/",
        },
      ],
      processingTime: "1-3 weeks",
      cost: {
        amount: 30,
        currency: "EUR (approximate, often included in tour package)",
      },
      alternativeOptions: [],
      applicableCountries: ["China"],
    },

    r8: {
      id: "r8",
      title: "Humanitarian Work Visa",
      description: 
        "For representatives of recognized international humanitarian organizations with prior approval to work in North Korea.",
      requirements: [
        "Formal invitation from North Korean counterpart organization",
        "Approval from relevant North Korean ministries",
        "Membership in recognized international organization (UN agencies, IFRC, etc.)",
        "Detailed work plan approved by North Korean authorities",
        "Security clearance",
        "Limitations on movement and activities apply",
        "Regular reporting to North Korean authorities",
        "May require multiple entry permissions for ongoing projects",
      ],
      applicationLinks: [
        {
          text: "Typically arranged through organization and diplomatic channels",
          url: "https://www.embassypages.com/korea-democratic-peoples-republic-of",
        },
      ],
      processingTime: "1-3 months",
      cost: {
        amount: 50,
        currency: "EUR (approximate, may be waived for humanitarian organizations)",
      },
      alternativeOptions: [],
      applicableCountries: ["All countries with diplomatic relations with North Korea"],
    },

    r9: {
      id: "r9",
      title: "Not Available (Unrecognized Humanitarian Work)",
      description: 
        "Individuals or organizations without prior approval for humanitarian work cannot obtain appropriate visas for North Korea.",
      requirements: [
        "North Korea strictly controls all humanitarian activities within its borders",
        "Only organizations with formal agreements with North Korean authorities can conduct humanitarian work",
        "Individual humanitarian missions without organizational backing are not permitted",
        "Consider contacting established organizations already working in North Korea",
        "Alternative: Tourist visa does not permit humanitarian activities",
      ],
      applicationLinks: [
        {
          text: "UN Resident Coordinator's Office DPRK",
          url: "https://dprkorea.un.org/",
        },
      ],
      processingTime: "Not applicable",
      cost: {
        amount: 0,
        currency: "EUR (Not applicable)",
      },
      alternativeOptions: ["r1"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-20",
    author: "Emma",
    countries: ["North Korea"],
  },
};