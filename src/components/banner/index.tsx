import React from 'react';
import landingImage from './assets/images/landing-map.png';

// Helper function for the shipments path
function shipmentsPath() {
  // TODO Implement  logic for generating the shipments path here
  return '';
}

export const Banner: React.FC = () => {
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
