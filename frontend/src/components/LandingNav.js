import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: flex-end;
  .navButtons {
    border: 1px solid black;
    height: 40px;
    display: flex;
    a {
      text-decoration: none;
      margin: 10px;
      
    }
  }
`;

function LandingNav() {
  return (
    <NavBar>
      <div className="navButtons">
        <a>Sign Up</a>
        <a>Sign In</a>
      </div>
    </NavBar>
  )
}

export default LandingNav;