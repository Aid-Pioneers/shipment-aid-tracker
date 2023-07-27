import React from 'react';

export const ProjectCard: React.FC<{ project: { name: string } }> = ({
  project,
}) => {
  // tODO update this
  function shipmentsPath(): string | undefined {
    throw new Error('Function not implemented.');
  }

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
