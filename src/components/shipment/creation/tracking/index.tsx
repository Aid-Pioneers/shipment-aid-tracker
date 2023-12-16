import { Grid, GridItem, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';

interface TrackingComponentProps { }

export const ShipmentCreationTrackingComponent: React.FC<TrackingComponentProps> = () => {
  const { handleSubmit } = useForm<FormData>();

  const onSubmit = () => { };

  return (
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
          <Input placeholder="Select Date and Time" size="sm" type="date" />
        </GridItem>
        <GridItem colSpan={[6, 8]}>
          <label>Tracking Link</label>
          <Input size="sm" type="url" />
        </GridItem>
        <GridItem colSpan={[4, 4]}>
          <label>Weight (kg)</label>
          <NumberInput defaultValue={0} size="sm">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
        <GridItem colSpan={[4, 4]}>
          <label>GIK-value of goods (USD)</label>
          <NumberInput defaultValue={0} size="sm">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
      </Grid>
    </form>
  );
};
