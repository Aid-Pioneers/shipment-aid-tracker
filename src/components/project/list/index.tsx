import React from 'react';
import { Database } from '../../../database.types';
import { ProjectCard } from '../card';

type Project = Database['public']['Tables']['project']['Row']

export const ProjectsList: React.FC<{ projects: Project[] }> = ({
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
