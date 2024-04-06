import { Collapse, Grid, GridItem, Input, Select, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { DbDonor } from '../../../../types/aliases';
import { CollapsibleFormHeaderComponent } from '../../../collapsible-form-header';
import { Database } from '../../../../types/database.types';
import { ShipmentService } from '../../../../services/shipment-service';
import { SubmitPanel } from '../../common/submit-panel';

interface PackingListComponentProps {
  startCollapsed?: boolean;
  donors: DbDonor[];
  shipmentService: ShipmentService;
}

type PackingShipmentForm = Database['public']['Tables']['shipment']['Update'];

export const ShipmentCreationPackingListComponent: React.FC<PackingListComponentProps> = ({ startCollapsed, donors, shipmentService }) => {
  const { register, handleSubmit } = useForm<PackingShipmentForm>();

  const [isCollapsed, setCollapsed] = useState<boolean | undefined>(startCollapsed);

  const donorOptions = donors.map((donor) => (
    <option value={donor.id} key={donor.id}>
      {donor.name}
    </option>
  ));

  const onSubmit: SubmitHandler<PackingShipmentForm> = async (data: PackingShipmentForm) => {
    try {
      const shipment = {
        ...data,
      };

      await shipmentService.update(shipment);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleCancel = async () => {
    // TODO https://github.com/Aid-Pioneers/shipment-aid-tracker/issues/53
    // clear the form when the cancel action is taken
  };

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
              <Spacer></Spacer>
            </GridItem>
            <GridItem colSpan={[4, 4]}>
              <label>Donor</label>
              <Select placeholder="Select option" {...register('donor_id')}>
                {donorOptions}
              </Select>
            </GridItem>
          </Grid>
          <SubmitPanel onCancel={handleCancel} />
        </form>
      </Collapse>
    </FormWrapper>
  );
};
