import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the banner', () => {
  render(<App />);
  const bannerElement = screen.getByText(/shipments/i);
  expect(bannerElement).toBeInTheDocument();
});
