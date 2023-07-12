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
