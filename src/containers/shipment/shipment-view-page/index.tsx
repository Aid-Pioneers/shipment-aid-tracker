import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShipmentService } from '../../../services/shipment-service';
import { DbShipment, DbShipmentStatus } from '../../../types/aliases';
import { PageContainer } from './index.styles';
import { StatusCard } from '../../../components/common/status-card';
import { IconShipmentCreatedAt, IconShipmentPackingList, IconShipmentStatusPlanned } from '../../../assets/icons/shipments';
import { Box, Grid, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { OriginDestinationCard } from '../../../components/shipment/common/destination-panel';

interface ShipmentViewPageProps {
  shipmentService: ShipmentService;
}

export const ShipmentViewPage: React.FC<ShipmentViewPageProps> = ({ shipmentService }) => {
  const { id } = useParams<{ id: string }>();
  const [shipment, setShipment] = useState<DbShipment | null>(null);
  const [shipmentStatuses, setShipmentStatuses] = useState<DbShipmentStatus[]>([]);
  const [errors, setErrors] = useState<String[]>([]);

  console.log({ shipment });
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

  const resolveStatus = (shipmentStatusId: DbShipmentStatus['id']): string => {
    const maybeStatus = shipmentStatuses.find((status) => status.id === shipmentStatusId)?.status;
    return maybeStatus !== undefined ? maybeStatus : 'Unknown';
  };

  const resolveLocation = (shipmentLocationID: number): string => {
    // TODO
    return 'unknown';
  };

  return (
    <>
      {errors.length > 0 ? (
        // TODO #15 make an error component and pass error in as props
        errors.map((error, index) => <p key={index}>{error}</p>)
      ) : (
        <PageContainer>
          <Box>
            <Heading as="h1" size="xl" mb="4">
              Shipment {id}
            </Heading>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Details</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <Box>
                      {shipment !== null ? (
                        <StatusCard icon={IconShipmentStatusPlanned} field="Shipment Status" status={resolveStatus(shipment.status_id)} />
                      ) : (
                        defaultStatusCard
                      )}
                    </Box>
                    <Box>
                      {shipment !== null ? (
                        <StatusCard
                          icon={IconShipmentStatusPlanned}
                          field="Creation Date"
                          status={new Date(shipment.created_at).toLocaleString()}
                        />
                      ) : (
                        <StatusCard icon={IconShipmentCreatedAt} field="Creation Date" status="" />
                      )}
                    </Box>
                    <Box>
                      <StatusCard icon={IconShipmentPackingList} field="Packing List" status="Add Packing List" />
                    </Box>
                  </Grid>
                  <Box mt="6">
                    {shipment !== null && (
                      <OriginDestinationCard
                        origin={resolveLocation(shipment.origin_id)}
                        destination={resolveLocation(shipment.destination_id)}
                      />
                    )}
                  </Box>
                </TabPanel>
                <TabPanel>
                  {/* Details content goes here */}
                  <Text>Details section is currently empty.</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </PageContainer>
      )}
    </>
  );
};
