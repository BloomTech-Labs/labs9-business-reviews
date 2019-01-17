import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const NavBar = styled.div`
  width: 100%;
  height: auto;
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300,500');
  background-color: #eed974;  
  .inner-nav-container{
    max-width: 1200px;    
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    font-family: 'Quicksand';
    margin-bottom: 2rem;
    @media(max-width: 900px){
      flex-direction: column;
      padding: 0;
    }
    .menu__logo--logo {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      @media(max-width: 900px){
        height: 400px;
        width: 400px;
        margin-bottom: 20px;
        margin-top: 20px;
      }    
    }
    .menu__menuItems {
      width: 100%;
      height: auto;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      flex-direction: row;
      text-transform: uppercase;
      @media(max-width: 900px){
      flex-direction: column;
      font-size: 3rem;
      }
      a {        
        color: black;
        width: 100%;
        text-decoration: none;
        margin: 10px;
        @media(max-width: 900px){
          background: #142E41;
          color: white;
          margin: 0;
        }
      }
      a:hover {
        letter-spacing: 2px;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        transition: all 280ms ease-in-out;
      }
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
      <div className="inner-nav-container">
        <img src={logo} alt='logo' className='menu__logo--logo' />
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
