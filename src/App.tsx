import { ChakraProvider } from '@chakra-ui/react';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { supabaseKey, supabaseUrl } from './config/config';
import { ProjectOverview } from './containers/project-overview';
import { ShipmentCreationContainer } from './containers/shipment/shipment-creation';
import { ShipmentOverview } from './containers/shipment/shipment-list-view';
import { SignInContainer } from './containers/sign-in';
import { SignUpContainer } from './containers/sign-up';
import { AuthService } from './services/auth-service';
import { ConsigneeService } from './services/consignee-service';
import { CountryService } from './services/country-service';
import { DonorService } from './services/donor-service';
import { ProfileService } from './services/profile-service';
import { ProjectService } from './services/project-service';
import { ShipmentService } from './services/shipment-service';
import { Database } from './types/database.types';

const App: React.FC = () => {
  const supabase: SupabaseClient = createClient<Database>(supabaseUrl, supabaseKey);
  const authService: AuthService = new AuthService(supabase);
  const projectService: ProjectService = new ProjectService(supabase);
  const shipmentService: ShipmentService = new ShipmentService(supabase);
  const countryService: CountryService = new CountryService(supabase);
  const consigneeService: ConsigneeService = new ConsigneeService(supabase);
  const donorService: DonorService = new DonorService(supabase);
  const profileService: ProfileService = new ProfileService(supabase);

  return (
    <ChakraProvider>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<ProjectOverview authService={authService} projectService={projectService} />} />
          <Route path="/overview" element={<ProjectOverview authService={authService} projectService={projectService} />} />
          <Route path="/sign-in" element={<SignInContainer authService={authService} />} />
          <Route path="/sign-up" element={<SignUpContainer authService={authService} />} />
          <Route path="/shipments" element={<ShipmentOverview shipmentService={shipmentService} />} />
          <Route path="/shipments/new" element={<ShipmentCreationContainer shipmentService={shipmentService} countryService={countryService} consigneeService={consigneeService} donorService={donorService} profileService={profileService} />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
};

export default App;
