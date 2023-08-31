import React from 'react';
import { useForm } from 'react-hook-form';
import {
  SignInFormButton,
  SignInFormWrapper,
  SignInInputWrapper,
  SignInText,
} from './index.styles';

interface SignInFormProps {
  onSubmit: (data: SignInEmailPasswordFormData) => void;
}

export interface SignInEmailPasswordFormData {
  email: string;
  password: string;
}

const SignInEmailPasswordForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInEmailPasswordFormData>();

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <SignInFormWrapper onSubmit={handleFormSubmit}>
      <SignInInputWrapper>
        <SignInText htmlFor="email">Email</SignInText>
        <input
          autoComplete="email"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </SignInInputWrapper>
      <SignInInputWrapper>
        <SignInText htmlFor="password">Password</SignInText>
        <input
          type="password"
          autoComplete="current-password"
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </SignInInputWrapper>
      <SignInFormButton type="submit">Sign in</SignInFormButton>
    </SignInFormWrapper>
  );
};

export default SignInEmailPasswordForm;
