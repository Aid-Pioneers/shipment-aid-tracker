import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from '../../components/dropdown';
import SignInEmailPasswordForm, { SignInEmailPasswordFormData } from '../../components/sign-in';
import { AuthService } from '../../services/auth-service';
import { SignInPageContainer } from './index.styles';

interface SignInContainerProps {
  authService: AuthService;
}

export const SignInContainer: React.FC<SignInContainerProps> = ({ authService }) => {
  const navigate = useNavigate();

  const handleSignInFormSubmit = (data: SignInEmailPasswordFormData) =>
    authService.signInWithPassword(data, () => navigate('/overview'), authError => Dropdown({ status: 'error', title: 'Failed to sign in.', description: authError.message }))

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
