import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register" className="nav-item">
        REGISTER
      </NavLink>
      <NavLink to="/login" className="nav-item">
        LOGIN
      </NavLink>
    </>
  );
};

export default AuthNav;
