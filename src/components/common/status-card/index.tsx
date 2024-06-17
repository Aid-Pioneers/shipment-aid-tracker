import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import * as React from 'react';

interface StatusCardProps {
  icon: React.ElementType;
  field: string;
  status: string;
}
export const StatusCard: React.FC<StatusCardProps> = ({ icon, field, status }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding="4" backgroundColor="white" boxShadow="sm">
      <Flex alignItems="center" mb="4">
        <Icon as={icon} boxSize="50px" color="pink.500" mr="4" />
        <Text fontWeight="bold" fontSize="xl" color="gray.800">
          {field}
        </Text>
      </Flex>
      <Text fontWeight="bold" fontSize="lg" color="pink.500">
        {status}
      </Text>
    </Box>
  );
};
