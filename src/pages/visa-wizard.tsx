import { Box, useColorModeValue } from "@chakra-ui/react";
import { HeadFC } from "gatsby";
import React from "react";
import VisaWizard from "../components/VisaWizard";

const VisaWizardPage = () => {
  const bgGradient = useColorModeValue(
    "linear(to-b, blue.50, white)",
    "linear(to-b, gray.900, gray.800)"
  );
  return (
    <Box
      bg={useColorModeValue("blue.50", "gray.900")}
      bgGradient={bgGradient}
      py={8}
    >
      <VisaWizard />
    </Box>
  );
};

export default VisaWizardPage;

export const Head: HeadFC = () => (
  <title>Visa Wizard | Find the Right Visa for Your Trip</title>
);
