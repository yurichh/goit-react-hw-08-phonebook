import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const showContacts = isLoggedIn || isRefreshing;
  return (
    <ul className="user-nav">
      <li className="nav-item">
        <NavLink to="/">Home</NavLink>
      </li>
      {showContacts && (
        <li className="nav-item">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
