import { Collapse } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { CollapsibleFormHeaderComponent } from '../../../collapsible-form-header';

interface FinanceComponentProps {
  startCollapsed?: boolean
}

export const ShipmentCreationFinanceComponent: React.FC<FinanceComponentProps> = ({ startCollapsed }) => {
  const { handleSubmit } = useForm<FormData>();

  const [isCollapsed, setCollapsed] = useState<boolean | undefined>(startCollapsed);

  const onSubmit = () => { };

  return (
    <FormWrapper>
      <CollapsibleFormHeaderComponent header="Finance" isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      <Collapse in={typeof isCollapsed === 'undefined' || !isCollapsed}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* TODO what goes in this section? */}
        </form>
      </Collapse>
    </FormWrapper>
  );
};
