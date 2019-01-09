import React from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  a {
    margin-bottom: 10px;
  }
`;

function SideBar() {
  return (
    <StyledSidebar>
      <a>Search</a>
      <a>My Reviews</a>
      <a>Billing</a>
      <a>Settings</a>
    </StyledSidebar>
  )
}

export default SideBar;