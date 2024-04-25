import { Heading, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ShipmentCreationGeneralComponent } from '../../../components/shipment/creation/general';
import { ConsigneeService } from '../../../services/consignee-service';
import { CountryService } from '../../../services/country-service';
import { DonorService } from '../../../services/donor-service';
import { ProfileService } from '../../../services/profile-service';
import { ShipmentService } from '../../../services/shipment-service';
import { DbConsignee, DbCountry, DbProfile, DbShipmentStatus, DbShipmentType } from '../../../types/aliases';

interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
  countryService: CountryService;
  consigneeService: ConsigneeService;
  donorService: DonorService;
  profileService: ProfileService;
}

interface FormData {
  countries: DbCountry[];
  shipmentTypes: DbShipmentType[];
  shipmentStatuses: DbShipmentStatus[];
  consignees: DbConsignee[];
  managers: DbProfile[];
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({
  shipmentService,
  countryService,
  consigneeService,
  donorService,
  profileService,
}) => {
  const [formData, setFormData] = useState<FormData>();

  useEffect(() => {
    const loadData = async () => {
      const [countries, shipmentTypes, shipmentStatuses, consignees, profiles] = await Promise.all([
        countryService.fetchCountries(),
        shipmentService.fetchShipmentTypes(),
        shipmentService.fetchShipmentStatuses(),
        consigneeService.fetchConsignees(),
        profileService.fetchProfiles(['manager']),
      ]);

      if (countries.data && shipmentTypes.data && shipmentStatuses.data && consignees.data && profiles.data) {
        setFormData({
          countries: countries.data,
          shipmentTypes: shipmentTypes.data,
          shipmentStatuses: shipmentStatuses.data,
          consignees: consignees.data,
          managers: profiles.data,
        });
      }
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
        countries={formData?.countries || []}
        shipmentTypes={formData?.shipmentTypes || []}
        shipmentStatuses={formData?.shipmentStatuses || []}
        consignees={formData?.consignees || []}
        managers={formData?.managers || []}
        shipmentService={shipmentService}
      />
    </VStack>
  );
};
