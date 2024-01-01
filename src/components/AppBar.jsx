import React from 'react';
import Navigation from './Navigation';
import { useAuth } from 'hooks/useAuth';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className="header">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
