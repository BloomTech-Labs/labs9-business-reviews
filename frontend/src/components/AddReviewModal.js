import React from 'react'

function AddReviewModal() {
  return (
    <div>
      <form>
        <label htmlFor="review-title">Title</label>
        <input className="review-title"/>
        <label htmlFor="review-body"></label>
        <input className="review-body"/>
        <button>Submit Review</button>
        <button>Cancel</button>
      </form>
    </div>
  )
}

export default AddReviewModal;