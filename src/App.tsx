import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';
import { supabaseKey, supabaseUrl } from './config/config';
import { SignInContainer } from './containers/sign-in';
import { RegistrationContainer } from './containers/registration';
import { ProjectOverview } from './containers/project-overview';
import { AuthService } from './services/auth-service';
import { ProjectService } from './services/project-service';

const App: React.FC = () => {
  const supabase: SupabaseClient = createClient<Database>(supabaseUrl, supabaseKey);
  const authService: AuthService = new AuthService(supabase);
  const projectService: ProjectService = new ProjectService(supabase);

  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<ProjectOverview authService={authService} projectService={projectService} />} />
          <Route path="/overview" element={<ProjectOverview authService={authService} projectService={projectService} />} />
          <Route path="/sign-in" element={<SignInContainer authService={authService} />} />
          <Route path="/register" element={<RegistrationContainer authService={authService} />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
