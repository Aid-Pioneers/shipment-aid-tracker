import * as React from 'react';

interface nameProps {
  displayTitle: string;
  children: React.ReactNode;
  displayValue?: string;
  icon: React.ReactNode;
}

export const name: React.FC<nameProps> = () => {
  return <div></div>;
};
