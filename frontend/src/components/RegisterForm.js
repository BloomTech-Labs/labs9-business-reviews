import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { backendLink } from '../assets/config';

const AuthInput = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #e6e6e6;
  margin: 10px auto;
`;
const RegisterDiv = styled.div`
  display: flex;
  max-width: 500px;
  align-self: flex-end;
  margin: auto;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
  height: 500px;
  margin-top: 50px;
`;
const AuthForm = styled.form`
  width: 100%;
  padding: 2rem;

  label {
    font-family: Quicksand;
  }
  input[type='submit'] {
    background-color: #eed974;
    font-size: 1.25rem;
    font-family: Quicksand;
    margin: 10px auto;
    padding: 10px;
    float: center;
    height: 70px;
    width: 95%;
    margin-bottom: 15px;
  }
`;

const AuthHeader = styled.h1`
  padding-bottom: 25px;
  font-family: Quicksand;
  letter-spacing: 1.2px;
`;

class RegisterForm extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (!this.state.email || !this.state.password || !this.state.name) {
      return alert('fields cannot be empty');
    }

    await axios.post(`${backendLink}/api/user/register`, this.state);
    try {
      alert(`Successful Registered your account!`);
    } catch (err) {
      alert(err);
    }
  };
  render() {
    return (
      <RegisterDiv>
        <AuthForm onSubmit={this.handleSubmit}>
          <AuthHeader> Register for a account!</AuthHeader>
          <label htmlFor='email'> Email</label>
          <AuthInput type='email' name='email' onChange={this.handleChange} />
          <label htmlFor='password'> Password</label>
          <AuthInput type='text' name='password' onChange={this.handleChange} />
          <label htmlFor='name'>Name</label>
          <AuthInput type='text' name='name' onChange={this.handleChange} />
          <input type='submit' value='Register' className='btn' />
        </AuthForm>
      </RegisterDiv>
    );
  }
}

export default RegisterForm;
