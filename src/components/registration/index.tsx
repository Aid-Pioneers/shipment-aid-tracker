import React from 'react';
import { useForm } from 'react-hook-form';
import {
  RegistrationFormButton,
  RegistrationFormWrapper,
  RegistrationInputWrapper,
  RegistrationText,
} from './index.styles';

export interface RegistrationFormProps {
  onSubmit: (data: RegistrationFormData) => void;
}

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>();

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <RegistrationFormWrapper onSubmit={handleFormSubmit}>
      <RegistrationInputWrapper>
        <RegistrationText htmlFor="firstName">First name</RegistrationText>
        <input autoComplete="given-name" {...register('firstName', { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </RegistrationInputWrapper>
      <RegistrationInputWrapper>
        <RegistrationText htmlFor="lastName">Last name</RegistrationText>
        <input autoComplete="family-name" {...register('lastName', { required: true })} />
        {errors.lastName && <span>This field is required</span>}
      </RegistrationInputWrapper>
      <RegistrationInputWrapper>
        <RegistrationText htmlFor="email">Email</RegistrationText>
        <input autoComplete="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </RegistrationInputWrapper>
      <RegistrationInputWrapper>
        <RegistrationText htmlFor="password">Password</RegistrationText>
        <input type="password" autoComplete="new-password" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
      </RegistrationInputWrapper>
      <RegistrationFormButton type="submit">Register</RegistrationFormButton>
    </RegistrationFormWrapper>
  );
};
