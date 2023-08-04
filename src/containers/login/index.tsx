import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm, { LoginFormData } from '../../components/login';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../../database.types';


interface LoginContainerProps {
  supabase: SupabaseClient<Database>;
}

export const LoginContainer: React.FC<LoginContainerProps> = ({supabase}) => {
  const handleLoginFormSubmit = (data: LoginFormData) => {
    supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password
    })
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLoginFormSubmit} />
      <p>Not registered yet? Register for an account <Link to='/register'>here</Link>.</p>
    </div>
  );
};
