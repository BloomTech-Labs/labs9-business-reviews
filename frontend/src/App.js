import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BillingPage from './components/BillingPage';
import Login from './components/Login';
import LandingNav from './components/LandingNav';
import Footer from './components/Footer';
import SearchResult from './components/SearchResult';
import UpdateUser from './components/UpdateUser';
import ResetPassword from './components/ResetPassword';
import UpdatePassword from './components/UpdatePassword';
import UserProfile from './components/UserProfile';
import RegisterForm from './components/RegisterForm';
import EditReview from './components/EditReview';

const StyledContainer = styled.div`
  margin: 0 auto;
  // max-width: 1200px;
`;

function App() {
  return (
    <div className='App'>
      <LandingNav />
      <StyledContainer className='container'>
        <Route exact path='/' component={LandingPage} />
        <Route path='/billing' component={BillingPage} />
        <Route path='/updateuser' component={UpdateUser} />
        <Route path='/resetpassword' component={ResetPassword} />
        <Route path='/login' render={props => <Login {...props} />} />
        <Route path='/updatepassword/:id' component={UpdatePassword} />
        <Route
          path='/business/:id'
          render={props => <SearchResult {...props} />}
        />
        <Route
          exact
          path='/user/:id'
          render={props => <UserProfile {...props} />}
        />
        <Route
          path='/user/:userId/review/:reviewId'
          render={props => <EditReview {...props} />}
        />
        <Route path='/register' component={RegisterForm} />
      </StyledContainer>
      <Footer />
    </div>
  );
}

export default App;
