import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm, { LoginFormData } from '../../components/login';
import { SupabaseClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

interface LoginContainerProps {
  supabase: SupabaseClient;
}

export const LoginContainer: React.FC<LoginContainerProps> = ({supabase}) => {

  const navigate = useNavigate();

  async function handleLoginFormSubmit(data: LoginFormData) {
    const {error} = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password
    });

    if (error)
      console.warn('Encountered an error when logging in.', error.cause);
    else
      return navigate("/overview")
    };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLoginFormSubmit} />
      <p>Not registered yet? Register for an account <Link to='/register'>here</Link>.</p>
    </div>
  );
};
