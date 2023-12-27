import { Collapse, Grid, GridItem, Input, Select, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { DbDonor } from '../../../../types/aliases';
import { CollapsibleFormHeaderComponent } from '../../../collapsible-form-header';

interface PackingListComponentProps {
  startCollapsed?: boolean,
  donors: DbDonor[]
}

export const ShipmentCreationPackingListComponent: React.FC<PackingListComponentProps> = ({ startCollapsed, donors }) => {
  const { handleSubmit } = useForm<FormData>();

  const [isCollapsed, setCollapsed] = useState<boolean | undefined>(startCollapsed);

  const donorOptions = donors.map(donor => <option value={donor.id} key={donor.id}>{donor.name}</option>)

  const onSubmit = () => { };

  return (
    <FormWrapper>
      <CollapsibleFormHeaderComponent header="Packing List" isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      <Collapse in={typeof isCollapsed === 'undefined' || !isCollapsed}>
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
              <label>Donor</label>
              <Select placeholder="Select option">
                {donorOptions}
              </Select>
            </GridItem>
          </Grid>
        </form>
      </Collapse>
    </FormWrapper>
  );
};
