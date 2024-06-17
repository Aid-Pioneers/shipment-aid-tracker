import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShipmentService } from '../../../services/shipment-service';
import { DbShipment, DbShipmentStatus } from '../../../types/aliases';
import { PageContainer } from './index.styles';
import { StatusCard } from '../../../components/common/status-card';
import { IconShipmentCreatedAt, IconShipmentPackingList, IconShipmentStatusPlanned } from '../../../assets/icons/shipments';
import { Box, Flex, Grid, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { OriginDestinationCard } from '../../../components/shipment/common/destination-panel';
import { DocumentsCard } from '../../../components/shipment/common/document-links';

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

  // const resolveLocation = (shipmentLocationID: number): string => {
  //   // TODO
  //   return 'unknown';
  // };

  return (
    <>
      {errors.length > 0 ? (
        // TODO #15 make an error component and pass error in as props
        errors.map((error, index) => <p key={index}>{error}</p>)
      ) : (
        <PageContainer>
          <Heading as="h1" size="xl" mb="4">
            Shipment {id}
          </Heading>
          <Tabs>
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Details</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex justify="space-between">
                  <Box flex="1" mr="4">
                    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                      {shipment !== null ? (
                        <>
                          <StatusCard icon={IconShipmentStatusPlanned} field="Shipment Status" status={resolveStatus(shipment.status_id)} />
                          <StatusCard
                            icon={IconShipmentCreatedAt}
                            field="Creation Date"
                            status={new Date(shipment.created_at).toLocaleString()}
                          />
                          <StatusCard icon={IconShipmentPackingList} field="Packing List" status="Add Packing List" />
                          <Grid gridColumn="span 3">
                            <OriginDestinationCard origin="New York, USA" destination="Kyiv, Ukraine" />
                          </Grid>
                        </>
                      ) : (
                        <Grid gridColumn="span 3">{defaultStatusCard}</Grid>
                      )}
                    </Grid>
                  </Box>
                  <Box flex="0.4">
                    <DocumentsCard documents={['randomlink.com', 'second link']} />
                  </Box>
                </Flex>
              </TabPanel>
              <TabPanel>{/* Details content goes here */}</TabPanel>
            </TabPanels>
          </Tabs>
        </PageContainer>
      )}
    </>
  );
};
