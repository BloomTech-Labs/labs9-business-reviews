import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import SearchBar from './SearchBar';

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 130px;
  background: #142e41;
  .logo {
    height: 100px;
    width: 100px;
    margin-left: 50px;
  }
  .nav-links {
    width: 50%;
		height: auto;
  }
  a {
    color: white;
    text-decoration: none;
    padding-left: 150px;
    margin-right: 100px;
  }
  img {
    border-radius: 100px;
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