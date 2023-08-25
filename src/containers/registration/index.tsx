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

    authService.signUp(data, () => navigate('/login'))
  };

  return (
    <RegistrationPageContainer>
      <div>
        <h2>Register</h2>
        <RegistrationForm onSubmit={handleRegistrationFormSubmit} />
        <p>Already have an account? Login <Link to='/login'>here</Link>.</p>
      </div>
    </RegistrationPageContainer>
  );
};
