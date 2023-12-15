import * as React from 'react';
import { Heading, Input, GridItem, Grid, Select, Button, Spacer, Collapse } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Dispatch, SetStateAction, useState } from 'react';

interface CollapsibleFormComponentProps {
  header: string,
  isCollapsed: boolean | undefined,
  setCollapsed: Dispatch<SetStateAction<boolean | undefined>>
}

export const CollapsibleFormHeaderComponent: React.FC<CollapsibleFormComponentProps> = ({header, isCollapsed, setCollapsed}) => {

  const isCollapsible = typeof isCollapsed !== 'undefined'

  const handleToggleCollapse = () => {setCollapsed(!isCollapsed); };

  return (
    <Grid templateColumns="repeat(20, 1fr)" gap={6}>
        <GridItem colSpan={[4, 19]}>
          <Heading as="h2" size="lg" textAlign="left">
            {header}
          </Heading>
        </GridItem>
        {isCollapsible ? (
          <GridItem colSpan={[1, 1]}>
            <Button onClick={handleToggleCollapse} size="sm">
              {isCollapsed ? '⭡' : '⭣'}
            </Button>
          </GridItem>
        ) : null
        }
    </Grid>
  );
};
