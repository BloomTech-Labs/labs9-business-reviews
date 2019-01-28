import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const StyledSidebar = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  background: white;
  width: 15%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  a {
    margin-bottom: 10px;
    text-decoration: none;
    color: black;
  }
`;

function SideBar() {
  return (
    <StyledSidebar>
      <a href="/search">Search</a>
      <a href="/myreviews">My Reviews</a>
      <Link to="/billing">Billing</Link>
      <a href="settings">Settings</a>
    </StyledSidebar>
  )
}

export default SideBar;