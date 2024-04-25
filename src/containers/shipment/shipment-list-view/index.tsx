import React, { useEffect, useState } from 'react';
import { ShipmentService } from '../../../services/shipment-service';
import { DbShipment } from '../../../types/aliases';

interface ShipmentOverviewProps {
  shipmentService: ShipmentService;
}

export const ShipmentOverview: React.FC<ShipmentOverviewProps> = ({ shipmentService }) => {
  const [shipments, setShipments] = useState<DbShipment[]>([]);
  const [errors, setErrors] = useState<String[]>([]);

  useEffect(() => {
    const loadShipments = async () => {
      const { data, error } = await shipmentService.fetchShipments();
      if (data) setShipments(data);
      if (error) setErrors([error.message]);
    };
    loadShipments();
  }, [shipmentService]);

  return (
    <>
      {errors.length > 0 ? (
        // TODO #15 make an error component and pass error in as props
        errors.map((error) => <p>{error}</p>)
      ) : (
        // TODO: shipment list component
        <p>{JSON.stringify(shipments)}</p>
      )}
    </>
  );
};
