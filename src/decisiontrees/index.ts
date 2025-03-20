import { australiaVisaDecisionTree } from "./australia";
import { brazilVisaDecisionTree } from "./brazil";
import { canadaVisaDecisionTree } from "./canada";
import { chinaVisaDecisionTree } from "./china";
import { indiaVisaDecisionTree } from "./india";
import { indonesiaVisaDecisionTree } from "./indonesia";
import { japanVisaDecisionTree } from "./japan";
import { malaysiaVisaDecisionTree } from "./malaysia";
import { mexicoVisaDecisionTree } from "./mexico";
import { VisaDecisionTree } from "./model";
import { newzealandVisaDecisionTree } from "./newzealand";
import { northkoreaVisaDecisionTree } from "./northkorea";
import { russiaVisaDecisionTree } from "./russia";
import { schengenVisaDecisionTree } from "./schengen";
import { singaporeVisaDecisionTree } from "./singapore";
import { southafricaVisaDecisionTree } from "./southafrica";
import { southkoreaVisaDecisionTree } from "./southkorea";
import { thaiVisaDecisionTree } from "./thailand";
import { turkeyVisaDecisionTree } from "./turkey";
import { uaeVisaDecisionTree } from "./uae";
import { ukVisaDecisionTree } from "./uk";
import { usVisaDecisionTree } from "./us";

export type Country = {
  id: string;
  countryName: string;
  countryCode: string;
  decisionTree: VisaDecisionTree;
};

// Country data with flags and names
export const supportedCountries: Country[] = [
  {
    id: "australia",
    countryName: "Australia",
    countryCode: "au",
    decisionTree: australiaVisaDecisionTree,
  },
  {
    id: "brazil",
    countryName: "Brazil",
    countryCode: "br",
    decisionTree: brazilVisaDecisionTree,
  },
  {
    id: "canada",
    countryName: "Canada",
    countryCode: "ca",
    decisionTree: canadaVisaDecisionTree,
  },
  {
    id: "china",
    countryName: "China",
    countryCode: "cn",
    decisionTree: chinaVisaDecisionTree,
  },
  {
    id: "india",
    countryName: "India",
    countryCode: "in",
    decisionTree: indiaVisaDecisionTree,
  },
  {
    id: "indonesia",
    countryName: "Indonesia (including Bali)",
    countryCode: "id",
    decisionTree: indonesiaVisaDecisionTree,
  },
  {
    id: "japan",
    countryName: "Japan",
    countryCode: "jp",
    decisionTree: japanVisaDecisionTree,
  },
  {
    id: "malaysia",
    countryName: "Malaysia",
    countryCode: "my",
    decisionTree: malaysiaVisaDecisionTree,
  },
  {
    id: "mexico",
    countryName: "Mexico",
    countryCode: "mx",
    decisionTree: mexicoVisaDecisionTree,
  },
  {
    id: "newzealand",
    countryName: "New Zealand",
    countryCode: "nz",
    decisionTree: newzealandVisaDecisionTree,
  },
  {
    id: "northkorea",
    countryName: "North Korea",
    countryCode: "kp",
    decisionTree: northkoreaVisaDecisionTree,
  },
  {
    id: "russia",
    countryName: "Russia",
    countryCode: "ru",
    decisionTree: russiaVisaDecisionTree,
  },
  {
    id: "schengen",
    countryName: "Schengen Area",
    countryCode: "eu",
    decisionTree: schengenVisaDecisionTree,
  },
  {
    id: "singapore",
    countryName: "Singapore",
    countryCode: "sg",
    decisionTree: singaporeVisaDecisionTree,
  },
  {
    id: "southafrica",
    countryName: "South Africa",
    countryCode: "za",
    decisionTree: southafricaVisaDecisionTree,
  },
  {
    id: "southkorea",
    countryName: "South Korea",
    countryCode: "kr",
    decisionTree: southkoreaVisaDecisionTree,
  },
  {
    id: "thailand",
    countryName: "Thailand",
    countryCode: "th",
    decisionTree: thaiVisaDecisionTree,
  },
  {
    id: "turkey",
    countryName: "Turkey",
    countryCode: "tr",
    decisionTree: turkeyVisaDecisionTree,
  },
  {
    id: "uae",
    countryName: "United Arab Emirates",
    countryCode: "ae",
    decisionTree: uaeVisaDecisionTree,
  },
  {
    id: "uk",
    countryName: "United Kingdom",
    countryCode: "gb",
    decisionTree: ukVisaDecisionTree,
  },
  {
    id: "us",
    countryName: "United States",
    countryCode: "us",
    decisionTree: usVisaDecisionTree,
  },
].sort((a, b) => a.countryName.localeCompare(b.countryName));
