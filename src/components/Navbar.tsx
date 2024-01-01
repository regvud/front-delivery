import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'/profile'}>Profile</NavLink>
      <NavLink to={'/deliveries'}>Deliveries</NavLink>
    </>
  );
};

export { Navbar };
