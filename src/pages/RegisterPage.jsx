import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ target: { elements } }) => {
    const { name, email, password } = elements;
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(register(userData));
  };
  return (
    <div className="register-wrapper">
      <h2>Register Form</h2>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <input
          type="name"
          name="name"
          className="form-input"
          placeholder="your name"
        />
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          className="form-input"
          placeholder="your password"
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
