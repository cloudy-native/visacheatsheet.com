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
  name: string;
  countryCode: string;
  decisionTree: VisaDecisionTree;
};

// Country data with flags and names
export const visas: Country[] = [
  {
    id: "australia",
    name: "Australia",
    countryCode: "au",
    decisionTree: australiaVisaDecisionTree,
  },
  {
    id: "brazil",
    name: "Brazil",
    countryCode: "br",
    decisionTree: brazilVisaDecisionTree,
  },
  {
    id: "canada",
    name: "Canada",
    countryCode: "ca",
    decisionTree: canadaVisaDecisionTree,
  },
  {
    id: "china",
    name: "China",
    countryCode: "cn",
    decisionTree: chinaVisaDecisionTree,
  },
  {
    id: "india",
    name: "India",
    countryCode: "in",
    decisionTree: indiaVisaDecisionTree,
  },
  {
    id: "indonesia",
    name: "Indonesia (including Bali)",
    countryCode: "id",
    decisionTree: indonesiaVisaDecisionTree,
  },
  {
    id: "japan",
    name: "Japan",
    countryCode: "jp",
    decisionTree: japanVisaDecisionTree,
  },
  {
    id: "malaysia",
    name: "Malaysia",
    countryCode: "my",
    decisionTree: malaysiaVisaDecisionTree,
  },
  {
    id: "mexico",
    name: "Mexico",
    countryCode: "mx",
    decisionTree: mexicoVisaDecisionTree,
  },
  {
    id: "newzealand",
    name: "New Zealand",
    countryCode: "nz",
    decisionTree: newzealandVisaDecisionTree,
  },
  {
    id: "northkorea",
    name: "North Korea",
    countryCode: "kp",
    decisionTree: northkoreaVisaDecisionTree,
  },
  {
    id: "russia",
    name: "Russia",
    countryCode: "ru",
    decisionTree: russiaVisaDecisionTree,
  },
  {
    id: "schengen",
    name: "Schengen Area",
    countryCode: "eu",
    decisionTree: schengenVisaDecisionTree,
  },
  {
    id: "singapore",
    name: "Singapore",
    countryCode: "sg",
    decisionTree: singaporeVisaDecisionTree,
  },
  {
    id: "southafrica",
    name: "South Africa",
    countryCode: "za",
    decisionTree: southafricaVisaDecisionTree,
  },
  {
    id: "southkorea",
    name: "South Korea",
    countryCode: "kr",
    decisionTree: southkoreaVisaDecisionTree,
  },
  {
    id: "thailand",
    name: "Thailand",
    countryCode: "th",
    decisionTree: thaiVisaDecisionTree,
  },
  {
    id: "turkey",
    name: "Turkey",
    countryCode: "tr",
    decisionTree: turkeyVisaDecisionTree,
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    countryCode: "ae",
    decisionTree: uaeVisaDecisionTree,
  },
  {
    id: "uk",
    name: "United Kingdom",
    countryCode: "gb",
    decisionTree: ukVisaDecisionTree,
  },
  {
    id: "us",
    name: "United States",
    countryCode: "us",
    decisionTree: usVisaDecisionTree,
  },
].sort((a, b) => a.name.localeCompare(b.name));
