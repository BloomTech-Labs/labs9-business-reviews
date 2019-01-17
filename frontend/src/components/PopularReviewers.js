import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';

const PopularReviewersStyles = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  height: auto;
  @media(max-width:900px){
    background-color: white;
    width: 100%;
    justify-content: space-around;
  }
  h1 {
    width: 100%;
  }
`;

export const CardStyle = styled.div`
  margin-left: 15px;
  img {
    max-width: 200px;
    height: 200px;
  }
`;


class PopularReviewers extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get(`https://bonafind.herokuapp.com/api/user`)
      .then(response => {
        const userData = [...response.data]
        const slicedUserData = userData.slice(0,8);
        this.setState(() => ({ users: slicedUserData }));
      })
      .catch(err => {
        console.error('Server error: could not access users', err)
    })
  }

  render() {
    return (
      <PopularReviewersStyles>
        <h1>Popular Reviewers</h1>
        {this.state.users.map(({id, name, gravatar}) => (
            <CardStyle key={id}>
              <img src={gravatar} alt="reviewer's profile picture"/>
              <p>{name}</p>
            </CardStyle>
        ))}
      </PopularReviewersStyles>
    )
  }
}

export default PopularReviewers;