import { Box, Button, VStack } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import React from "react";
import ReactCountryFlag from "react-country-flag";

export type CountryProps = {
  id: string;
  name: string;
  countryCode: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

const CountryCard: React.FC<CountryProps> = ({
  id,
  name,
  countryCode,
  isSelected,
  onSelect,
}) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ transform: "translateY(-2px)", shadow: "md" }}
      onClick={() => onSelect(id)}
      role="button"
      aria-label={`View ${name} visa requirements`}
    >
      <VStack spacing={3}>
        <Button variant="ghost" rightIcon={<ArrowRight size={16} />}>
          {name}
        </Button>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{ fontSize: "120px" }}
        />
      </VStack>
    </Box>
  );
};

export default CountryCard;
