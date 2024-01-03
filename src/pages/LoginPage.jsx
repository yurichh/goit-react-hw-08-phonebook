import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { NavLink } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ target }) => {
    const userData = {
      email: target[0].value,
      password: target[1].value,
    };
    dispatch(logIn(userData));
    console.log('userData', userData);
  };
  return (
    <div className="login-wrapper">
      <h2>Login Form</h2>
      <form
        className="form"
        onSubmit={e => {
          console.log('submit');
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <TextField
          type="email"
          fullWidth
          label="Email"
          variant="standard"
          autoComplete="email"
        />
        <TextField
          fullWidth
          id="filled-password-input"
          label="Password"
          type="password"
          variant="standard"
          autoComplete="password"
        />
        <Button type="submit" variant="outlined" size="medium">
          Login
        </Button>
      </form>
      <p className="redirect-text">
        Don't have an account?{' '}
        <NavLink to="/register" className="redirect-link">
          Register
        </NavLink>
      </p>
    </div>
  );
};

export default LoginPage;
