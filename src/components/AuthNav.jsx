import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register" className="nav-item">
        Register
      </NavLink>
      <NavLink to="/login" className="nav-item">
        LogIn
      </NavLink>
    </>
  );
};

export default AuthNav;
