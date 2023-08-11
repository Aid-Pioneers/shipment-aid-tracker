import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';
import { supabaseKey, supabaseUrl } from './constants/development';
import { LoginContainer } from './containers/login';
import { RegistrationContainer } from './containers/registration';
import { ProjectOverview } from './containers/project-overview';

const App: React.FC = () => {
  const supabase: SupabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

  return (
    <>
      <HashRouter basename = "/">
        <Routes>
          <Route path="/" element={<ProjectOverview supabase={supabase} />} />
          <Route path="/overview" element={<ProjectOverview supabase={supabase}/>} />
          <Route path="/login" element={<LoginContainer supabase={supabase} />} />
          <Route path="/register" element={<RegistrationContainer supabase={supabase} />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
