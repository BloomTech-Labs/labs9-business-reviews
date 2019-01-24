import React from 'react'

function PlaceHolderReviews() {
  return (
    <React.Fragment>
      <div className='review'>
        <div className='review-img1' />
        <p>
          <span role='img' aria-label='stars'>
            ⭐⭐⭐
          </span>
        </p>
        <h3>@eddbunk</h3>
      </div>
      <div className='review'>
        <div className='review-img2' />
        <p>
          <span role='img' aria-label='stars'>
            ⭐⭐⭐⭐⭐
          </span>
        </p>
        <h3>@alixjones</h3>
      </div>
      <div className='review'>
        <div className='review-img3' />
        <p>
          <span role='img' aria-label='stars'>
            ⭐⭐
          </span>
        </p>
        <h3>@carloG</h3>
      </div>
      </React.Fragment>
  )
}

export default PlaceHolderReviews;
