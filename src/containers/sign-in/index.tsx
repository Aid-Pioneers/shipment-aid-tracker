import { useToast } from '@chakra-ui/react';
import { AuthError } from '@supabase/supabase-js';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignInEmailPasswordForm, { SignInEmailPasswordFormData } from '../../components/sign-in';
import { AuthService } from '../../services/auth-service';
import { SignInPageContainer } from './index.styles';

interface SignInContainerProps {
  authService: AuthService;
}

export const SignInContainer: React.FC<SignInContainerProps> = ({ authService }) => {
  const navigate = useNavigate();
  const toast = useToast()

  const handleSignInError = (authError: AuthError) => toast({
    title: 'Failed to sign in...',
    status: 'error',
    description: authError.message,
    isClosable: true
  })


  const handleSignInFormSubmit = (data: SignInEmailPasswordFormData) =>
    authService.signInWithPassword(data, () => navigate('/overview'), handleSignInError)

  return (
    <SignInPageContainer>
      <h2>Sign in</h2>
      <SignInEmailPasswordForm onSubmit={handleSignInFormSubmit} />
      <p>
        Not signed up yet? Sign up for an account{' '}
        <Link to="/sign-up">here</Link>.
      </p>
    </SignInPageContainer>
  );
};
