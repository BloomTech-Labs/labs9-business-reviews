import React, { Component } from 'react';
import axios from 'axios';
import { backendLink } from '../assets/config';

class UpdatePassword extends Component {
  async componentDidMount() {
    const res = await axios.get(
      `${backendLink}/api/user/tokenuser/${this.props.match.params.id}`,
      { withCredentials: 'include' }
    );
    console.log(res);
  }
  render() {
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
        <form />
      </div>
    );
  }
}
export default UpdatePassword;
