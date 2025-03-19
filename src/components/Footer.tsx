import {
  Box,
  Container,
  Divider,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import BuyMeCoffeeButton from "./BuyMeCoffeeButton";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("neutral.100", "neutral.800")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("primary.500", "primary.400"),
        color: "white",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={"600"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const bgColor = useColorModeValue("neutral.50", "neutral.900");
  const borderColor = useColorModeValue("neutral.200", "neutral.700");
  const textColor = useColorModeValue("neutral.700", "neutral.300");

  return (
    <Box
      as="footer"
      bg={bgColor}
      color={textColor}
      borderTop="1px"
      borderColor={borderColor}
    >
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text
                as={GatsbyLink}
                to="/"
                fontFamily={"heading"}
                fontWeight="bold"
                fontSize="xl"
                color="primary.500"
              >
                Visa Cheat Sheet
              </Text>
            </Box>
            <Text fontSize={"sm"}>
              We’ll help you find the perfect visa! We’ll ask you a few simple
              questions and give you all the info you need about the rules and
              regulations of different countries, as well as the visas they
              offer.
            </Text>
            <Stack direction={"row"} spacing={4}>
              <SocialButton label={"Twitter"} href={"https://twitter.com"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"LinkedIn"} href={"https://linkedin.com"}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={"Facebook"} href={"https://facebook.com"}>
                <FaFacebook />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Resources</ListHeader>
            <Link
              href="https://www.iata.org/en/publications/timatic/"
              isExternal
            >
              IATA Timatic
            </Link>
            <Link href="https://www.schengenvisainfo.com/" isExternal>
              Schengen Visa Info
            </Link>
            <Link
              href="https://travel.state.gov/content/travel/en/us-visas.html"
              isExternal
            >
              US Visa Information
            </Link>
            <Link href="https://www.gov.uk/browse/visas-immigration" isExternal>
              UK Visas & Immigration
            </Link>
            <Link href="https://immi.homeaffairs.gov.au/" isExternal>
              Australia Immigration
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Site</ListHeader>
            <Link as={GatsbyLink} to="/">
              Home
            </Link>
            <Link as={GatsbyLink} to="/visa-wizard">
              Visa Wizard
            </Link>
            <Link as={GatsbyLink} to="/blog">
              Blog
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support Me</ListHeader>
            <Text>
              If you like this and want to help a little bit, you can send small
              donation.
            </Text>
            <BuyMeCoffeeButton />
          </Stack>
        </SimpleGrid>
      </Container>

      <Divider borderColor={borderColor} />

      <Box py={4}>
        <Text pt={2} fontSize={"sm"} textAlign={"center"}>
          © {new Date().getFullYear()} Visa CheatSheet. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
