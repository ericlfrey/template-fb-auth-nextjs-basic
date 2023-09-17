import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useAuth } from '@/utils/context/AuthContext';

const LoginPage = () => {
  const methods = useForm();
  const { logIn } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async data => {
    try {
      await logIn(data.email, data.password);
      router.push('/dashboard');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="sign-up-form">
      <h2>Log In</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginPage;
