import React, { Component } from 'react'
import styled from 'styled-components'


export const FeaturedReviewStyles = styled.div`
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


class FeaturedReviews extends Component {
  constructor() {
    super();
    this.state ={ 
      reviews: [{
        id: 1,
        image: "https://loremflickr.com/200/200/sushi",
        name: "Ramiace",
        review: "⭐⭐⭐⭐⭐",
        poster: "@ktkdsfghs"
      }, {
        id: 2,
        image: "https://loremflickr.com/200/200/storefront",
        name: "Bartramiaceae",
        review: "⭐⭐⭐",
        poster: "@hthrtujsjk"
      }, {
        id: 3,
        image: "https://loremflickr.com/200/200/pizza",
        name: "Umbilicariaceae",
        review: "⭐⭐⭐⭐",
        poster: "@conelieusfsdf"
      }, {
        id: 4,
        image: "https://loremflickr.com/200/200/shop",
        name: "Asteraceae",
        review: "⭐⭐⭐⭐⭐",
        poster: "@asdfadsfa"
      }, {
        id: 5,
        image: "https://loremflickr.com/200/200/store",
        name: "Dryopteridaceae",
        review: "⭐⭐⭐⭐",
        poster: "@hahtdtuj"
      }]
    }      
  }
  render() {
    return (
      <FeaturedReviewStyles>
        <h1>Featured Reviews</h1>
        {this.state.reviews.map(({id, name, image, review, poster}) => (
          <CardStyle key = {id}>
            <img src={image} alt="reviewed business"/>
            <h1>{review}</h1>
            <p>{name}</p>
            <p>{poster}</p>
          </CardStyle>
        ))}
      </FeaturedReviewStyles>
    )
  }
}

export default FeaturedReviews;