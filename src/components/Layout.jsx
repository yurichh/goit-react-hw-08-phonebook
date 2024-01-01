import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
      <hr />
    </div>
  );
};

export default Layout;
