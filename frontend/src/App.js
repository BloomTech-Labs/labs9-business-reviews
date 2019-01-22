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
<<<<<<< HEAD
import UpdateUser from './components/UpdateUser';
import ResetPassword from './components/ResetPassword';
=======
import Footer from './components/Footer';
import SearchResult from './components/SearchResult';
>>>>>>> d87c8f32b96343c6df08e0f6450deeec7175bb6e

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

function App() {
  return (
<<<<<<< HEAD
    <StyledApp className="App">
      <LandingNav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/user" component={UserProfile} />
          <Route path="/billing" component={BillingPage} />
          <Route path="/authenticate" component={Authenticate} />
          <Route path="/test" component={UserTest} />
          <Route path="/updateuser" component={UpdateUser} />
          <Route path="/reviews" component={ReviewsTest} />
          <Route path="/resetpassword" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </StyledApp>
=======
    <div className='App'>
      <LandingNav />
      <StyledContainer className='container'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/user' component={UserProfile} />
            <Route path='/billing' component={BillingPage} />
            <Route path='/authenticate' component={Authenticate} />
            <Route path='/test' component={UserTest} />
            <Route path='/reviews' component={ReviewsTest} />
            <Route
              path='/business/:id'
              render={props => <SearchResult {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </StyledContainer>
      <Footer />
    </div>
>>>>>>> d87c8f32b96343c6df08e0f6450deeec7175bb6e
  );
}

export default App;
