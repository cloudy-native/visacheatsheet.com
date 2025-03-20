// Here's the improved disclaimer:

import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";

export const Disclaimer = () => {
  return (
    <Box py={16}>
      <Container maxW={"6xl"}>
        <VStack textAlign="center">
          <Heading size="sm" color={useColorModeValue("blue.600", "blue.300")}>
            Important Information Before Making Your Visa Decision
          </Heading>
          <Text fontSize="xs" color={useColorModeValue("gray.600", "gray.400")}>
            <strong>General Information Only:</strong> The information provided
            on this website is for general informational purposes only. While
            the publishers of this website diligently strive to maintain the
            currency and accuracy of the content, visa requirements and
            immigration policies are subject to frequent change.
          </Text>
          <Text fontSize="xs" color={useColorModeValue("gray.600", "gray.400")}>
            <strong>Not Legal Advice:</strong> We do not provide immigration
            legal advice, legal counsel, or government official services. Our
            content is based on personal experience and research and should not
            be construed as legal advice.
          </Text>
          <Text fontSize="xs" color={useColorModeValue("gray.600", "gray.400")}>
            <strong>Recommended Actions:</strong> Consult with a qualified
            immigration attorney before making visa decisions - Verify all
            information with official government sources - Check the most recent
            requirements on the respective country's immigration website - Begin
            your application process well in advance of your intended travel
            dates.
          </Text>
          <Text fontSize="xs" color={useColorModeValue("gray.600", "gray.400")}>
            <strong>Liability Notice:</strong> Consult with a qualified
            immigration attorney before making visa decisions. We are not liable
            for any decisions, applications, or outcomes resulting from
            information found on this site.
          </Text>
          <Text fontSize="xs" color={useColorModeValue("gray.600", "gray.400")}>
            <em>Content last reviewed: March 2025</em>
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
