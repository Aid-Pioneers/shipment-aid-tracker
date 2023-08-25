import React from 'react';
import { Link } from 'react-router-dom';
import SignInEmailPasswordForm, { SignInEmailPasswordFormData } from '../../components/sign-in';
import { useNavigate } from 'react-router-dom';
import { SignInPageContainer } from './index.styles';
import { AuthService } from '../../services/auth-service';

interface SignInContainerProps {
  authService: AuthService;
}

export const SignInContainer: React.FC<SignInContainerProps> = ({ authService }) => {
  const navigate = useNavigate();

  const handleSignInFormSubmit = (data: SignInEmailPasswordFormData) =>
    authService.signInWithPassword(data, () => navigate('/overview'))

  return (
    <SignInPageContainer>
      <h2>Sign in</h2>
      <SignInEmailPasswordForm onSubmit={handleSignInFormSubmit} />
      <p>
        Not registered yet? Sign up for an account{' '}
        <Link to="/register">here</Link>.
      </p>
    </SignInPageContainer>
  );
};
