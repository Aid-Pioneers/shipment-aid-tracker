import { useToast } from '@chakra-ui/react';
import { AuthError } from '@supabase/supabase-js';
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

  const handleSignUpError = (authError: AuthError) =>
    toast({
      title: 'Failed to sign up...',
      status: 'error',
      description: authError.message,
      isClosable: true
    })

  const handleSignUpSuccess = () => navigate('/')

  const handleSignUp = (data: SignUpWithPasswordData) =>
    authService.signUp(data, handleSignUpSuccess, handleSignUpError);

  return (
    <SignUpComponent signUp={handleSignUp}></SignUpComponent>
  )
};
