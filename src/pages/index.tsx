import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as GatsbyLink, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { IconType } from "react-icons";
import { FaPassport } from "react-icons/fa";
import { visas } from "../decisiontrees/visas";

interface FeatureProps {
  title: string;
  text: string;
  icon: IconType;
}

const Feature: React.FC<FeatureProps> = ({ title, text, icon }) => {
  return (
    <Stack
      align={"center"}
      textAlign={"center"}
      p={8}
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      transition="transform 0.3s"
      _hover={{
        transform: "translateY(-5px)",
      }}
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"blue.500"}
        mb={5}
      >
        <Icon as={icon} w={8} h={8} />
      </Flex>
      <Heading fontSize={"xl"}>{title}</Heading>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{text}</Text>
    </Stack>
  );
};

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
        <Container maxW={"5xl"}>
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
              Find the right{" "}
              <Text
                as={"span"}
                color={useColorModeValue("teal.500", "teal.300")}
              >
                visa for your trip
              </Text>
            </Heading>
            <Text
              color={useColorModeValue("gray.600", "gray.400")}
              maxW={"3xl"}
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight={1.8}
            >
              Navigate travel visa requirements easily with our interactive visa
              finder. Answer a few simple questions about your trip and we'll
              guide you to the right visa for your needs, complete with
              application requirements, costs, and processing times.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Supported Countries */}
      <Box bg={useColorModeValue("gray.50", "gray.900")} py={16}>
        <Container maxW={"4xl"}>
          <VStack spacing={8} textAlign="center">
            <Heading color={useColorModeValue("blue.600", "blue.300")}>
              Tell Us Where You're Headed
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              We have Visa Cheat Sheets for the following countries and regions.
              Please check back regularly for updates!
            </Text>
            <SimpleGrid columns={{ base: 2, md: 5 }} spacing={6} width="full">
              {visas.map((country) => (
                <Box
                  key={country.name}
                  as={GatsbyLink}
                  to={`/visa-wizard?country=${country.id}`}
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                  bg={useColorModeValue("white", "gray.800")}
                  textAlign="center"
                  _hover={{
                    transform: "translateY(-4px)",
                    shadow: "md",
                    borderColor: "blue.400",
                    textDecoration: "none",
                  }}
                  transition="all 0.2s"
                  cursor="pointer"
                >
                  <VStack spacing={3}>
                    <Image
                      src={country.flag}
                      alt={`${country.name} flag`}
                      boxSize="80px"
                      objectFit="cover"
                      borderRadius="md"
                      border="1px solid"
                      borderColor={useColorModeValue("gray.200", "gray.700")}
                    />
                    <Text
                      fontWeight="medium"
                      color={useColorModeValue("gray.700", "white")}
                    >
                      {country.name}
                    </Text>
                  </VStack>
                </Box>
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
              informational purposes only. While Emma and Max make every effort
              to keep the content current and accurate, visa requirements and
              immigration policies frequently change.{" "}
            </Text>
            <Text
              fontSize="md"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              We are not immigration lawyers, legal advisors, or government
              officials. Our content is based on personal experience and
              research, but should not be considered legal advice. Before making
              any visa or immigration decisions, we strongly recommend
              consulting with a qualified immigration attorney, verifying all
              information with official government sources, and checking the
              most recent requirements on the respective country's immigration
              website. 
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
