import * as fs from "fs";

import { japanVisaDecisionTree } from "../src/decisiontrees/japan";
import { VisaDecisionTree } from "../src/decisiontrees/model";
import { convertToMermaid } from "./treeToMermaid";
import { usVisaDecisionTree } from "../src/decisiontrees/us";

const preamble: string[] = ["# Visa Decision Tree", "```mermaid"];
const postamble: string[] = ["```"];

const trees: { [key: string]: VisaDecisionTree } = {
  us: usVisaDecisionTree,
  japan: japanVisaDecisionTree,
};

for (const country in trees) {
  const tree = trees[country];
  const stream = fs.createWriteStream(`docs/${country}.md`);
  const mermaid = convertToMermaid(tree);

  stream.write(preamble.join("\n"));
  stream.write("\n");
  stream.write(mermaid);
  stream.write(postamble.join("\n"));
  stream.write("\n");
  
  stream.end();

  stream.on("finish", () => {
    console.log(country, "all writes completed successfully");
  });

  // Listen for errors
  stream.on("error", (error) => {
    console.error(country, `Error writing to stream: ${error}`);
  });
}
