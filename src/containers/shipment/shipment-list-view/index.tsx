import React, { useEffect, useState } from 'react';
import { ShipmentService } from '../../../services/shipment-service';

interface ShipmentOverviewProps {
  shipmentService: ShipmentService;
}

export const ShipmentOverview: React.FC<ShipmentOverviewProps> = ({ shipmentService }) => {
  // TODO update types for useState
  const [shipments, setShipments] = useState<any>([]);
  const [errors, setErrors] = useState<String[]>([]);

  useEffect(() => {
    const loadShipments = async () => {
      const shipments = await shipmentService.fetchShipments();
      setShipments(shipments);
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
