import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import VisaDecisionTree from "../decisiontrees/VisaDecisionTree";

const WizardPage: React.FC<PageProps> = () => {
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
              Visa{" "}
              <Text
                as={"span"}
                color={useColorModeValue("teal.500", "teal.300")}
              >
                Wizard
              </Text>
            </Heading>
            <VisaDecisionTree />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default WizardPage;

export const Head: HeadFC = () => <title>Wizard | Visa CheatSheet</title>;
