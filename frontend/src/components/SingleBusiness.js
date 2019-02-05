import React from 'react'
import styled from 'styled-components'

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(4, 0, 0, 0.7);
  .modal{
    width: 350px;
    height: 500px;
    border: 1px solid grey;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: white;
  }
`;


function SingleBusiness({ toggleModal }) {
  return (
    <BackdropStyle className="single-business">
      <div className="modal">
        <h1>Business Name</h1>
        <img src="" alt="business"/>
        <div className="reviews-container">
          <h4>review title</h4>
          <p>review body</p>
          <h4>review title</h4>
          <p>review body</p>
          <h4>review title</h4>
          <p>review body</p>
          <h4>review title</h4>
          <p>review body</p>
          <h4>review title</h4>
          <p>review body</p>
        </div>
        <button onClick={toggleModal}>Close</button>
      </div>        
    </BackdropStyle>
  )
}

export default SingleBusiness;