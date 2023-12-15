import * as React from 'react';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { Heading, Input, GridItem, Grid, Select, Spacer, Collapse } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { CollapsibleFormHeaderComponent } from '../../../collapsible-form-header';
import { useState } from 'react';

interface TrackingComponentProps {
  startCollapsed?: boolean
}

export const ShipmentCreationTrackingComponent: React.FC<TrackingComponentProps> = ({ startCollapsed }) => {
  const { handleSubmit } = useForm<FormData>();

  const [isCollapsed, setCollapsed] = useState<boolean | undefined>(startCollapsed);

  const onSubmit = () => { };

  return (
    <FormWrapper>
      <CollapsibleFormHeaderComponent header="Tracking" isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      <Collapse in={typeof isCollapsed === undefined || !isCollapsed}>
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
              <Input size="sm" type="number"></Input>
            </GridItem>
            <GridItem colSpan={[4, 4]}>
              <label>GIK-value of goods (USD)</label>
              <Input size="sm" type="number"></Input>
            </GridItem>
          </Grid>
        </form>
      </Collapse>
    </FormWrapper>
  );
};
