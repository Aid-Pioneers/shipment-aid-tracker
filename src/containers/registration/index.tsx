import React from 'react';
import { RegistrationForm, RegistrationFormData} from '../../components/registration';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RegistrationPageContainer } from './index.styles';
import { AuthService } from '../../services/auth-service';

interface RegistrationContainerProps {
  authService: AuthService;
}

export const RegistrationContainer: React.FC<RegistrationContainerProps> = ({ authService }) => {

  const navigate = useNavigate();

  const handleRegistrationFormSubmit = (data: RegistrationFormData) => {

    authService.signUp(data, () => navigate('/sign-in'))
  };

  return (
    <RegistrationPageContainer>
      <div>
        <h2>Register</h2>
        <RegistrationForm onSubmit={handleRegistrationFormSubmit} />
        <p>Already have an account? Sign in <Link to='/sign-in'>here</Link>.</p>
      </div>
    </RegistrationPageContainer>
  );
};
