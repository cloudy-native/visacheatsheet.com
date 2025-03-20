import * as fs from "fs";

import {
  australiaVisaDecisionTree,
  brazilVisaDecisionTree,
  canadaVisaDecisionTree,
  chinaVisaDecisionTree,
  indiaVisaDecisionTree,
  japanVisaDecisionTree,
  russiaVisaDecisionTree,
  schengenVisaDecisionTree,
  southafricaVisaDecisionTree,
  thaiVisaDecisionTree,
  ukVisaDecisionTree,
  usVisaDecisionTree,
} from "../src/decisiontrees";
import { VisaDecisionTree } from "../src/decisiontrees/model";
import { convertToMermaid } from "./treeToMermaid";

const trees: { [key: string]: VisaDecisionTree } = {
  australia: australiaVisaDecisionTree,
  brazil: brazilVisaDecisionTree,
  canada: canadaVisaDecisionTree,
  china: chinaVisaDecisionTree,
  india: indiaVisaDecisionTree,
  japan: japanVisaDecisionTree,
  russia: russiaVisaDecisionTree,
  schengen: schengenVisaDecisionTree,
  southafrica: southafricaVisaDecisionTree,
  thai: thaiVisaDecisionTree,
  uk: ukVisaDecisionTree,
  us: usVisaDecisionTree,
};

for (const country in trees) {
  const tree = trees[country];
  const stream = fs.createWriteStream(`./doc/trees/${country}.md`);
  const mermaid = convertToMermaid(tree);

  stream.write("# Visa Decision Tree for " + country + "\n");
  stream.write("\n");
  stream.write("```mermaid\n");
  stream.write(mermaid);
  stream.write("```\n");

  stream.end();

  stream.on("finish", () => {
    console.log(country, "all writes completed successfully");
  });

  // Listen for errors
  stream.on("error", (error) => {
    console.error(country, `Error writing to stream: ${error}`);
  });
}
