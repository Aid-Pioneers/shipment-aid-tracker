import { useToast } from '@chakra-ui/react';

interface DropDownProps {
  status: 'success' | 'error' | 'warning' | 'info';
  title: string;
  description?: string;
}

export const Dropdown = ({ status, title, description }: DropDownProps) => {
  const toast = useToast()

  return toast({
    title: title,
    status: status,
    description: description,
    isClosable: true
  })
}

