import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { backendLink } from '../assets/config';
import SearchBar from './SearchBar';

import bg1 from '../assets/backgrounds/artmuseum.jpeg';
import bg2 from '../assets/backgrounds/bar.jpeg';
import bg3 from '../assets/backgrounds/bowling.jpeg';
import bg4 from '../assets/backgrounds/butcher.jpeg';
import bg5 from '../assets/backgrounds/diner.jpeg';
import bg6 from '../assets/backgrounds/donuts.jpeg';
import bg7 from '../assets/backgrounds/kitchen.jpeg';
import bg8 from '../assets/backgrounds/movietheater.jpeg';
import bg9 from '../assets/backgrounds/produce.jpeg';
import bg10 from '../assets/backgrounds/recordshop.jpeg';
import bg11 from '../assets/backgrounds/suits.jpeg';
import logo from '../assets/bonafind.png';

let backgrounds = [ bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11 ];

const NavBar = styled.div`
  height: auto;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 75vh;


  .logo {
    animation: pulse 0.7s;
    animation-iteration-count: 2;
    animation-delay: 1s;

    @media (max-height: 800px) {
      width: 300px;
      height: 325px;
    }
    @media (max-height: 690px) {
      width: 250px;
      height: 270px;
    }

    @media (max-height: 560px) {
      display: none;
    }
  }

  .logo__text {
    @media (max-height: 560px) {
      display: inline-block;
      font-family: Patua One;
      font-size: 3.5rem;
      color: white;
      letter-spacing: 1rem;
    }
  }

  .blur-container {
    width: 100%;
    height: 75px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    box-sizing: border-box;
    /* margin-bottom: 70px; */
    .top-nav-items {
      width: 100%;
      box-sizing: border-box;
      max-width: 1200px;
      height: auto;
      display: flex;
      padding-top: 20px;
      margin: 0 auto;
      .menu__menuItems {
        width: 70%;
        height: auto;
        display: flex;
        align-items: center;
        @media (max-width: 900px) {
          width: 100%;
          font-size: 2.6rem;
        }
        a {
          font-size: 1.4rem;
          box-sizing: border-box;
          color: white;
          width: 100%;
          text-decoration: none;
          text-align: center;
          margin: 10px;
          @media (max-width: 900px) {
            color: white;
            font-size: 1rem;
            padding: 5px;
            margin: 0;
          }
        }
      }
      .menu__user {
        box-sizing: border-box;
        color: black;
        width: 30%;
        display: flex;
        justify-content: flex-end;

	svg {
		filter: invert(1) sepia(0) saturate(0) hue-rotate(175deg);
		animation: pulse 0.7s;
		animation-iteration-count: 2;
		animation-delay: 1s;
	}
	@media (max-width: 700px) {
		height: 650px;
	}
`;

class LandingNav extends React.Component {

  state = { user: {}, loggedIn: false };
  handleLogout = async () => {
    const res = await axios.get(`${backendLink}/api/user/logout`, {
      withCredentials: 'include'
    });
    res.status === 200
      ? this.setState({ loggedIn: false })
      : console.log('Error Logging Out');
  };
  async componentDidMount() {
    const res = await axios.get(`${backendLink}/api/user/me`, {
      withCredentials: 'include'
    });
    if (!res.data.user) return this.setState({ loggedIn: false });
    const [user] = res.data.user;
    this.setState({ user, loggedIn: true });
  }
  render() {
    return (
      <NavBar>
        <div className='blur-container'>
          <div className='top-nav-items'>
            <div className='menu__menuItems'>
              <a href='#Businesses'>businesses</a>
              <a href='#Reviewers'>reviewers</a>
              <a href='/subscription'>go pro ✔</a>
            </div>
            <div className='menu__user'>
              {!this.state.loggedIn ? (
                <React.Fragment>
                  <Link to='/login' className='menu__user--text'>
                    sign in
                  </Link>
                  <Link to='/register' className='menu__user--text'>
                    sign up
                  </Link>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p onClick={this.handleLogout}>sign out</p>
                  <Link to='/settings' className='menu__user--text'>
                    settings
                  </Link>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        <div className='inner-nav-container'>
          <img className='logo' src={logo} alt='logo' />
          <p className='logo__text'>Bonafind</p>
          <SearchBar />
        </div>
      </NavBar>
    );
  }
}

export default LandingNav;
