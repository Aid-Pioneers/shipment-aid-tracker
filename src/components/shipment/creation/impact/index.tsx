import * as React from 'react';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { Heading, Input, GridItem, Grid, Select } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

interface impactComponentProps {}

export const ShipmentCreationImpactComponent: React.FC<impactComponentProps> = () => {
  const { handleSubmit } = useForm<FormData>();

  const onSubmit = () => {};
  return (
    <FormWrapper>
      <Heading as="h2" size="lg" textAlign="left">
        Impact
      </Heading>
      {/* NB: update content and items within */}
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
  );
};
