import React, { Component } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

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
    console.log('my reviews', id)
      // Axios.get(
      //   `http://localhost:9000/api/business/${id}/reviews`
      // )
      //   // .then(res => console.log(res.data.result.formatted_phone_number))
      //   .then(res => this.setState({ reviews: res.data }))
      //   .catch(err => console.log(err));   
  }
  render() {
    return (
      <StyledReviews>
        <div className="add-review">
        </div>
      </StyledReviews>
    )
  }
}

export default MyReviews; 