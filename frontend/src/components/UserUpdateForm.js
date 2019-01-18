import React, { Component } from 'react';
import axios from 'axios';
import { backendLink } from '../assets/config';

export default class UserUpdateForm extends Component {
  state = {
    user: {}
  };
  async componentDidMount() {
    const res = await axios.get(`${backendLink}/api/user/me`, {
      withCredentials: true
    });
    const {
      data: {
        user: { id }
      }
    } = res;
    this.setState({ user: id });
  }
  onChange = e => {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;

    this.setState({ user });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const user = { ...this.state.user };
    delete user.id;
    console.log(this.state.user.id);
    const res = await axios.put(
      `${backendLink}/api/user/${this.state.user.id}`,
      user,
      {
        withCredentials: 'include'
      }
    );
    console.log(res);
  };
  render() {
    return (
      <div>
        <img src={this.state.user.gravatar} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.onChange}
            name="name"
            value={this.state.user.name}
          />
          <input
            onChange={this.onChange}
            name="email"
            value={this.state.user.email}
          />
          <input type="submit" value="Update User" />
        </form>
      </div>
    );
  }
}
