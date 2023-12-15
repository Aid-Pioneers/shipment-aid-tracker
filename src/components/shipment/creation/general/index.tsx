import * as React from 'react';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { Heading, Input, GridItem, Grid, Select, Collapse } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { CollapsibleFormHeaderComponent } from '../../../collapsible-form-header';

interface GeneralComponentProps {
  startCollapsed?: boolean
}

export const ShipmentCreationGeneralComponent: React.FC<GeneralComponentProps> = ({ startCollapsed }) => {

  const { handleSubmit } = useForm<FormData>();

  const [isCollapsed, setCollapsed] = useState<boolean | undefined>(startCollapsed);

  const onSubmit = () => { };

  return (
    <FormWrapper>
      <CollapsibleFormHeaderComponent header="General" isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      <Collapse in={typeof isCollapsed === undefined || !isCollapsed}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={[6, 4]}>
              <label>Origin</label>
              <Select placeholder="Select origin">
                {/* TODO this list should be fetched from database */}
                <option value="ukraine">New York, USA</option>
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Destination</label>
              <Select placeholder="Select origin">
                {/* TODO this list should be fetched from database */}
                <option value="ukraine">Kyiv, Ukraine</option>
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Main shipment type</label>
              <Select placeholder="Select option">
                {/* TODO this list should be fetched from database */}
                <option value="shipping">Shipping</option>
                <option value="air_freight">Air Freight</option>
                <option value="trains">Trains</option>
                <option value="trucks">Trucks</option>
              </Select>
            </GridItem>
            <GridItem colSpan={[6, 4]}>
              <label>Consignee (recipient)</label>
              {/* TODO this list should be fetched from database */}
              <Select placeholder="Select option">
                <option value="uhu">UHU / P22</option>
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
