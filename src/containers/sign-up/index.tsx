import React from 'react';
import { SignUpForm, SignUpFormData } from '../../components/sign-up';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SignUpPageContainer } from './index.styles';
import { AuthService } from '../../services/auth-service';

interface SignUpContainerProps {
  authService: AuthService;
}

export const SignUpContainer: React.FC<SignUpContainerProps> = ({ authService }) => {

  const navigate = useNavigate();

  const handleSignUpFormSubmit = (data: SignUpFormData) => {

    authService.signUp(data, () => navigate('/sign-in'))
  };

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
