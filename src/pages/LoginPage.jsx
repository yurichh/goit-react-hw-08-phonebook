import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ target: { elements } }) => {
    const { email, password } = elements;
    const userData = {
      email: email.value,
      password: password.value,
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
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="your email"
        />
        <input
          type="password"
          name="password"
          className="form-input"
          placeholder="your name"
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
