import React from 'react';
import { ShipmentService } from '../../../services/shipment-service';
import { useForm } from 'react-hook-form';
import { FormItemWrapper, FormRowWrapper, FormWrapper } from './index.styles';
import { Heading, Input } from '@chakra-ui/react';
interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({ shipmentService }) => {
  const { handleSubmit } = useForm<FormData>();

  console.log({ shipmentService });
  const onSubmit = () => {};
  return (
    <>
      <Heading>Create a shipment</Heading>
      <FormWrapper>
        <Heading>General</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItemWrapper>
            <label>Internal shipment number</label>
            <Input size="sm" />
          </FormItemWrapper>
          <FormItemWrapper>
            <label>Drive link</label>
            <Input size="sm" />
          </FormItemWrapper>

          <FormItemWrapper>
            <label>Origin:</label>
            <Input size="sm" />
            {/* {errors.starting_location && <span>This field is required</span>} */}
          </FormItemWrapper>

          <FormItemWrapper>
            <label>Destination:</label>
            {/* TODO this needs to be a dropdown?? */}
            <Input size="sm" />
            {/* {errors.destination_location && <span>This field is required</span>} */}
          </FormItemWrapper>
          <FormItemWrapper>
            <label>Main shipment type</label>
            <Input size="sm" />
          </FormItemWrapper>

          <FormItemWrapper>
            <label>Consignee (Recipient)</label>
            <Input size="sm" />
          </FormItemWrapper>
          <FormItemWrapper>
            <label>Managed By</label>
            <Input size="sm" />
          </FormItemWrapper>
          <FormItemWrapper>
            <label>Status</label>
            <Input size="sm" />
          </FormItemWrapper>

          <button type="submit">Create Shipment</button>
        </form>
      </FormWrapper>
    </>
  );
};
