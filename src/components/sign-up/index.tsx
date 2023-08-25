import React from 'react';
import { useForm } from 'react-hook-form';
import {
  SignUpFormButton,
  SignUpFormWrapper,
  SignUpInputWrapper,
  SignUpText,
} from './index.styles';

export interface SignUpFormProps {
  onSubmit: (data: SignUpFormData) => void;
}

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <SignUpFormWrapper onSubmit={handleFormSubmit}>
      <SignUpInputWrapper>
        <SignUpText htmlFor="firstName">First name</SignUpText>
        <input autoComplete="given-name" {...register('firstName', { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </SignUpInputWrapper>
      <SignUpInputWrapper>
        <SignUpText htmlFor="lastName">Last name</SignUpText>
        <input autoComplete="family-name" {...register('lastName', { required: true })} />
        {errors.lastName && <span>This field is required</span>}
      </SignUpInputWrapper>
      <SignUpInputWrapper>
        <SignUpText htmlFor="email">Email</SignUpText>
        <input autoComplete="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </SignUpInputWrapper>
      <SignUpInputWrapper>
        <SignUpText htmlFor="password">Password</SignUpText>
        <input type="password" autoComplete="new-password" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
      </SignUpInputWrapper>
      <SignUpFormButton type="submit">Sign up</SignUpFormButton>
    </SignUpFormWrapper>
  );
};
