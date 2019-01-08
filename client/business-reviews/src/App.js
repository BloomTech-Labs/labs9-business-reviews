import React, { Component } from 'react';
import FeaturedReviews from './components/FeaturedReviews'
import PopularBusinesses from './components/PopularBusinesses'
import PopularReviewers from './components/PopularReviewers'

class App extends Component {
  render() {
    return (
      <div className="App">
      <FeaturedReviews />
      <PopularBusinesses />
      <PopularReviewers />
      </div>
    );
  }
}

export default App;
