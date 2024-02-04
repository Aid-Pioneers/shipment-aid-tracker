import { Collapse, Grid, GridItem, Input, Select } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { ShipmentService } from '../../../../services/shipment-service';
import { DbConsignee, DbCountry, DbProfile, DbShipmentStatus, DbShipmentType } from '../../../../types/aliases';
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

export const ShipmentCreationGeneralComponent: React.FC<GeneralComponentProps> = ({
  startCollapsed,
  countries,
  shipmentTypes,
  shipmentStatuses,
  consignees,
  managers,
  shipmentService,
}) => {
  const { handleSubmit } = useForm<FormData>();

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

  console.log(shipmentService);
  const onSubmit = async (data: FormData) => {
    try {
      // TODO we need to convert the FormData into a DbShipment, to then call `shipmentService.create` with it.
      // const response = await shipmentService.create(data);
      // console.log('Submission response:', response);
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
              <Select placeholder="Select origin">{countryOptions}</Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Destination</label>
              <Select placeholder="Select origin">{countryOptions}</Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Main shipment type</label>
              <Select placeholder="Select option">{shipmentTypeOptions}</Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Consignee (recipient)</label>
              <Select placeholder="Select option">{consigneeOptions}</Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Internal ID</label>
              <Input size="sm" />
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Managed By</label>
              <Select placeholder="Select option">{managerOptions}</Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Drive Number:</label>
              <Input size="sm" />
            </GridItem>
            <GridItem colSpan={[6, 8]}>
              <label>Drive Link</label>
              <Input size="sm" type="url" />
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Status</label>
              <Select placeholder="Select option">{shipmentStatusOptions}</Select>
            </GridItem>
          </Grid>
          <SubmitPanel onCancel={handleCancel} />
        </form>
      </Collapse>
    </FormWrapper>
  );
};
