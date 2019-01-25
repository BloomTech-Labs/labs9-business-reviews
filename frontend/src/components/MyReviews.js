import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { backendLink } from '../assets/config';
import PlaceHolderReviews from './PlaceHolderReviews';

const StyledReviews = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  font-family: Quicksand;
  padding: 20px;

  .review {
    box-sizing: border-box;
    border-radius: 10px;
    filter: drop-shadow(3px 3px 3px black);
    padding: 10px;
    border: 1px solid black;
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

    .review__imgContainer {
      width: 250px;
      height: 150px;
      margin-bottom: 30px;
    }

    .review__imgContainer--img {
      max-width: 250px;
    }

    .review__title {
      font-size: 2rem;
    }
    .review__business {
      text-transform: uppercase;
      font-weight: bold;
    }
    .review__body {
      font-style: italic;
      margin-bottom: 40px;
    }
    .review__quote {
    }

    .review__ratingContainer {
      background-color: #eed974;
      padding: 0 10px;
      line-height: 0.8;
    }

    .review__ratingContainer--rating {
    }

    p {
      height: auto;
    }
    h4 {
      width: 100%;
      height: auto;
      text-align: center;
    }
  }
`;

class MyReviews extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }
  componentDidMount() {
    const id = this.props.id;
    Axios.get(`${backendLink}/api/user/${id}/reviews`)
      .then(res => this.setState({ reviews: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <StyledReviews>
        {this.state.reviews ? (
          this.state.reviews.map(
            ({ title, body, business_image, business_name, id, rating }) => (
              <Link
                to={`/user/${this.props.id}/review/${id}`}
                key={id}
                className='review'
              >
                <div className='review__imgContainer'>
                  <img
                    className='review__imgContainer--img'
                    src={`${business_image}`}
                    alt='business'
                  />
                </div>
                <p className='review__title'>{title}</p>
                <p className='review__business'>{business_name}</p>
                <p className='review__body'>
                  <span className='review__quote'>&ldquo;</span> {body}
                  <span className='review__quote'>&rdquo;</span>
                </p>
                <div className='review__ratingContainer'>
                  <p className='review__ratingContainer--rating'>{`${rating} stars`}</p>
                </div>
              </Link>
            )
          )
        ) : (
          <PlaceHolderReviews />
        )}
      </StyledReviews>
    );
  }

}

export default MyReviews;
