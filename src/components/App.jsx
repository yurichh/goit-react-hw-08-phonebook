import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ContactsPage from 'pages/ContactsPage';
import Homepage from 'pages/Homepage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from '../redux/auth/operations';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        {/* <Route index element={<Homepage />} />
        <PublicRoute path="/register" restricted>
          <RegisterPage />
        </PublicRoute>
        <PublicRoute path="/login" restricted>
          <LoginPage />
        </PublicRoute>
        <PrivateRoute path="/contacts">
          <ContactsPage />
        </PrivateRoute> */}
      </Route>
    </Routes>
  );
};

export default App;
