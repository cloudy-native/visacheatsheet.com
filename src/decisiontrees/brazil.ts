import { VisaDecisionTree } from './model';

export const brazilVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the main purpose of your visit to Brazil?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Leisure", nextQuestionId: "q2" },
        { id: "a2", text: "Business", nextQuestionId: "q3" },
        { id: "a3", text: "Work", nextQuestionId: "q4" },
        { id: "a4", text: "Study", nextQuestionId: "q5" },
        { id: "a5", text: "Visiting Family/Friends", nextQuestionId: "q2" },
        { id: "a6", text: "Scientific Research/Academic Activities", nextQuestionId: "q6" },
        { id: "a7", text: "Religious/Volunteer Activities", nextQuestionId: "q7" },
        { id: "a8", text: "Immigration/Permanent Residence", nextQuestionId: "q8" },
      ],
      helpText: "Select the primary reason for your visit to Brazil",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in Brazil?",
      answerType: "single",
      options: [
        { id: "a1", text: "Up to 90 days", nextQuestionId: "q9" },
        { id: "a2", text: "More than 90 days", nextQuestionId: "r9" },
        { id: "a3", text: "Multiple visits over a year", nextQuestionId: "r9" },
      ],
      helpText: "Duration affects visa type and requirements",
    },

    q3: {
      id: "q3",
      text: "What type of business activities will you be conducting?",
      answerType: "single",
      options: [
        { id: "a1", text: "Meetings, conferences, or networking", nextQuestionId: "q9" },
        { id: "a2", text: "Contract signings or business negotiations", nextQuestionId: "q9" },
        { id: "a3", text: "Market research or site visits", nextQuestionId: "q9" },
        { id: "a4", text: "Installing or servicing equipment", nextQuestionId: "r2" },
        { id: "a5", text: "Paid activities or work (not just meetings)", nextQuestionId: "q4" },
      ],
      helpText: "Different business activities may require different visa types",
    },

    q4: {
      id: "q4",
      text: "What type of work will you be doing in Brazil?",
      answerType: "single",
      options: [
        { id: "a1", text: "Employment with a Brazilian company", nextQuestionId: "r2" },
        { id: "a2", text: "Technical assistance/specialized skills", nextQuestionId: "r3" },
        { id: "a3", text: "Cultural or performing arts", nextQuestionId: "r4" },
        { id: "a4", text: "Journalism or media work", nextQuestionId: "r5" },
        { id: "a5", text: "Professional sports", nextQuestionId: "r6" },
        { id: "a6", text: "Work for religious organization", nextQuestionId: "r7" },
      ],
      helpText: "Different work categories require different visa types",
    },

    q5: {
      id: "q5",
      text: "What type of study program will you be attending?",
      answerType: "single",
      options: [
        { id: "a1", text: "Short course (less than 90 days)", nextQuestionId: "q9" },
        { id: "a2", text: "Regular academic program (more than 90 days)", nextQuestionId: "r8" },
        { id: "a3", text: "Exchange program", nextQuestionId: "r8" },
        { id: "a4", text: "Internship related to your studies", nextQuestionId: "r8" },
        { id: "a5", text: "Portuguese language course", nextQuestionId: "r8" },
      ],
      helpText: "Duration and type of study program determines visa requirements",
    },

    q6: {
      id: "q6",
      text: "What type of scientific or academic activities will you be conducting?",
      answerType: "single",
      options: [
        { id: "a1", text: "Short-term research visit (less than 90 days)", nextQuestionId: "q9" },
        { id: "a2", text: "Long-term research project", nextQuestionId: "r10" },
        { id: "a3", text: "Academic conferences or meetings", nextQuestionId: "q9" },
        { id: "a4", text: "Teaching or lecturing at Brazilian institution", nextQuestionId: "r11" },
      ],
      helpText: "Duration and specifics of research activities determine visa type",
    },

    q7: {
      id: "q7",
      text: "What religious or volunteer activities will you be conducting?",
      answerType: "single",
      options: [
        { id: "a1", text: "Short-term missionary work (less than 90 days)", nextQuestionId: "q9" },
        { id: "a2", text: "Long-term religious work or mission", nextQuestionId: "r7" },
        { id: "a3", text: "Volunteer work with NGO or social organization", nextQuestionId: "r12" },
        { id: "a4", text: "Just attending religious events as a visitor", nextQuestionId: "q9" },
      ],
      helpText: "Volunteer and religious activities have specific visa categories based on duration and nature of work",
    },

    q8: {
      id: "q8",
      text: "What is your basis for seeking permanent residence in Brazil?",
      answerType: "single",
      options: [
        { id: "a1", text: "Family reunion (Brazilian spouse/child)", nextQuestionId: "r13" },
        { id: "a2", text: "Retirement", nextQuestionId: "r14" },
        { id: "a3", text: "Investment in Brazil", nextQuestionId: "r15" },
        { id: "a4", text: "Professional skills/employment offer", nextQuestionId: "r16" },
        { id: "a5", text: "Refugee or humanitarian reasons", nextQuestionId: "r17" },
      ],
      helpText: "Brazil offers several pathways to permanent residence based on different qualifying criteria",
    },

    q9: {
      id: "q9",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        { id: "a1", text: "Visa-exempt country (US, Canada, EU, etc.)", nextQuestionId: "r1" },
        { id: "a2", text: "Visa-required country", nextQuestionId: "r18" },
        { id: "a3", text: "MERCOSUR country (Argentina, Uruguay, etc.)", nextQuestionId: "r19" },
        { id: "a4", text: "Not sure if I need a visa", nextQuestionId: "r20" },
      ],
      helpText: "Your nationality determines whether you need a visa or can enter visa-free",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Visa Exemption (Visa-Free Entry)",
      description: 
        "Citizens of many countries can enter Brazil without a visa for tourism, business meetings, or short visits for up to 90 days.",
      requirements: [
        "Valid passport with at least 6 months validity from entry date",
        "Proof of onward/return travel",
        "Proof of sufficient funds for your stay",
        "Accommodation information",
        "Stay limited to 90 days (can be extended once for additional 90 days per year)",
        "No paid activities allowed",
        "Entry for tourism, business meetings, visiting family/friends, or cultural events",
      ],
      applicationLinks: [
        {
          text: "Brazilian Ministry of Foreign Affairs - Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/",
        },
      ],
      processingTime: "No processing - entry granted at border",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r9", "r18"],
      applicableCountries: [
        "Andorra", "Argentina", "Australia", "Austria", "Bahamas", "Barbados", "Belgium", 
        "Canada", "Chile", "Colombia", "Costa Rica", "Croatia", "Cyprus", "Czech Republic", 
        "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", 
        "Ireland", "Israel", "Italy", "Japan", "Latvia", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Malaysia", "Malta", "Mexico", "Monaco", "Morocco", "Netherlands", 
        "New Zealand", "Norway", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
        "Qatar", "San Marino", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", 
        "Spain", "Sweden", "Switzerland", "Thailand", "Trinidad and Tobago", "Tunisia", 
        "Turkey", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Vatican"
      ],
    },

    r2: {
      id: "r2",
      title: "Work Visa (VITEM V)",
      description: 
        "For foreigners who will be working under employment contract with a Brazilian entity or company.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Work authorization from Brazilian Ministry of Labor",
        "Job offer/employment contract with Brazilian company",
        "Company registration documents in Brazil",
        "Proof of qualifications/education (authenticated and translated)",
        "Criminal background check from home country",
        "Passport photos (recent)",
        "Application must be initiated by Brazilian employer",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Work Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "30-90 days (after work authorization approval)",
      cost: {
        amount: 290,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r3", "r16"],
      applicableCountries: ["All countries"],
    },

    r3: {
      id: "r3",
      title: "Technical Assistance Visa (VITEM V)",
      description: 
        "For professionals providing technical assistance, technology transfer, or specialized technical services under a contract.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Work authorization from Brazilian Ministry of Labor",
        "Technical assistance contract between Brazilian company and foreign company",
        "Proof of professional qualification/expertise in relevant field",
        "Letter describing technical services to be provided",
        "Criminal background check from home country",
        "Passport photos (recent)",
        "Application typically initiated by Brazilian company receiving technical assistance",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Technical Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "30-60 days (after work authorization approval)",
      cost: {
        amount: 290,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r2", "r9"],
      applicableCountries: ["All countries"],
    },

    r4: {
      id: "r4",
      title: "Cultural/Performing Arts Visa (VITEM I)",
      description: 
        "For artists, musicians, performers, and cultural professionals coming to Brazil for performances or cultural activities.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Contract with Brazilian event organizer or cultural institution",
        "Invitation letter with details of performances/cultural activities",
        "Schedule of events/performances",
        "Proof of artistic or cultural background",
        "Financial responsibility letter from Brazilian sponsor",
        "Criminal background check from home country",
        "Passport photos (recent)",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Cultural Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "15-30 days",
      cost: {
        amount: 80,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r6", "r9"],
      applicableCountries: ["All countries"],
    },

    r5: {
      id: "r5",
      title: "Journalist Visa (VITEM I)",
      description: 
        "For foreign journalists, reporters, photographers, and media professionals temporarily working in Brazil.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Letter from employing media organization",
        "Details of reporting assignment in Brazil",
        "Accreditation request to Brazilian authorities",
        "Professional journalist credentials",
        "Financial responsibility guarantee from employer",
        "Criminal background check from home country",
        "Passport photos (recent)",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Media Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "15-30 days",
      cost: {
        amount: 80,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r9"],
      applicableCountries: ["All countries"],
    },

    r6: {
      id: "r6",
      title: "Athlete Visa (VITEM V)",
      description: 
        "For professional athletes, coaches, and sports professionals contracted by Brazilian sports organizations.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Work authorization from Brazilian Ministry of Labor",
        "Contract with Brazilian sports club or organization",
        "Proof of professional athletics background",
        "Letter from Brazilian sports federation endorsing contract",
        "Criminal background check from home country",
        "Passport photos (recent)",
        "Medical certificate may be required",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Sports Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "30-60 days (after work authorization approval)",
      cost: {
        amount: 290,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r4", "r2"],
      applicableCountries: ["All countries"],
    },

    r7: {
      id: "r7",
      title: "Religious/Missionary Visa (VITEM V)",
      description: 
        "For members of religious orders, ministers, missionaries, and religious workers coming to Brazil for religious activities.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Invitation letter from Brazilian religious organization",
        "Proof of affiliation with religious organization in home country",
        "Letter explaining religious activities to be performed in Brazil",
        "Proof of financial support during stay",
        "Criminal background check from home country",
        "Passport photos (recent)",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Religious Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "30-60 days",
      cost: {
        amount: 290,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r12", "r9"],
      applicableCountries: ["All countries"],
    },

    r8: {
      id: "r8",
      title: "Student Visa (VITEM IV)",
      description: 
        "For international students enrolled in Brazilian educational institutions for academic programs, language courses, or exchange programs.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Acceptance letter from Brazilian educational institution",
        "Proof of enrollment in accredited course/program",
        "Proof of financial means to support yourself during studies",
        "Criminal background check from home country",
        "Medical insurance valid in Brazil",
        "Passport photos (recent)",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Student Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "15-30 days",
      cost: {
        amount: 160,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r9", "r10"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "Visitor Visa (VIVIS)",
      description: 
        "For tourism, business, transit, artistic/sports activities, or studies lasting up to 90 days (can be extended to 180 days).",
      requirements: [
        "Valid passport with at least 6 months validity from entry date",
        "Completed visa application form",
        "Proof of onward/return travel",
        "Proof of accommodation in Brazil",
        "Proof of sufficient funds for your stay",
        "Trip itinerary/purpose of visit",
        "Passport photos (recent)",
        "For business: invitation letter from Brazilian company may be helpful",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Tourist Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "5-15 business days",
      cost: {
        amount: 80,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r1", "r8"],
      applicableCountries: ["All visa-required countries"],
    },

    r10: {
      id: "r10",
      title: "Research Visa (VITEM I)",
      description: 
        "For scientists, researchers, and professors conducting scientific or technological research at Brazilian institutions.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Invitation from Brazilian research or educational institution",
        "Research proposal or project description",
        "Proof of academic/scientific qualifications",
        "Proof of financial support during research period",
        "Letter of approval from Brazilian National Council for Scientific and Technological Development (CNPq)",
        "Criminal background check from home country",
        "Passport photos (recent)",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Research Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "30-60 days",
      cost: {
        amount: 160,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r8", "r11"],
      applicableCountries: ["All countries"],
    },

    r11: {
      id: "r11",
      title: "Professor/Academic Visa (VITEM V)",
      description: 
        "For professors, teachers, and academic professionals hired by Brazilian educational institutions.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Work authorization from Brazilian Ministry of Labor",
        "Employment contract with Brazilian educational institution",
        "Proof of academic qualifications (authenticated and translated)",
        "Criminal background check from home country",
        "Passport photos (recent)",
        "Application typically initiated by the hiring Brazilian institution",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Academic Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "30-60 days (after work authorization approval)",
      cost: {
        amount: 290,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r10", "r2"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "Volunteer Visa (VITEM I)",
      description: 
        "For volunteers working with non-profit, NGOs, or charitable organizations in Brazil.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Invitation from Brazilian non-profit organization",
        "Agreement/contract detailing volunteer work",
        "Proof the organization is registered as non-profit in Brazil",
        "Proof of financial means to support yourself during volunteer work",
        "Criminal background check from home country",
        "Passport photos (recent)",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Volunteer Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "15-30 days",
      cost: {
        amount: 80,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r7", "r9"],
      applicableCountries: ["All countries"],
    },

    r13: {
      id: "r13",
      title: "Family Reunification Visa (VITEM XI)",
      description: 
        "For family members of Brazilian citizens or permanent residents seeking to join them in Brazil permanently.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Proof of relationship with Brazilian citizen or resident (marriage certificate, birth certificate, etc.)",
        "Documentation of family member's Brazilian citizenship or permanent residency",
        "Declaration of support from Brazilian family member",
        "Proof of accommodation in Brazil",
        "Criminal background check from home country",
        "Passport photos (recent)",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Family Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "30-60 days",
      cost: {
        amount: 160,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r16", "r14"],
      applicableCountries: ["All countries"],
    },

    r14: {
      id: "r14",
      title: "Retirement Visa (VITEM XIV)",
      description: 
        "For retirees with a regular income who wish to retire in Brazil.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Proof of retirement status",
        "Proof of regular pension/retirement income of at least R$6,000 per month",
        "Criminal background check from home country",
        "Passport photos (recent)",
        "Health certificate may be required",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Retirement Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "30-60 days",
      cost: {
        amount: 160,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r15", "r9"],
      applicableCountries: ["All countries"],
    },

    r15: {
      id: "r15",
      title: "Investment Visa (VITEM V)",
      description: 
        "For foreign investors making productive investments in Brazil.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Proof of investment in Brazilian company (minimum R$500,000 typically required)",
        "Business plan showing job creation and economic development",
        "Registration of investment with Brazilian Central Bank",
        "Company registration documents in Brazil",
        "Criminal background check from home country",
        "Passport photos (recent)",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Investment Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "30-60 days",
      cost: {
        amount: 290,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r16", "r14"],
      applicableCountries: ["All countries"],
    },

    r16: {
      id: "r16",
      title: "Permanent Work Visa",
      description: 
        "For skilled professionals with job offers from Brazilian companies seeking permanent residence.",
      requirements: [
        "Valid passport with at least 6 months validity from application",
        "Completed visa application form",
        "Work authorization from Brazilian Ministry of Labor",
        "Job offer/employment contract with Brazilian company",
        "Proof of professional qualifications (authenticated and translated)",
        "Company justification for hiring a foreigner",
        "Criminal background check from home country",
        "Passport photos (recent)",
        "Application must be initiated by Brazilian employer",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Permanent Work Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "60-90 days (after work authorization approval)",
      cost: {
        amount: 290,
        currency: "USD (varies by country)",
      },
      alternativeOptions: ["r2", "r15"],
      applicableCountries: ["All countries"],
    },

    r17: {
      id: "r17",
      title: "Humanitarian Visa/Refugee Status",
      description: 
        "For individuals seeking protection in Brazil due to humanitarian concerns or refugee status.",
      requirements: [
        "Valid passport (if available) or other identification document",
        "Completed refugee status application form",
        "Statement detailing reasons for seeking protection",
        "Evidence of persecution or humanitarian concerns (if available)",
        "Photos (recent)",
        "Application can be made at the border or within Brazil",
        "Interview with National Committee for Refugees (CONARE)",
      ],
      applicationLinks: [
        {
          text: "Brazilian Federal Police - Refugee Information",
          url: "https://www.gov.br/pf/pt-br/assuntos/imigracao/refugio",
        },
      ],
      processingTime: "Varies significantly based on circumstances",
      cost: {
        amount: 0,
        currency: "USD (typically no fee for humanitarian/refugee applications)",
      },
      alternativeOptions: ["r19", "r9"],
      applicableCountries: ["All countries"],
    },

    r18: {
      id: "r18",
      title: "Tourist Visa Application Process",
      description: 
        "Application process for citizens of countries that require a visa to enter Brazil for tourism.",
      requirements: [
        "Valid passport with at least 6 months validity from entry date",
        "Completed visa application form",
        "Recent passport photo",
        "Proof of accommodation in Brazil",
        "Proof of financial means (bank statements, credit cards)",
        "Round-trip flight itinerary",
        "Travel insurance may be recommended",
        "Apply at Brazilian embassy/consulate in your country or via visa application center",
      ],
      applicationLinks: [
        {
          text: "Brazilian Consulate Tourist Visa Application",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "5-15 business days",
      cost: {
        amount: 80,
        currency: "USD (varies by country and may reflect reciprocity fees)",
      },
      alternativeOptions: ["r9", "r1"],
      applicableCountries: [
        "Afghanistan", "Algeria", "Angola", "Bangladesh", "Cambodia", "China", "Cuba", "Egypt", 
        "Ethiopia", "Ghana", "Haiti", "India", "Indonesia", "Iran", "Iraq", "Jordan", "Kenya", 
        "Lebanon", "Libya", "Nigeria", "North Korea", "Pakistan", "Russia", "Saudi Arabia", 
        "Sierra Leone", "Syria", "Vietnam", "Yemen", "and others"
      ],
    },

    r19: {
      id: "r19",
      title: "MERCOSUR Residence Agreement",
      description: 
        "Citizens of MERCOSUR member and associate states can apply for temporary and then permanent residence in Brazil.",
      requirements: [
        "Valid passport or national ID card",
        "Birth certificate",
        "Criminal record certificate from countries of residence in past 5 years",
        "Proof of means of subsistence",
        "Payment of applicable fees",
        "Initial 2-year temporary residence, convertible to permanent residence",
        "Apply at Federal Police in Brazil or at Brazilian consulate",
      ],
      applicationLinks: [
        {
          text: "Brazilian Federal Police - MERCOSUR Residence",
          url: "https://www.gov.br/pf/pt-br/assuntos/imigracao",
        },
      ],
      processingTime: "30-60 days",
      cost: {
        amount: 160,
        currency: "BRL (approximate)",
      },
      alternativeOptions: ["r1", "r9"],
      applicableCountries: [
        "Argentina", "Bolivia", "Chile", "Colombia", "Ecuador", "Paraguay", "Peru", "Uruguay"
      ],
    },

    r20: {
      id: "r20",
      title: "Visa Requirement Check",
      description: 
        "Information on determining whether you need a visa to enter Brazil based on your nationality.",
      requirements: [
        "Check the official Brazilian consular website or contact the Brazilian embassy/consulate in your country",
        "Visa exemptions exist for many countries for stays up to 90 days",
        "Exemptions typically cover tourism, business, artistic and sporting activities, but not paid work",
        "Some countries have reciprocal agreements with specific terms",
        "MERCOSUR citizens have additional residence rights",
        "Requirements can change, always verify current information",
      ],
      applicationLinks: [
        {
          text: "Brazilian Ministry of Foreign Affairs - Visa Information",
          url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil",
        },
      ],
      processingTime: "N/A - informational",
      cost: {
        amount: 0,
        currency: "USD",
      },
      alternativeOptions: ["r1", "r18"],
      applicableCountries: ["All countries"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-19",
    countries: ["Brazil"],
  },
};