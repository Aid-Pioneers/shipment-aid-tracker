import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from '../../components/dropdown';
import { SignUpForm, SignUpFormData } from '../../components/sign-up';
import { AuthService } from '../../services/auth-service';
import { SignUpPageContainer } from './index.styles';

interface SignUpContainerProps {
  authService: AuthService;
}

export const SignUpContainer: React.FC<SignUpContainerProps> = ({ authService }) => {

  const navigate = useNavigate();

  const handleSignUpFormSubmit = (data: SignUpFormData) => {

    authService.signUp(data, () => navigate('/sign-in'), authError => Dropdown({ status: 'error', title: 'Failed to sign up.', description: authError.message }))
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
