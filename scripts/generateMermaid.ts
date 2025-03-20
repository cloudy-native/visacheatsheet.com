import * as fs from "fs";

import { supportedCountries } from "../src/decisiontrees";
import { convertToMermaid } from "./treeToMermaid";

for(const country of supportedCountries) {
  const { countryCode, decisionTree, id, countryName } = country;
  const stream = fs.createWriteStream(`./doc/trees/${countryCode}.md`);
  const mermaid = convertToMermaid(decisionTree, 100);

  stream.write(`# Visa Decision Tree for ${countryName} (${countryCode})\n`);
  stream.write("\n");
  stream.write("```mermaid\n");
  stream.write(mermaid);
  stream.write("```\n");

  stream.end();

  stream.on("finish", () => {
    console.log(countryName, "all writes completed successfully");
  });

  // Listen for errors
  stream.on("error", (error) => {
    console.error(countryName, `Error writing to stream: ${error}`);
  });
};
