import { SubmitHandler, useForm } from 'react-hook-form';
import { UserLogin } from '../types/userTypes';
import { authService } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { register, handleSubmit } = useForm<UserLogin>();
  const navigate = useNavigate();

  const submit: SubmitHandler<UserLogin> = async (user) => {
    const { data } = await authService.login(user);
    localStorage.setItem('access', data.access);

    navigate('/profile');
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder="email" {...register('email')} />
        <input
          type="password"
          placeholder="password"
          {...register('password')}
        />
        <button>login</button>
      </form>
    </>
  );
};

export { LoginPage };
