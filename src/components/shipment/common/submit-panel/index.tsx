import * as React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

interface SubmitPanelProps {
  onSubmit: () => Promise<void>;
  onCancel: () => Promise<void>;
}

export const SubmitPanel: React.FC<SubmitPanelProps> = ({ onCancel, onSubmit }) => {
  return (
    <div>
      <ButtonGroup>
        <Button type="submit" onSubmit={onSubmit}>
          Save
        </Button>
        <Button onSubmit={onCancel}>Cancel</Button>
      </ButtonGroup>
    </div>
  );
};
