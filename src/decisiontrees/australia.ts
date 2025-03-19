import { VisaDecisionTree } from './model';

export const australiaVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the primary purpose of your visit to Australia?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Holiday", nextQuestionId: "q2" },
        { id: "a2", text: "Work/Business", nextQuestionId: "q3" },
        { id: "a3", text: "Study", nextQuestionId: "q4" },
        { id: "a4", text: "Family/Partner Migration", nextQuestionId: "q5" },
        { id: "a5", text: "Skilled Migration", nextQuestionId: "q6" },
      ],
      helpText: "Select the main reason for your visit to Australia",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in Australia?",
      answerType: "single",
      options: [
        { id: "a1", text: "Up to 3 months", nextQuestionId: "q7" },
        { id: "a2", text: "3-12 months", nextQuestionId: "q8" },
        { id: "a3", text: "More than 12 months", nextQuestionId: "r19" },
      ],
      helpText: "The duration of your stay affects the type of visa you need",
    },

    q3: {
      id: "q3",
      text: "What type of work will you be doing in Australia?",
      answerType: "single",
      options: [
        { id: "a1", text: "Employer sponsored work", nextQuestionId: "q9" },
        { id: "a2", text: "Working holiday/gap year", nextQuestionId: "q10" },
        { id: "a3", text: "Short-term specialized work", nextQuestionId: "q11" },
        { id: "a4", text: "Business visitor activities only (no work)", nextQuestionId: "q7" },
        { id: "a5", text: "Seasonal farm work", nextQuestionId: "r6" },
      ],
      helpText: "Different work activities require different visa types",
    },

    q4: {
      id: "q4",
      text: "What type of study will you be undertaking?",
      answerType: "single",
      options: [
        { id: "a1", text: "Full-time course more than 3 months", nextQuestionId: "r7" },
        { id: "a2", text: "Short course or training (less than 3 months)", nextQuestionId: "q7" },
        { id: "a3", text: "Research as a student", nextQuestionId: "r7" },
        { id: "a4", text: "English language course", nextQuestionId: "r7" },
      ],
      helpText: "The type and length of your studies determines which visa you need",
    },

    q5: {
      id: "q5",
      text: "What is your relationship with the Australian person?",
      answerType: "single",
      options: [
        { id: "a1", text: "Spouse/partner of Australian citizen or permanent resident", nextQuestionId: "r8" },
        { id: "a2", text: "Fiancé(e) of Australian citizen or permanent resident", nextQuestionId: "r9" },
        { id: "a3", text: "Parent of Australian citizen or permanent resident", nextQuestionId: "r10" },
        { id: "a4", text: "Child of Australian citizen or permanent resident", nextQuestionId: "r11" },
        { id: "a5", text: "Just visiting family (no migration intent)", nextQuestionId: "q7" },
      ],
      helpText: "Your relationship with an Australian resident determines visa eligibility",
    },

    q6: {
      id: "q6",
      text: "Which skilled migration pathway are you considering?",
      answerType: "single",
      options: [
        { id: "a1", text: "Points-based independent skilled migration", nextQuestionId: "r12" },
        { id: "a2", text: "State/Territory nominated skilled migration", nextQuestionId: "r13" },
        { id: "a3", text: "Skilled employer sponsored migration", nextQuestionId: "r14" },
        { id: "a4", text: "I'm not sure which pathway is right for me", nextQuestionId: "q12" },
      ],
      helpText: "Australia has several pathways for skilled migration",
    },

    q7: {
      id: "q7",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        { id: "a1", text: "New Zealand citizen", nextQuestionId: "r15" },
        { id: "a2", text: "eVisitor eligible country (most European countries)", nextQuestionId: "r1" },
        { id: "a3", text: "ETA eligible country (including USA, Canada, Japan)", nextQuestionId: "r2" },
        { id: "a4", text: "Other country", nextQuestionId: "r3" },
      ],
      helpText: "Your nationality determines which tourist visa options are available to you",
    },

    q8: {
      id: "q8",
      text: "Do you plan to work during your extended stay?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, I want to work while visiting", nextQuestionId: "q10" },
        { id: "a2", text: "No, just tourism and leisure", nextQuestionId: "r4" },
      ],
      helpText: "If you want to work during your visit, you may need a specific visa",
    },

    q9: {
      id: "q9",
      text: "What is the nature of your employer sponsorship?",
      answerType: "single",
      options: [
        { id: "a1", text: "Temporary skill shortage (up to 4 years)", nextQuestionId: "r16" },
        { id: "a2", text: "Permanent employer sponsored position", nextQuestionId: "r14" },
        { id: "a3", text: "Intra-company transfer", nextQuestionId: "r16" },
        { id: "a4", text: "My employer hasn't offered sponsorship yet", nextQuestionId: "r17" },
      ],
      helpText: "Different employer sponsorship arrangements have different visa requirements",
    },

    q10: {
      id: "q10",
      text: "Are you eligible for a Working Holiday visa?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, I'm 18-30 (35 for some countries) from an eligible country", nextQuestionId: "r5" },
        { id: "a2", text: "No, I'm not eligible", nextQuestionId: "q11" },
        { id: "a3", text: "I'm not sure", nextQuestionId: "q13" },
      ],
      helpText: "Working Holiday visas have specific age and nationality requirements",
    },

    q11: {
      id: "q11",
      text: "What type of short-term work will you be doing?",
      answerType: "single",
      options: [
        { id: "a1", text: "Highly specialized work", nextQuestionId: "r18" },
        { id: "a2", text: "Entertainment or film production", nextQuestionId: "r18" },
        { id: "a3", text: "Sporting event or activity", nextQuestionId: "r18" },
        { id: "a4", text: "Religious work", nextQuestionId: "r18" },
      ],
      helpText: "Different types of temporary work may qualify for different visas",
    },

    q12: {
      id: "q12",
      text: "What is your occupation?",
      answerType: "single",
      options: [
        { id: "a1", text: "Healthcare professional", nextQuestionId: "r12" },
        { id: "a2", text: "IT or technology professional", nextQuestionId: "r12" },
        { id: "a3", text: "Skilled trade (construction, electrical, etc.)", nextQuestionId: "r12" },
        { id: "a4", text: "Other occupation", nextQuestionId: "r12" },
      ],
      helpText: "Your occupation needs to be on Australia's skilled occupation list",
    },

    q13: {
      id: "q13",
      text: "What is your country of passport?",
      answerType: "single",
      options: [
        { id: "a1", text: "UK, Canada, France, Germany, Italy, etc.", nextQuestionId: "r5" },
        { id: "a2", text: "USA, Japan, South Korea, etc.", nextQuestionId: "r5" },
        { id: "a3", text: "Other country", nextQuestionId: "r17" },
      ],
      helpText: "Working Holiday visas are available to citizens of specific countries",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "eVisitor (subclass 651)",
      description: 
        "A free visa for short stays for tourism or business purposes for citizens of European countries and some others.",
      requirements: [
        "Hold a passport from an eligible European or other specified country",
        "Apply online outside Australia",
        "Visit for tourism or business purposes only (no work)",
        "Stay up to 3 months at a time within a 12-month period",
        "Meet health and character requirements",
        "Have no tuberculosis",
        "Have no criminal convictions for which the sentence totaled 12 months or more",
      ],
      applicationLinks: [
        {
          text: "eVisitor (subclass 651)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651",
        },
      ],
      processingTime: "Most applications processed within 3 business days",
      cost: {
        amount: 0,
        currency: "AUD",
      },
      alternativeOptions: ["r3", "r4"],
      applicableCountries: [
        "Andorra", "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", 
        "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", 
        "Iceland", "Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", 
        "Malta", "Monaco", "Netherlands", "Norway", "Poland", "Portugal", "Romania", 
        "San Marino", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", 
        "United Kingdom", "Vatican City"
      ],
    },

    r2: {
      id: "r2",
      title: "Electronic Travel Authority (subclass 601)",
      description: 
        "A quick, electronic visa for short visits for tourism or business purposes for eligible countries.",
      requirements: [
        "Hold a passport from an eligible country (such as the USA, Canada, Japan)",
        "Apply online outside Australia",
        "Visit for tourism or business purposes only (no work)",
        "Stay up to 3 months at a time within a 12-month period",
        "Meet health and character requirements",
        "Have no tuberculosis",
        "Have no criminal convictions for which the sentence totaled 12 months or more",
      ],
      applicationLinks: [
        {
          text: "Electronic Travel Authority (subclass 601)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601",
        },
      ],
      processingTime: "Most applications processed immediately or within 1-2 business days",
      cost: {
        amount: 20,
        currency: "AUD",
      },
      alternativeOptions: ["r3", "r4"],
      applicableCountries: [
        "Brunei", "Canada", "Hong Kong (SAR of China)", "Japan", "Malaysia", 
        "Singapore", "South Korea", "United States"
      ],
    },

    r3: {
      id: "r3",
      title: "Visitor Visa (subclass 600)",
      description: 
        "For visitors from countries not eligible for an ETA or eVisitor who want to visit Australia for tourism or business.",
      requirements: [
        "Apply online or on paper",
        "Visit for tourism or business purposes only (no work)",
        "Usually granted for stays of 3, 6, or 12 months",
        "Meet health and character requirements",
        "Show you have enough money for your stay",
        "Show you have reasons to return to your home country",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Visitor Visa (subclass 600)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600",
        },
      ],
      processingTime: "75% of applications processed within 25 days; 90% within 39 days",
      cost: {
        amount: 370,
        currency: "AUD",
      },
      alternativeOptions: ["r4", "r5"],
      applicableCountries: ["All countries not eligible for ETA or eVisitor"],
    },

    r4: {
      id: "r4",
      title: "Visitor Visa (subclass 600) - Longer Validity",
      description: 
        "For frequent visitors who want to visit Australia multiple times over a longer period.",
      requirements: [
        "Apply online or on paper",
        "Visit for tourism or business purposes only (no work)",
        "Can be granted for 1-3 years (or up to 10 years for certain nationalities)",
        "Each stay limited to 3 months (or up to 12 months in some cases)",
        "Meet health and character requirements",
        "Show you have enough money for your stay",
        "Show you have strong ties to your home country",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Visitor Visa (subclass 600) - Frequent Traveller",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600/tourist-stream",
        },
      ],
      processingTime: "75% of applications processed within 27 days; 90% within 48 days",
      cost: {
        amount: 370,
        currency: "AUD",
      },
      alternativeOptions: ["r3", "r5"],
      applicableCountries: ["All countries"],
    },

    r5: {
      id: "r5",
      title: "Working Holiday Visa (subclass 417 or 462)",
      description: 
        "For young adults who want to work and travel in Australia for up to 12 months (with possible extensions).",
      requirements: [
        "Age 18-30 (or 35 for some countries)",
        "Hold a passport from an eligible country",
        "Not be accompanied by dependent children",
        "Have enough money for your stay (usually AUD $5,000) and return fare",
        "Meet health and character requirements",
        "Have not previously entered Australia on a Working Holiday visa (for first application)",
        "Have education equivalent to high school completion (for subclass 462)",
      ],
      applicationLinks: [
        {
          text: "Working Holiday Visa (subclass 417)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        },
        {
          text: "Work and Holiday Visa (subclass 462)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462",
        },
      ],
      processingTime: "75% of applications processed within 24 days; 90% within 51 days",
      cost: {
        amount: 510,
        currency: "AUD",
      },
      alternativeOptions: ["r3", "r6"],
      applicableCountries: [
        "Subclass 417: Belgium, Canada, Cyprus, Denmark, Estonia, Finland, France, Germany, Hong Kong, Ireland, Italy, Japan, South Korea, Malta, Netherlands, Norway, Sweden, Taiwan, United Kingdom",
        "Subclass 462: Argentina, Austria, Chile, China, Czech Republic, Ecuador, Greece, Hungary, Indonesia, Israel, Luxembourg, Malaysia, Peru, Poland, Portugal, San Marino, Singapore, Slovak Republic, Slovenia, Spain, Thailand, Turkey, USA, Vietnam"
      ],
    },

    r6: {
      id: "r6",
      title: "Seasonal Worker Program (subclass 403)",
      description: 
        "For citizens of participating countries to work in agricultural sectors or accommodation industries in rural and regional Australia.",
      requirements: [
        "Be from a participating Pacific island country or Timor-Leste",
        "Have a job offer from an approved employer in Australia",
        "Work in agriculture, accommodation, or other eligible industries",
        "Meet health and character requirements",
        "Have adequate health insurance for your stay",
        "Cover your own travel costs",
      ],
      applicationLinks: [
        {
          text: "Seasonal Worker Program (subclass 403)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-work-403/seasonal-worker-program",
        },
      ],
      processingTime: "75% of applications processed within 14 days; 90% within 25 days",
      cost: {
        amount: 325,
        currency: "AUD",
      },
      alternativeOptions: ["r5", "r18"],
      applicableCountries: [
        "Fiji", "Kiribati", "Nauru", "Papua New Guinea", "Samoa", "Solomon Islands", 
        "Timor-Leste", "Tonga", "Tuvalu", "Vanuatu"
      ],
    },

    r7: {
      id: "r7",
      title: "Student Visa (subclass 500)",
      description: 
        "For international students to study full-time in Australia at a registered education provider.",
      requirements: [
        "Accepted to study in a registered full-time course",
        "Have Confirmation of Enrolment (CoE) from your education provider",
        "Have genuine intention to study",
        "Meet English language requirements",
        "Have adequate health insurance (OSHC)",
        "Meet health and character requirements",
        "Show you have enough money for course fees, living costs, and travel",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Student Visa (subclass 500)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
        },
      ],
      processingTime: "75% of applications processed within 29 days; 90% within 42 days",
      cost: {
        amount: 710,
        currency: "AUD",
      },
      alternativeOptions: ["r3", "r5"],
      applicableCountries: ["All countries"],
    },

    r8: {
      id: "r8",
      title: "Partner Visa (subclasses 820/801 or 309/100)",
      description: 
        "For spouses or de facto partners of Australian citizens, permanent residents, or eligible New Zealand citizens.",
      requirements: [
        "Be sponsored by an eligible Australian partner",
        "Be in a genuine and ongoing relationship (married or de facto)",
        "Meet health and character requirements",
        "Sponsor must meet character requirements",
        "For de facto relationships: show you've been together for 12 months (with some exceptions)",
        "Pay a substantial application fee",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Partner Visa (subclasses 820 and 801)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/partner-onshore-820-801",
        },
        {
          text: "Partner Visa (subclasses 309 and 100)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/partner-offshore-309-100",
        },
      ],
      processingTime: "75% of applications processed within 20 months; 90% within 28 months",
      cost: {
        amount: 8850,
        currency: "AUD",
      },
      alternativeOptions: ["r9", "r3"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "Prospective Marriage Visa (subclass 300)",
      description: 
        "For people who want to travel to Australia to marry their Australian citizen or permanent resident fiancé(e).",
      requirements: [
        "Be sponsored by an eligible Australian fiancé(e)",
        "Have met in person as adults",
        "Intend to marry within 9 months of arrival and live together",
        "Meet health and character requirements",
        "Sponsor must meet character requirements",
        "Pay a substantial application fee",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Prospective Marriage Visa (subclass 300)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/prospective-marriage-300",
        },
      ],
      processingTime: "75% of applications processed within 15 months; 90% within 22 months",
      cost: {
        amount: 8850,
        currency: "AUD",
      },
      alternativeOptions: ["r8", "r3"],
      applicableCountries: ["All countries"],
    },

    r10: {
      id: "r10",
      title: "Parent Visa (various subclasses)",
      description: 
        "For parents of Australian citizens, permanent residents, or eligible New Zealand citizens.",
      requirements: [
        "Be sponsored by your child who is an Australian citizen, permanent resident, or eligible NZ citizen",
        "Meet the balance of family test (at least half your children live in Australia)",
        "Meet health and character requirements",
        "Pay application fee (which varies by visa subclass)",
        "Provide an Assurance of Support and bond for some visa types",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Parent Visa Options",
          url: "https://immi.homeaffairs.gov.au/visas/bringing-someone/bringing-partner-or-family/bringing-your-parents",
        },
      ],
      processingTime: "Parent (103): 30+ years wait; Contributory Parent (143): 48 months",
      cost: {
        amount: 4350,
        currency: "AUD (standard) or 49,970 AUD (contributory)",
      },
      alternativeOptions: ["r20", "r3"],
      applicableCountries: ["All countries"],
    },

    r11: {
      id: "r11",
      title: "Child Visa (subclass 101 or 802)",
      description: 
        "For dependent children of Australian citizens, permanent residents, or eligible New Zealand citizens.",
      requirements: [
        "Be sponsored by your parent who is an Australian citizen, permanent resident, or eligible NZ citizen",
        "Be under 18, or 18-25 and dependent, or any age with disability",
        "Be unmarried and not in a de facto relationship",
        "Meet health and character requirements (for those aged 16 and older)",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Child Visa (subclass 101)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/child-101",
        },
        {
          text: "Child Visa (subclass 802)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/child-802",
        },
      ],
      processingTime: "75% of applications processed within 14 months; 90% within 21 months",
      cost: {
        amount: 2790,
        currency: "AUD",
      },
      alternativeOptions: ["r7"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "Skilled Independent Visa (subclass 189)",
      description: 
        "For skilled workers who are not sponsored by an employer, family member, or state/territory government.",
      requirements: [
        "Be invited to apply after submitting an Expression of Interest",
        "Be under 45 years of age",
        "Have an occupation on the relevant skilled list",
        "Have a positive skills assessment for your occupation",
        "Score at least 65 points on the points test",
        "Meet health and character requirements",
        "Have competent English",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Skilled Independent Visa (subclass 189)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189",
        },
      ],
      processingTime: "75% of applications processed within 13 months; 90% within 24 months",
      cost: {
        amount: 4580,
        currency: "AUD (primary applicant)",
      },
      alternativeOptions: ["r13", "r14"],
      applicableCountries: ["All countries"],
    },

    r13: {
      id: "r13",
      title: "Skilled Nominated Visa (subclass 190)",
      description: 
        "For skilled workers nominated by a state or territory government in Australia.",
      requirements: [
        "Be invited to apply after submitting an Expression of Interest",
        "Be under 45 years of age",
        "Be nominated by a state or territory government",
        "Have an occupation on the relevant skilled list",
        "Have a positive skills assessment for your occupation",
        "Score at least 65 points on the points test",
        "Meet health and character requirements",
        "Have competent English",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Skilled Nominated Visa (subclass 190)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-190",
        },
      ],
      processingTime: "75% of applications processed within 9 months; 90% within 12 months",
      cost: {
        amount: 4580,
        currency: "AUD (primary applicant)",
      },
      alternativeOptions: ["r12", "r14"],
      applicableCountries: ["All countries"],
    },

    r14: {
      id: "r14",
      title: "Employer Nomination Scheme (subclass 186)",
      description: 
        "For skilled workers with an Australian employer who wants to sponsor them for permanent residence.",
      requirements: [
        "Be nominated by an approved Australian employer",
        "Usually be under 45 years of age",
        "Have the skills and qualifications for the nominated position",
        "Meet the requirements for one of the three streams (Temporary Residence Transition, Direct Entry, or Labour Agreement)",
        "Meet health and character requirements",
        "Have competent English",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Employer Nomination Scheme (subclass 186)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186",
        },
      ],
      processingTime: "75% of applications processed within 12 months; 90% within 16 months",
      cost: {
        amount: 4240,
        currency: "AUD (primary applicant)",
      },
      alternativeOptions: ["r12", "r16"],
      applicableCountries: ["All countries"],
    },

    r15: {
      id: "r15",
      title: "New Zealand Citizen Family Relationship (subclass 461)",
      description: 
        "For non-New Zealand family members of New Zealand citizens.",
      requirements: [
        "Be a family member of a New Zealand citizen (excluding Eligible New Zealand citizens)",
        "Meet health and character requirements",
        "The New Zealand citizen must usually be in Australia as your sponsor",
      ],
      applicationLinks: [
        {
          text: "New Zealand Citizen Family Relationship (subclass 461)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/new-zealand-461",
        },
      ],
      processingTime: "75% of applications processed within 19 months; 90% within 23 months",
      cost: {
        amount: 385,
        currency: "AUD",
      },
      alternativeOptions: ["r8", "r3"],
      applicableCountries: ["All countries (for non-NZ citizens who are family members of NZ citizens)"],
    },

    r16: {
      id: "r16",
      title: "Temporary Skill Shortage visa (subclass 482)",
      description: 
        "For skilled workers sponsored by an approved Australian employer to fill positions they can't find qualified Australians for.",
      requirements: [
        "Be nominated by an approved Australian employer for a position they can't fill locally",
        "Have the skills and qualifications required for the position",
        "Meet English language requirements",
        "Meet health and character requirements",
        "Have relevant work experience",
        "Visa length depends on occupation (short-term: 2 years, medium-term: 4 years)",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Temporary Skill Shortage visa (subclass 482)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482",
        },
      ],
      processingTime: "75% of applications processed within 62 days; 90% within 95 days",
      cost: {
        amount: 1625,
        currency: "AUD (short term) / 2790 AUD (medium term)",
      },
      alternativeOptions: ["r14", "r12"],
      applicableCountries: ["All countries"],
    },

    r17: {
      id: "r17",
      title: "No specific work visa without sponsorship",
      description: 
        "Australia generally doesn't offer work visas without sponsorship or specific eligibility. Consider other pathways if you want to work in Australia.",
      requirements: [
        "Most work visas require employer sponsorship or specific eligibility (Working Holiday)",
        "Consider skilled migration pathways if you have in-demand skills",
        "Look for Australian employers willing to sponsor",
        "Consider studying in Australia as a pathway to work rights",
      ],
      applicationLinks: [
        {
          text: "Explore visa options for working in Australia",
          url: "https://immi.homeaffairs.gov.au/visas/working-in-australia",
        },
      ],
      processingTime: "N/A",
      cost: {
        amount: 0,
        currency: "AUD",
      },
      alternativeOptions: ["r5", "r7", "r12"],
      applicableCountries: ["All countries"],
    },

    r18: {
      id: "r18",
      title: "Temporary Activity Visa (subclass 408)",
      description: 
        "For people who want to come to Australia to participate in specific events or activities.",
      requirements: [
        "Be invited to participate in a specific event or activity in Australia",
        "Be sponsored by an approved organization",
        "Have relevant skills or experience for the activity",
        "Meet health and character requirements",
        "Have adequate health insurance for your stay",
        "Intend to stay temporarily",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Temporary Activity Visa (subclass 408)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408",
        },
      ],
      processingTime: "75% of applications processed within 33 days; 90% within 82 days",
      cost: {
        amount: 325,
        currency: "AUD",
      },
      alternativeOptions: ["r5", "r3"],
      applicableCountries: ["All countries"],
    },

    r19: {
      id: "r19",
      title: "No specific long-term tourist visa",
      description: 
        "Australia doesn't offer a dedicated long-term tourist visa. Consider alternative options if you need to stay for more than 12 months.",
      requirements: [
        "Visitor visas are normally limited to 3-12 months",
        "Multiple visits allowed but may raise immigration concerns",
        "Consider family, work, or study routes if eligible",
        "Working Holiday visa may be suitable for eligible applicants wanting to stay longer",
      ],
      applicationLinks: [
        {
          text: "Visitor Visa (subclass 600)",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600",
        },
      ],
      processingTime: "N/A",
      cost: {
        amount: 0,
        currency: "AUD",
      },
      alternativeOptions: ["r4", "r5", "r7"],
      applicableCountries: ["All countries"],
    },

    r20: {
      id: "r20",
      title: "Visitor Visa for Parents (subclass 600 - Sponsored Family Stream)",
      description: 
        "For parents of Australian citizens or permanent residents who want to visit for an extended period.",
      requirements: [
        "Be sponsored by your child who is an Australian citizen or permanent resident",
        "Meet health and character requirements",
        "Sponsor must provide a bond (usually AUD $5,000-$15,000)",
        "Can stay for up to 3 or 5 years with a single entry",
        "Cannot stay in Australia for more than 12 months in an 18-month period",
        "May need to provide biometrics",
      ],
      applicationLinks: [
        {
          text: "Visitor Visa - Sponsored Family Stream",
          url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600/sponsored-family-stream",
        },
      ],
      processingTime: "75% of applications processed within 60 days; 90% within 5 months",
      cost: {
        amount: 1075,
        currency: "AUD (plus bond)",
      },
      alternativeOptions: ["r10", "r3"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-19",
    countries: ["Australia"],
  },
};