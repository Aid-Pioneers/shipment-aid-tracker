import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, HStack, Heading } from '@chakra-ui/react';
import React from 'react';
import { ShipmentCreationFinanceComponent } from '../../../components/shipment/creation/finance';
import { ShipmentCreationGeneralComponent } from '../../../components/shipment/creation/general';
import { ShipmentCreationImpactComponent } from '../../../components/shipment/creation/impact';
import { ShipmentCreationPackingListComponent } from '../../../components/shipment/creation/packing-list';
import { ShipmentCreationTrackingComponent } from '../../../components/shipment/creation/tracking';
import { ShipmentService } from '../../../services/shipment-service';
import { FormWrapper } from './index.styles';
interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({ shipmentService }) => {
  console.log({ shipmentService });
  // NB: this container will handle making API calls and passing props into
  // Create a React context with all the data from the API required to render the forms (donors, destinations, statuses etc)
  return (
    <Accordion defaultIndex={[0]} allowMultiple={true}>
      <Heading as="h1">Create a shipment</Heading>
      <FormWrapper>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                General
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={0}>
            <ShipmentCreationGeneralComponent />
          </AccordionPanel>
        </AccordionItem>
      </FormWrapper>

      <FormWrapper>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Packing List
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={0}>
            <ShipmentCreationPackingListComponent />
          </AccordionPanel>
        </AccordionItem>
      </FormWrapper>

      <FormWrapper>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Tracking
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={0}>
            <ShipmentCreationTrackingComponent />
          </AccordionPanel>
        </AccordionItem>
      </FormWrapper>

      <FormWrapper>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Finance
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={0}>
            <ShipmentCreationFinanceComponent />
          </AccordionPanel>
        </AccordionItem>
      </FormWrapper>

      <FormWrapper>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Impact
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={0}>
            <ShipmentCreationImpactComponent />
          </AccordionPanel>

        </AccordionItem>
      </FormWrapper>
      {/* TODO can we make this HStack left aligned? */}
      <HStack spacing={20} align="left">
        <Button colorScheme="blue" variant="outline">
          Cancel
        </Button>
        <Button colorScheme="blue" variant="solid">
          Save
        </Button>
      </HStack>
    </Accordion>
  );
};
