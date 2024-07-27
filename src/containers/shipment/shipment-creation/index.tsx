import { Box, Flex, Heading, HStack, Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import { ShipmentCreationGeneralComponent } from '../../../components/shipment/creation/general';
import { ConsigneeService } from '../../../services/consignee-service';
import { CountryService } from '../../../services/country-service';
import { ProfileService } from '../../../services/profile-service';
import { ShipmentService } from '../../../services/shipment-service';

interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
  countryService: CountryService;
  consigneeService: ConsigneeService;
  profileService: ProfileService;
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({
  shipmentService,
  countryService,
  consigneeService,
  profileService,
}) => {
  return (
    <Flex height="100vh" alignItems="start" justifyContent="center">
      <VStack spacing={4}>
        <Heading as="h1" alignSelf="flex-start">
          Create a shipment
        </Heading>
        <Box>
          <ShipmentCreationGeneralComponent
            shipmentService={shipmentService}
            countryService={countryService}
            consigneeService={consigneeService}
            profileService={profileService}
          />
        </Box>
      </VStack>
    </Flex>
  );
};
