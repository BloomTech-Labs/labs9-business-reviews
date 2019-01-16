import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export const PopularBusinessesStyles = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  height: auto;
  h1 {
    width: 100%;
  }
`;

export const CardStyle = styled.div`
  margin-left: 15px;
`;


class PopularBusinesses extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }
  componentDidMount() {
    axios
      .get(`http://bonafind.herokuapp.com/api/business`)
      .then(response =>{
        const filtered = response.data.filter(review => review.rating > 4.6); 
        console.log(filtered)       
      })
      .catch(err => {
        console.error('Server error: could not access users', err)
    })
  }
  render() {
    return (
      <PopularBusinessesStyles>
        <h1>Popular Businesses</h1>
        {this.state.reviews.map(({id, name, image, review}) => (
          <CardStyle key={id}>
            <img src={image} alt="reviewed business"/>
            <h1>{review}</h1>
            <p>{name}</p>
          </CardStyle>
        ))}
      </PopularBusinessesStyles>
    )
  }
}
export default PopularBusinesses;