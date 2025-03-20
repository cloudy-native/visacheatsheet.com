import { VisaDecisionTree } from "./model";

export const mexicoVisaDecisionTree: VisaDecisionTree = {
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "What is the primary purpose of your visit to Mexico?",
      answerType: "single",
      options: [
        { id: "a1", text: "Tourism/Leisure", nextQuestionId: "q2" },
        { id: "a2", text: "Business/Work", nextQuestionId: "q3" },
        { id: "a3", text: "Education/Study", nextQuestionId: "q4" },
        { id: "a4", text: "Family/Immigration", nextQuestionId: "q5" },
        { 
          id: "a5", 
          text: "Humanitarian/Asylum", 
          nextQuestionId: "r9" 
        },
      ],
      helpText: "Select the primary reason for your visit to Mexico",
    },

    q2: {
      id: "q2",
      text: "How long do you plan to stay in Mexico?",
      answerType: "single",
      options: [
        { id: "a1", text: "Less than 180 days", nextQuestionId: "q6" },
        { id: "a2", text: "More than 180 days", nextQuestionId: "q7" },
      ],
      helpText: "The duration of your stay affects which visa you need",
    },

    q3: {
      id: "q3",
      text: "What type of work will you be doing in Mexico?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Business meetings/conferences only (no work)",
          nextQuestionId: "q6",
        },
        {
          id: "a2",
          text: "Temporary work with Mexican employer",
          nextQuestionId: "r3",
        },
        {
          id: "a3",
          text: "Professional under USMCA/NAFTA",
          nextQuestionId: "q8",
        },
        { 
          id: "a4", 
          text: "Religious activities", 
          nextQuestionId: "r6" 
        },
      ],
      helpText: "Different work activities require different visa types",
    },

    q4: {
      id: "q4",
      text: "What type of educational program will you be attending?",
      answerType: "single",
      options: [
        {
          id: "a1",
          text: "Full-time study at Mexican institution",
          nextQuestionId: "r5",
        },
        {
          id: "a2",
          text: "Short courses or language classes (less than 180 days)",
          nextQuestionId: "q6",
        },
        { 
          id: "a3", 
          text: "Research or academic exchange", 
          nextQuestionId: "r5" 
        },
      ],
      helpText: "Your program type determines the visa category",
    },

    q5: {
      id: "q5",
      text: "What is your relationship with the Mexican person?",
      answerType: "single",
      options: [
        { 
          id: "a1", 
          text: "Spouse of Mexican citizen", 
          nextQuestionId: "r7" 
        },
        {
          id: "a2",
          text: "Immediate relative (child, parent) of Mexican citizen",
          nextQuestionId: "r7",
        },
        {
          id: "a3",
          text: "Family member of temporary/permanent resident",
          nextQuestionId: "r8",
        },
        {
          id: "a4",
          text: "Just visiting family (no immigration intent)",
          nextQuestionId: "q6",
        },
      ],
      helpText:
        "Your relationship affects your eligibility for family-based visas",
    },

    q6: {
      id: "q6",
      text: "What is your nationality/country of passport?",
      answerType: "single",
      options: [
        { 
          id: "a1", 
          text: "USA, Canada, EU countries, Japan, or other visa-exempt country", 
          nextQuestionId: "r1" 
        },
        { 
          id: "a2", 
          text: "Brazil, Colombia, Peru, Russia, Ukraine, or other countries requiring SAE", 
          nextQuestionId: "r2" 
        },
        { 
          id: "a3", 
          text: "Countries requiring visitor visa (India, China, most African countries)", 
          nextQuestionId: "r10" 
        },
      ],
      helpText:
        "Your nationality determines if you need a visa or can enter with just FMM",
    },

    q7: {
      id: "q7",
      text: "How long do you intend to live in Mexico?",
      answerType: "single",
      options: [
        { 
          id: "a1", 
          text: "1-4 years (temporary)", 
          nextQuestionId: "r4" 
        },
        { 
          id: "a2", 
          text: "Permanently or indefinitely", 
          nextQuestionId: "r11" 
        },
      ],
      helpText:
        "This determines whether you need a temporary or permanent resident visa",
    },

    q8: {
      id: "q8",
      text: "Are you a citizen of the United States or Canada?",
      answerType: "single",
      options: [
        { id: "a1", text: "Yes", nextQuestionId: "r12" },
        { id: "a2", text: "No", nextQuestionId: "r3" },
      ],
      helpText:
        "USMCA/NAFTA professional visas are only available to US and Canadian citizens",
    },
  },

  results: {
    r1: {
      id: "r1",
      title: "FMM Tourist Card (No Visa Required)",
      description:
        "For short-term visitors from visa-exempt countries. You can obtain the FMM form upon arrival or fill it out online before travel.",
      requirements: [
        "Valid passport with at least 6 months validity beyond intended stay",
        "Completed FMM form",
        "Proof of economic solvency (may be requested)",
        "Return flight ticket (may be requested)",
        "Hotel reservations or invitation letter (may be requested)",
      ],
      applicationLinks: [
        {
          text: "Online FMM Application",
          url: "https://www.inm.gob.mx/fmme/publico/en/solicitud.html",
        },
        {
          text: "Instituto Nacional de Migración (INM)",
          url: "https://www.gob.mx/inm",
        },
      ],
      processingTime: "Immediate (at port of entry)",
      cost: {
        amount: 638,
        currency: "MXN (approximately $36 USD)",
      },
      alternativeOptions: ["r10", "r4"],
      applicableCountries: [
        "United States",
        "Canada",
        "Countries in the European Union",
        "United Kingdom",
        "Japan",
        "Australia",
        "New Zealand",
        "And approximately 50 other countries",
      ],
    },

    r2: {
      id: "r2",
      title: "Electronic Authorization System (SAE)",
      description:
        "For visitors from specific countries that are eligible for visa waiver but require pre-authorization through the SAE system.",
      requirements: [
        "Valid passport with at least 6 months validity beyond intended stay",
        "Online application through SAE system",
        "Proof of economic solvency",
        "Purpose of travel details",
        "Return flight ticket",
      ],
      applicationLinks: [
        {
          text: "Mexican Consular Services Portal",
          url: "https://consulmex.sre.gob.mx/",
        },
        {
          text: "Instituto Nacional de Migración (INM)",
          url: "https://www.gob.mx/inm",
        },
      ],
      processingTime: "1-3 business days",
      cost: {
        amount: 558,
        currency: "MXN (approximately $30 USD)",
      },
      alternativeOptions: ["r10"],
      applicableCountries: [
        "Brazil",
        "Colombia",
        "Peru",
        "Russia",
        "Ukraine",
        "Turkey",
        "And several other countries",
      ],
    },

    r3: {
      id: "r3",
      title: "Temporary Resident Visa for Work",
      description:
        "For individuals with a job offer from a Mexican company who will be working in Mexico for more than 180 days.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Job offer from Mexican employer",
        "Employer must request authorization from INM first",
        "Proof of skills/qualifications",
        "Visa application form",
        "Passport photos",
        "Proof of economic solvency",
        "Payment of fees",
      ],
      applicationLinks: [
        {
          text: "Mexican Consular Network",
          url: "https://directorio.sre.gob.mx/index.php/representaciones/consulados-de-mexico-en-el-exterior",
        },
        {
          text: "INM Temporary Resident Card",
          url: "https://www.gob.mx/tramites/ficha/expedicion-de-tarjeta-de-residente-temporal/INM74",
        },
      ],
      processingTime: "15-30 business days",
      cost: {
        amount: 2850,
        currency: "MXN (approximately $155 USD) plus additional fees",
      },
      alternativeOptions: ["r12", "r4"],
      applicableCountries: ["All countries"],
    },

    r4: {
      id: "r4",
      title: "Temporary Resident Visa",
      description:
        "For individuals intending to live in Mexico for more than 180 days but less than 4 years, not working for a Mexican company.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Visa application form",
        "Proof of economic solvency (bank statements showing approximately $2,500 USD/month income)",
        "Letter explaining purpose of travel",
        "Passport photos",
        "Payment of fees",
      ],
      applicationLinks: [
        {
          text: "Mexican Consular Network",
          url: "https://directorio.sre.gob.mx/index.php/representaciones/consulados-de-mexico-en-el-exterior",
        },
        {
          text: "INM Temporary Resident Card",
          url: "https://www.gob.mx/tramites/ficha/expedicion-de-tarjeta-de-residente-temporal/INM74",
        },
      ],
      processingTime: "10-15 business days",
      cost: {
        amount: 2850,
        currency: "MXN (approximately $155 USD) plus additional fees",
      },
      alternativeOptions: ["r11", "r1"],
      applicableCountries: ["All countries"],
    },

    r5: {
      id: "r5",
      title: "Student Visa (Temporary Resident Student)",
      description:
        "For students accepted into Mexican educational institutions for programs lasting more than 180 days.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Acceptance letter from Mexican educational institution",
        "Proof of financial solvency to cover tuition and living expenses",
        "Visa application form",
        "Passport photos",
        "Payment of fees",
      ],
      applicationLinks: [
        {
          text: "Mexican Consular Network",
          url: "https://directorio.sre.gob.mx/index.php/representaciones/consulados-de-mexico-en-el-exterior",
        },
        {
          text: "INM Student Visa Information",
          url: "https://www.gob.mx/inm/articulos/visas-para-extranjeros-93033",
        },
      ],
      processingTime: "10-15 business days",
      cost: {
        amount: 2850,
        currency: "MXN (approximately $155 USD) plus additional fees",
      },
      alternativeOptions: ["r1", "r4"],
      applicableCountries: ["All countries"],
    },

    r6: {
      id: "r6",
      title: "Religious Visa (Temporary Resident)",
      description:
        "For members of religious organizations performing religious activities in Mexico.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Letter from religious organization in Mexico",
        "Proof of religious status/ordination",
        "Visa application form",
        "Passport photos",
        "Payment of fees",
      ],
      applicationLinks: [
        {
          text: "Mexican Consular Network",
          url: "https://directorio.sre.gob.mx/index.php/representaciones/consulados-de-mexico-en-el-exterior",
        },
        {
          text: "INM Temporary Resident Information",
          url: "https://www.gob.mx/inm/articulos/visas-para-extranjeros-93033",
        },
      ],
      processingTime: "15-20 business days",
      cost: {
        amount: 2850,
        currency: "MXN (approximately $155 USD) plus additional fees",
      },
      alternativeOptions: ["r4"],
      applicableCountries: ["All countries"],
    },

    r7: {
      id: "r7",
      title: "Family Unity Visa (Mexican Citizen Family)",
      description:
        "For immediate family members of Mexican citizens.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Proof of relationship to Mexican citizen (marriage certificate, birth certificate)",
        "Mexican relative's ID or passport",
        "Visa application form",
        "Passport photos",
        "Payment of fees",
      ],
      applicationLinks: [
        {
          text: "Mexican Consular Network",
          url: "https://directorio.sre.gob.mx/index.php/representaciones/consulados-de-mexico-en-el-exterior",
        },
        {
          text: "INM Family Unity Visa Information",
          url: "https://www.gob.mx/inm/articulos/visas-para-extranjeros-93033",
        },
      ],
      processingTime: "15-20 business days",
      cost: {
        amount: 2850,
        currency: "MXN (approximately $155 USD) plus additional fees",
      },
      alternativeOptions: ["r11"],
      applicableCountries: ["All countries"],
    },

    r8: {
      id: "r8",
      title: "Family Unity Visa (Resident Family)",
      description:
        "For family members of temporary or permanent residents of Mexico.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Proof of relationship to resident (marriage certificate, birth certificate)",
        "Mexican resident's residency card",
        "Visa application form",
        "Passport photos",
        "Payment of fees",
      ],
      applicationLinks: [
        {
          text: "Mexican Consular Network",
          url: "https://directorio.sre.gob.mx/index.php/representaciones/consulados-de-mexico-en-el-exterior",
        },
        {
          text: "INM Family Unity Visa Information",
          url: "https://www.gob.mx/inm/articulos/visas-para-extranjeros-93033",
        },
      ],
      processingTime: "15-20 business days",
      cost: {
        amount: 2850,
        currency: "MXN (approximately $155 USD) plus additional fees",
      },
      alternativeOptions: ["r4"],
      applicableCountries: ["All countries"],
    },

    r9: {
      id: "r9",
      title: "Humanitarian Visa",
      description:
        "For asylum seekers, refugees, and those in vulnerable situations requiring humanitarian protection.",
      requirements: [
        "Valid ID or passport (if available)",
        "Evidence of humanitarian situation",
        "Application for refugee status or asylum",
        "Interview with immigration officials",
      ],
      applicationLinks: [
        {
          text: "Mexican Commission for Refugee Aid (COMAR)",
          url: "https://www.gob.mx/comar",
        },
        {
          text: "INM Humanitarian Visa Information",
          url: "https://www.gob.mx/inm/articulos/visa-por-razones-humanitarias",
        },
      ],
      processingTime: "Variable (expedited in urgent cases)",
      cost: {
        amount: 0,
        currency: "MXN (Free)",
      },
      alternativeOptions: [],
      applicableCountries: ["All countries"],
    },

    r10: {
      id: "r10",
      title: "Visitor Visa (Tourist/Business)",
      description:
        "For short-term visitors from countries that require a visa to enter Mexico.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Completed visa application form",
        "Proof of economic solvency",
        "Round-trip ticket",
        "Hotel reservations or invitation letter",
        "Passport photos",
        "Payment of fees",
      ],
      applicationLinks: [
        {
          text: "Mexican Consular Network",
          url: "https://directorio.sre.gob.mx/index.php/representaciones/consulados-de-mexico-en-el-exterior",
        },
        {
          text: "Mexican Visa Information",
          url: "https://www.gob.mx/sre/acciones-y-programas/visa-de-visitante-sin-permiso-para-realizar-actividades-remuneradas",
        },
      ],
      processingTime: "1-10 business days",
      cost: {
        amount: 638,
        currency: "MXN (approximately $36 USD)",
      },
      alternativeOptions: ["r4"],
      applicableCountries: [
        "China",
        "India",
        "Most African countries",
        "And many other countries not exempt from visa requirements",
      ],
    },

    r11: {
      id: "r11",
      title: "Permanent Resident Visa",
      description:
        "For individuals intending to live in Mexico permanently.",
      requirements: [
        "Valid passport with at least 6 months validity",
        "Application form",
        "Proof of economic solvency (investments or retirement income)",
        "Evidence of being a pensioner with sufficient monthly income (approximately $4,500 USD/month)",
        "OR proof of 4 consecutive years as Temporary Resident",
        "OR family ties to Mexican citizens or permanent residents",
        "Passport photos",
        "Payment of fees",
      ],
      applicationLinks: [
        {
          text: "Mexican Consular Network",
          url: "https://directorio.sre.gob.mx/index.php/representaciones/consulados-de-mexico-en-el-exterior",
        },
        {
          text: "INM Permanent Resident Card",
          url: "https://www.gob.mx/tramites/ficha/expedicion-de-tarjeta-de-residente-permanente/INM82",
        },
      ],
      processingTime: "15-30 business days",
      cost: {
        amount: 5600,
        currency: "MXN (approximately $305 USD) plus additional fees",
      },
      alternativeOptions: ["r4"],
      applicableCountries: ["All countries"],
    },

    r12: {
      id: "r12",
      title: "USMCA/NAFTA Professional Visa",
      description:
        "For US and Canadian professionals in specific occupations under the USMCA (formerly NAFTA) trade agreement.",
      requirements: [
        "US or Canadian citizenship",
        "Valid passport with at least 6 months validity",
        "Job offer from Mexican employer",
        "Proof of professional qualifications",
        "Documentation showing the position requires professional credentials",
        "Visa application form",
        "Passport photos",
        "Payment of fees",
      ],
      applicationLinks: [
        {
          text: "Mexican Consular Network",
          url: "https://directorio.sre.gob.mx/index.php/representaciones/consulados-de-mexico-en-el-exterior",
        },
        {
          text: "INM Professional Visa Information",
          url: "https://www.gob.mx/inm/articulos/visas-para-extranjeros-93033",
        },
      ],
      processingTime: "10-15 business days",
      cost: {
        amount: 2850,
        currency: "MXN (approximately $155 USD) plus additional fees",
      },
      alternativeOptions: ["r3", "r4"],
      applicableCountries: ["United States", "Canada"],
    },
  },

  metadata: {
    version: "1.0.0",
    lastUpdated: "2025-03-20",
    author: "Max",
    countries: ["Mexico"],
  },
};