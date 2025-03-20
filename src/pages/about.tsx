import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { HeadFC, PageProps } from "gatsby";
import { ExternalLink } from "lucide-react";
import * as React from "react";
import { Disclaimer } from "../components/Disclaimer";

const AboutPage: React.FC<PageProps> = () => {
  const bgColor = useColorModeValue("blue.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      {/* Hero Section */}
      <Box bg={bgColor} py={16}>
        <Container maxW="6xl">
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color={useColorModeValue("blue.600", "blue.300")}
            >
              About Visa Cheat Sheet
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue("gray.600", "gray.400")}
              maxW="3xl"
            >
              We simplify the complex world of visa requirements, helping
              travelers navigate international bureaucracy with ease.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Mission & Purpose Section */}
      <Box py={12}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                mb={6}
                color={useColorModeValue("blue.600", "blue.300")}
              >
                Our Mission
              </Heading>
              <VStack spacing={4} align="start">
                <Text fontSize="lg">
                  At Visa Cheat Sheet, we believe that understanding visa
                  requirements shouldn't require a law degree. Our mission is to
                  demystify the often confusing world of international travel
                  permissions.
                </Text>
                <Text fontSize="lg">
                  We created this tool after experiencing firsthand how
                  challenging it can be to find clear, up-to-date information
                  about visa requirements when planning international travel.
                </Text>
              </VStack>
            </Box>
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                mb={6}
                color={useColorModeValue("blue.600", "blue.300")}
              >
                What We Offer
              </Heading>
              <VStack spacing={4} align="start">
                <Text fontSize="lg">
                  Our interactive decision trees guide you through a series of
                  simple questions to determine the most appropriate visa
                  options for your specific situation.
                </Text>
                <Text fontSize="lg">
                  We provide information for major destinations worldwide, with
                  detailed requirements, processing times, and direct links to
                  official application portals.
                </Text>
                <Text fontSize="lg" fontWeight="bold">
                  All completely free, with no registration required.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Meet The Team Section */}
      <Box py={12} bg={bgColor}>
        <Container maxW="6xl">
          <VStack spacing={10}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              color={useColorModeValue("blue.600", "blue.300")}
            >
              Meet The Team
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="full">
              {/* Emma's Card */}
              <Flex
                direction="column"
                bg={cardBg}
                borderWidth="1px"
                borderColor={borderColor}
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
              >
                <Image
                  mt={6}
                  src="/emma.jpeg"
                  alt="Emma"
                  maxW="500px"
                  mx="auto"
                />

                <Box p={6}>
                  <Heading as="h3" size="lg" mb={2}>
                    Emma
                  </Heading>
                  <Text
                    color={useColorModeValue("blue.600", "blue.300")}
                    fontWeight="bold"
                    mb={3}
                  >
                    Co-Founder & Content Director
                  </Text>
                  <Text mb={4}>
                    Emma, passionate about travel and gifted with communication,
                    is delighted to share her expertise and experience in the
                    field of international visas. She diligently delves into
                    intricate government regulations, saving you the hassle of
                    navigating through them yourself.
                  </Text>
                </Box>
              </Flex>

              {/* Max's Card */}
              <Flex
                direction="column"
                bg={cardBg}
                borderWidth="1px"
                borderColor={borderColor}
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
              >
                <Image
                  mt={6}
                  src="/max.jpeg"
                  alt="Max"
                  maxW="500px"
                  mx="auto"
                />
                <Box p={6}>
                  <Heading as="h3" size="lg" mb={2}>
                    Max
                  </Heading>
                  <Text
                    color={useColorModeValue("blue.600", "blue.300")}
                    fontWeight="bold"
                    mb={3}
                  >
                    Co-Founder & Technical Lead
                  </Text>
                  <Text mb={4}>
                    Max, a software engineer with a passion for exploration,
                    combines his expertise to create intuitive tools that
                    simplify complex tasks. This website is just one of his many
                    creations. With over 20 countries under his belt and
                    firsthand experience navigating various visa systems, Max
                    has a wealth of knowledge to share.
                  </Text>
                </Box>
              </Flex>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* How We Work Section */}
      <Box py={12}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                mb={6}
                color={useColorModeValue("blue.600", "blue.300")}
              >
                How We Work
              </Heading>
              <VStack spacing={4} align="start">
                <Text fontSize="lg">
                  Our team regularly reviews official government immigration
                  websites, consulates, and embassy resources to ensure our
                  information is current.
                </Text>
                <Text fontSize="lg">
                  We also incorporate feedback from travelers who have recently
                  navigated these visa processes, providing real-world insights
                  beyond what's officially documented.
                </Text>
                <Text fontSize="lg">
                  While we strive for accuracy, visa requirements can change
                  quickly. We always recommend verifying information with
                  official sources before making travel plans.
                </Text>
              </VStack>
            </Box>
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                mb={6}
                color={useColorModeValue("blue.600", "blue.300")}
              >
                Get Involved
              </Heading>
              <VStack spacing={4} align="start">
                <Text fontSize="lg">
                  Have you spotted outdated information or have insights about a
                  visa process we haven't covered? We'd love to hear from you!
                </Text>
                <Text fontSize="lg">
                  Our content is continuously improved through community
                  contributions and feedback from fellow travelers.
                </Text>
                <Button
                  colorScheme="blue"
                  rightIcon={<ExternalLink size={16} />}
                  as={Link}
                  href="mailto:stephen@harrison.org?subject=Visa%20Cheat%20Sheet%20Contact"
                  isExternal
                >
                  Contact Us
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <Disclaimer />
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Us | Visa Cheat Sheet</title>;
