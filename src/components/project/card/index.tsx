import React from 'react';
import { Database } from '../../../database.types';

type Project = Database['public']['Tables']['project']['Row']

export const ProjectCard: React.FC<{ project: Project }> = ({
  project,
}) => {

  return (
    <div className="col-12 col-md-6 col-xl-4">
        <div className="project-cards-container project-card-text-not-bootstrap">
          <h4>{project.name}</h4>
          <p>Created on {new Date(Date.parse(project.created_at)).toLocaleDateString()}</p>
        </div>
    </div>
  );
};
