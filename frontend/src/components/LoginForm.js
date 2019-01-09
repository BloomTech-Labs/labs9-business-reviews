import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form>
          <h1> If you already have a account please log in!</h1>
          <label htmlFor="email">
            {' '}
            Email
            <input type="email" name="email" />
          </label>
          <label htmlFor="password">
            {' '}
            Password
            <input type="text" name="password" />
          </label>
          <input type="submit" value="Login!" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
