import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm, { LoginFormData } from '../../components/login';
import { useNavigate } from 'react-router-dom';
import { LoginPageContainer } from './index.styles';
import { AuthService } from '../../services/auth-service';

interface LoginContainerProps {
  authService: AuthService;
}

export const LoginContainer: React.FC<LoginContainerProps> = ({ authService }) => {
  const navigate = useNavigate();

  const handleLoginFormSubmit = (data: LoginFormData) =>
    authService.signInWithPassword(data, () => navigate('/overview'))

  return (
    <LoginPageContainer>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLoginFormSubmit} />
      <p>
        Not registered yet? Sign up for an account{' '}
        <Link to="/register">here</Link>.
      </p>
    </LoginPageContainer>
  );
};
