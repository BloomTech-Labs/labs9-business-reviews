import React from 'react';
import LoginForm from './LoginForm';
import GatedSignIn from './GatedSignInComponent';
import styled from 'styled-components';

const AuthWrapper = styled.div`
  display: flex;
  margin: 50px auto;
  justify-content: space-evenly;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Login = () => {
  return (
    <AuthWrapper>
      <LoginForm />
      {/* <RegisterForm /> */}
      <GatedSignIn>
        This will render whatever component if the user is logged in!
      </GatedSignIn>
    </AuthWrapper>
  );
};

export default Login;
