import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './types/database.types';
import { supabaseKey, supabaseUrl } from './config/config';
import { SignInContainer } from './containers/sign-in';
import { SignUpContainer } from './containers/sign-up';
import { ProjectOverview } from './containers/project-overview';
import { AuthService } from './services/auth-service';
import { ProjectService } from './services/project-service';
import { ShipmentService } from './services/shipment-service';
import { ShipmentOverview } from './containers/shipment/shipment-list-view';
import { ShipmentCreationContainer } from './containers/shipment/shipment-creation';

const App: React.FC = () => {
  const supabase: SupabaseClient = createClient<Database>(supabaseUrl, supabaseKey);
  const authService: AuthService = new AuthService(supabase);
  const projectService: ProjectService = new ProjectService(supabase);
  const shipmentService: ShipmentService = new ShipmentService(supabase);

  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<ProjectOverview authService={authService} projectService={projectService} />} />
          <Route path="/overview" element={<ProjectOverview authService={authService} projectService={projectService} />} />
          <Route path="/sign-in" element={<SignInContainer authService={authService} />} />
          <Route path="/sign-up" element={<SignUpContainer authService={authService} />} />
          {/* TODO fix this error */}
          <Route path="/shipments" element={<ShipmentOverview shipmentService={shipmentService} />} />
          <Route path="/shipments/new" element={<ShipmentCreationContainer shipmentService={shipmentService} />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
