import * as React from 'react';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { Heading, Input, GridItem, Grid, Select, Spacer } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

interface TrackingComponentProps {}

export const ShipmentCreationTrackingComponent: React.FC<TrackingComponentProps> = () => {
  const { handleSubmit } = useForm<FormData>();

  const onSubmit = () => {};
  return (
    <FormWrapper>
      <Heading as="h2" size="lg" textAlign="left">
        Tracking
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <GridItem colSpan={[2, 4]}>
            <label>Tracking Type</label>
            <Input size="sm" />
          </GridItem>
          <GridItem colSpan={[2, 4]}>
            <label>Tracking ID</label>
            <Input size="sm" />
          </GridItem>
          <Spacer>
          </Spacer>
          <GridItem colSpan={[4, 4]}>
            <label>ETA / Delivery Date</label>
            <Input  placeholder="Select Date and Time" size="sm" type="date"/>
          </GridItem>
          <GridItem colSpan={[6, 8]}>
            <label>Tracking Link</label>
            <Input size="sm" type="url" />
          </GridItem>
          <GridItem colSpan={[4, 4]}>
            <label>Weight (kg)</label>
            <Input size="sm" type="number"></Input>
          </GridItem>
          <GridItem colSpan={[4, 4]}>
            <label>GIK-value of goods (USD)</label>
            <Input size="sm" type="number"></Input>
          </GridItem>
        </Grid>
      </form>
    </FormWrapper>
  );
};
