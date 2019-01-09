import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import styled from 'styled-components';

const Authenticate = () => {
  return (
    <div>
      <p>This is the auth</p>
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default Authenticate;
