import { australiaVisaDecisionTree } from "./australia";
import { brazilVisaDecisionTree } from "./brazil";
import { canadaVisaDecisionTree } from "./canada";
import { chinaVisaDecisionTree } from "./china";
import { indiaVisaDecisionTree } from "./india";
import { japanVisaDecisionTree } from "./japan";
import { mexicoVisaDecisionTree } from "./mexico";
import { newzealandVisaDecisionTree } from "./newzealand";
import { VisaDecisionTree } from "./model";
import { russiaVisaDecisionTree } from "./russia";
import { schengenVisaDecisionTree } from "./schengen";
import { singaporeVisaDecisionTree } from "./singapore";
import { southafricaVisaDecisionTree } from "./southafrica";
import { thaiVisaDecisionTree } from "./thailand";
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
    id: "schengen",
    name: "Schengen Area",
    countryCode: "eu",
    decisionTree: schengenVisaDecisionTree,
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
  {
    id: "mexico",
    name: "Mexico",
    countryCode: "mx",
    decisionTree: mexicoVisaDecisionTree,
  },
  {
    id: "australia",
    name: "Australia",
    countryCode: "au",
    decisionTree: australiaVisaDecisionTree,
  },
  {
    id: "thailand",
    name: "Thailand",
    countryCode: "th",
    decisionTree: thaiVisaDecisionTree,
  },
  {
    id: "india",
    name: "India",
    countryCode: "in",
    decisionTree: indiaVisaDecisionTree,
  },
  {
    id: "china",
    name: "China",
    countryCode: "cn",
    decisionTree: chinaVisaDecisionTree,
  },
  {
    id: "singapore",
    name: "Singapore",
    countryCode: "sg",
    decisionTree: singaporeVisaDecisionTree,
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    countryCode: "ae",
    decisionTree: uaeVisaDecisionTree,
  },
  {
    id: "canada",
    name: "Canada",
    countryCode: "ca",
    decisionTree: canadaVisaDecisionTree,
  },
  {
    id: "russia",
    name: "Russia",
    countryCode: "ru",
    decisionTree: russiaVisaDecisionTree,
  },
  {
    id: "brazil",
    name: "Brazil",
    countryCode: "br",
    decisionTree: brazilVisaDecisionTree,
  },
  {
    id: "southafrica",
    name: "South Africa",
    countryCode: "za",
    decisionTree: southafricaVisaDecisionTree,
  },
  {
    id: "japan",
    name: "Japan",
    countryCode: "jp",
    decisionTree: japanVisaDecisionTree,
  },
  {
    id: "newzealand",
    name: "New Zealand",
    countryCode: "nz",
    decisionTree: newzealandVisaDecisionTree,
  },
];
