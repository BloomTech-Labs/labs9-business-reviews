import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { backendLink } from '../assets/config';
import { withRouter } from 'react-router-dom';

const LoginDiv = styled.div`
  display: flex;
  max-width: 500px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
  height: 500px;
`;

const AuthInput = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #e6e6e6;
  margin: 10px auto;
`;
const AuthHeader = styled.h1`
  padding-bottom: 25px;
  font-family: 'roboto';
  font-weight: 500;
`;

const AuthForm = styled.form`
  width: 100%;
  padding: 2rem;

  label {
    font-family: sans-serif;
  }
  input[type='submit'] {
    background-color: #ffc40e;
    font-weight: 600;
    font-family: 'roboto';
    margin: 10px auto;
    padding: 10px;
    float: center;
    width: 95%;
  }
`;

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post(
      `${backendLink}/api/user/login`,
      {
        email: this.state.email,
        password: this.state.password
      },
      { withCredentials: 'include' }
    );
    if (res.status === 500) {
      return alert(
        'No record found on either email or password inputted please login again or register!'
      );
    }
    alert(`Authenticated!`);
  };

  render() {
    return (
      <LoginDiv>
        <AuthForm onSubmit={this.handleSubmit}>
          <AuthHeader> Signed up already?</AuthHeader>
          <label htmlFor="email"> Email</label>
          <AuthInput type="email" name="email" onChange={this.handleChange} />
          <label htmlFor="password"> Password</label>
          <AuthInput type="text" name="password" onChange={this.handleChange} />
          <input type="submit" value="Login 🡆" />
        </AuthForm>
      </LoginDiv>
    );
  }
}

export default LoginForm;
