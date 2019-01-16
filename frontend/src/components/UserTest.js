import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';

const StyledUsers = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid black;
  padding: 10px;
  align-items: center;
  margin: 15px;
`;

class UserTest extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get(`http://bonafind.herokuapp.com/api/user`)
      .then(response => {
        this.setState(() => ({ users: response.data }));
      })
      .catch(err => {
        console.error('Server error: could not access users', err)
    })
  }


  render() {
    console.log(this.state.users);
    return(
      <div>
        {this.state.users.map(user => {
          return <UserDetails key={user.id} user={user} />
        })}
      </div>
    )
  }
}

function UserDetails({ user }) {
  const { id, name, email, gravatar } = user;
  return(
    <div>
      <StyledUsers>
        <img src={gravatar} alt=""/>
        <h2>{name}</h2>
        <h4>{email}</h4>
        <h6>{id}</h6>
      </StyledUsers>
    </div>
   
  )
}

export default UserTest;