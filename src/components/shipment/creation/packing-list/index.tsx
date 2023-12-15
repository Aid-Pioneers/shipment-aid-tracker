import * as React from 'react';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { Heading, Input, GridItem, Grid, Select } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

interface packingListComponentProps {}

export const ShipmentCreationPackingListComponent: React.FC<packingListComponentProps> = () => {
  const { handleSubmit } = useForm<FormData>();

  const onSubmit = () => {};
  return (
    <FormWrapper>
      <Heading as="h2" size="lg" textAlign="left">
        Packing List
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <GridItem colSpan={[4, 8]}>
            <label>Packing Link</label>
            <Input size="sm" type="url" />
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
    </FormWrapper>
  );
};
