import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import SingleBusiness from './SingleBusiness';
import { backendLink } from '../assets/config';

export const PopularBusinessesStyles = styled.div`
  box-sizing: border-box;
  padding: 20px 40px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  height: auto;

  h1 {
    text-align: center;
    width: 100%;
    font-weight: 100;
    padding-bottom: 20px;
  }
  .link {
    text-decoration: none;
    color: black;
  }
  .business {
    width: 200px;
    margin-right: 25px;
    box-sizing: border-box;
    border-radius: 10px;
    filter: drop-shadow(1px 1px 3px black);
    padding: 20px;
    background: #f1f1f1;
    height: auto;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    line-height: 0.2;
    text-decoration: none;
    color: black;

    @media (max-width: 850px) {
      height: 80%;
      width: 80%;
      background-color: white;
    }

    .business__name {
      font-size: 1.2rem;
    }
  }
`;

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 250px;
    max-height: 250px;
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
          <div className="business" key={id}>
            <Link className="link" to={`/business/${id}`}>
              <CardStyle id={id}>
                <img
                  className="business__img"
                  src={image}
                  alt="reviewed business"
                />
                <p className="business__name">{name}</p>
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
