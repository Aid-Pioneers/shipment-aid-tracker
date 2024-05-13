import React, { useEffect, useState } from 'react';
import { ShipmentService } from '../../../services/shipment-service';
import { DbShipment } from '../../../types/aliases';
import { PageContainer } from './index.styles';

interface ShipmentViewPageProps {
  shipmentService: ShipmentService;
}

export const ShipmentViewPage: React.FC<ShipmentViewPageProps> = ({ shipmentService }) => {
  // const [shipment, setShipment] = useState<DbShipment>({});
  const [errors, setErrors] = useState<String[]>([]);

  // useEffect(() => {
  //   const loadShipment = async () => {
  //     return shipmentService.fetchShipment(
  //       (data) => setShipment(data),
  //       (error) => setErrors([error.message])
  //     );
  //   };
  //   loadShipment();
  // }, [shipmentService]);

  const shipment = {
          bookkeeping_flexport: true,
          bookkeeping_gik: true,
          commercial_invoice_link: '',
          consignee_id: 3,
          created_at: '',
          destination_id: 4,
          donor_id: 3,
          drive_link: '',
          estimated_delivery_date: '',
          flexport_tracking_id: '',
          freight_tracking_id: '',
          gik_value_amount_usd: 3,
          id: 4,
          impact_reporting: true,
          logistics_expense_donation_usd: 3,
          main_shipment_type_id: 3,
          patients_treated: 3,
          project_id: 3,
          status_id: 4,
          updated_at: '',
          weight_kg: 3,
  }
  }
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
