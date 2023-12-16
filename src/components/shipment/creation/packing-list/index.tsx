import { Grid, GridItem, Input, Select, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';

interface PackingListComponentProps { }

export const ShipmentCreationPackingListComponent: React.FC<PackingListComponentProps> = () => {
  const { handleSubmit } = useForm<FormData>();

  const onSubmit = () => { };

  return (
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
  );
};
