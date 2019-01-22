import React, { Component } from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import SingleBusiness from './SingleBusiness';
import { backendLink } from '../assets/config';
=======
import axios from 'axios';
import SingleBusiness from './SingleBusiness';
>>>>>>> d87c8f32b96343c6df08e0f6450deeec7175bb6e

export const PopularBusinessesStyles = styled.div`
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
  @media (max-width: 900px) {
    width: 40%;
    margin: 0;
  }
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
<<<<<<< HEAD
      .get(`${backendLink}/api/business`)
=======
      // .get(`https://bonafind.herokuapp.com/api/business`)
      .get(`http://localhost:9000/api/business`)
>>>>>>> d87c8f32b96343c6df08e0f6450deeec7175bb6e
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
  toggleModal = e => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <PopularBusinessesStyles>
        <h1>Popular Businesses</h1>
        {this.state.businesses.map(({ id, name, rating, image }) => (
          <CardStyle key={id} id={id} onClick={this.toggleModal}>
<<<<<<< HEAD
            <img src={image} alt="reviewed business" />
=======
            <img src={image} alt='reviewed business' />
>>>>>>> d87c8f32b96343c6df08e0f6450deeec7175bb6e
            <p>{name}</p>
            <h3>{rating}</h3>
          </CardStyle>
        ))}
        {this.state.isOpen ? (
          <SingleBusiness toggleModal={this.toggleModal} />
        ) : null}
      </PopularBusinessesStyles>
    );
  }
}
export default PopularBusinesses;
