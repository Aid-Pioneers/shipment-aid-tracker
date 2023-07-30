import React from 'react';
import { useForm } from 'react-hook-form';

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
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="firstName">First name</label>
        <input autoComplete="given-name" {...register('firstName', { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input autoComplete="family-name" {...register('lastName', { required: true })} />
        {errors.lastName && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input autoComplete="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" autoComplete="new-password" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
