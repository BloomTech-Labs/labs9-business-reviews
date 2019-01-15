import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left-nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    a {
      margin-right: 10px;
    }
    p {
      margin-right: 10px;
    }
  }
  .right-nav {
    display: flex;
    align-items: center;
  }
`;

function ProfileNav() {
  return (
    <StyledNav >
      <div className="left-nav">
        <NavLink to="/">Home</NavLink>
        <p>></p>
        <p>My Reviews</p>
      </div>
      <div className="right-nav">
        <a href="/signout">Sign Out</a>
      </div>
    </StyledNav>
  )
}

export default ProfileNav;