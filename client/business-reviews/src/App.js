import React, { Component } from 'react';
import styled from 'styled-components'
import SearchBar from './components/SearchBar'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'

const StyledApp = styled.div`
  margin: 0 auto;
`;

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
      <StyledApp className="App">
        <Container>
          <SearchBar />
          <LandingPage />
          <Footer />
        </Container>
      </StyledApp>
    );
  }
}

export default App;
