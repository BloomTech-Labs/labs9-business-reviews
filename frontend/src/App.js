import React from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserProfile from './components/UserProfile';
import BillingPage from './components/BillingPage';
import Authenticate from './components/Authenticate';
import LandingNav from './components/LandingNav';
import UserTest from './components/UserTest';
import ReviewsTest from './components/ReviewsTest';

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

function App() {
  return (
    <StyledApp className='App'>
      <LandingNav />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/user' component={UserProfile} />
          <Route path='/billing' component={BillingPage} />
          <Route path='/authenticate' component={Authenticate} />
          <Route path='/test' component={UserTest} />
          <Route path='/reviews' component={ReviewsTest} />
        </Switch>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
