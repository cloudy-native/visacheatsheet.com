import { VisaDecisionTree } from './model';

export const japanVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the primary purpose of your visit to Japan?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Leisure", nextQuestionId: "q2" },
        { id: "a2", text: "Business/Conference", nextQuestionId: "q3" },
        { id: "a3", text: "Work/Employment", nextQuestionId: "q4" },
        { id: "a4", text: "Study/Research", nextQuestionId: "q5" },
        { id: "a5", text: "Visiting Family/Friends", nextQuestionId: "q6" },
        { id: "a6", text: "Cultural Activities/Exchange", nextQuestionId: "q7" },
        { id: "a7", text: "Transit Through Japan", nextQuestionId: "q8" },
        { id: "a8", text: "Medical Treatment", nextQuestionId: "r15" },
      ],
      helpText: "Select the main reason for your trip to Japan",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in Japan as a tourist?",
      answerType: "single",
      options: [
        { id: "a1", text: "Up to 90 days", nextQuestionId: "q9" },
        { id: "a2", text: "More than 90 days", nextQuestionId: "r14" },
      ],
      helpText: "Duration affects visa requirements and type",
    },

    q3: {
      id: "q3",
      text: "What business activities will you be conducting?",
      answerType: "single",
      options: [
        { id: "a1", text: "Meetings, conferences, or business liaison", nextQuestionId: "q9" },
        { id: "a2", text: "Contract signing, market surveys, etc.", nextQuestionId: "q9" },
        { id: "a3", text: "Paid activities/actual work", nextQuestionId: "q4" },
      ],
      helpText: "Business visits without paid work often qualify for temporary visitor status",
    },

    q4: {
      id: "q4",
      text: "What type of work will you be doing in Japan?",
      answerType: "single",
      options: [
        { id: "a1", text: "Highly-skilled professional", nextQuestionId: "r1" },
        { id: "a2", text: "Engineer/specialist in humanities/international services", nextQuestionId: "r2" },
        { id: "a3", text: "Intra-company transferee", nextQuestionId: "r3" },
        { id: "a4", text: "Professor/instructor", nextQuestionId: "r4" },
        { id: "a5", text: "Artist/entertainer", nextQuestionId: "r5" },
        { id: "a6", text: "Technical intern training", nextQuestionId: "r6" },
        { id: "a7", text: "Specified Skilled Worker", nextQuestionId: "r7" },
        { id: "a8", text: "Other work category", nextQuestionId: "r8" },
      ],
      helpText: "Japan has specific work visa categories based on profession and qualifications",
    },

    q5: {
      id: "q5",
      text: "What type of study or research will you be conducting?",
      answerType: "single",
      options: [
        { id: "a1", text: "University degree program", nextQuestionId: "r9" },
        { id: "a2", text: "Japanese language school", nextQuestionId: "r10" },
        { id: "a3", text: "Short-term study (less than 90 days)", nextQuestionId: "q9" },
        { id: "a4", text: "Research activities at institution", nextQuestionId: "r11" },
        { id: "a5", text: "Cultural training (art, martial arts, etc.)", nextQuestionId: "r12" },
      ],
      helpText: "Different study programs require different visa types",
    },

    q6: {
      id: "q6",
      text: "What is your relationship with the person you're visiting in Japan?",
      answerType: "single",
      options: [
        { id: "a1", text: "Spouse/child of Japanese national", nextQuestionId: "r13" },
        { id: "a2", text: "Spouse/child of permanent resident", nextQuestionId: "r13" },
        { id: "a3", text: "Parent of Japanese national", nextQuestionId: "r13" },
        { id: "a4", text: "Other family member or friend (short visit)", nextQuestionId: "q9" },
        { id: "a5", text: "Long-term family stay (more than 90 days)", nextQuestionId: "r14" },
      ],
      helpText: "Family relationships may qualify for specific visa types",
    },

    q7: {
      id: "q7",
      text: "What cultural activities will you be participating in?",
      answerType: "single",
      options: [
        { id: "a1", text: "Short-term cultural experience (less than 90 days)", nextQuestionId: "q9" },
        { id: "a2", text: "Learning traditional Japanese culture/arts", nextQuestionId: "r12" },
        { id: "a3", text: "Unpaid cultural performances/exchange", nextQuestionId: "q9" },
        { id: "a4", text: "Paid performances/activities", nextQuestionId: "r5" },
      ],
      helpText: "Long-term cultural training requires a Cultural Activities visa",
    },

    q8: {
      id: "q8",
      text: "How long will your transit through Japan be?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 72 hours, staying in airport transit area", nextQuestionId: "r16" },
        { id: "a2", text: "Less than 72 hours, leaving airport (transit tourism)", nextQuestionId: "q10" },
        { id: "a3", text: "More than 72 hours", nextQuestionId: "q9" },
      ],
      helpText: "Short transits may qualify for transit without visa or shore pass",
    },

    q9: {
      id: "q9",
      text: "What is your nationality?",
      answerType: "single",
      options: [
        { id: "a1", text: "Visa exemption agreement country (US, EU, etc.)", nextQuestionId: "r17" },
        { id: "a2", text: "Non-visa exemption country", nextQuestionId: "r18" },
        { id: "a3", text: "Not sure about visa exemption status", nextQuestionId: "r19" },
      ],
      helpText: "Citizens of many countries can enter Japan without a visa for short stays",
    },

    q10: {
      id: "q10",
      text: "What is your nationality for transit purposes?",
      answerType: "single",
      options: [
        { id: "a1", text: "Visa exemption agreement country", nextQuestionId: "r17" },
        { id: "a2", text: "Non-visa exemption country with Shore Pass eligibility", nextQuestionId: "r20" },
        { id: "a3", text: "Country requiring transit visa", nextQuestionId: "r21" },
      ],
      helpText: "Some nationalities may use a Shore Pass for very short visits during transit",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "Highly-Skilled Professional Visa",
      description: 
        "For professionals with advanced academic backgrounds, professional career achievements, and/or high income who qualify under Japan's point-based system.",
      requirements: [
        "Score at least 70 points on Japan's point-based system (education, work experience, age, salary, etc.)",
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by employer/sponsor in Japan",
        "Detailed documentation of academic background, work history, and professional achievements",
        "Employment contract or official letter of assignment",
        "Resume/CV and educational certificates",
        "Documents proving salary/income level",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
        {
          text: "Immigration Services Agency - Points-Based System",
          url: "https://www.isa.go.jp/en/publications/materials/newimmiact_3_system_index.html",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r2", "r3"],
      applicableCountries: ["All countries"],
    },

    r2: {
      id: "r2",
      title: "Engineer/Specialist in Humanities/International Services Visa",
      description: 
        "For professionals working in engineering, IT, language instruction, business management, etc. requiring specialized knowledge.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by employer in Japan",
        "University degree related to the field OR 10+ years of professional experience",
        "Employment contract with Japanese company",
        "Detailed job description",
        "Company registration documents",
        "Documents showing salary meets minimum requirements",
        "Resume/CV and educational certificates",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r1", "r3"],
      applicableCountries: ["All countries"],
    },

    r3: {
      id: "r3",
      title: "Intra-Company Transferee Visa",
      description: 
        "For employees transferred to a Japanese branch, subsidiary, or affiliate from a foreign office of the same company.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by Japanese office",
        "At least 1 year of employment at foreign office before transfer",
        "Transfer letter/assignment documentation",
        "Documents proving relationship between foreign and Japanese companies",
        "Resume/CV and educational certificates",
        "Company registration documents for both offices",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r2", "r4"],
      applicableCountries: ["All countries"],
    },

    r4: {
      id: "r4",
      title: "Professor Visa",
      description: 
        "For professors, assistant professors, associate professors, and lecturers at universities, colleges, and technical institutes in Japan.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by educational institution in Japan",
        "Employment contract with Japanese educational institution",
        "Detailed job description and syllabus",
        "Educational qualifications (typically PhD or Master's degree)",
        "Resume/CV with academic publications and teaching experience",
        "Letter from hiring institution",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r2", "r11"],
      applicableCountries: ["All countries"],
    },

    r5: {
      id: "r5",
      title: "Artist/Entertainer Visa",
      description: 
        "For artists, musicians, actors, models, professional athletes, and others in the entertainment industry.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by sponsor in Japan",
        "Performance contract or employment agreement",
        "Detailed performance schedule and venues",
        "Proof of artistic/entertainment background and activities",
        "Portfolio or credentials showing professional experience",
        "Financial documents showing compensation",
        "Letter from Japanese sponsor/agent",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r2", "r12"],
      applicableCountries: ["All countries"],
    },

    r6: {
      id: "r6",
      title: "Technical Intern Training Visa",
      description: 
        "For participants in Japan's Technical Intern Training Program (TITP) who will acquire technical skills in Japan to transfer back to their home countries.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by receiving organization in Japan",
        "Training plan approved by the Organization for Technical Intern Training (OTIT)",
        "Employment/training contract",
        "Letter from sending organization",
        "Documentation of pre-departure training",
        "Agreement to return to home country after training",
        "Photo (4cm x 3cm)",
        "Visa application form",
        "Must be between 18-30 years old (generally)",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
        {
          text: "Organization for Technical Intern Training",
          url: "https://www.otit.go.jp/",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r7", "r8"],
      applicableCountries: ["Primarily Southeast Asian countries, China, Philippines, Vietnam, Indonesia, etc."],
    },

    r7: {
      id: "r7",
      title: "Specified Skilled Worker Visa",
      description: 
        "For workers in industries facing labor shortages, with two categories: SSW-1 (basic skills, up to 5 years) and SSW-2 (advanced skills, renewable indefinitely).",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by employer in Japan",
        "Employment contract with Japanese company",
        "Pass industry-specific skills exam and Japanese language test (JLPT N4 or higher)",
        "For SSW-1: Work in one of the designated sectors with labor shortages",
        "For SSW-2: Additional technical requirements and prior experience as SSW-1",
        "Health insurance documentation",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
        {
          text: "Specified Skilled Worker Information",
          url: "https://www.ssw.go.jp/en/",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r6", "r2"],
      applicableCountries: ["Primarily Asian countries, though open to all nationalities that meet requirements"],
    },

    r8: {
      id: "r8",
      title: "Other Work Visa Categories",
      description: 
        "Japan offers various other work visa categories for specific professions and activities.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by sponsor in Japan",
        "Specific requirements depend on visa category:",
        "• Business Manager: business plan, investment of at least 5 million yen, office location, etc.",
        "• Legal/Accounting Services: professional qualifications and licenses",
        "• Medical Services: medical licenses and approvals",
        "• Religious Activities: invitation from religious organization in Japan",
        "• Journalist: assignment letter from media outlet",
        "• Skilled Labor: proof of specialized technical skills and experience",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
        {
          text: "Immigration Services Agency - Status of Residence",
          url: "https://www.isa.go.jp/en/applications/procedures/zairyu_nintei10.html",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r1", "r2"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "Student Visa (College/University)",
      description: 
        "For international students enrolled in degree programs at Japanese universities, colleges, junior colleges, or technical schools.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by educational institution in Japan",
        "Acceptance letter from Japanese educational institution",
        "Proof of sufficient funds to cover tuition and living expenses",
        "Academic transcripts and graduation certificates",
        "Documents showing Japanese language ability (if studying in Japanese)",
        "Educational background records",
        "Financial statements or scholarship certificates",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
        {
          text: "Japan Student Services Organization (JASSO)",
          url: "https://www.jasso.go.jp/en/",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r10", "r11"],
      applicableCountries: ["All countries"],
    },

    r10: {
      id: "r10",
      title: "Student Visa (Language School)",
      description: 
        "For international students studying at Japanese language schools accredited by the Association for the Promotion of Japanese Language Education.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by language school in Japan",
        "Acceptance letter from accredited Japanese language school",
        "Proof of sufficient funds to cover tuition and living expenses",
        "Educational background records",
        "Explanation of purpose of studying Japanese",
        "Financial statements or proof of sponsor",
        "Records of previous Japanese language study (if any)",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
        {
          text: "Association for the Promotion of Japanese Language Education",
          url: "https://www.nisshinkyo.org/english/",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r9", "r12"],
      applicableCountries: ["All countries"],
    },

    r11: {
      id: "r11",
      title: "Researcher Visa",
      description: 
        "For researchers, scientists, and scholars conducting research at Japanese universities, research institutes, or private companies.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by hosting institution in Japan",
        "Invitation letter from Japanese research institution",
        "Research plan and duration details",
        "Academic credentials and research background",
        "Letter of financial support or employment contract",
        "Resume/CV with list of publications",
        "Documents from hosting institution in Japan",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
        {
          text: "Japan Society for the Promotion of Science (JSPS)",
          url: "https://www.jsps.go.jp/english/",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r4", "r9"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "Cultural Activities Visa",
      description: 
        "For unpaid cultural activities, such as studying traditional Japanese arts, culture, or sports under Japanese instructors or institutions.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by hosting institution/individual in Japan",
        "Letter of acceptance from Japanese teacher, institution, or dojo",
        "Detailed training plan and schedule",
        "Proof of sufficient funds to cover stay in Japan",
        "Documents showing intention to learn specific Japanese cultural activity",
        "Guarantee of no employment or paid activities",
        "Financial statements or proof of sponsor",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r10", "r17"],
      applicableCountries: ["All countries"],
    },

    r13: {
      id: "r13",
      title: "Spouse or Child of Japanese National Visa",
      description: 
        "For legal spouses, children, or special adoption cases of Japanese nationals.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by Japanese spouse/parent",
        "Marriage certificate (for spouse) or birth certificate (for child)",
        "Japanese family register (koseki tohon) of Japanese spouse/parent",
        "Photos showing relationship (optional but helpful)",
        "Proof of ongoing communication and relationship",
        "Photo (4cm x 3cm)",
        "Visa application form",
        "For long-term stays: proof of financial support",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r14", "r17"],
      applicableCountries: ["All countries"],
    },

    r14: {
      id: "r14",
      title: "Long-Term Stay Visa",
      description: 
        "For extended stays in Japan that don't fit other visa categories, such as long-term medical treatment or extended family stays.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by sponsor in Japan",
        "Detailed reason for long-term stay",
        "Documents supporting purpose of stay",
        "Proof of sufficient funds to cover entire stay",
        "For family stays: documents proving relationship",
        "For medical treatment: medical documentation and treatment plan",
        "Guarantee of return to home country",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r13", "r15"],
      applicableCountries: ["All countries"],
    },

    r15: {
      id: "r15",
      title: "Medical Stay Visa",
      description: 
        "For patients seeking medical treatment at Japanese medical facilities and their accompanying nurses or caregivers.",
      requirements: [
        "Valid passport",
        "Certificate of Eligibility (COE) obtained by medical institution or guarantor in Japan",
        "Medical certificate from doctor in home country",
        "Acceptance letter from Japanese medical institution",
        "Treatment plan and estimated duration",
        "Proof of sufficient funds to cover medical expenses and stay",
        "For accompanying caregiver: relationship documentation",
        "Financial statements or proof of medical insurance coverage",
        "Photo (4cm x 3cm)",
        "Visa application form",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
        {
          text: "Japan Medical & Health Tourism Information",
          url: "https://www.jnto.go.jp/eng/services/medical/",
        },
      ],
      processingTime: "5-10 business days after COE obtained (COE processing: 1-3 months)",
      cost: {
        amount: 3000,
        currency: "JPY (visa fee) + 4000 JPY (COE application)",
      },
      alternativeOptions: ["r14", "r17"],
      applicableCountries: ["All countries"],
    },

    r16: {
      id: "r16",
      title: "Transit Without Visa",
      description: 
        "For passengers transiting through Japan to a third country without leaving the airport transit area.",
      requirements: [
        "Valid passport",
        "Confirmed onward ticket to destination country departing within 72 hours",
        "Valid visa for destination country (if required)",
        "Not leaving the international transit area of the airport",
        "No separate application needed - handled at immigration checkpoint",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Transit Information",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
      ],
      processingTime: "Immediate processing at airport",
      cost: {
        amount: 0,
        currency: "JPY",
      },
      alternativeOptions: ["r17", "r20"],
      applicableCountries: ["Most countries, though citizens of some countries may require a transit visa even for airside transit"],
    },

    r17: {
      id: "r17",
      title: "Visa Exemption/Visa Waiver",
      description: 
        "Citizens of many countries can enter Japan without a visa for short-term tourism, business, or visiting friends/family.",
      requirements: [
        "Valid passport",
        "Confirmed return/onward ticket",
        "Sufficient funds for stay",
        "No intention to work or engage in paid activities",
        "Stay limited to allowable period (typically 90 days, varies by nationality)",
        "May need to show itinerary or accommodation details",
        "Purpose limited to tourism, business meetings, visiting relatives, etc.",
        "For some nationalities: pre-registration on new digital visa/visit system",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Exemption Arrangements",
          url: "https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html",
        },
      ],
      processingTime: "Immediate processing at port of entry",
      cost: {
        amount: 0,
        currency: "JPY",
      },
      alternativeOptions: ["r18", "r1"],
      applicableCountries: [
        "Australia", "Austria", "Belgium", "Canada", "Croatia", "Czech Republic", "Denmark", 
        "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", 
        "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Mexico", 
        "Netherlands", "New Zealand", "Norway", "Poland", "Portugal", "Singapore", "Slovakia", 
        "Slovenia", "South Korea", "Spain", "Sweden", "Switzerland", "Taiwan", "United Kingdom", 
        "United States", "and others"
      ],
    },

    r18: {
      id: "r18",
      title: "Temporary Visitor Visa (Short-term Stay)",
      description: 
        "For citizens of countries not eligible for visa exemption, visiting Japan for tourism, business, visiting friends/relatives, etc. for up to 90 days.",
      requirements: [
        "Valid passport",
        "Visa application form",
        "Photo (4cm x 3cm, taken within 6 months)",
        "Detailed itinerary in Japan",
        "Financial statements or proof of sufficient funds",
        "For tourism: hotel reservations, flight tickets",
        "For business: invitation letter from Japanese company",
        "For visiting relatives: invitation letter and documents proving relationship",
        "Additional documents may be required depending on purpose and nationality",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
      ],
      processingTime: "3-5 business days (varies by embassy/consulate)",
      cost: {
        amount: 3000,
        currency: "JPY (single-entry) or 6000 JPY (multiple-entry)",
      },
      alternativeOptions: ["r17", "r14"],
      applicableCountries: [
        "China", "Russia", "Philippines", "Vietnam", "India", "Brazil", "Indonesia", "Morocco", 
        "Ukraine", "Egypt", "South Africa", "Saudi Arabia", "Pakistan", "and others not part of visa exemption arrangements"
      ],
    },

    r19: {
      id: "r19",
      title: "Visa Exemption Eligibility Check",
      description: 
        "Information to determine if your nationality is eligible for visa-free entry to Japan.",
      requirements: [
        "Check Japan Ministry of Foreign Affairs website for current visa exemption list",
        "Visa exemption typically allows 90-day stays (15 days for some nationalities)",
        "Exemption applies only for temporary visits (tourism, business, etc.)",
        "Even with visa exemption, you must still:",
        "• Have a valid passport",
        "• Have proof of onward/return travel",
        "• Have sufficient funds for your stay",
        "• Not intend to work",
        "• Not have criminal convictions",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Exemption Arrangements",
          url: "https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html",
        },
      ],
      processingTime: "Immediate information check",
      cost: {
        amount: 0,
        currency: "JPY",
      },
      alternativeOptions: ["r17", "r18"],
      applicableCountries: ["All countries"],
    },

    r20: {
      id: "r20",
      title: "Shore Pass (Landing Permission)",
      description: 
        "For cruise ship passengers or air travelers in transit who wish to temporarily leave the port/airport during a short layover.",
      requirements: [
        "Valid passport",
        "Confirmed onward ticket departing within 72 hours",
        "Sufficient funds for short stay",
        "May be limited to specific geographic areas near port/airport",
        "Application made upon arrival at immigration",
        "Only available at certain ports of entry",
        "Not guaranteed - issued at discretion of immigration officer",
      ],
      applicationLinks: [
        {
          text: "Japan Immigration Services Agency",
          url: "https://www.isa.go.jp/en/",
        },
      ],
      processingTime: "Processed upon arrival",
      cost: {
        amount: 0,
        currency: "JPY",
      },
      alternativeOptions: ["r16", "r21"],
      applicableCountries: ["Various countries not requiring full transit visa"],
    },

    r21: {
      id: "r21",
      title: "Transit Visa",
      description: 
        "For travelers who need to pass through Japan en route to another country and will leave the international transit area.",
      requirements: [
        "Valid passport",
        "Visa application form",
        "Photo (4cm x 3cm)",
        "Confirmed tickets showing transit through Japan",
        "Valid visa for final destination (if required)",
        "Proof of sufficient funds for transit period",
        "Typically issued for stays up to 15 days",
        "May require explanation of why transit through Japan is necessary",
      ],
      applicationLinks: [
        {
          text: "Japan Ministry of Foreign Affairs - Visa Procedures",
          url: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        },
      ],
      processingTime: "3-5 business days (varies by embassy/consulate)",
      cost: {
        amount: 3000,
        currency: "JPY",
      },
      alternativeOptions: ["r16", "r20"],
      applicableCountries: ["Countries not eligible for visa exemption or shore pass"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-19",
    countries: ["Japan"],
  },
};