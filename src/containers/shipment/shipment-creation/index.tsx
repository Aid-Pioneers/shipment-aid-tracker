import React from 'react';
import { ShipmentService } from '../../../services/shipment-service';
import { useForm } from 'react-hook-form';
import { FormWrapper } from './index.styles';
import { Heading, Input, VStack, GridItem, Grid, Select, Stack, Button } from '@chakra-ui/react';
import { ShipmentCreationGeneralComponent } from '../../../components/shipment/creation/general';
interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({ shipmentService }) => {
  console.log({ shipmentService });
  // NB: this container will handle making API calls and passing props into
  return (
    <VStack>
      <Heading as="h1">Create a shipment</Heading>
      {/* TODO extract out each section into their own components */}
      <ShipmentCreationGeneralComponent />
      <FormWrapper>
        <Heading as="h2" size="lg">
          Logistics
        </Heading>
      </FormWrapper>
      <FormWrapper>
        <Heading as="h2" size="lg">
          Finance
        </Heading>
      </FormWrapper>
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
