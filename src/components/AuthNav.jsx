import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">LogIn</NavLink>
    </>
  );
};

export default AuthNav;
