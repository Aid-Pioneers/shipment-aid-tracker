import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { ShipmentCreationGeneralComponent } from '../../../components/shipment/creation/general';
import { ConsigneeService } from '../../../services/consignee-service';
import { CountryService } from '../../../services/country-service';
import { ProfileService } from '../../../services/profile-service';
import { ShipmentService } from '../../../services/shipment-service';
import { useForm } from 'react-hook-form';
import { FormItemWrapper, FormWrapper } from './index.styles';

interface ShipmentCreationContainerProps {
  shipmentService: ShipmentService;
  countryService: CountryService;
  consigneeService: ConsigneeService;
  profileService: ProfileService;
}

export const ShipmentCreationContainer: React.FC<ShipmentCreationContainerProps> = ({
  shipmentService,
  countryService,
  consigneeService,
  profileService,
}) => {
  return (
    <VStack>
      {/* TODO can we make this h1 left aligned? */}
      <Heading as="h1">Create a shipment</Heading>
      <ShipmentCreationGeneralComponent
        shipmentService={shipmentService}
        countryService={countryService}
        consigneeService={consigneeService}
        profileService={profileService}
      />
    </VStack>
  );
};
