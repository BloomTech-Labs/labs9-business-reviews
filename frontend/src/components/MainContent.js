import React from 'react';
import PopularReviewers from './PopularReviewers';
import PopularBusinesses from './PopularBusinesses';

function MainContent() {
  return (
    <div>
      <PopularBusinesses />
      <PopularReviewers />
    </div>
  );
}

export default MainContent;
