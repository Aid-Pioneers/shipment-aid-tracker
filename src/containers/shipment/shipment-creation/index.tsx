import React from 'react';
import { ShipmentService } from '../../../services/shipment-service';
import { useForm } from 'react-hook-form';

interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({ shipmentService }) => {
  const { handleSubmit } = useForm<FormData>();

  const onSubmit = () => {};
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Starting Location:</label>
          <input name="starting_location" />
          {/* {errors.starting_location && <span>This field is required</span>} */}
        </div>

        <div>
          <label>Destination Location:</label>
          <input name="destination_location" />
          {/* {errors.destination_location && <span>This field is required</span>} */}
        </div>

        <button type="submit">Create Shipment</button>
      </form>
    </>
  );
};
