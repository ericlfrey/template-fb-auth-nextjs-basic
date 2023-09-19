import { useAuth } from '@/utils/context/AuthContext';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';

const SignupPage = () => {
  const methods = useForm();
  const { signUp } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async data => {
    try {
      await signUp(data.email, data.password);
      router.push('/dashboard');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="sign-up-form">
      <h2>Sign Up</h2>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              {...register('password_confirm', {
                required: 'Verify your password',
              })}
            />
            {errors.password_confirm && (
              <p>{errors.password_confirm.message}</p>
            )}
          </Form.Group>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </FormProvider>
    </div>
  );
};

export default SignupPage;
