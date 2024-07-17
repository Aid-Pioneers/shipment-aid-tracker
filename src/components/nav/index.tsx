import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, VStack, Link as ChakraLink } from '@chakra-ui/react';
import styled from 'styled-components';

const StyledFlex = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: #2c5282;
  color: white;
  padding: 20px;
`;

const NavBar: React.FC = () => {
  return (
    <StyledFlex direction="column">
      <Box mb="40px">
        <Text fontSize="2xl" fontWeight="bold">
          AP+
        </Text>
      </Box>
      <VStack align="start" spacing="20px">
        <ChakraLink as={Link} to="/shipments" fontSize="lg" _hover={{ textDecor: 'none', color: 'blue.300' }}>
          Shipment Overview
        </ChakraLink>
        <ChakraLink as={Link} to="/shipments/new" fontSize="lg" _hover={{ textDecor: 'none', color: 'blue.300' }}>
          Create Shipment
        </ChakraLink>
        <ChakraLink as={Link} to="/sign-in" fontSize="lg" _hover={{ textDecor: 'none', color: 'blue.300' }}>
          Sign In
        </ChakraLink>
        <ChakraLink as={Link} to="/sign-up" fontSize="lg" _hover={{ textDecor: 'none', color: 'blue.300' }}>
          Sign Up
        </ChakraLink>
      </VStack>
      <Box mt="auto" pt="20px">
        <Text fontSize="lg" fontWeight="bold">
          Mehmet Marasligil
        </Text>
        <Text as={Link} to="/logout" fontSize="md" color="blue.300" _hover={{ textDecor: 'none' }}>
          Sign Out
        </Text>
      </Box>
    </StyledFlex>
  );
};

export default NavBar;
