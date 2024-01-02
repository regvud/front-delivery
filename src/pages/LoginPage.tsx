import { SubmitHandler, useForm } from 'react-hook-form';
import { UserLogin } from '../types/userTypes';
import { authService } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { register, handleSubmit } = useForm<UserLogin>();
  const navigate = useNavigate();
  const token = localStorage.getItem('access');

  const submit: SubmitHandler<UserLogin> = async (user) => {
    try {
      const { data } = await authService.login(user);
      localStorage.setItem('access', data.access);
    } catch (e) {
      console.log(e);
    }

    navigate('/profile');
  };
  const logout = () => console.log('dsad');

  return (
    <>
      {!token ? (
        <>
          <h1>Welcome! You have to log in to use all the features.</h1>
          <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="email" {...register('email')} />
            <input
              type="password"
              placeholder="password"
              {...register('password')}
            />
            <button>Login</button>
          </form>
        </>
      ) : (
        <>
          <h1>
            Currently you are logged in, press the button if you want to logout
          </h1>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </>
  );
};

export { LoginPage };
