import React from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { IconShipmentOrigin } from '../../../../assets/icons/shipments';

interface OriginDestinationCardProps {
  origin: string;
  destination: string;
}

export const OriginDestinationCard: React.FC<OriginDestinationCardProps> = ({ origin, destination }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding="4" backgroundColor="white" boxShadow="sm">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="sm" color="gray.500">
            Origin
          </Text>
          <Text fontWeight="bold" fontSize="lg" color="gray.800">
            {origin}
          </Text>
          <Text fontSize="sm" color="gray.500" mt="4">
            Destination
          </Text>
          <Text fontWeight="bold" fontSize="lg" color="gray.800">
            {destination}
          </Text>
        </Box>
        <Icon as={IconShipmentOrigin} boxSize="8" color="gray.500" />
      </Flex>
    </Box>
  );
};
