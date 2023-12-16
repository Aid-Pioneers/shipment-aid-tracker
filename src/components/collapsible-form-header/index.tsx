import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Grid, GridItem, Heading, IconButton } from '@chakra-ui/react';
import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

interface CollapsibleFormComponentProps {
  header: string,
  isCollapsed: boolean | undefined,
  setCollapsed: Dispatch<SetStateAction<boolean | undefined>>
}

export const CollapsibleFormHeaderComponent: React.FC<CollapsibleFormComponentProps> = ({ header, isCollapsed, setCollapsed }) => {

  const isCollapsible = typeof isCollapsed !== 'undefined'

  const handleToggleCollapse = () => { setCollapsed(!isCollapsed); };

  const expandButton = <IconButton onClick={handleToggleCollapse} size="sm" aria-label={'expand-section'} icon={<TriangleDownIcon />} />
  const collapseButton = <IconButton onClick={handleToggleCollapse} size="sm" aria-label={'expand-section'} icon={<TriangleUpIcon />} />

  return (
    <Grid templateColumns="repeat(20, 1fr)" gap={6}>
      <GridItem colSpan={[4, 19]}>
        <Heading as="h2" size="lg" textAlign="left">
          {header}
        </Heading>
      </GridItem>
      {isCollapsible ? (
        <GridItem colSpan={[1, 1]}>
          {isCollapsed ? expandButton : collapseButton}
        </GridItem>
      ) : null
      }
    </Grid>
  );
};
