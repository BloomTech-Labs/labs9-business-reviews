import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { backendLink } from '../assets/config';

const PopularReviewersStyles = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  width: 85%;
  height: auto;
  @media (max-width: 900px) {
    background-color: white;
    width: 100%;
    justify-content: space-around;
  }
  h1 {
    width: 100%;
    font-weight: 100;
  }
  .link {
    text-decoration: none;
    color: black;
  }
  .users {
    width: 200px;
    margin-right: 25px;
    .users__name {
      font-size: 1.2rem;
    }
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
    };
  }

  componentDidMount() {
    axios
      .get(`${backendLink}/api/user`)
      .then(response => {
        const userData = [...response.data];
        const slicedUserData = userData.slice(0, 8);
        this.setState(() => ({ users: slicedUserData }));
      })
      .catch(err => {
        console.error('Server error: could not access users', err);
      });
  }

  render() {
    return (
      <PopularReviewersStyles>
        <h1>Popular Reviewers</h1>
        {this.state.users.map(({ id, name, gravatar }) => (
          <div className="users" key={id}>
            <Link to={`/user/${id}`} className="link">
              <CardStyle>
                <img src={gravatar} alt="reviewer's profile" />
                <p className="users__name">{name}</p>
              </CardStyle>
            </Link>
          </div>
        ))}
      </PopularReviewersStyles>
    );
  }
}

export default PopularReviewers;
