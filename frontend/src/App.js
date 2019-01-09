import React from 'react';
import styled from 'styled-components'
import LandingPage from './components/LandingPage'
import UserProfile from './components/UserProfile'

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

function App() {
  return (
    <StyledApp className="App">
        <LandingPage />
        <UserProfile />
      </StyledApp>
  )
}

export default App;
