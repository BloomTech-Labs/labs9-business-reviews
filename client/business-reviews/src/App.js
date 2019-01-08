import React, { Component } from 'react';
import styled from 'styled-components'
import FeaturedReviews from './components/FeaturedReviews'
import PopularBusinesses from './components/PopularBusinesses'
import PopularReviewers from './components/PopularReviewers'
import Footer from './components/Footer'

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <FeaturedReviews />
          <PopularBusinesses />
          <PopularReviewers />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
