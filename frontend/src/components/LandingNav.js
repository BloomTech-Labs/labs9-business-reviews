import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png'

const NavBar = styled.div`
  width: 100%;
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300,500');
  background-color: #eed974;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-family: 'Quicksand';
  margin-bottom: 2rem;

  .menu__logo--logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;

  }

  .menu__menuItems {
    height: 20px;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    text-transform: uppercase;
    a {
      color: black;
      text-decoration: none;
      margin: 10px;
    }
    a:hover {
      letter-spacing: 2px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      transition: all 280ms ease-in-out;
    }
  }

  .menu__user--text {
    margin-right: 1rem;
    color: black;
  }
`;

function LandingNav() {
  return (
    <NavBar>

      <img src={logo} alt="logo" className="menu__logo--logo"/>
      <div className='menu__menuItems'>\
        <a href="/addreview">add a review</a>
        <a href="/categories">categories</a>
        <a href="/toprated">top rated</a>
      </div>
      <div className='menu__user'>
        <a href="/signup" className='menu__user--text'>Sign Up</a>
        <a href="/signin" className='menu__user--text'>Sign In</a>
      </div>
    </NavBar>
  );
}

export default LandingNav;
