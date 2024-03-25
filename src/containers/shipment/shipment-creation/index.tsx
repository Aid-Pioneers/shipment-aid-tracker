import { Heading, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ShipmentCreationGeneralComponent } from '../../../components/shipment/creation/general';
import { ShipmentCreationPackingListComponent } from '../../../components/shipment/creation/packing-list';
import { ShipmentCreationTrackingComponent } from '../../../components/shipment/creation/tracking';
import { ConsigneeService } from '../../../services/consignee-service';
import { CountryService } from '../../../services/country-service';
import { DonorService } from '../../../services/donor-service';
import { ProfileService } from '../../../services/profile-service';
import { ShipmentService } from '../../../services/shipment-service';
import { DbConsignee, DbCountry, DbDonor, DbProfile, DbShipmentStatus, DbShipmentType } from '../../../types/aliases';
interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
  countryService: CountryService;
  consigneeService: ConsigneeService;
  donorService: DonorService;
  profileService: ProfileService;
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({
  shipmentService,
  countryService,
  consigneeService,
  donorService,
  profileService,
}) => {
  const [countries, setCountries] = useState<DbCountry[]>([]);
  const [shipmentTypes, setShipmentTypes] = useState<DbShipmentType[]>([]);
  const [shipmentStatuses, setShipmentStatuses] = useState<DbShipmentStatus[]>([]);
  const [consignees, setConsignees] = useState<DbConsignee[]>([]);
  const [donors, setDonors] = useState<DbDonor[]>([]);
  const [managers, setManagers] = useState<DbProfile[]>([]);

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
        ),
        shipmentService.fetchShipmentStatuses(
          (data) => setShipmentStatuses(data),
          (error) => console.error(error)
        ),
        consigneeService.fetchConsignees(
          (data) => setConsignees(data),
          (error) => console.error(error)
        ),
        donorService.fetchDonors(
          (data) => setDonors(data),
          (error) => console.error(error)
        ),
        profileService.fetchProfiles(
          ['manager'],
          (data) => setManagers(data),
          (error) => console.error(error)
        ),
      ]);
    };
    loadData();
  }, [shipmentService, countryService, consigneeService, donorService, profileService]);

  // NB: this container will handle making API calls and passing props into
  // Create a React context with all the data from the API required to render the forms (donors, destinations, statuses etc)
  return (
    <VStack>
      {/* TODO can we make this h1 left aligned? */}
      <Heading as="h1">Create a shipment</Heading>
      <ShipmentCreationGeneralComponent
        countries={countries}
        shipmentTypes={shipmentTypes}
        shipmentStatuses={shipmentStatuses}
        consignees={consignees}
        managers={managers}
        shipmentService={shipmentService}
      />
      <ShipmentCreationPackingListComponent startCollapsed={false} donors={donors} />
      <ShipmentCreationTrackingComponent startCollapsed={true} />
    </VStack>
  );
};
