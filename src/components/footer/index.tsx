import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onSignOut: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSignOut }) =>
  <p onClick={onSignOut}>
    Sign out
  </p>
