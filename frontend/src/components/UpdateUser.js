import React, { Component } from 'react';
import GatedSignInComponent from './GatedSignInComponent';
import UserUpdateForm from './UserUpdateForm';

export default class UpdateUser extends Component {
  render() {
    return (
      <GatedSignInComponent>
        <UserUpdateForm />
      </GatedSignInComponent>
    );
  }
}
