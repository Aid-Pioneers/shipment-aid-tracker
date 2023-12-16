import * as React from 'react';
import { useForm } from 'react-hook-form';

interface ImpactComponentProps {
}

export const ShipmentCreationImpactComponent: React.FC<ImpactComponentProps> = () => {

  const { handleSubmit } = useForm<FormData>()


  const onSubmit = () => { };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* TODO what goes in this section? */}
    </form>
  );
};
