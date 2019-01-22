import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { backendLink } from '../assets/config';

const PopularReviewersStyles = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  height: auto;
  @media (max-width: 900px) {
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
<<<<<<< HEAD
      users: [],
      reviews: [
        {
          id: 1,
          name: 'ManGuy',
          image: 'https://loremflickr.com/200/200/man'
        },
        {
          id: 2,
          name: 'DogGuy',
          image: 'https://loremflickr.com/200/200/dog'
        },
        {
          id: 3,
          name: 'WomanGuy',
          image: 'https://loremflickr.com/200/200/woman'
        },
        {
          id: 4,
          name: 'KidGuy',
          image: 'https://loremflickr.com/200/200/kid'
        },
        {
          id: 5,
          name: 'CatGuy',
          image: 'https://loremflickr.com/200/200/cat'
        },
        {
          id: 6,
          name: 'PersonGuy',
          image: 'https://loremflickr.com/200/200/person'
        },
        {
          id: 7,
          name: 'HumanGuy',
          image: 'https://loremflickr.com/200/200/human'
        },
        {
          id: 8,
          name: 'BirdGuy',
          image: 'https://loremflickr.com/200/200/bird'
        }
      ]
=======
      users: []
>>>>>>> d87c8f32b96343c6df08e0f6450deeec7175bb6e
    };
  }

  componentDidMount() {
    axios
<<<<<<< HEAD
      .get(`${backendLink}/api/user`)
      .then(response => {
        const userData = [...response.data];
        const slicedUserData = userData.slice(0, 8);
=======
      // .get(`https://bonafind.herokuapp.com/api/user`)
      .get(`http://localhost:9000/api/business`)
      .then(response => {
        const userData = [...response.data];
        const slicedUserData = userData.slice(105, 8);
>>>>>>> d87c8f32b96343c6df08e0f6450deeec7175bb6e
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
          <CardStyle key={id}>
<<<<<<< HEAD
            <img src={gravatar} alt="reviewer's profile picture" />
=======
            <img src={gravatar} alt="reviewer's profile" />
>>>>>>> d87c8f32b96343c6df08e0f6450deeec7175bb6e
            <p>{name}</p>
          </CardStyle>
        ))}
      </PopularReviewersStyles>
    );
  }
}

export default PopularReviewers;
