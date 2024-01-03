import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className="user-menu-wrapper">
      <p className="user-menu-text">Welcome, {user.name} </p>
      <button type="button" onClick={handleClick} className="user-menu-btn">
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
