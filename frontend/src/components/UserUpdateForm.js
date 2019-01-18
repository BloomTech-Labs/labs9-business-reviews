import React, { Component } from 'react';
import axios from 'axios';
import { backendLink } from '../assets/config';

export default class UserUpdateForm extends Component {
  async componentDidMount() {
    const res = await axios.get(`${backendLink}/api/user/me`);
    console.log(res, 'from the user update form');
  }
  render() {
    return (
      <div>
        <form>
          <input />
          <input />
          <input />
        </form>
      </div>
    );
  }
}
