import { Collapse, Grid, GridItem, Input, Select } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { DbConsignee, DbCountry, DbShipmentType } from '../../../../types/aliases';
import { CollapsibleFormHeaderComponent } from '../../../collapsible-form-header';

interface GeneralComponentProps {
  startCollapsed?: boolean,
  countries: DbCountry[],
  shipmentTypes: DbShipmentType[],
  consignees: DbConsignee[]
}

export const ShipmentCreationGeneralComponent: React.FC<GeneralComponentProps> = ({ startCollapsed, countries, shipmentTypes, consignees }) => {

  const { handleSubmit } = useForm<FormData>();

  const [isCollapsed, setCollapsed] = useState<boolean | undefined>(startCollapsed);

  const onSubmit = (data: any) => { };

  const countryOptions = countries.map(country => <option value={country.id} key={country.id}>{country.name}</option>)

  const shipmentTypeOptions = shipmentTypes.map(shipmentType => <option value={shipmentType.id} key={shipmentType.id}>{shipmentType.shipment_type}</option>)

  const consigneeOptions = consignees.map(consignee => <option value={consignee.id} key={consignee.id}>{consignee.name}</option>)

  return (
    <FormWrapper>
      <CollapsibleFormHeaderComponent header="General" isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      <Collapse in={typeof isCollapsed === 'undefined' || !isCollapsed}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={[6, 4]}>
              <label>Origin</label>
              <Select placeholder="Select origin">
                {countryOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Destination</label>
              <Select placeholder="Select origin">
                {countryOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Main shipment type</label>
              <Select placeholder="Select option">
                {shipmentTypeOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Consignee (recipient)</label>
              <Select placeholder="Select option">
                {consigneeOptions}
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Internal ID</label>
              <Input size="sm" />
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              {/* TODO this list should be fetched from database */}
              <label>Managed By</label>
              <Select placeholder="Select option">
                <option value="valeria">Valeria</option>
                <option value="alexis">Alexis</option>
              </Select>
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
              <Select placeholder="Select option">
                <option value="planned">Planned</option>
                <option value="confirmed">Confirmed</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </Select>
            </GridItem>
          </Grid>
        </form>
      </Collapse>
    </FormWrapper >
  );
};
