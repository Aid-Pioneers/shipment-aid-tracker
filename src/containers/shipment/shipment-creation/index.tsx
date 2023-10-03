import React from 'react';
import { ShipmentService } from '../../../services/shipment-service';
import { useForm } from 'react-hook-form';
import { FormItemWrapper, FormWrapper } from './index.styles';

interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({ shipmentService }) => {
  const { handleSubmit } = useForm<FormData>();

  console.log({ shipmentService });
  const onSubmit = () => {};
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormItemWrapper>
          <label>Starting Location:</label>
          <input name="starting_location" />
          {/* {errors.starting_location && <span>This field is required</span>} */}
        </FormItemWrapper>

        <FormItemWrapper>
          <label>Destination Location:</label>
          {/* TODO this needs to be a dropdown */}
          {/* {errors.destination_location && <span>This field is required</span>} */}
        </FormItemWrapper>
        <FormItemWrapper>
          <label>Cure ID</label>
          <input name="cure_id" />
        </FormItemWrapper>
        <FormItemWrapper>
          <label>Shipping ID</label>
          <input name="shipping_id" />
        </FormItemWrapper>
        <FormItemWrapper>
          <label>Delivery Date</label>
          <input name="delivery_date" />
        </FormItemWrapper>
        <FormItemWrapper>
          <label>Recipient</label>
          {/* TODO dropdown?? */}
        </FormItemWrapper>
        <FormItemWrapper>
          <label>Weight</label>
          <input name="shipment_weight" />
        </FormItemWrapper>

        <FormItemWrapper>
          <label>Value</label>
          <input name="shipment_value" />
        </FormItemWrapper>

        <button type="submit">Create Shipment</button>
      </form>
    </FormWrapper>
  );
};
