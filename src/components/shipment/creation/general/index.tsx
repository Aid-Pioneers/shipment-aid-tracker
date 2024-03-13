import { Collapse, Grid, GridItem, Input, Select } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { ShipmentService } from '../../../../services/shipment-service';
import { DbConsignee, DbCountry, DbProfile, DbShipment, DbShipmentStatus, DbShipmentType } from '../../../../types/aliases';
import { CollapsibleFormHeaderComponent } from '../../../collapsible-form-header';
import { SubmitPanel } from '../../common/submit-panel';
import { Database, Tables, Enums } from '../../../../types/database.types';

interface GeneralComponentProps {
  startCollapsed?: boolean;
  countries: DbCountry[];
  shipmentTypes: DbShipmentType[];
  shipmentStatuses: DbShipmentStatus[];
  consignees: DbConsignee[];
  managers: DbProfile[];
  shipmentService: ShipmentService;
}

type FormValuesGeneral = {
  origin: Tables<'country'>;
  destination: Tables<'country'>;
  shipmentType: Tables<'shipment_type'>;
  recipient: Tables<'donor'>;
  internalId: string; // TODO where should we save this? How is it used?
  managedBy: Database['public']['Tables']['shipment_manager']['Row']['profile_id']; // TODO we need to update this once we've created the shipment so that we have the ID.
  driveNumber: number; // TODO where should we save this? How is it used?
  driveLink: Database['public']['Tables']['shipment']['Row']['drive_link'];
  status: Database['public']['Tables']['shipment']['Row']['status_id'];
};

export const ShipmentCreationGeneralComponent: React.FC<GeneralComponentProps> = ({
  startCollapsed,
  countries,
  shipmentTypes,
  shipmentStatuses,
  consignees,
  managers,
  shipmentService,
}) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesGeneral>();

  const { register } = useFormContext();

  const [isCollapsed, setCollapsed] = useState<boolean | undefined>(startCollapsed);

  const countryOptions = countries.map((country) => (
    <option value={country.id} key={country.id}>
      {country.name}
    </option>
  ));

  const shipmentTypeOptions = shipmentTypes.map((shipmentType) => (
    <option value={shipmentType.id} key={shipmentType.id}>
      {shipmentType.shipment_type}
    </option>
  ));

  const shipmentStatusOptions = shipmentStatuses.map((shipmentStatus) => (
    <option value={shipmentStatus.id} key={shipmentStatus.id}>
      {shipmentStatus.status}
    </option>
  ));

  const consigneeOptions = consignees.map((consignee) => (
    <option value={consignee.id} key={consignee.id}>
      {consignee.name}
    </option>
  ));

  const managerOptions = managers.map((manager) => (
    <option value={manager.id} key={manager.id}>
      {manager.first_name} {manager.last_name}
    </option>
  ));

  const onSubmit: SubmitHandler<FormValuesGeneral> = async (data) => {
    try {
      console.log(data);
      console.log(shipmentService);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleCancel = async () => {
    console.log('Form submission cancelled');
  };

  return (
    <FormWrapper>
      <CollapsibleFormHeaderComponent header="General" isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      <Collapse in={typeof isCollapsed === 'undefined' || !isCollapsed}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={[6, 4]}>
              <label>Origin</label>
              <Select placeholder="Select origin" {...register('origin', { required: 'Origin is required' })}>
                {countryOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Destination</label>
              <Select placeholder="Select Destination" {...register('destination', { required: 'Destination is required' })}>
                {countryOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Main shipment type</label>
              <Select placeholder="Select option" {...register('shipmentType')}>
                {shipmentTypeOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Consignee (recipient)</label>
              <Select placeholder="Select option" {...register('recipient')}>
                {consigneeOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Internal ID</label>
              <Input size="sm" id="internalId" {...register('internalId')} />
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Managed By</label>
              <Select placeholder="Select option" {...register('managedBy')}>
                {managerOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Drive Number:</label>
              <Input size="sm" {...register('driveNumber')} />
            </GridItem>
            <GridItem colSpan={[6, 8]}>
              <label>Drive Link</label>
              <Input size="sm" type="url" {...register('driveLink')} />
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Status</label>
              <Select placeholder="Select option" {...register('status', { required: 'status is required' })}>
                {shipmentStatusOptions}
              </Select>
            </GridItem>
          </Grid>
          <SubmitPanel onCancel={handleCancel} />
        </form>
      </Collapse>
    </FormWrapper>
  );
};
