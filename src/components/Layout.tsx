import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex="1" width="100%">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
