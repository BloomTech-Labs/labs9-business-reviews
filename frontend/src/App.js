import React from 'react';
import styled from 'styled-components'
import { Route, Switch } from "react-router-dom"
import LandingPage from './components/LandingPage'
import UserProfile from './components/UserProfile'
import BillingPage from './components/BillingPage'

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

function App() {
  return (
    <StyledApp className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/user" component={UserProfile} />
        <Route path="/billing" component={BillingPage} />
      </Switch>
    </StyledApp>
  )
}

export default App;
