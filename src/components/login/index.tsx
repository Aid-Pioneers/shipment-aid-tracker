import React from 'react';
import { useForm } from 'react-hook-form';

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
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Email</label>
        <input {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label>Password</label>
        <input {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
