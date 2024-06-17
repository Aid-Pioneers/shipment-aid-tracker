import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface ManagerCardProps {
  user: string;
}

export const ManagerCard: React.FC<ManagerCardProps> = ({ user }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding="4" backgroundColor="white" boxShadow="sm">
      <Text fontWeight="bold" fontSize="md" color="gray.500" mb="2">
        Managed By
      </Text>
      <Text fontWeight="bold" fontSize="xl" color="gray.800">
        {user}
      </Text>
    </Box>
  );
};
