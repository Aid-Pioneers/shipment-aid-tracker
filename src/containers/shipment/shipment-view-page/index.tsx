import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShipmentService } from '../../../services/shipment-service';
import { FullShipment } from '../../../types/aliases';
import { PageContainer } from './index.styles';
import { StatusCard } from '../../../components/common/status-card';
import { IconShipmentCreatedAt, IconShipmentPackingList, IconShipmentStatusPlanned } from '../../../assets/icons/shipments';
import { Box, Flex, Grid, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { OriginDestinationCard } from '../../../components/shipment/common/destination-panel';
import { DocumentsCard } from '../../../components/shipment/common/document-links';
import { ManagerCard } from '../../../components/shipment/common/shipment-manager';

interface ShipmentViewPageProps {
  shipmentService: ShipmentService;
}

export const ShipmentViewPage: React.FC<ShipmentViewPageProps> = ({ shipmentService }) => {
  const { id } = useParams<{ id: string }>();
  const [shipment, setShipment] = useState<FullShipment | null>(null);
  const [errors, setErrors] = useState<String[]>([]);

  useEffect(() => {
    const loadShipment = async () => {
      const { data, error } = await shipmentService.fetchShipment(Number(id));

      console.log(data);

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
        <PageContainer>
          <Heading as="h1" size="xl" mb="4">
            Shipment {id} for {shipment?.project?.name}
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
                      <>
                        <StatusCard
                          icon={IconShipmentStatusPlanned}
                          field="Shipment Status"
                          status={shipment?.shipment_status?.status !== undefined ? shipment.shipment_status.status : 'Unknown'}
                        ></StatusCard>
                        <StatusCard
                          icon={IconShipmentCreatedAt}
                          field="Creation Date"
                          status={shipment?.created_at !== undefined ? new Date(shipment.created_at).toLocaleString() : 'Unknown'}
                        />
                        <StatusCard icon={IconShipmentPackingList} field="Packing List" status="Add Packing List" />
                        <Grid gridColumn="span 3">
                          <OriginDestinationCard
                            origin={shipment?.origin?.name !== undefined ? shipment.origin.name : 'Unknown'}
                            destination={shipment?.destination?.name !== undefined ? shipment.destination.name : 'Unknown'}
                          />
                        </Grid>
                      </>
                    </Grid>
                  </Box>
                  <Box flex="0.4">
                    {/* TODO dynamically pass in links */}
                    <DocumentsCard documents={['randomlink.com', 'second link']} />
                    {/* TODO add resolve manage function to display this */}
                    <ManagerCard
                      user={
                        shipment?.profile?.first_name && shipment?.profile?.last_name
                          ? `${shipment.profile.first_name} ${shipment.profile.last_name}`
                          : 'Unknown'
                      }
                    />
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
