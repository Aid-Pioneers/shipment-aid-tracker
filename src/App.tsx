import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';
import { supabaseKey, supabaseUrl } from './config/config';
import { LoginContainer } from './containers/login';
import { RegistrationContainer } from './containers/registration';
import { ProjectOverview } from './containers/project-overview';
import { AuthService } from './services/auth';

const App: React.FC = () => {
  const supabase: SupabaseClient = createClient<Database>(supabaseUrl, supabaseKey);
  const authService: AuthService = new AuthService(supabase);

  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<ProjectOverview supabase={supabase} />} />
          <Route path="/overview" element={<ProjectOverview supabase={supabase} />} />
          <Route path="/login" element={<LoginContainer authService={authService} />} />
          <Route path="/register" element={<RegistrationContainer authService={authService} />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
