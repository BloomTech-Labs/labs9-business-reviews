import React, { Component } from 'react';
import axios from 'axios';
import { backendLink } from '../assets/config';

class ResetPassword extends Component {
  state = { email: '' };

  handleChange = e => {
    console.log([e.target.name]);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post(`${backendLink}/api/user/verify`, this.state, {
      withCredentials: true
    });
    console.log(res);
  };
  render() {
    return (
      <div>
        <h1>Im the reset password component</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Check Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
          />
          <input type="submit" value="check email" />
        </form>
      </div>
    );
  }
}

export default ResetPassword;
