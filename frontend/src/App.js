import React from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
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

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

function App() {
  return (
    <div className='App'>
      <LandingNav />
      <StyledContainer className='container'>
          <Route exact path='/' component={LandingPage} />
          <Route path='/billing' component={BillingPage} />
          {/* <Route path='/login' exact component={Login} /> */}
          <Route path='/updateuser' component={UpdateUser} />
          <Route path='/resetpassword' component={ResetPassword} />
          <Route path='/login' component={Login} />
          <Route path='/updatepassword/:id' component={UpdatePassword} />
          <Route
            path='/business/:id'
            render={props => <SearchResult {...props} />}
          />
          <Route
            path='/user/:id'
            render={props => <UserProfile {...props} />}
          />
          <Route path='/register' component={RegisterForm} />
      </StyledContainer>
      <Footer />
    </div>
  );
}

export default App;
