import React from 'react';
import { RegistrationForm, RegistrationFormData} from '../../components/registration';
import { Link } from 'react-router-dom';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../../database.types';
import { RegistrationPageContainer } from './index.styles';

interface RegistrationContainerProps {
  supabase: SupabaseClient<Database>;
}

export const RegistrationContainer: React.FC<RegistrationContainerProps> = ({ supabase }) => {

  const handleRegistrationFormSubmit = (data: RegistrationFormData) => {

    // TODO: this should be in a service and we just pass the function in.
    supabase.auth.signUp(
      {
        email: data.email,
        password: data.password,
        options: {
          data: {
            first_name: data.firstName,
            last_name: data.lastName
          }
        }
      }
    )
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
