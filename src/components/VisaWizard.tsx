import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import React, { useState } from "react";
import VisaDecisionTree from "../decisiontrees/VisaDecisionTree";
import { supportedCountries} from "../decisiontrees";
import CountryCard from "./CountryCard";

// Main Visa Wizard component
const VisaWizard: React.FC = () => {
  // Check for country parameter in URL query
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [showDecisionTree, setShowDecisionTree] = useState<boolean>(false);

  // Use effect to check for country parameter in URL on component mount
  React.useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const countryParam = params.get("country");

      if (countryParam) {
        // Validate that the country exists in our list
        const validCountry = supportedCountries.find((c) => c.id === countryParam);
        if (validCountry) {
          setSelectedCountry(countryParam);
          setShowDecisionTree(true);
        }
      }
    }
  }, []);

  const handleSelectCountry = (id: string) => {
    setSelectedCountry(id);

    // Immediately show the decision tree when a country is selected
    setShowDecisionTree(true);

    // Update URL with the selected country (without page reload)
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("country", id);
      window.history.pushState({}, "", url);
    }
  };

  const handleBackToCountries = () => {
    setShowDecisionTree(false);

    // Remove country parameter from URL (without page reload)
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("country");
      window.history.pushState({}, "", url);
    }
  };

  // Find the selected country data
  const selectedCountryData = selectedCountry
    ? supportedCountries.find((country) => country.id === selectedCountry)
    : null;

  return (
    <Container maxW="6xl" py={10}>
      {!showDecisionTree ? (
        <>
          <VStack spacing={6} mb={12} textAlign="center">
            <Heading
              as="h1"
              size="xl"
              color={useColorModeValue("blue.600", "blue.300")}
            >
              Let's Get Started
            </Heading>
            <Text fontSize="lg" maxW="3xl">
              Where do you want to go?
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {supportedCountries.map((country) => (
              <CountryCard
                key={country.id}
                id={country.id}
                name={country.countryName}
                countryCode={country.countryCode}
                isSelected={selectedCountry === country.id}
                onSelect={handleSelectCountry}
              />
            ))}
          </SimpleGrid>
        </>
      ) : (
        <>
          {selectedCountryData && (
            <VisaDecisionTree
              countryName={selectedCountryData.countryName}
              countryCode={selectedCountryData.countryCode}
              decisionTree={selectedCountryData.decisionTree}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default VisaWizard;
