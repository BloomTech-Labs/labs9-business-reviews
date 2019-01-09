import React, { Component } from 'react';
import axios from 'axios';

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
    const id = await axios.post(
      'http://localhost:9000/api/user/register',
      this.state
    );
    console.log(id);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1> Register for a account!</h1>
          <label htmlFor="email">
            {' '}
            Email
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
          <label htmlFor="password">
            {' '}
            Password
            <input type="text" name="password" onChange={this.handleChange} />
          </label>
          <label htmlFor="name">
            Name
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Login!" />
        </form>
      </div>
    );
  }
}

export default RegisterForm;
