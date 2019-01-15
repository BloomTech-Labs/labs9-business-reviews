import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';

export default class GatedSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:9000/api/user/me', {
      withCredentials: 'include'
    });
    if (res.data.user) {
      this.setState({ user: res.data.user });
    }
  }
  render() {
    return (
      <>{this.state.user.name ? <>{this.props.children}</> : <LoginForm />}</>
    );
  }
}
