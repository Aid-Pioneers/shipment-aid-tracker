import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShipmentService } from '../../../services/shipment-service';
import { DbShipment, DbShipmentStatus } from '../../../types/aliases';
import { PageContainer } from './index.styles';
import { StatusCard } from '../../../components/common/status-card';
import { IconShipmentStatusPlanned } from '../../../assets/icons/shipments';

interface ShipmentViewPageProps {
  shipmentService: ShipmentService;
}

export const ShipmentViewPage: React.FC<ShipmentViewPageProps> = ({ shipmentService }) => {
  const { id } = useParams<{ id: string }>();
  const [shipment, setShipment] = useState<DbShipment | null>(null);
  const [shipmentStatuses, setShipmentStatuses] = useState<DbShipmentStatus[]>([]);
  const [errors, setErrors] = useState<String[]>([]);

  useEffect(() => {
    const loadShipment = async () => {
      const { data, error } = await shipmentService.fetchShipment(Number(id));

      if (data != null) setShipment(data);
      if (error != null) setErrors((prevErrors) => [...prevErrors, error.message]);
    };

    const loadShipmentStatuses = async () => {
      const { data, error } = await shipmentService.fetchShipmentStatuses();

      if (data != null) setShipmentStatuses(data);
      if (error != null) setErrors((prevErrors) => [...prevErrors, error.message]);
    };

    loadShipment();
    loadShipmentStatuses();
  }, [id, shipmentService]);

  const defaultStatusCard = <StatusCard icon={IconShipmentStatusPlanned} field="Shipment Status" status="Loading..."></StatusCard>;
  const resolveStatus = (shipmentStatusId: DbShipmentStatus['id']) => {
    const maybeStatus = shipmentStatuses.find((status) => status.id === shipmentStatusId)?.status;
    return maybeStatus !== undefined ? maybeStatus : 'Unknown';
  };

  return (
    <>
      {errors.length > 0 ? (
        // TODO #15 make an error component and pass error in as props
        errors.map((error, index) => <p key={index}>{error}</p>)
      ) : (
        <PageContainer>
          {shipment !== null ? (
            <StatusCard icon={IconShipmentStatusPlanned} field="Shipment Status" status={resolveStatus(shipment.status_id)}></StatusCard>
          ) : (
            defaultStatusCard
          )}
        </PageContainer>
      )}
    </>
  );
};
