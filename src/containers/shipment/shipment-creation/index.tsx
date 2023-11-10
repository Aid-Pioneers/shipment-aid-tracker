import React from 'react';
import { ShipmentService } from '../../../services/shipment-service';
import { useForm } from 'react-hook-form';
import { FormWrapper } from './index.styles';
import { Heading, Input, VStack, GridItem, Grid, Select, Stack, Button } from '@chakra-ui/react';
interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({ shipmentService }) => {
  const { handleSubmit } = useForm<FormData>();

  console.log({ shipmentService });
  const onSubmit = () => {};
  return (
    <VStack>
      <Heading>Create a shipment</Heading>
      {/* TODO extrat out each section into their own components */}
      <FormWrapper>
        <Heading>General</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid templateColumns="repeat(6, 1fr)" gap={6}>
            <GridItem colSpan={[6, 3]}>
              <label>Internal shipment number</label>
              <Input size="sm" />
            </GridItem>
            <GridItem colSpan={[6, 3]}>
              <label>Drive link</label>
              <Input size="sm" />
            </GridItem>
            <GridItem colSpan={[6, 3]}>
              <label>Origin:</label>
              <Input size="sm" />
            </GridItem>
            <GridItem colSpan={[6, 3]}>
              <label>Destination:</label>
              {/* TODO this needs to be a dropdown?? */}
              <Input size="sm" />
            </GridItem>
            <GridItem colSpan={[6, 3]}>
              <label>Main shipment type</label>
              <Select placeholder="Select option">
                {/* TODO put this in separate constants folder */}
                <option value="shipping">Shipping</option>
                <option value="air_freight">Air Freight</option>
                <option value="trains">Trains</option>
                <option value="trucks">Trucks</option>
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 3]}>
              <label>Consignee (Recipient)</label>
              {/* TODO this list should be fetched from database */}
              <Select placeholder="Select option">
                <option value="uhu">UHU / P22</option>
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 3]}>
              {/* TODO this list should be fetched from database */}
              <label>Managed By</label>
              <Select placeholder="Select option">
                <option value="valeria">Valeria</option>
                <option value="alexis">Alexis</option>
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 3]}>
              <label>Status</label>
              <Select placeholder="Select option">
                <option value="planning">Planning</option>
                <option value="confirmed">Confirmed</option>
                <option value="shipping">Shipping</option>
                <option value="delivered">Delivered</option>
              </Select>
            </GridItem>
          </Grid>
        </form>
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
