import React from 'react';
import { DbProject } from '../../../types/aliases';

export const ProjectCard: React.FC<{ project: DbProject }> = ({ project }) => {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div className="project-cards-container project-card-text-not-bootstrap">
        <h4>{project.name}</h4>
        <p>
          Created on{' '}
          {new Date(Date.parse(project.created_at)).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};
