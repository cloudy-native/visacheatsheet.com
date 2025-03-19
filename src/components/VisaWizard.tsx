import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { ArrowLeftCircle, ArrowRightCircle, Globe } from "lucide-react";
import React, { useState } from "react";
import VisaDecisionTree from "../decisiontrees/VisaDecisionTree";
import { visas } from "../decisiontrees/visas";

type CountryProps = {
  id: string;
  name: string;
  flag: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

// Individual country card component
const CountryCard: React.FC<CountryProps> = ({
  id,
  name,
  flag,
  isSelected,
  onSelect,
}) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("blue.50", "blue.900");
  const selectedBg = useColorModeValue("blue.100", "blue.800");
  const selectedBorder = useColorModeValue("blue.500", "blue.300");

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      borderColor={isSelected ? selectedBorder : borderColor}
      bg={isSelected ? selectedBg : bgColor}
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ bg: hoverBg, transform: "translateY(-2px)", shadow: "md" }}
      onClick={() => onSelect(id)}
      role="button"
      aria-label={`View ${name} visa requirements`}
    >
      <VStack spacing={3}>
        <Image
          src={flag}
          alt={`${name} flag`}
          boxSize="80px"
          objectFit="cover"
          borderRadius="md"
          border="1px solid"
          borderColor={borderColor}
        />
        <Button
          colorScheme="blue"
          variant="ghost"
          rightIcon={<ArrowRightCircle size={16} />}
        >
          {name}
        </Button>
      </VStack>
    </Box>
  );
};

// Main Visa Wizard component
const VisaWizard: React.FC = () => {
  // Check for country parameter in URL query
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [showDecisionTree, setShowDecisionTree] = useState<boolean>(false);

  const primaryColor = useColorModeValue("blue.600", "blue.300");
  const textColor = useColorModeValue("gray.600", "gray.300");

  // Use effect to check for country parameter in URL on component mount
  React.useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const countryParam = params.get("country");

      if (countryParam) {
        // Validate that the country exists in our list
        const validCountry = visas.find((c) => c.id === countryParam);
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
    ? visas.find((country) => country.id === selectedCountry)
    : null;

  return (
    <Container maxW="6xl" py={10}>
      {!showDecisionTree ? (
        <>
          <VStack spacing={6} mb={12} textAlign="center">
            <Globe size={50} color="var(--chakra-colors-blue-500)" />
            <Heading as="h1" size="xl" color={primaryColor}>
              Visa Requirements Finder
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl">
              Planning a trip abroad? Click on a destination country to find the
              right visa for your needs.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {visas.map((country) => (
              <CountryCard
                key={country.id}
                id={country.id}
                name={country.name}
                flag={country.flag}
                isSelected={selectedCountry === country.id}
                onSelect={handleSelectCountry}
              />
            ))}
          </SimpleGrid>
        </>
      ) : (
        <>
          {selectedCountryData && (
            <Box mb={6}>
              <Flex align="center" gap={4}>
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  onClick={handleBackToCountries}
                  leftIcon={<ArrowLeftCircle size={32} />}
                />
                <Image
                  src={selectedCountryData.flag}
                  alt={`${selectedCountryData.name} flag`}
                  boxSize="40px"
                  borderRadius="md"
                />
                <Heading as="h2" size="lg" color={primaryColor}>
                  {selectedCountryData.name} Visa Requirements
                </Heading>
              </Flex>
            </Box>
          )}

          {selectedCountryData && (
            <VisaDecisionTree decisionTree={selectedCountryData.decisionTree} />
          )}
        </>
      )}
    </Container>
  );
};

export default VisaWizard;
