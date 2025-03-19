import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Button,
  SimpleGrid,
  Image,
  Flex,
} from "@chakra-ui/react";
import { HeadFC, PageProps, navigate } from "gatsby";
import * as React from "react";
import { visas } from "../decisiontrees/visas";
import { ArrowRightCircle } from "lucide-react";

// Individual country card component
const CountryCard = ({ id, name, flag }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("blue.50", "blue.900");
  
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      borderColor={borderColor}
      bg={bgColor}
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ bg: hoverBg, transform: "translateY(-2px)", shadow: "md" }}
      onClick={() => navigate(`/visa-wizard?country=${id}`)}
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
        <Text fontWeight="medium" fontSize="lg">
          {name}
        </Text>
        <Button 
          size="sm" 
          colorScheme="blue" 
          variant="ghost"
          rightIcon={<ArrowRightCircle size={16} />}
        >
          View Requirements
        </Button>
      </VStack>
    </Box>
  );
};

const WizardPage: React.FC<PageProps> = () => {
  const bgGradient = useColorModeValue(
    "linear(to-b, blue.50, white)",
    "linear(to-b, gray.900, gray.800)"
  );
  const textColor = useColorModeValue("gray.600", "gray.300");

  // Redirect to the main visa wizard page with country selection
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      navigate('/visa-wizard');
    }
  }, []);

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
          <VStack spacing={10} align="center">
            <VStack spacing={3} textAlign="center">
              <Heading
                fontWeight={700}
                fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
                color={useColorModeValue("blue.600", "blue.300")}
              >
                Visa{" "}
                <Text
                  as={"span"}
                  color={useColorModeValue("teal.500", "teal.300")}
                >
                  Wizard
                </Text>
              </Heading>
              <Text fontSize="xl" color={textColor} maxW="2xl">
                Select a destination country to find the right visa for your needs
              </Text>
            </VStack>

            <Text>Redirecting to visa wizard...</Text>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default WizardPage;

export const Head: HeadFC = () => <title>Visa Wizard | Visa CheatSheet</title>;