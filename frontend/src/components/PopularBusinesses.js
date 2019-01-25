import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import SingleBusiness from './SingleBusiness';
import { backendLink } from '../assets/config';

export const PopularBusinessesStyles = styled.div`
  margin: 0 auto;
  margin-bottom: 60px;
  display: flex;
  flex-flow: row wrap;
  width: 85%;
  height: auto;

  h1 {
    width: 100%;
  }
  .link {
    text-decoration: none;
    color: black;
  }
  .business {
    width: 200px;
    margin-right: 25px;

    @media (max-width: 850px) {
      height: 80%;
      width: 80%;
      background-color: white;
    }

    .business__img {
    }

    .business__name {
      font-size: 1.2rem;
    }
  }
`;

export const CardStyle = styled.div`
  margin-left: 20px;

  img {
    width: 200px;
    height: 200px;
    @media (max-width: 900px) {
      width: 400px;
      height: 400px;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

class PopularBusinesses extends Component {
  constructor() {
    super();
    this.state = {
      businesses: [],
      isOpen: false
    };
  }
  componentDidMount() {
    axios
      .get(`${backendLink}/api/business`)
      .then(response => {
        //save response data in a new variable
        const data = [...response.data];
        //sorts and slices correct number of businesses
        const sortedAndSliced = data
          .sort((a, b) =>
            a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
          )
          .slice(0, 4);
        //sets sorted array to this.state.businesses
        this.setState(() => ({ businesses: sortedAndSliced }));
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }
  render() {
    return (
      <PopularBusinessesStyles>
        <h1>Popular Businesses</h1>
        {this.state.businesses.map(({ id, name, rating, image }) => (
          <div className='business'>
            <Link className='link' key={id} to={`/business/${id}`}>
              <CardStyle id={id}>
                <img
                  className='business__img'
                  src={image}
                  alt='reviewed business'
                />
                <p className='business__name'>{name}</p>
                <h2>{rating}</h2>
              </CardStyle>
            </Link>
          </div>
        ))}
        {this.state.isOpen ? (
          <SingleBusiness toggleModal={this.toggleModal} />
        ) : null}
      </PopularBusinessesStyles>
    );
  }
}
export default PopularBusinesses;
