import { Button, HStack, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { ShipmentCreationFinanceComponent } from '../../../components/shipment/creation/finance';
import { ShipmentCreationGeneralComponent } from '../../../components/shipment/creation/general';
import { ShipmentCreationImpactComponent } from '../../../components/shipment/creation/impact';
import { ShipmentCreationPackingListComponent } from '../../../components/shipment/creation/packing-list';
import { ShipmentCreationTrackingComponent } from '../../../components/shipment/creation/tracking';
import { ShipmentService } from '../../../services/shipment-service';
interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({ shipmentService }) => {
  console.log({ shipmentService });
  // NB: this container will handle making API calls and passing props into
  // Create a React context with all the data from the API required to render the forms (donors, destinations, statuses etc)
  return (
    <VStack>
      {/* TODO can we make this h1 left aligned? */}
      <Heading as="h1">Create a shipment</Heading>
      <ShipmentCreationGeneralComponent />
      <ShipmentCreationPackingListComponent startCollapsed={false} />
      <ShipmentCreationTrackingComponent startCollapsed={true} />
      <ShipmentCreationFinanceComponent startCollapsed={true} />
      <ShipmentCreationImpactComponent startCollapsed={true} />
      {/* TODO can we make this HStack left aligned? */}
      <HStack spacing={20} align="left">
        <Button colorScheme="blue" variant="outline">
          Cancel
        </Button>
        <Button colorScheme="blue" variant="solid">
          Save
        </Button>
      </HStack>
    </VStack>
  );
};
