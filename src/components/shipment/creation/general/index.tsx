import { Collapse, Grid, GridItem, Input, Select } from '@chakra-ui/react';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { ShipmentService } from '../../../../services/shipment-service';
import { DbConsignee, DbCountry, DbProfile, DbShipmentStatus, DbShipmentType } from '../../../../types/aliases';
import { Database } from '../../../../types/database.types';
import { CollapsibleFormHeaderComponent } from '../../../collapsible-form-header';
import { SubmitPanel } from '../../common/submit-panel';
import { useNavigate } from 'react-router-dom';
import { CountryService } from '../../../../services/country-service';
import { ConsigneeService } from '../../../../services/consignee-service';
import { ProfileService } from '../../../../services/profile-service';

interface GeneralComponentProps {
  startCollapsed?: boolean;
  shipmentService: ShipmentService;
  countryService: CountryService;
  consigneeService: ConsigneeService;
  profileService: ProfileService;
}

interface FormData {
  countries: DbCountry[];
  shipmentTypes: DbShipmentType[];
  shipmentStatuses: DbShipmentStatus[];
  consignees: DbConsignee[];
  managers: DbProfile[];
}

type FormValuesShipment = Database['public']['Tables']['shipment']['Insert'];

export const ShipmentCreationGeneralComponent: React.FC<GeneralComponentProps> = ({
  startCollapsed,
  countryService,
  shipmentService,
  consigneeService,
  profileService,
}) => {
  const [isCollapsed, setCollapsed] = useState<boolean | undefined>(startCollapsed);

  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>();

  useEffect(() => {
    const loadData = async () => {
      const [countries, shipmentTypes, shipmentStatuses, consignees, profiles] = await Promise.all([
        countryService.fetchCountries(),
        shipmentService.fetchShipmentTypes(),
        shipmentService.fetchShipmentStatuses(),
        consigneeService.fetchConsignees(),
        profileService.fetchProfiles(['manager']),
      ]);

      if (countries.data && shipmentTypes.data && shipmentStatuses.data && consignees.data && profiles.data) {
        setFormData({
          countries: countries.data,
          shipmentTypes: shipmentTypes.data,
          shipmentStatuses: shipmentStatuses.data,
          consignees: consignees.data,
          managers: profiles.data,
        });
      }
    };
    loadData();
  }, [shipmentService, countryService, consigneeService, profileService]);

  const countryOptions = formData?.countries.map((country) => (
    <option value={country.id} key={country.id}>
      {country.name}
    </option>
  ));

  const shipmentTypeOptions = formData?.shipmentTypes?.map((shipmentType) => (
    <option value={shipmentType.id} key={shipmentType.id}>
      {shipmentType.shipment_type}
    </option>
  ));

  const shipmentStatusOptions = formData?.shipmentStatuses.map((shipmentStatus) => (
    <option value={shipmentStatus.id} key={shipmentStatus.id}>
      {shipmentStatus.status}
    </option>
  ));

  const consigneeOptions = formData?.consignees.map((consignee) => (
    <option value={consignee.id} key={consignee.id}>
      {consignee.name}
    </option>
  ));

  const managerOptions = formData?.managers.map((manager) => (
    <option value={manager.id} key={manager.id}>
      {manager.first_name} {manager.last_name}
    </option>
  ));

  const onSubmit: SubmitHandler<FormValuesShipment> = async (data: FormValuesShipment) => {
    try {
      const shipment = {
        ...data,
        profile_id: undefined,
      };

      const shipmentId = await shipmentService.create(shipment);

      if (shipmentId !== undefined) {
        navigate(`/shipments/${shipmentId}/`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleCancel = async () => {
    // TODO https://github.com/Aid-Pioneers/shipment-aid-tracker/issues/53
    // clear the form when the cancel action is taken
  };

  const { register, handleSubmit } = useForm<FormValuesShipment>();

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
            <GridItem colSpan={[6, 4]}>
              <label>Internal ID</label>
              <Input size="sm" id="internalId" />
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Managed By</label>
              <Select placeholder="Select option" {...register('manager_id')}>
                {managerOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Drive Number:</label>
              <Input size="sm" />
            </GridItem>
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
