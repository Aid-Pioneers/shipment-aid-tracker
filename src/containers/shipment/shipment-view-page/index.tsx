import React, { useEffect, useState } from 'react';
import { ShipmentService } from '../../../services/shipment-service';
import { DbShipment } from '../../../types/aliases';
import { PageContainer } from './index.styles';

interface ShipmentViewPageProps {
  shipmentService: ShipmentService;
}

export const ShipmentViewPage: React.FC<ShipmentViewPageProps> = ({ shipmentService }) => {
  const [shipment, setShipment] = useState<DbShipment>([]);
  const [errors, setErrors] = useState<String[]>([]);

  useEffect(() => {
    const loadShipment = async () => {
      return shipmentService.fetchShipment(
        (data) => setShipment(data),
        (error) => setErrors([error.message])
      );
    };
    loadShipment();
  }, [shipmentService]);

  return (
    <>
      {errors.length > 0 ? (
        // TODO #15 make an error component and pass error in as props
        errors.map((error) => <p>{error}</p>)
      ) : (
        // TODO: shipment list component
        <PageContainer>
          <p>{JSON.stringify(shipment)}</p>
        </PageContainer>
      )}
    </>
  );
};
