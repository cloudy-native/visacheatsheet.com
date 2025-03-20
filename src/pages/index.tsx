import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { HeadFC, PageProps } from "gatsby";
import { CheckSquare, Clock, Compass, Search, X } from "lucide-react";
import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import CountryCard from "../components/CountryCard";
import { Disclaimer } from "../components/Disclaimer";
import VisaDecisionTree from "../decisiontrees/VisaDecisionTree";
import { visas } from "../decisiontrees/visas";

const IndexPage: React.FC<PageProps> = () => {
  const bgGradient = useColorModeValue(
    "linear(to-b, blue.50, white)",
    "linear(to-b, gray.900, gray.800)"
  );

  // State for visa wizard
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [showDecisionTree, setShowDecisionTree] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Function to handle Home link clicks from anywhere in the app
  // Add this to window object so it can be called from other components
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore - add global function
      window.resetVisaWizard = () => {
        setSelectedCountry(null);
        setShowDecisionTree(false);
        // Update URL without the country parameter
        const url = new URL(window.location.href);
        url.searchParams.delete("country");
        window.history.pushState({}, "", url);
      };
    }

    // Cleanup on unmount
    return () => {
      if (typeof window !== "undefined") {
        // @ts-ignore
        delete window.resetVisaWizard;
      }
    };
  }, []);

  // Use effect to check for country parameter in URL on component mount
  useEffect(() => {
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

  // Find the selected country data
  const selectedCountryData = selectedCountry
    ? visas.find((country) => country.id === selectedCountry)
    : null;
    
  // Filter countries based on search query
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return visas;
    
    const query = searchQuery.toLowerCase().trim();
    return visas.filter(country => 
      country.name.toLowerCase().includes(query) ||
      country.id.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <>
      {/* Hero Section */}
      <Box
        bg={useColorModeValue("blue.50", "gray.900")}
        bgGradient={bgGradient}
        pt={showDecisionTree ? 10 : 20}
        pb={showDecisionTree ? 8 : 16}
      >
        <Container maxW={"6xl"}>
          <Stack
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 4, md: showDecisionTree ? 6 : 10 }}
          >
            {!showDecisionTree && (
              <>
                <Heading
                  fontWeight={700}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                  lineHeight={"110%"}
                  color={useColorModeValue("blue.600", "blue.300")}
                >
                  Navigate Visa Requirements with Ease
                </Heading>

                <SimpleGrid
                  columns={{ base: 1, md: 3 }}
                  spacing={8}
                  pt={10}
                  width="full"
                >
                  {/* Feature Card 1 */}
                  <Box
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    bg={useColorModeValue("white", "gray.800")}
                    textAlign="center"
                    bgGradient={bgGradient}
                  >
                    <Icon as={Compass} w={10} h={10} color="blue.400" mb={4} />
                    <Heading fontSize="xl" mb={2}>
                      Simple Navigation
                    </Heading>
                    <Text color={useColorModeValue("gray.600", "gray.400")}>
                      Find the right visa for your destination in just a few
                      clicks
                    </Text>
                  </Box>

                  {/* Feature Card 2 */}
                  <Box
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    bg={useColorModeValue("white", "gray.800")}
                    textAlign="center"
                    bgGradient={bgGradient}
                  >
                    <Icon
                      as={CheckSquare}
                      w={10}
                      h={10}
                      color="blue.400"
                      mb={4}
                    />
                    <Heading fontSize="xl" mb={2}>
                      Clear Requirements
                    </Heading>
                    <Text color={useColorModeValue("gray.600", "gray.400")}>
                      Easily understand eligibility and documentation needs
                    </Text>
                  </Box>

                  {/* Feature Card 3 */}
                  <Box
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    bg={useColorModeValue("white", "gray.800")}
                    textAlign="center"
                    bgGradient={bgGradient}
                  >
                    <Icon as={Clock} w={10} h={10} color="blue.400" mb={4} />
                    <Heading fontSize="xl" mb={2}>
                      Quick & Free
                    </Heading>
                    <Text color={useColorModeValue("gray.600", "gray.400")}>
                      No signup, no account, no hassle - get answers right away
                    </Text>
                  </Box>
                </SimpleGrid>
              </>
            )}
          </Stack>
        </Container>
      </Box>

      {/* Visa Wizard Section */}
      <Box py={4}>
        <Container width={"full"} maxW={"6xl"}>
          {!showDecisionTree ? (
            <VStack spacing={8} textAlign="center">
              <Heading color={useColorModeValue("blue.600", "blue.300")}>
                Let's Fly!
              </Heading>
              
              {/* Search Bar */}
              <Box width={{ base: "100%", md: "50%" }} mb={4}>
                <InputGroup size="lg">
                  <InputLeftElement pointerEvents="none">
                    <Icon as={Search} color="gray.400" />
                  </InputLeftElement>
                  <Input
                    placeholder="Search countries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    bg={useColorModeValue("white", "gray.700")}
                    borderColor={useColorModeValue("gray.300", "gray.600")}
                    _focus={{ 
                      borderColor: useColorModeValue("blue.500", "blue.300"),
                      boxShadow: "0 0 0 1px " + useColorModeValue("blue.500", "blue.300")
                    }}
                    _hover={{
                      borderColor: useColorModeValue("gray.400", "gray.500")
                    }}
                  />
                  {searchQuery && (
                    <InputRightElement>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => setSearchQuery("")}
                        aria-label="Clear search"
                      >
                        <Icon as={X} color="gray.500" />
                      </Button>
                    </InputRightElement>
                  )}
                </InputGroup>
              </Box>
              
              {filteredCountries.length === 0 ? (
                <Box py={6}>
                  <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.400")}>
                    No countries found matching "{searchQuery}".
                  </Text>
                </Box>
              ) : (
                <SimpleGrid
                  columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                  spacing={6}
                >
                  {filteredCountries.map((country) => (
                    <CountryCard
                      key={country.id}
                      id={country.id}
                      name={country.name}
                      countryCode={country.countryCode}
                      isSelected={selectedCountry === country.id}
                      onSelect={handleSelectCountry}
                    />
                  ))}
                </SimpleGrid>
              )}
            </VStack>
          ) : (
            <>
              {selectedCountryData && (
                <VisaDecisionTree
                  decisionTree={selectedCountryData.decisionTree}
                  countryCode={selectedCountryData.countryCode}
                  countryName={selectedCountryData.name}
                />
              )}
            </>
          )}
        </Container>
      </Box>
      <Disclaimer/>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Visa Cheat Sheet | Find the Right Visa for Your Trip</title>
);
