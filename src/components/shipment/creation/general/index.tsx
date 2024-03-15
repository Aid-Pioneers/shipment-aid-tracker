import { Collapse, Grid, GridItem, Input, Select } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { ShipmentService } from '../../../../services/shipment-service';
import { DbConsignee, DbCountry, DbProfile, DbShipmentStatus, DbShipmentType } from '../../../../types/aliases';
import { Database } from '../../../../types/database.types';
import { CollapsibleFormHeaderComponent } from '../../../collapsible-form-header';
import { SubmitPanel } from '../../common/submit-panel';

interface GeneralComponentProps {
  startCollapsed?: boolean;
  countries: DbCountry[];
  shipmentTypes: DbShipmentType[];
  shipmentStatuses: DbShipmentStatus[];
  consignees: DbConsignee[];
  managers: DbProfile[];
  shipmentService: ShipmentService;
}

type FormValuesShipment = Database['public']['Tables']['shipment']['Insert'];

type FormValuesShipmentManager = Database['public']['Tables']['shipment_manager']['Insert'];

type FormValuesGeneral = FormValuesShipment & FormValuesShipmentManager;

export const ShipmentCreationGeneralComponent: React.FC<GeneralComponentProps> = ({
  startCollapsed,
  countries,
  shipmentTypes,
  shipmentStatuses,
  consignees,
  managers,
  shipmentService,
}) => {
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

  const onSubmit: SubmitHandler<FormValuesGeneral> = async (data: FormValuesGeneral) => {
    try {
      const shipment = {
        ...data,
        profile_id: undefined,
      };

      await shipmentService.create(shipment, data.profile_id);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleCancel = async () => {
    console.log('Form submission cancelled');
  };

  const { register, handleSubmit } = useForm<FormValuesGeneral>();

  return (
    <FormWrapper>
      <CollapsibleFormHeaderComponent header="General" isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      <Collapse in={typeof isCollapsed === 'undefined' || !isCollapsed}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={[6, 4]}>
              <label>Origin</label>
              <Select placeholder="Select origin" {...register('origin_id', { required: 'Origin is required' })}>
                {countryOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Destination</label>
              <Select placeholder="Select Destination" {...register('destination_id', { required: 'Destination is required' })}>
                {countryOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Main shipment type</label>
              <Select placeholder="Select option" {...register('main_shipment_type_id')}>
                {shipmentTypeOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Consignee (recipient)</label>
              <Select placeholder="Select option" {...register('consignee_id')}>
                {consigneeOptions}
              </Select>
            </GridItem>
            {/* <GridItem colSpan={[6, 4]}>
              <label>Internal ID</label>
              <Input size="sm" id="internalId" {...register('internalId')} />
            </GridItem> */}
            <GridItem colSpan={[6, 4]}>
              <label>Managed By</label>
              <Select placeholder="Select option" {...register('profile_id')}>
                {managerOptions}
              </Select>
            </GridItem>
            {/* <GridItem colSpan={[6, 4]}>
              <label>Drive Number:</label>
              <Input size="sm" {...register('drive_number')} />
            </GridItem> */}
            <GridItem colSpan={[6, 8]}>
              <label>Drive Link</label>
              <Input size="sm" type="url" {...register('drive_link')} />
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Status</label>
              <Select placeholder="Select option" {...register('status_id', { required: true })}>
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
