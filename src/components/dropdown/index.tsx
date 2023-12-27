import { useToast } from '@chakra-ui/react';
import React from 'react';

interface DropDownProps {
  title: string,
  status: 'success' | 'error' | 'warning' | 'info'
}

export const Dropdown: React.FC<DropDownProps> = ({ title, status }) => {
  const toast = useToast()

  return toast({
    title: title,
    status: status,
    isClosable: true
  })
}

