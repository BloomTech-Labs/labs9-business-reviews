import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserProfile from './components/UserProfile';
import BillingPage from './components/BillingPage';
import Authenticate from './components/Authenticate';
import LandingNav from './components/LandingNav';

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

function App() {
  return (
    <StyledApp className="App">
      <LandingNav />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/user" component={UserProfile} />
        <Route path="/billing" component={BillingPage} />
        <Route path="/authenticate" component={Authenticate} />
      </Switch>
    </StyledApp>
  );
}

export default App;
