import React from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BillingPage from './components/BillingPage';
import Authenticate from './components/Authenticate';
import LandingNav from './components/LandingNav';
import UserTest from './components/UserTest';
import ReviewsTest from './components/ReviewsTest';
import Footer from './components/Footer';
import SearchResult from './components/SearchResult';
import UpdateUser from './components/UpdateUser';
import ResetPassword from './components/ResetPassword';
import UpdatePassword from './components/UpdatePassword';
import MyReviews from './components/MyReviews';
import UserProfile from './components/UserProfile';

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return (
    <div className="App">
      <LandingNav />
      <StyledContainer className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/billing" component={BillingPage} />
            <Route path="/authenticate" component={Authenticate} />
            <Route path="/test" component={UserTest} />
            <Route path="/updateuser" component={UpdateUser} />
            <Route path="/reviews" component={ReviewsTest} />
            <Route path="/resetpassword" component={ResetPassword} />
            <Route path="/updatepassword/:id" component={UpdatePassword} />
            <Route
              path="/business/:id"
              render={props => <SearchResult {...props} />}
            />
            <Route
              path="/user/:id"
              render={props => <UserProfile {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </StyledContainer>
      <Footer />
    </div>
  );
}

export default App;
