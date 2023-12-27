import { Button, HStack, Heading, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ShipmentCreationGeneralComponent } from '../../../components/shipment/creation/general';
import { ShipmentCreationPackingListComponent } from '../../../components/shipment/creation/packing-list';
import { ShipmentCreationTrackingComponent } from '../../../components/shipment/creation/tracking';
import { CountryService } from '../../../services/country-service';
import { ShipmentService } from '../../../services/shipment-service';
import { DbCountry, DbShipmentType } from '../../../types/aliases';
interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
  countryService: CountryService;
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({ shipmentService, countryService }) => {

  const [countries, setCountries] = useState<DbCountry[]>([]);
  const [shipmentTypes, setShipmentTypes] = useState<DbShipmentType[]>([]);

  useEffect(() => {
    const loadData = async () => {
      return Promise.all([
        countryService.fetchCountries(
          (data) => setCountries(data),
          (error) => console.error(error)
        ),
        shipmentService.fetchShipmentTypes(
          (data) => setShipmentTypes(data),
          (error) => console.error(error)
        )]);
    };
    loadData();
  }, [shipmentService, countryService]);

  // NB: this container will handle making API calls and passing props into
  // Create a React context with all the data from the API required to render the forms (donors, destinations, statuses etc)
  return (
    <VStack>
      {/* TODO can we make this h1 left aligned? */}
      <Heading as="h1">Create a shipment</Heading>
      <ShipmentCreationGeneralComponent countries={countries} shipmentTypes={shipmentTypes} />
      <ShipmentCreationPackingListComponent startCollapsed={false} />
      <ShipmentCreationTrackingComponent startCollapsed={true} />
      {/* TODO can we make this HStack left aligned? */}
      <HStack spacing={20} align="left">
        <Button colorScheme="blue" variant="outline">
          Cancel
        </Button>
        <Button colorScheme="blue" variant="solid">
          Save
        </Button>
      </HStack>
    </VStack>
  );
};
