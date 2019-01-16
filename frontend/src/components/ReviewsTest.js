import React, { Component } from 'react';
import axios from 'axios';

class ReviewsTest extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://bonafind.herokuapp.com/api/review`)
      .then(response => {
        this.setState(() => ({ reviews: response.data }));
      })
      .catch(err => {
        console.log('oh no, what have you done!!', err);
      });
  }

  render() {
    console.log(this.state.reviews);
    return (
      <div>
        {this.state.reviews.map(review => {
          return <ReviewDetails key={review.id} review={review} />;
        })}
      </div>
    );
  }
}

function ReviewDetails({ review }) {
  const { id, title, body } = review;
  return (
    <div>
      <h2>{id}</h2>
      <h2>{title}</h2>
      <h2>{body}</h2>
    </div>
  );
}

export default ReviewsTest;
