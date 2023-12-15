import React from 'react';
import { ShipmentService } from '../../../services/shipment-service';
import { Heading, VStack, Stack, Button } from '@chakra-ui/react';
import { ShipmentCreationGeneralComponent } from '../../../components/shipment/creation/general';
import { ShipmentCreationLogisticsComponent } from '../../../components/shipment/creation/logistics';
import { ShipmentCreationFinanceComponent } from '../../../components/shipment/creation/finance';
import { ShipmentCreationPackingListComponent } from '../../../components/shipment/creation/packing-list';
import { ShipmentCreationImpactComponent } from '../../../components/shipment/creation/impact';
interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({ shipmentService }) => {
  console.log({ shipmentService });
  // NB: this container will handle making API calls and passing props into
  // Create a React context with all the data from the API required to render the forms (donors, destinations, statuses etc)
  return (
    <VStack>
      <Heading as="h1">Create a shipment</Heading>
      <ShipmentCreationGeneralComponent />
      <ShipmentCreationPackingListComponent />
      <ShipmentCreationLogisticsComponent />
      <ShipmentCreationFinanceComponent />
      <ShipmentCreationImpactComponent />
      <Stack direction="row" spacing={4}>
        <Button colorScheme="pink" variant="outline">
          Cancel
        </Button>
        <Button colorScheme="pink" variant="solid">
          Save
        </Button>
      </Stack>
    </VStack>
  );
};
