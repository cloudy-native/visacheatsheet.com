import { Box } from "@chakra-ui/react";
import { HeadFC } from "gatsby";
import React from "react";
import VisaWizard from "../components/VisaWizard";

const VisaWizardPage = () => {
  return (
    <Box py={8}>
      <VisaWizard />
    </Box>
  );
};

export default VisaWizardPage;

export const Head: HeadFC = () => (
  <title>Visa Wizard | Find the Right Visa for Your Trip</title>
);
