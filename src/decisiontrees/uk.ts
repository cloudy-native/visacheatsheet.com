import { VisaDecisionTree } from './model';

export const ukVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the primary purpose of your visit to the United Kingdom?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Leisure", nextQuestionId: "q2" },
        { id: "a2", text: "Work/Business", nextQuestionId: "q3" },
        { id: "a3", text: "Study", nextQuestionId: "q4" },
        { id: "a4", text: "Family/Settlement", nextQuestionId: "q5" },
        { id: "a5", text: "Transit through the UK", nextQuestionId: "q6" },
      ],
      helpText: "Select the main reason for your trip to the UK",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in the UK?",
      answerType: "single",
      options: [
        { id: "a1", text: "Up to 6 months", nextQuestionId: "q7" },
        { id: "a2", text: "More than 6 months", nextQuestionId: "r16" },
      ],
      helpText: "Standard Visitor visas are typically for stays of up to 6 months",
    },

    q3: {
      id: "q3",
      text: "What type of work will you be doing in the UK?",
      answerType: "single",
      options: [
        { id: "a1", text: "Skilled work with a job offer", nextQuestionId: "q8" },
        { id: "a2", text: "Temporary work/specific schemes", nextQuestionId: "q9" },
        { id: "a3", text: "Business meetings/conferences only (no work)", nextQuestionId: "q7" },
        { id: "a4", text: "Starting or running a business", nextQuestionId: "r5" },
        { id: "a5", text: "Global talent in sciences, humanities, arts", nextQuestionId: "r6" },
      ],
      helpText: "Different work activities require different UK visa types",
    },

    q4: {
      id: "q4",
      text: "What type of educational program will you be attending?",
      answerType: "single",
      options: [
        { id: "a1", text: "University degree or higher education", nextQuestionId: "q10" },
        { id: "a2", text: "English language course", nextQuestionId: "q10" },
        { id: "a3", text: "Short course or research (less than 6 months)", nextQuestionId: "q7" },
        { id: "a4", text: "Child student (under 18)", nextQuestionId: "r7" },
      ],
      helpText: "The type and length of your studies determines which visa you need",
    },

    q5: {
      id: "q5",
      text: "What is your relationship with the UK person?",
      answerType: "single",
      options: [
        { id: "a1", text: "Spouse/partner of British citizen or settled person", nextQuestionId: "r8" },
        { id: "a2", text: "Child of British citizen or settled person", nextQuestionId: "r9" },
        { id: "a3", text: "Parent of British citizen child", nextQuestionId: "r10" },
        { id: "a4", text: "Dependent relative", nextQuestionId: "r11" },
        { id: "a5", text: "Just visiting family (no settlement intent)", nextQuestionId: "q7" },
      ],
      helpText: "Your relationship with a UK resident determines your family visa eligibility",
    },

    q6: {
      id: "q6",
      text: "Will you be passing through UK border control?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, I'll go through passport control", nextQuestionId: "r12" },
        { id: "a2", text: "No, I'll stay in the international transit area", nextQuestionId: "q11" },
      ],
      helpText: "Whether you pass through UK border control affects the transit visa requirements",
    },

    q7: {
      id: "q7",
      text: "Do you need a visa to visit the UK?",
      answerType: "single",
      options: [
        { id: "a1", text: "I'm from an EU country or other visa-exempt country", nextQuestionId: "r1" },
        { id: "a2", text: "I need a visa to visit the UK", nextQuestionId: "r2" },
        { id: "a3", text: "I'm not sure", nextQuestionId: "q12" },
      ],
      helpText: "Citizens of some countries can visit the UK without a visa",
    },

    q8: {
      id: "q8",
      text: "What is your skill level and job role?",
      answerType: "single",
      options: [
        { id: "a1", text: "Skilled Worker in eligible occupation", nextQuestionId: "r3" },
        { id: "a2", text: "Health and Care professional", nextQuestionId: "r4" },
        { id: "a3", text: "Intra-company transfer", nextQuestionId: "r13" },
        { id: "a4", text: "Minister of religion", nextQuestionId: "r14" },
        { id: "a5", text: "International sportsperson", nextQuestionId: "r15" },
      ],
      helpText: "Different job roles qualify for different work visa routes",
    },

    q9: {
      id: "q9",
      text: "What type of temporary work will you be doing?",
      answerType: "single",
      options: [
        { id: "a1", text: "Seasonal Worker", nextQuestionId: "r17" },
        { id: "a2", text: "Youth Mobility Scheme", nextQuestionId: "r18" },
        { id: "a3", text: "Creative Worker", nextQuestionId: "r19" },
        { id: "a4", text: "Charity Worker", nextQuestionId: "r20" },
        { id: "a5", text: "Religious Worker", nextQuestionId: "r21" },
        { id: "a6", text: "Government Authorized Exchange", nextQuestionId: "r22" },
      ],
      helpText: "The UK has several schemes for temporary workers in specific sectors",
    },

    q10: {
      id: "q10",
      text: "How long is your course?",
      answerType: "single",
      options: [
        { id: "a1", text: "More than 6 months", nextQuestionId: "r23" },
        { id: "a2", text: "Less than 6 months", nextQuestionId: "q7" },
      ],
      helpText: "Course length affects whether you need a Student visa or can use a Standard Visitor visa",
    },

    q11: {
      id: "q11",
      text: "Are you from a country that needs a transit visa?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes, my country needs a Direct Airside Transit Visa", nextQuestionId: "r24" },
        { id: "a2", text: "No, my country is exempt from transit visas", nextQuestionId: "r25" },
        { id: "a3", text: "I'm not sure", nextQuestionId: "q12" },
      ],
      helpText: "Citizens of some countries need a visa even for airside transit",
    },

    q12: {
      id: "q12",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        { id: "a1", text: "EU/EEA/Switzerland", nextQuestionId: "r1" },
        { id: "a2", text: "USA, Canada, Australia, New Zealand, Japan", nextQuestionId: "r1" },
        { id: "a3", text: "Other country", nextQuestionId: "r2" },
      ],
      helpText: "Your nationality determines visa requirements for visiting the UK",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Visa-free entry (for eligible nationalities)",
      description: 
        "Citizens of EU countries, EEA countries, Switzerland, and other visa-exempt nations can visit the UK for up to 6 months without a visa.",
      requirements: [
        "Valid passport for the entire stay",
        "Proof of sufficient funds for your stay",
        "Return or onward travel ticket (may be requested)",
        "May need to explain purpose of visit and accommodation plans at border",
      ],
      applicationLinks: [
        {
          text: "Check if you need a UK visa",
          url: "https://www.gov.uk/check-uk-visa",
        },
      ],
      processingTime: "None - checked at border",
      cost: {
        amount: 0,
        currency: "GBP",
      },
      alternativeOptions: ["r2"],
      applicableCountries: [
        "EU countries", 
        "EEA countries", 
        "Switzerland", 
        "USA", 
        "Canada", 
        "Australia", 
        "New Zealand", 
        "Japan", 
        "Singapore", 
        "South Korea", 
        "and other eligible nations"
      ],
    },

    r2: {
      id: "r2",
      title: "Standard Visitor Visa",
      description: 
        "For tourism, visiting family/friends, business activities, short courses, and other temporary visits up to 6 months.",
      requirements: [
        "Valid passport",
        "Proof you'll leave the UK at the end of your visit",
        "Proof of sufficient funds for your stay",
        "Details of where you'll stay",
        "Details of your travel plans (not required to book before visa approval)",
        "Tuberculosis test results if from certain countries",
      ],
      applicationLinks: [
        {
          text: "Standard Visitor Visa",
          url: "https://www.gov.uk/standard-visitor-visa",
        },
      ],
      processingTime: "3 weeks (may be longer in busy periods)",
      cost: {
        amount: 100,
        currency: "GBP",
      },
      alternativeOptions: ["r12"],
      applicableCountries: ["All countries that need a visa to visit the UK"],
    },

    r3: {
      id: "r3",
      title: "Skilled Worker Visa",
      description: 
        "For people with a job offer from a UK employer with a valid sponsor license for a job at appropriate skill level.",
      requirements: [
        "Job offer from a licensed UK sponsor",
        "Certificate of Sponsorship from employer",
        "Job at appropriate skill level (RQF 3 or above)",
        "Meet minimum salary requirement (general threshold or 'going rate' for occupation)",
        "English language ability at B1 level",
        "Have enough personal savings to support yourself in the UK",
        "Travel history disclosure",
        "Criminal record certificate if working with vulnerable people",
      ],
      applicationLinks: [
        {
          text: "Skilled Worker Visa",
          url: "https://www.gov.uk/skilled-worker-visa",
        },
      ],
      processingTime: "3 weeks for standard service, 5-10 working days for priority service",
      cost: {
        amount: 625,
        currency: "GBP (for 3-year visa, plus healthcare surcharge)",
      },
      alternativeOptions: ["r4", "r13"],
      applicableCountries: ["All countries"],
    },

    r4: {
      id: "r4",
      title: "Health and Care Worker Visa",
      description: 
        "A faster, cheaper visa for qualified healthcare professionals coming to work for the NHS, social care sector or organizations providing services to the NHS.",
      requirements: [
        "Job offer from NHS, social care sector or eligible organization",
        "Certificate of Sponsorship from employer",
        "Qualification as doctor, nurse, health professional or adult social care professional",
        "Meet minimum salary requirement for your profession",
        "English language ability at B1 level",
        "Criminal record certificate",
      ],
      applicationLinks: [
        {
          text: "Health and Care Worker Visa",
          url: "https://www.gov.uk/health-care-worker-visa",
        },
      ],
      processingTime: "3 weeks for standard service, 5-10 working days for priority service",
      cost: {
        amount: 247,
        currency: "GBP (for 3-year visa, reduced healthcare surcharge)",
      },
      alternativeOptions: ["r3"],
      applicableCountries: ["All countries"],
    },

    r5: {
      id: "r5",
      title: "Innovator Visa",
      description: 
        "For experienced business people who want to set up an innovative business in the UK.",
      requirements: [
        "Endorsement from an approved endorsing body",
        "Valid, innovative business idea that's different from anything else on the market",
        "At least £50,000 in investment funds (some exemptions apply)",
        "English language ability at B2 level",
        "Enough personal savings to support yourself",
        "Proof you can support yourself without public funds",
      ],
      applicationLinks: [
        {
          text: "Innovator Visa",
          url: "https://www.gov.uk/innovator-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 1036,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r6", "r3"],
      applicableCountries: ["All countries"],
    },

    r6: {
      id: "r6",
      title: "Global Talent Visa",
      description: 
        "For leaders or potential leaders in academia or research, arts and culture, or digital technology.",
      requirements: [
        "Endorsement from a recognized UK endorsing body",
        "Proof of your work in your field",
        "Proof of ability to speak English if applying for settlement",
        "Tuberculosis test results if from certain countries",
      ],
      applicationLinks: [
        {
          text: "Global Talent Visa",
          url: "https://www.gov.uk/global-talent",
        },
      ],
      processingTime: "3 weeks for standard service plus endorsement time",
      cost: {
        amount: 623,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r3", "r5"],
      applicableCountries: ["All countries"],
    },

    r7: {
      id: "r7",
      title: "Child Student Visa",
      description: 
        "For children aged 4 to 17 who want to study at an independent school in the UK.",
      requirements: [
        "Confirmation of Acceptance for Studies (CAS) from a licensed child student sponsor",
        "Consent from parents/guardians",
        "Proof of adequate funds for course fees and living costs",
        "Proof of parental/guardian relationship",
        "Adequate care arrangements in place in the UK",
      ],
      applicationLinks: [
        {
          text: "Child Student Visa",
          url: "https://www.gov.uk/child-study-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 363,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r23"],
      applicableCountries: ["All countries"],
    },

    r8: {
      id: "r8",
      title: "Family Visa - Partner",
      description: 
        "For spouses, civil partners, or unmarried partners of British citizens or people settled in the UK.",
      requirements: [
        "Genuine and subsisting relationship with your partner",
        "Meet financial requirements (usually minimum income of £18,600/year)",
        "Adequate accommodation in the UK",
        "English language ability at A1 level (for entry) or A2 (for further leave)",
        "Pass the 'Life in the UK' test for settlement",
        "Relationship must have existed for at least 2 years if unmarried",
      ],
      applicationLinks: [
        {
          text: "Family Visa - Partner",
          url: "https://www.gov.uk/uk-family-visa/partner-spouse",
        },
      ],
      processingTime: "24 weeks for standard service, 6 weeks for priority service",
      cost: {
        amount: 1538,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r2"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "Family Visa - Child",
      description: 
        "For children under 18 joining parents who are British citizens or settled in the UK.",
      requirements: [
        "Both parents must be living permanently in the UK or the child must be joining the parent who has sole responsibility",
        "Adequate accommodation in the UK",
        "Ability to support the child without public funds",
        "Proof of parental relationship",
      ],
      applicationLinks: [
        {
          text: "Family Visa - Child",
          url: "https://www.gov.uk/uk-family-visa/child",
        },
      ],
      processingTime: "24 weeks for standard service, 6 weeks for priority service",
      cost: {
        amount: 1538,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r7"],
      applicableCountries: ["All countries"],
    },

    r10: {
      id: "r10",
      title: "Family Visa - Parent",
      description: 
        "For parents of children who are British citizens or settled in the UK.",
      requirements: [
        "Child under 18 in the UK who is a British citizen or settled in the UK",
        "Sole responsibility for the child or access rights to the child",
        "Child must not live with the other parent",
        "Adequate accommodation in the UK",
        "Ability to maintain and accommodate yourself without public funds",
        "English language ability at A1 level",
      ],
      applicationLinks: [
        {
          text: "Family Visa - Parent",
          url: "https://www.gov.uk/uk-family-visa/parent",
        },
      ],
      processingTime: "24 weeks for standard service",
      cost: {
        amount: 1538,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r2"],
      applicableCountries: ["All countries"],
    },

    r11: {
      id: "r11",
      title: "Family Visa - Adult Dependent Relative",
      description: 
        "For adult dependent relatives of British citizens or people settled in the UK who require long-term care.",
      requirements: [
        "Be dependent on the care of a family member in the UK due to illness, age, or disability",
        "Unable to receive adequate care in your home country",
        "Sponsor in the UK must be able to support, accommodate and care for you",
        "Proof of long-term care requirement",
      ],
      applicationLinks: [
        {
          text: "Family Visa - Adult Dependent Relative",
          url: "https://www.gov.uk/uk-family-visa/adult-dependent-relative",
        },
      ],
      processingTime: "24 weeks for standard service",
      cost: {
        amount: 3250,
        currency: "GBP",
      },
      alternativeOptions: ["r2"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "Visitor in Transit Visa",
      description: 
        "For people who need to pass through the UK border control on their way to another country.",
      requirements: [
        "Plan to transit through the UK on your way to another country within 48 hours",
        "Have a confirmed onward journey",
        "Be able to support yourself during transit",
        "Be allowed to enter the destination country",
      ],
      applicationLinks: [
        {
          text: "Visitor in Transit Visa",
          url: "https://www.gov.uk/transit-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 64,
        currency: "GBP",
      },
      alternativeOptions: ["r24", "r2"],
      applicableCountries: ["Countries whose nationals need a transit visa"],
    },

    r13: {
      id: "r13",
      title: "Intra-company Transfer Visa",
      description: 
        "For multinational companies to transfer employees to a UK branch.",
      requirements: [
        "Certificate of Sponsorship from a licensed UK sponsor",
        "Employment by the sending company for at least 12 months (unless earning over £73,900)",
        "Job at RQF level 6 or above (graduate level)",
        "Meet minimum salary requirement (usually at least £42,400)",
        "Tuberculosis test results if from certain countries",
      ],
      applicationLinks: [
        {
          text: "Intra-company Transfer Visa",
          url: "https://www.gov.uk/intracompany-transfer-worker-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 625,
        currency: "GBP (for 3-year visa, plus healthcare surcharge)",
      },
      alternativeOptions: ["r3"],
      applicableCountries: ["All countries"],
    },

    r14: {
      id: "r14",
      title: "Minister of Religion Visa (T2)",
      description: 
        "For religious workers coming to work for a religious organization in the UK.",
      requirements: [
        "Certificate of Sponsorship from a licensed UK religious organization",
        "Proof of religious qualifications or experience",
        "English language ability at B2 level",
        "Enough personal savings to support yourself",
        "Tuberculosis test results if from certain countries",
      ],
      applicationLinks: [
        {
          text: "Minister of Religion Visa",
          url: "https://www.gov.uk/minister-of-religion-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 625,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r21"],
      applicableCountries: ["All countries"],
    },

    r15: {
      id: "r15",
      title: "International Sportsperson Visa",
      description: 
        "For elite sportspeople and coaches who are internationally established at the highest level.",
      requirements: [
        "Certificate of Sponsorship from a licensed sports club or organization",
        "Endorsement from the relevant sports governing body",
        "Proof of being an elite sportsperson or qualified coach",
        "English language ability at A1 level",
        "Enough personal savings to support yourself",
      ],
      applicationLinks: [
        {
          text: "International Sportsperson Visa",
          url: "https://www.gov.uk/international-sportsperson-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 625,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r3"],
      applicableCountries: ["All countries"],
    },

    r16: {
      id: "r16",
      title: "No specific long-term tourist visa",
      description: 
        "The UK doesn't offer a dedicated long-term tourist visa. Consider alternative options if you need to stay for more than 6 months.",
      requirements: [
        "Standard Visitor visas are normally limited to 6 months",
        "Multiple visits allowed but with restrictions",
        "Consider family, work, or study routes if eligible",
        "Long-term visit visas (2, 5, or 10 years) are available but still limit stays to 6 months at a time",
      ],
      applicationLinks: [
        {
          text: "Standard Visitor Visa",
          url: "https://www.gov.uk/standard-visitor-visa",
        },
      ],
      processingTime: "N/A",
      cost: {
        amount: 0,
        currency: "GBP",
      },
      alternativeOptions: ["r2", "r3", "r8"],
      applicableCountries: ["All countries"],
    },

    r17: {
      id: "r17",
      title: "Seasonal Worker Visa",
      description: 
        "For temporary workers in horticulture (fruit and vegetable growing) or poultry production.",
      requirements: [
        "Certificate of Sponsorship from a licensed sponsor",
        "Work in edible horticulture or poultry production",
        "Must be at least 18 years old",
        "Have enough money to support yourself without public funds",
      ],
      applicationLinks: [
        {
          text: "Seasonal Worker Visa",
          url: "https://www.gov.uk/seasonal-worker-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 259,
        currency: "GBP",
      },
      alternativeOptions: ["r18", "r3"],
      applicableCountries: ["All countries"],
    },

    r18: {
      id: "r18",
      title: "Youth Mobility Scheme",
      description: 
        "For young people from certain countries to experience life in the UK for up to 2 years.",
      requirements: [
        "Be 18 to 30 years old",
        "Have £2,530 in savings",
        "Be from an eligible country",
        "Meet the other eligibility requirements (may include getting a place in a ballot)",
        "Have no dependent children",
      ],
      applicationLinks: [
        {
          text: "Youth Mobility Scheme",
          url: "https://www.gov.uk/youth-mobility",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 259,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r2", "r3"],
      applicableCountries: [
        "Australia", 
        "Canada", 
        "Hong Kong", 
        "Japan", 
        "Monaco", 
        "New Zealand", 
        "San Marino", 
        "South Korea", 
        "Taiwan"
      ],
    },

    r19: {
      id: "r19",
      title: "Creative Worker Visa",
      description: 
        "For people working in the creative industries (film, TV, fashion, etc.) for up to 12 months.",
      requirements: [
        "Certificate of Sponsorship from a licensed UK sponsor",
        "Work in a creative industry",
        "Enough personal savings to support yourself",
        "Tuberculosis test results if from certain countries",
      ],
      applicationLinks: [
        {
          text: "Creative Worker Visa",
          url: "https://www.gov.uk/creative-worker-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 259,
        currency: "GBP (plus healthcare surcharge for stays over 6 months)",
      },
      alternativeOptions: ["r2", "r3"],
      applicableCountries: ["All countries"],
    },

    r20: {
      id: "r20",
      title: "Charity Worker Visa",
      description: 
        "For unpaid voluntary work at a UK charity for up to 12 months.",
      requirements: [
        "Certificate of Sponsorship from a licensed UK charity",
        "Do voluntary, unpaid work",
        "Not take up paid employment during your stay",
        "Have enough personal savings to support yourself",
        "Tuberculosis test results if from certain countries",
      ],
      applicationLinks: [
        {
          text: "Charity Worker Visa",
          url: "https://www.gov.uk/charity-worker-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 259,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r22", "r2"],
      applicableCountries: ["All countries"],
    },

    r21: {
      id: "r21",
      title: "Religious Worker Visa",
      description: 
        "For people doing non-pastoral religious work for up to 2 years.",
      requirements: [
        "Certificate of Sponsorship from a licensed religious organization",
        "Do religious work, but not as a minister of religion",
        "Enough personal savings to support yourself",
        "Tuberculosis test results if from certain countries",
      ],
      applicationLinks: [
        {
          text: "Religious Worker Visa",
          url: "https://www.gov.uk/religious-worker-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 259,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r14", "r2"],
      applicableCountries: ["All countries"],
    },

    r22: {
      id: "r22",
      title: "Government Authorized Exchange Visa",
      description: 
        "For work experience, training, research, or fellowship programs in the UK.",
      requirements: [
        "Certificate of Sponsorship from a licensed sponsor",
        "Participate in an approved scheme",
        "Not intend to set up a business or be self-employed",
        "Enough personal savings to support yourself",
        "Tuberculosis test results if from certain countries",
      ],
      applicationLinks: [
        {
          text: "Government Authorized Exchange Visa",
          url: "https://www.gov.uk/government-authorised-exchange-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 259,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r3", "r18"],
      applicableCountries: ["All countries"],
    },

    r23: {
      id: "r23",
      title: "Student Visa",
      description: 
        "For people who want to study in the UK at a registered education provider for more than 6 months.",
      requirements: [
        "Confirmation of Acceptance for Studies (CAS) from a licensed student sponsor (educational institution)",
        "Proof of financial means to pay for course and support yourself",
        "English language ability at required level for your course",
        "Tuberculosis test results if from certain countries",
        "Academic Technology Approval Scheme (ATAS) certificate for certain subjects",
        "Parental/guardian consent if under 18",
      ],
      applicationLinks: [
        {
          text: "Student Visa",
          url: "https://www.gov.uk/student-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 363,
        currency: "GBP (plus healthcare surcharge)",
      },
      alternativeOptions: ["r7", "r2"],
      applicableCountries: ["All countries"],
    },

    r24: {
      id: "r24",
      title: "Direct Airside Transit Visa (DATV)",
      description: 
        "For people transiting through the UK without passing through UK border control.",
      requirements: [
        "Arrive and depart by air",
        "Not pass through UK border control",
        "Have a confirmed onward flight that departs on the same day or before midnight the following day",
        "Have necessary travel documents and visa for your destination country",
      ],
      applicationLinks: [
        {
          text: "Direct Airside Transit Visa",
          url: "https://www.gov.uk/transit-visa/direct-airside-transit-visa",
        },
      ],
      processingTime: "3 weeks for standard service",
      cost: {
        amount: 35,
        currency: "GBP",
      },
      alternativeOptions: ["r12"],
      applicableCountries: [
        "Afghanistan", 
        "Albania", 
        "Cuba", 
        "Democratic Republic of the Congo", 
        "Eritrea", 
        "Ethiopia", 
        "Iran", 
        "Iraq", 
        "North Korea", 
        "Libya", 
        "and others"
      ],
    },

    r25: {
      id: "r25",
      title: "Transit without visa",
      description: 
        "Citizens of many countries can transit through the UK airside (without going through passport control) without a visa.",
      requirements: [
        "Arrive and depart by air",
        "Have a confirmed onward flight that departs on the same day or before midnight the following day",
        "Remain in the international transit area (airside) of the airport",
        "Have all necessary travel documents and visas for your destination country",
      ],
      applicationLinks: [
        {
          text: "Check if you need a UK visa",
          url: "https://www.gov.uk/check-uk-visa",
        },
      ],
      processingTime: "N/A",
      cost: {
        amount: 0,
        currency: "GBP",
      },
      alternativeOptions: ["r12", "r24"],
      applicableCountries: ["Most countries including EU, US, Canada, Australia, Japan, and many others"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-19",
    author: "Max",
    countries: ["United Kingdom"],
  },
};