import React from 'react';
import landingImage from './assets/images/landing-map.png';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const Banner: React.FC = () => {
  return (
    <div className="banner" style={{ marginBottom: '5px' }}>
      <div className="banner-content">
        <img src={landingImage} className="banner-image" alt="Landing Map" />
        <h1>Track your shipments with OST</h1>
        <a href={shipmentsPath()} className="btn btn-primary">
          Track now
        </a>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: { name: string } }> = ({ project }) => {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <a href={shipmentsPath()}>
        {['Northern Iraq', 'Sierra Leone', 'Syria', 'Ukraine'].includes(
          project.name
        ) ? (
          <div
            className="project-card"
            style={{
              backgroundImage: `url(${require(`./${project.name}.jpg`)})`,
            }}
          ></div>
        ) : (
          <div className="project-card"></div>
        )}
        <div className="project-cards-container project-card-text-not-bootstrap">
          <h4>
            <b>{project.name}</b>
          </h4>
        </div>
      </a>
    </div>
  );
};

const ProjectsList: React.FC<{ projects: { name: string }[] }> = ({
  projects,
}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row g-3 justify-content-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      {/* TODO add  footer component code here */}
    </React.Fragment>
  );
};

// Helper function for the shipments path
function shipmentsPath() {
  // TODO Implement  logic for generating the shipments path here
  return '';
}

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
