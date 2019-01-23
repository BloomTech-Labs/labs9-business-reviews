import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const NavBar = styled.div`
  width: 100%;
  height: auto;
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300,500');
  background-color: #eed974;
  @media (max-width: 900px) {
    background-color: white;
  }
  .inner-nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    font-family: 'Quicksand';
    @media (max-width: 900px) {
      flex-direction: column;
      padding: 0;
    }
    .menu__logo--logo {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      @media (max-width: 900px) {
        height: 400px;
        width: 400px;
        margin-bottom: 20px;
        margin-top: 20px;
        border-radius: 0;
      }
    }
    .menu__menuItems {
      width: 60%;
      height: auto;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      flex-direction: row;
      text-transform: uppercase;
      @media (max-width: 900px) {
        width: 100%;
        flex-direction: column;
        font-size: 2.6rem;
      }
      a {
        color: black;
        width: 100%;
        text-decoration: none;
        text-align: center;
        margin: 10px;
        @media (max-width: 900px) {
          background: #142e41;
          color: white;
          padding: 5px;
          margin: 0;
        }
      }
      a:hover {
        letter-spacing: 2px;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        transition: all 280ms ease-in-out;
      }
    }
    .menu__user {
      margin-right: 1rem;
      color: black;
      width: 15%;
      padding: 10px;
      @media (max-width: 900px) {
        display: flex;
        justify-content: center;
        width: 100%;
        background: #142e41;
        color: white;
        margin: 0;
      }
      .menu__user--text {
        text-decoration: none;
        color: black;
        margin-right: 10px;
        @media (max-width: 900px) {
          color: white;
          :hover {
            letter-spacing: 2px;
            border-top: 1px solid white;
            border-bottom: 1px solid white;
            transition: all 280ms ease-in-out;
          }
        }
      }
    }
  }
`;

function LandingNav() {
  return (
    <NavBar>
      <div className='inner-nav-container'>
        <a href='/'>
          <img src={logo} alt='logo' className='menu__logo--logo' />
        </a>
        <div className='menu__menuItems'>
          <a href='/addreview'>add a review</a>
          <a href='/categories'>categories</a>
          <a href='/toprated'>top rated</a>
        </div>
        <div className='menu__user'>
          <a href='/signup' className='menu__user--text'>
            Sign Up
          </a>
          <a href='/signin' className='menu__user--text'>
            Sign In
          </a>
        </div>
      </div>
    </NavBar>
  );
}

export default LandingNav;
