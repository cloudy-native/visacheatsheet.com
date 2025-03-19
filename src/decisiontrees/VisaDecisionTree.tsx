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
  ArrowRight,
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
            colorScheme="blue"
            rightIcon={<RotateCcw size={16} />}
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
          <Text fontSize="sm">Start</Text>
          <Text fontSize="sm">Result</Text>
        </Flex>
      </Box>

      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        {/* Main Content */}
        <Box flex="3">
          {/* Question Card */}
          {!result && (
            <Card
              borderWidth="1px"
              borderRadius="lg"
              shadow="md"
              overflow="hidden"
            >
              <CardHeader>
                <Heading size="md">{currentQuestion.text}</Heading>
                {currentQuestion.helpText && (
                  <Flex align="center" mt={2}>
                    <Info size={14} />
                    <Text ml={2} fontSize="sm">
                      {currentQuestion.helpText}
                    </Text>
                  </Flex>
                )}
              </CardHeader>

              <CardBody>
                <VStack spacing={3} align="stretch">
                  {currentQuestion.options.map((option) => (
                    <Button
                      colorScheme="blue"
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
                      borderRadius="md"
                    >
                      <Text>{option.text}</Text>
                      <ArrowRight
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
              borderWidth="1px"
              borderRadius="lg"
              shadow="md"
              overflow="hidden"
            >
              <CardHeader>
                <Heading size="xl" mb={2}>
                  {result.title}
                </Heading>
              </CardHeader>

              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Text>{result.description}</Text>

                  <Box>
                    <Heading size={"md"} mb={2}>
                      Requirements
                    </Heading>
                    <List spacing={2}>
                      {result.requirements.map((req, index) => (
                        <ListItem
                          key={index}
                          display="flex"
                          alignItems="flex-start"
                        >
                          <ListIcon as={CheckCircle} mt={1} />
                          <Text>{req}</Text>
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Flex justify="space-between" wrap="wrap" gap={4}>
                    {result.processingTime && (
                      <Box flex="1" minW="200px">
                        <Heading size={"md"} mb={2}>
                          Processing Time
                        </Heading>
                        <Text>{result.processingTime}</Text>
                      </Box>
                    )}

                    {result.cost && (
                      <Box flex="1" minW="200px">
                        <Heading size={"md"} mb={2}>
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
                    <Heading size={"md"} mb={2}>
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
                        <Heading size={"md"} mb={2}>
                          Also Consider
                        </Heading>
                        <Flex wrap="wrap" gap={2}>
                          {result.alternativeOptions.map((altId, index) => {
                            const altVisa = decisionTree.results[altId];
                            return (
                              altVisa && (
                                <Button
                                  colorScheme="blue"
                                  key={index}
                                  onClick={() => setResult(altVisa)}
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
                    <Heading size={"md"} mb={2}>
                      Official Links
                    </Heading>
                    <List spacing={2}>
                      {result.applicationLinks.map((link, index) => (
                        <ListItem key={index}>
                          <Link
                            href={link.url}
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

              <CardFooter borderTopWidth="1px">
                <Flex width="100%" justify="space-between">
                  <Button
                    leftIcon={<RotateCcw size={16} />}
                    colorScheme="blue"
                    onClick={resetJourney}
                  >
                    Start New Search
                  </Button>

                  <Button
                    colorScheme="blue"
                    rightIcon={<ArrowRight size={16} />}
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
          <Card borderWidth="1px" borderRadius="lg" shadow="md">
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
                  <Text fontSize="sm">No selections yet</Text>
                ) : (
                  <VStack spacing={4} align="stretch">
                    {journey.map((step, index) => (
                      <Box key={index}>
                        <Text fontSize="xs">Question {index + 1}</Text>
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
      <Box mt={6}>
        <Text fontSize="xs" color={useColorModeValue("gray.400", "gray.600")}>
          Version: {decisionTree.metadata.version} | Last Updated:{" "}
          {decisionTree.metadata.lastUpdated} by {decisionTree.metadata.author}{" "}
          | Countries: {decisionTree.metadata.countries.join(", ")}
        </Text>
      </Box>
    </Container>
  );
};

export default VisaDecisionTree;
