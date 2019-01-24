import React, { Component } from 'react'
import styled from 'styled-components'

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