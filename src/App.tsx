import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';
import { supabaseKey, supabaseUrl } from './constants/development';
import { LoginContainer } from './containers/login';
import { ProjectOverview } from './containers/project-overview';

async function getProjects(supabase: SupabaseClient<Database>) {
  const { data, error } = await supabase.from('project').select('*');

  if (error) {
    console.error('Found an issue fetching projects.', error);
    return Promise.resolve([]);
  }

  return data;
}

const App: React.FC = () => {
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  const projects = getProjects(supabase);

  projects.then(console.log);

  return (
    <>
      <HashRouter basename = "/shipment-aid-tracker">
        <Routes>
          <Route path="/" Component={LoginContainer} />
          <Route path="/login" Component={LoginContainer} />
          <Route path="/overview" Component={ProjectOverview} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
