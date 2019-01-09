import React from 'react'
import PopularReviewers from './PopularReviewers'
import PopularBusinesses from './PopularBusinesses'
import FeaturedReviews from './FeaturedReviews'

function LandingPage() {
  return (
    <div>
      <FeaturedReviews />
      <PopularBusinesses />
      <PopularReviewers />
    </div>
  )
}

export default LandingPage;