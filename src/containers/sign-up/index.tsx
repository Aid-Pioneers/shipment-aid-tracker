import { useToast } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUpComponent } from '../../components/sign-up/with-password';
import { AuthService, SignUpWithPasswordData } from '../../services/auth-service';

interface SignUpContainerProps {
  authService: AuthService;
}

export const SignUpContainer: React.FC<SignUpContainerProps> = ({ authService }) => {
  const navigate = useNavigate();
  const toast = useToast();

  async function signUp(signupData: SignUpWithPasswordData) {
    const { error } = await authService.signUp(signupData);

    if (error)
      toast({
        title: 'Failed to sign up...',
        status: 'error',
        description: error.message,
        isClosable: true,
      });
    else navigate('/');
  }

  return <SignUpComponent signUp={signUp}></SignUpComponent>;
};
