import { australiaVisaDecisionTree } from "./australia";
import { brazilVisaDecisionTree } from "./brazil";
import { canadaVisaDecisionTree } from "./canada";
import { chinaVisaDecisionTree } from "./china";
import { indiaVisaDecisionTree } from "./india";
import { japanVisaDecisionTree } from "./japan";
import { russiaVisaDecisionTree } from "./russia";
import { schengenVisaDecisionTree } from "./schengen";
import { southafricaVisaDecisionTree } from "./southafrica";
import { thaiVisaDecisionTree } from "./thailand";
import { ukVisaDecisionTree } from "./uk";
import { usVisaDecisionTree } from "./us";

// Country data with flags and names
export const visas = [
  {
    id: "schengen",
    name: "Schengen Area",
    flag: "https://flagcdn.com/w160/eu.png",
    decisionTree: schengenVisaDecisionTree,
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "https://flagcdn.com/w160/gb.png",
    decisionTree: ukVisaDecisionTree,
  },
  {
    id: "us",
    name: "United States",
    flag: "https://flagcdn.com/w160/us.png",
    decisionTree: usVisaDecisionTree,
  },
  {
    id: "australia",
    name: "Australia",
    flag: "https://flagcdn.com/w160/au.png",
    decisionTree: australiaVisaDecisionTree,
  },
  {
    id: "thailand",
    name: "Thailand",
    flag: "https://flagcdn.com/w160/th.png",
    decisionTree: thaiVisaDecisionTree,
  },
  {
    id: "india",
    name: "India",
    flag: "https://flagcdn.com/w160/in.png",
    decisionTree: indiaVisaDecisionTree,
  },
  {
    id: "china",
    name: "China",
    flag: "https://flagcdn.com/w160/cn.png",
    decisionTree: chinaVisaDecisionTree,
  },
  {
    id: "canada",
    name: "Canada",
    flag: "https://flagcdn.com/w160/ca.png",
    decisionTree: canadaVisaDecisionTree,
  },
  {
    id: "russia",
    name: "Russia",
    flag: "https://flagcdn.com/w160/ru.png",
    decisionTree: russiaVisaDecisionTree,
  },
  {
    id: "brazil",
    name: "Brazil",
    flag: "https://flagcdn.com/w160/br.png",
    decisionTree: brazilVisaDecisionTree,
  },
  {
    id: "southafrica",
    name: "South Africa",
    flag: "https://flagcdn.com/w160/za.png",
    decisionTree: southafricaVisaDecisionTree,
  },
  {
    id: "japan",
    name: "Japan",
    flag: "https://flagcdn.com/w160/jp.png",
    decisionTree: japanVisaDecisionTree,
  },
];
