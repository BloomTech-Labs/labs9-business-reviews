import React, { Component } from 'react';
import axios from 'axios';

export default class GatedSignIn extends Component {
  state = {
    loggedIn: false
  };
  async componentDidMount() {
    const res = await axios.get('http://localhost:9000/api/user/me', {
      withCredentials: 'include'
    });
    console.log(res.data);
    if (res.data.user) {
      this.setState({ loggedIn: true });
    }
  }
  render() {
    return (
      <>
        {this.state.loggedIn ? (
          <div>
            <p>Im logged in</p>
          </div>
        ) : (
          <div>
            <p>Not logged in</p>
          </div>
        )}
      </>
    );
  }
}
