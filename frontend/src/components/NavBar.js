import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import SearchBar from './SearchBar';

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .logo {
    height: 100px;
    width: 100px;
    margin-left: 50px;
  }
`;

function NavBar() {
  return (
    <NavBarStyles>
      <div className="logo_container">
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
      </div>
      <div className="nav_links">
        <a href="/addreview">add a review</a>
        <a href="/categories">categories</a>
        <a href="/toprated">top rated</a>
      </div>
    </NavBarStyles>
  )
  
}

export default NavBar;