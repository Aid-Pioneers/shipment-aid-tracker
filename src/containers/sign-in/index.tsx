import { useToast } from '@chakra-ui/react';
import { AuthError } from '@supabase/supabase-js';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInWithPasswordComponent } from '../../components/sign-in/with-password';
import { AuthService, SignInWithPasswordData } from '../../services/auth-service';

interface SignInContainerProps {
  authService: AuthService;
}

export const SignInContainer: React.FC<SignInContainerProps> = ({ authService }) => {

  const navigate = useNavigate();
  const toast = useToast();

  const handleSignInError = (authError: AuthError) =>
    toast({
      title: 'Failed to sign in...',
      status: 'error',
      description: authError.message,
      isClosable: true
    })

  const handleSignInSuccess = () => navigate('/')

  const handleSignIn = (data: SignInWithPasswordData) => authService.signInWithPassword(data, handleSignInSuccess, handleSignInError)


  return (
    <SignInWithPasswordComponent signIn={handleSignIn} />
  )
}