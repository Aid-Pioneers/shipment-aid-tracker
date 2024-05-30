import React, { useEffect, useState } from 'react';
import { ShipmentService } from '../../../services/shipment-service';
import { DbShipment } from '../../../types/aliases';
import { PageContainer } from './index.styles';

interface ShipmentViewPageProps {
  shipmentService: ShipmentService;
}

// TODO grab shipmentID from param url
export const ShipmentViewPage: React.FC<ShipmentViewPageProps> = ({ shipmentService }) => {
  const [shipment, setShipment] = useState<DbShipment | null>(null);
  const [errors, setErrors] = useState<String[]>([]);

  const shipmentId = 123456;

  useEffect(() => {
    const loadShipment = async () => {
      try {
        const fetchedShipment = await shipmentService.fetchShipment(shipmentId);
        setShipment(fetchedShipment);
      } catch (error) {
        setErrors((prevErrors) => [...prevErrors, error.message]);
      }
    };
    loadShipment();
  }, [shipmentService]);

  return (
    <>
      {errors.length > 0 ? (
        // TODO #15 make an error component and pass error in as props
        errors.map((error, index) => <p key={index}>{error}</p>)
      ) : (
        // TODO: shipment list component
        <PageContainer>
          {/* TODO insert components here */}
          <p>{shipment ? JSON.stringify(shipment) : 'Loading...'}</p>
        </PageContainer>
      )}
    </>
  );
};
