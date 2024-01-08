import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { UserRegister } from '../types/userTypes';
import css from './styles/RegisterPage.module.css';
import { useState } from 'react';
import { ResponseError } from '../types/axiosTypes';

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<UserRegister>();
  const [error, setError] = useState<ResponseError>();
  const navigate = useNavigate();

  const submit: SubmitHandler<UserRegister> = async (user) => {
    try {
      const data = await authService.register(user);
      if (data.request.status === 400) {
        setError(JSON.parse(data.request.response));
        return;
      }

      navigate('/profile');
    } catch (e) {
      console.log(`unknown error: ${e}}`);
    }
  };
  return (
    <>
      <h1 className={css.h1}>Registration</h1>
      <form onSubmit={handleSubmit(submit)} className={css.form}>
        {error?.email}
        <input
          type="text"
          placeholder="email"
          {...register('email')}
          className={css.input}
        />

        {error?.phone}
        <input
          type="text"
          placeholder="phone"
          {...register('phone')}
          className={css.input}
        />

        {error?.password}
        <input
          type="password"
          placeholder="password"
          {...register('password')}
          className={css.input}
        />
        <button className={css.button}>Register</button>
      </form>
    </>
  );
};

export { RegisterPage };
