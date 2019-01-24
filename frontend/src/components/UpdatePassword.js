import React, { Component } from 'react';
import axios from 'axios';
import { backendLink } from '../assets/config';
import styled from 'styled-components';

const UpdatePasswordDiv = styled.div`
  margin: 0 auto;
  width: 600px;
  .image-container {
    background-image: url('https://i.imgur.com/81RTZEw.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    transform-origin: bottom-left;
    transform: skew(-30deg, 0deg);
    &:after {
    }
  }
`;

class UpdatePassword extends Component {
  state = {
    password: '',
    confirm_password: '',
    user: {}
  };
  async componentDidMount() {
    const res = await axios.get(
      `${backendLink}/api/user/tokenuser/${this.props.match.params.id}`,
      { withCredentials: 'include' }
    );
    if (!res.data.user) return this.props.history.push('/resetpassword');
    this.setState({ user: res.data.user });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.password !== this.state.confirm_password)
      return alert('passwords must match');
    try {
      const res = await axios.put(
        `${backendLink}/api/user/updatepassword/${this.props.match.params.id}`,
        { password: this.state.password },
        { withCredentials: 'include' }
      );
      console.log(res);
    } catch (err) {
      alert(err);
    }
  };
  render() {
    return (
      <UpdatePasswordDiv>
        <div className="image-container">
          <h1> Hey {this.state.user.name} wanna reset your password?</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>Password</label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
          <label>Confirm Password</label>
          <input
            type="text"
            value={this.state.confirm_password}
            onChange={this.handleChange}
            name="confirm_password"
          />
          <input type="submit" value="update password" />
        </form>
      </UpdatePasswordDiv>
    );
  }
}
export default UpdatePassword;
