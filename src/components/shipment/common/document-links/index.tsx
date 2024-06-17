import { Box, Text, Link, VStack } from '@chakra-ui/react';
import * as React from 'react';

interface DocumentsCardProps {
  documents: string[];
}

export const DocumentsCard: React.FC<DocumentsCardProps> = ({ documents }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding="4" backgroundColor="white" boxShadow="sm">
      <Text fontWeight="bold" fontSize="xl" color="gray.800" mb="4">
        Documents
      </Text>
      <VStack align="start">
        {documents.map((doc, index) => (
          <Link key={index} href={doc} color="blue.500" isExternal>
            {doc}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};
