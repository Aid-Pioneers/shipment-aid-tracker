import * as React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

interface SubmitPanelProps {
  onCancel: () => Promise<void>;
}

export const SubmitPanel: React.FC<SubmitPanelProps> = ({ onCancel }) => {
  return (
    <div>
      <ButtonGroup>
        <Button type="submit">Save</Button>
        <Button onSubmit={onCancel}>Cancel</Button>
      </ButtonGroup>
    </div>
  );
};
