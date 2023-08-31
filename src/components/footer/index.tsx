import React from 'react';

interface FooterProps {
  onSignOut: () => Promise<void>;
}

export const Footer: React.FC<FooterProps> = ({ onSignOut }) =>
  <p onClick={onSignOut}>
    Sign out
  </p>
