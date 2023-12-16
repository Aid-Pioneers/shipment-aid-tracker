import * as React from 'react';
import { useForm } from 'react-hook-form';

interface FinanceComponentProps {
}

export const ShipmentCreationFinanceComponent: React.FC<FinanceComponentProps> = () => {
  const { handleSubmit } = useForm<FormData>();

  const onSubmit = () => { };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      {/* TODO what goes in this section? */}
    </form>
  );
};
