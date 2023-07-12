import React from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';
import { Footer } from './components/footer';
import { ProjectsList } from './components/project/list';
import { Banner } from './components/banner';

async function getProjects(supabase: SupabaseClient<Database>) {
  const { data, error } = await supabase.from('project').select('*');

  if (error) {
    console.error('Found an issue fetching projects.', error);
    return Promise.resolve([]);
  }

  return data;
}

const App: React.FC = () => {
  /*
    TODO these should be passed in via the env/env file, one for local and one for production.

    Where/how should we do this?
  */
  const supabaseUrl = 'http://localhost:54321';
  const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6cm5odHpycnBzbHN3Y3h5dW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzE0NTUsImV4cCI6MjAwMzk0NzQ1NX0.CF2A2Lxnmb3crRemcVzyOsqpaLsRkVHZKyM0tPAuJLw';
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  const projects = getProjects(supabase);

  projects.then(console.log);

  return (
    <>
      <Banner />
      <ProjectsList
        projects={[
          { name: 'sierra leone' },
          { name: 'lebanon' },
          { name: 'ukraine' },
          { name: 'turkey' },
        ]}
      />
      <Footer />
    </>
  );
};

export default App;
