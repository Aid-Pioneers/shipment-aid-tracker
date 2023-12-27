import { useToast } from '@chakra-ui/react';
import { AuthError } from '@supabase/supabase-js';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignUpForm, SignUpFormData } from '../../components/sign-up';
import { AuthService } from '../../services/auth-service';
import { SignUpPageContainer } from './index.styles';

interface SignUpContainerProps {
  authService: AuthService;
}

export const SignUpContainer: React.FC<SignUpContainerProps> = ({ authService }) => {

  const navigate = useNavigate();
  const toast = useToast()

  const handleSignInError = (authError: AuthError) =>
    toast({
      title: 'Failed to sign up...',
      status: 'error',
      description: authError.message,
      isClosable: true
    })


  const handleSignUpFormSubmit = (data: SignUpFormData) =>
    authService.signUp(data, () => navigate('/sign-in'), handleSignInError);

  return (
    <SignUpPageContainer>
      <div>
        <h2>Sign up</h2>
        <SignUpForm onSubmit={handleSignUpFormSubmit} />
        <p>Already have an account? Sign in <Link to='/sign-in'>here</Link>.</p>
      </div>
    </SignUpPageContainer>
  );
};
