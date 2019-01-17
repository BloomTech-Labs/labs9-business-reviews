import React from 'react'
import { BackdropStyle } from './Modal'



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