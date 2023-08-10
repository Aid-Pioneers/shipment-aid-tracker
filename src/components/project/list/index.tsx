import React from 'react';
import { ProjectCard } from '../card';
import { DbProject } from '../../../types/aliases';

export const ProjectsList: React.FC<{ projects: DbProject[] }> = ({
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
