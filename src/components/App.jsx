import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ContactsPage from 'pages/ContactsPage';
import Homepage from 'pages/Homepage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from '../redux/auth/operations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
