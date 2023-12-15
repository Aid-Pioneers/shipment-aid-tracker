import * as React from 'react';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { Heading, Input, GridItem, Grid, Select, Button, Spacer, Collapse } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { CollapsibleFormHeaderComponent } from '../../../collapsible-form-header';

interface PackingListComponentProps {
  startCollapsed?: boolean
}

export const ShipmentCreationPackingListComponent: React.FC<PackingListComponentProps> = ({ startCollapsed }) => {
  const { handleSubmit } = useForm<FormData>();

  const [isCollapsed, setCollapsed] = useState<boolean | undefined>(startCollapsed);

  const onSubmit = () => { };

  return (
    <FormWrapper>
      <CollapsibleFormHeaderComponent header="Packing List" isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      <Collapse in={typeof isCollapsed === undefined || !isCollapsed}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={[4, 8]}>
              <label>Packing Link</label>
              <Input size="sm" type="url" />
            </GridItem>
            <GridItem colSpan={[4, 3]}>
              <Spacer>
              </Spacer>
            </GridItem>
            <GridItem colSpan={[4, 4]}>
              {/* TODO this list should be fetched from database */}
              <label>Donor</label>
              <Select placeholder="Select option">
                <option value="crowd-donation">CrowdDonation</option>
              </Select>
            </GridItem>
          </Grid>
        </form>
      </Collapse>
    </FormWrapper>
  );
};
