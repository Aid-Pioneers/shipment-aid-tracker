import { Collapse } from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper } from '../../../../containers/shipment/shipment-creation/index.styles';
import { CollapsibleFormHeaderComponent } from '../../../collapsible-form-header';

interface ImpactComponentProps {
  startCollapsed?: boolean
}

export const ShipmentCreationImpactComponent: React.FC<ImpactComponentProps> = ({ startCollapsed }) => {

  const { handleSubmit } = useForm<FormData>()

  const [isCollapsed, setCollapsed] = React.useState<boolean | undefined>(startCollapsed);

  const onSubmit = () => { };

  return (
    <FormWrapper>
      <CollapsibleFormHeaderComponent header="Impact" isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      <Collapse in={typeof isCollapsed === undefined || !isCollapsed}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* TODO what goes in this section? */}
        </form>
      </Collapse>
    </FormWrapper>
  );
};
