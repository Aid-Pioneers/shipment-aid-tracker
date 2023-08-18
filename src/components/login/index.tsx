import React from 'react';
import { useForm } from 'react-hook-form';
import {
  LoginFormButton,
  LoginFormWrapper,
  LoginInputWrapper,
  LoginText,
} from './index.styles';

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
}

export interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <LoginFormWrapper onSubmit={handleFormSubmit}>
      <LoginInputWrapper>
        <LoginText htmlFor="email">Email</LoginText>
        <input
          autoComplete="email"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </LoginInputWrapper>
      <LoginInputWrapper>
        <LoginText htmlFor="password">Password</LoginText>
        <input
          type="password"
          autoComplete="current-password"
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </LoginInputWrapper>
      <LoginFormButton type="submit">Login</LoginFormButton>
    </LoginFormWrapper>
  );
};

export default LoginForm;
