import React, { Component } from 'react'
import styled from 'styled-components'

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
      reviews: [{
        id: 1,
        image: "https://loremflickr.com/200/200/mcdonalds",
        name: "McDonald's",
        review: "⭐⭐⭐⭐⭐",
      }, {
        id: 2,
        image: "https://loremflickr.com/200/200/kmart",
        name: "KMart",
        review: "⭐⭐⭐",
      }, {
        id: 3,
        image: "https://loremflickr.com/200/200/walmart",
        name: "Walmart",
        review: "⭐⭐⭐⭐",
      }, {
        id: 4,
        image: "https://loremflickr.com/200/200/target",
        name: "Target",
        review: "⭐⭐⭐⭐⭐",
      }, {
        id: 5,
        image: "https://loremflickr.com/200/200/tacobell",
        name: "Taco Bell",
        review: "⭐⭐⭐⭐",
      }]
    }
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