import React, { Component } from 'react'


class FeaturedReviews extends Component {
  constructor() {
    super();
    this.state ={ 
      reviews: [{
        id: 1,
        name: "Araceae",
        image: "https://source.unsplash.com/random/200x200",
        review: "⭐⭐⭐⭐⭐"
      }, {
        id: 2,
        name: "Bartramiaceae",
        image: "https://source.unsplash.com/random/200x200",
        review: "⭐⭐⭐"
      }, {
        id: 3,
        name: "Umbilicariaceae",
        image: "https://source.unsplash.com/random/200x200",
        review: "⭐⭐⭐⭐"
      }, {
        id: 4,
        name: "Asteraceae",
        image: "https://source.unsplash.com/random/200x200",
        review: "⭐⭐⭐⭐⭐"
      }, {
        id: 5,
        name: "Dryopteridaceae",
        image: "https://source.unsplash.com/random/200x200",
        review: "⭐⭐⭐⭐"
      }]
    }      
  }
  render() {
    return (
      <div>
        <h1>Featured Reviews</h1>
        {this.state.reviews.map(({name, image, review}) => (
          <div>
            <h2>{name}</h2>
            <img src={image} alt="reviewed business"/>
            <p>{review}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default FeaturedReviews;