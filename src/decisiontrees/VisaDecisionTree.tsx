import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Progress,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import {
  ArrowLeft,
  ArrowRightCircle,
  CheckCircle,
  ExternalLink,
  Info,
  RotateCcw,
} from "lucide-react";
import React, { useState } from "react";
import type {
  AnswerOption,
  VisaDecisionTree as DecisionTreeType,
  VisaResult,
} from "./model";

interface VisaDecisionTreeProps {
  decisionTree: DecisionTreeType;
}

const VisaDecisionTree: React.FC<VisaDecisionTreeProps> = ({
  decisionTree,
}) => {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>(
    decisionTree.startQuestionId
  );
  const [result, setResult] = useState<VisaResult | null>(null);
  const [journey, setJourney] = useState<
    Array<{
      questionId: string;
      questionText: string;
      answerId: string;
      answerText: string;
    }>
  >([]);
  const [showJourney, setShowJourney] = useState<boolean>(false);

  // UI colors
  const cardBg = useColorModeValue("white", "gray.800");
  const primaryColor = useColorModeValue("blue.500", "blue.300");
  const secondaryColor = useColorModeValue("teal.500", "teal.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const currentQuestion = decisionTree.questions[currentQuestionId];

  const handleSelectOption = (option: AnswerOption) => {
    // Add to journey
    setJourney([
      ...journey,
      {
        questionId: currentQuestionId,
        questionText: currentQuestion.text,
        answerId: option.id,
        answerText: option.text,
      },
    ]);

    // Check if the next destination is a result (starts with 'r')
    if (option.nextQuestionId && option.nextQuestionId.startsWith("r")) {
      // Set the result from the decision tree results
      const resultId = option.nextQuestionId;
      setResult(decisionTree.results[resultId]);
    } else if (option.nextQuestionId) {
      // Move to the next question
      setCurrentQuestionId(option.nextQuestionId);
    }
  };

  const handleBack = () => {
    if (result) {
      setResult(null);
    } else if (journey.length > 0) {
      const newJourney = [...journey];
      newJourney.pop();
      setJourney(newJourney);

      if (newJourney.length === 0) {
        setCurrentQuestionId(decisionTree.startQuestionId);
      } else {
        const previousStep = newJourney[newJourney.length - 1];
        setCurrentQuestionId(previousStep.questionId);
      }
    }
  };

  const resetJourney = () => {
    setJourney([]);
    setCurrentQuestionId(decisionTree.startQuestionId);
    setResult(null);
  };

  // Calculate progress percentage - estimate 4 questions as average path length
  const progressPercentage = result
    ? 100
    : Math.min(100, (journey.length / 4) * 100);

  return (
    <Container maxW="5xl" py={8}>
      {/* Navigation Buttons */}
      <Flex mb={4} justify="space-between" align="center">
        <Box>
          {(journey.length > 0 || result) && (
            <Button
              leftIcon={<ArrowLeft size={16} />}
              variant="outline"
              colorScheme="blue"
              size="sm"
              onClick={handleBack}
            >
              Back
            </Button>
          )}
        </Box>
        <Box>
          <Button
            rightIcon={<RotateCcw size={16} />}
            variant="outline"
            colorScheme="teal"
            size="sm"
            onClick={resetJourney}
          >
            Start Over
          </Button>
        </Box>
      </Flex>

      {/* Progress Bar */}
      <Box mb={6}>
        <Progress
          value={progressPercentage}
          size="sm"
          colorScheme="blue"
          borderRadius="full"
        />
        <Flex justify="space-between" mt={2}>
          <Text fontSize="sm" color="gray.600">
            Start
          </Text>
          <Text fontSize="sm" color="gray.600">
            Result
          </Text>
        </Flex>
      </Box>

      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        {/* Main Content */}
        <Box flex="3">
          {/* Question Card */}
          {!result && (
            <Card
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="lg"
              shadow="md"
              overflow="hidden"
            >
              <CardHeader>
                <Heading size="md">{currentQuestion.text}</Heading>
                {currentQuestion.helpText && (
                  <Flex align="center" mt={2}>
                    <Info size={14} color="gray.500" />
                    <Text ml={2} fontSize="sm" color="gray.600">
                      {currentQuestion.helpText}
                    </Text>
                  </Flex>
                )}
              </CardHeader>

              <CardBody>
                <VStack spacing={3} align="stretch">
                  {currentQuestion.options.map((option) => (
                    <Button
                      key={option.id}
                      onClick={() => handleSelectOption(option)}
                      size="lg"
                      justifyContent="space-between"
                      textAlign="left"
                      height="auto"
                      py={3}
                      px={4}
                      whiteSpace="normal"
                      borderWidth="1px"
                      borderColor={borderColor}
                      _hover={{ bg: "blue.50", borderColor: "blue.200" }}
                      borderRadius="md"
                    >
                      <Text>{option.text}</Text>
                      <ArrowRightCircle
                        size={18}
                        style={{ marginLeft: "10px", opacity: 0.6 }}
                      />
                    </Button>
                  ))}
                </VStack>
              </CardBody>
            </Card>
          )}

          {/* Result Card */}
          {result && (
            <Card
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="lg"
              shadow="md"
              overflow="hidden"
            >
              <CardHeader bg={primaryColor} color="white">
                <Heading size="md" mb={2}>
                  {result.title}
                </Heading>
              </CardHeader>

              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Text>{result.description}</Text>

                  <Box>
                    <Heading size={"md"} mb={2} color={secondaryColor}>
                      Requirements
                    </Heading>
                    <List spacing={2}>
                      {result.requirements.map((req, index) => (
                        <ListItem
                          key={index}
                          display="flex"
                          alignItems="flex-start"
                        >
                          <ListIcon
                            as={CheckCircle}
                            color={secondaryColor}
                            mt={1}
                          />
                          <Text>{req}</Text>
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Flex justify="space-between" wrap="wrap" gap={4}>
                    {result.processingTime && (
                      <Box flex="1" minW="200px">
                        <Heading size={"md"} mb={2} color={secondaryColor}>
                          Processing Time
                        </Heading>
                        <Text>{result.processingTime}</Text>
                      </Box>
                    )}

                    {result.cost && (
                      <Box flex="1" minW="200px">
                        <Heading size={"md"} mb={2} color={secondaryColor}>
                          Cost
                        </Heading>
                        <Text>
                          {result.cost.amount === 0
                            ? "Free"
                            : `${result.cost.amount} ${result.cost.currency}`}
                        </Text>
                      </Box>
                    )}
                  </Flex>

                  <Box>
                    <Heading size={"md"} mb={2} color={secondaryColor}>
                      Applicable Countries
                    </Heading>
                    <Flex gap={2} flexWrap="wrap">
                      {result.applicableCountries.map((country, index) => (
                        <Badge key={index} colorScheme="blue" px={2} py={1}>
                          {country}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>

                  {result.alternativeOptions &&
                    result.alternativeOptions.length > 0 && (
                      <>
                        <Heading size={"md"} mb={2} color={secondaryColor}>
                          Also Consider
                        </Heading>{" "}
                        <Flex wrap="wrap" gap={2}>
                          {result.alternativeOptions.map((altId, index) => {
                            const altVisa = decisionTree.results[altId];
                            return (
                              altVisa && (
                                <Button
                                  key={index}
                                  colorScheme="green"
                                  onClick={() => setResult(altVisa)}
                                  leftIcon={<ArrowRightCircle size={10} />}
                                >
                                  {altVisa.title}
                                </Button>
                              )
                            );
                          })}
                        </Flex>
                      </>
                    )}

                  <Box>
                    <Heading size={"md"} mb={2} color={secondaryColor}>
                      Official Links
                    </Heading>
                    <List spacing={2}>
                      {result.applicationLinks.map((link, index) => (
                        <ListItem key={index}>
                          <Link
                            href={link.url}
                            color={primaryColor}
                            isExternal
                            display="flex"
                            alignItems="center"
                          >
                            {link.text}
                            <ExternalLink
                              size={14}
                              style={{ marginLeft: "5px" }}
                            />
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </VStack>
              </CardBody>

              <CardFooter borderTopWidth="1px" borderColor={borderColor}>
                <Flex width="100%" justify="space-between">
                  <Button
                    leftIcon={<RotateCcw size={16} />}
                    colorScheme="blue"
                    onClick={resetJourney}
                  >
                    Start New Search
                  </Button>

                  <Button
                    rightIcon={<ArrowRightCircle size={16} />}
                    variant="outline"
                    colorScheme="teal"
                    onClick={() =>
                      window.open(result.applicationLinks[0].url, "_blank")
                    }
                  >
                    Apply Now
                  </Button>
                </Flex>
              </CardFooter>
            </Card>
          )}
        </Box>

        {/* Journey Sidebar */}
        <Box
          flex="1"
          display={{ base: result ? "block" : "none", md: "block" }}
        >
          <Card
            bg={cardBg}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="lg"
            shadow="md"
          >
            <CardHeader
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Heading size="sm">Your Journey</Heading>
              <Button
                size="sm"
                variant="ghost"
                colorScheme="blue"
                onClick={() => setShowJourney(!showJourney)}
                display={{ base: "block", md: "none" }}
              >
                {showJourney ? "Hide" : "Show"}
              </Button>
            </CardHeader>

            <Collapse in={showJourney || { base: false, md: true }}>
              <CardBody>
                {journey.length === 0 ? (
                  <Text fontSize="sm" color="gray.500">
                    No selections yet
                  </Text>
                ) : (
                  <VStack spacing={4} align="stretch">
                    {journey.map((step, index) => (
                      <Box key={index}>
                        <Text fontSize="xs" color="gray.500">
                          Question {index + 1}
                        </Text>
                        <Text fontWeight="medium" fontSize="sm">
                          {step.questionText}
                        </Text>
                        <Flex align="center">
                          <Badge colorScheme="blue" mt={1}>
                            {step.answerText}
                          </Badge>
                        </Flex>
                        {index < journey.length - 1 && <Divider my={2} />}
                      </Box>
                    ))}
                  </VStack>
                )}
              </CardBody>
            </Collapse>
          </Card>
        </Box>
      </Flex>
    </Container>
  );
};

export default VisaDecisionTree;
