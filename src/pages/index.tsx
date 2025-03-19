import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as GatsbyLink, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import ReactCountryFlag from "react-country-flag";
import { IconType } from "react-icons";
import { visas } from "../decisiontrees/visas";

interface FeatureProps {
  title: string;
  text: string;
  icon: IconType;
}

const IndexPage: React.FC<PageProps> = () => {
  const bgGradient = useColorModeValue(
    "linear(to-b, blue.50, white)",
    "linear(to-b, gray.900, gray.800)"
  );

  return (
    <>
      {/* Hero Section */}
      <Box
        bg={useColorModeValue("blue.50", "gray.900")}
        bgGradient={bgGradient}
        pt={20}
        pb={16}
      >
        <Container maxW={"6xl"}>
          <Stack
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
          >
            <Heading
              fontWeight={700}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              color={useColorModeValue("blue.600", "blue.300")}
            >
              Find the Right Visa
            </Heading>
            <Heading
              fontWeight={700}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              lineHeight={"110%"}
              color={useColorModeValue("blue.600", "blue.300")}
            >
              With Just a Few Simple Questions
            </Heading>
            <Text
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight={1.5}
              maxW={"4xl"}
            >
              Planning a trip abroad, whether it’s for business or pleasure, or
              even considering immigration? What about retirement? Our
              interactive visa finder is here to make navigating visa
              requirements a breeze. Just answer a few simple questions about
              your trip, and we’ll help you find the perfect visa for your
              needs. We’ll also provide you with all the essential details,
              including application requirements, costs, and processing times.
              Plus, we’ll even give you a link to apply.
            </Text>
            <Text
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight={1.5}
              maxW={"4xl"}
            >
              And best of all, it's free. No signup, no account, no hassle. No
              wonder we're the web's favourite visa tool!
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Supported Countries */}
      <Box py={4}>
        <Container width={"full"} maxW={"6xl"}>
          <VStack spacing={8} textAlign="center">
            <Heading color={useColorModeValue("blue.600", "blue.300")}>
              Tell Us Where You're Headed
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              We’ve got Visa Cheat Sheets for a bunch of countries and regions.
              Keep an eye out for updates!
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
              {visas.map((country) => (
                <>
                  <Box
                    key={country.name}
                    as={GatsbyLink}
                    to={`/visa-wizard?country=${country.id}`}
                    p={4}
                    borderWidth="1px"
                    borderRadius="lg"
                    textAlign="center"
                    _hover={{
                      transform: "translateY(-4px)",
                      shadow: "md",
                      textDecoration: "none",
                    }}
                    transition="all 0.2s"
                    cursor="pointer"
                  >
                    <VStack spacing={3}>
                      <Text
                        fontWeight="medium"
                        color={useColorModeValue("gray.700", "white")}
                      >
                        {country.name}
                      </Text>
                      <ReactCountryFlag
                        countryCode={country.countryCode}
                        svg
                        style={{ fontSize: "100px" }}
                      />
                    </VStack>
                  </Box>
                </>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Disclaimer */}
      <Box bg={useColorModeValue("gray.50", "gray.900")} py={16}>
        <Container maxW={"4xl"}>
          <VStack spacing={8} textAlign="center">
            <Heading color={useColorModeValue("blue.600", "blue.300")}>
              Important Information Before Making a Visa Decision
            </Heading>
            <Text
              fontSize="md"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              The information provided on this website is for general
              informational purposes only. While the publishers of this website
              diligently strive to maintain the currency and accuracy of the
              content, visa requirements and immigration policies are subject to
              frequent change.
            </Text>
            <Text
              fontSize="md"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              We do not provide immigration legal advice, legal counsel, or
              government official services. Our content is based on personal
              experience and research, but it should not be construed as legal
              advice. Before making any visa or immigration decisions, we
              strongly recommend consulting with a qualified immigration
              attorney. Additionally, it is essential to verify all information
              with official government sources and consult the most recent
              requirements on the respective country’s immigration website.
            </Text>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Visa Cheat Sheet | Find the Right Visa for Your Trip</title>
);
