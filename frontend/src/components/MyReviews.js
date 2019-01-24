import React, { Component } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { backendLink } from '../assets/config';
import PlaceHolderReviews from './PlaceHolderReviews'

const StyledReviews = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  .add-review {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{

    }
    button {
      height: 40px;
      width: 40px;
      background-color: white;
      border-radius: 50%;
      font-size: 30px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

class MyReviews extends Component {
  constructor(){
    super();
    this.state={
      reviews:[]
    }
  }
  componentDidMount() {
    const id = this.props.id;
    Axios.get(
      `${backendLink}/api/user/${id}/reviews`
    )
      .then(res => this.setState({ reviews: res.data }))
      .catch(err => console.log(err));  
  }
  render() {
    return (
      <StyledReviews>
        {this.state.reviews?this.state.reviews.map(({title, body, image, id, rating}) => (                <div key={id}className='review'>                      
          <div className='review-img1' />
          <h4>{title}</h4>
          <p>{body}</p>
          <p>{`${rating} stars`}</p>            
        </div>)):<PlaceHolderReviews/>}
      </StyledReviews>
    )
  }
}

export default MyReviews; 