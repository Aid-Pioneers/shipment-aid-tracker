import React from 'react';
import LoginForm, { LoginFormData } from '../../components/login';

export const LoginContainer: React.FC = () => {
  const handleLoginFormSubmit = (data: LoginFormData) => {
    // Simulate API call
    setTimeout(() => {
      if (
        data.email === 'example@example.com' &&
        data.password === 'password'
      ) {
        // Successful login
        console.log('Login successful');
      } else {
        // Failed login
        console.log('Invalid email or password');
      }
    }, 1000);
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLoginFormSubmit} />
    </div>
  );
};
