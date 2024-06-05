import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShipmentService } from '../../../services/shipment-service';
import { DbShipment } from '../../../types/aliases';
import { PageContainer } from './index.styles';

interface ShipmentViewPageProps {
  shipmentService: ShipmentService;
}

// TODO grab shipmentID from param url
export const ShipmentViewPage: React.FC<ShipmentViewPageProps> = ({ shipmentService }) => {
  const { id } = useParams<{ id: string }>();
  const [shipment, setShipment] = useState<DbShipment | null>(null);
  const [errors, setErrors] = useState<String[]>([]);

  useEffect(() => {
    const loadShipment = async () => {
      const { data, error } = await shipmentService.fetchShipment(Number(id));

      if (data != null) setShipment(data);
      if (error != null) setErrors((prevErrors) => [...prevErrors, error.message]);
    };
    loadShipment();
  }, [id, shipmentService]);

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
