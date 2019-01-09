import React from 'react'
import styled from 'styled-components'

const SearchBarStyles = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 100px;  
  form {
    display: flex;    
    justify-content: center;
    width: 100%;
    input {
      width: 45%;
      height: 20px;
      border-radius: 100px;
    }
  }
  .button-container {
    margin-top: 20px;
    .button {
      height: 40px;
      width: 120px;
      background: whitesmoke;
      margin-right: 20px;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
  }
`;

function SearchBar() {
  return (
    <SearchBarStyles>
      <form>
        <input placeholder="    Search..."/>
      </form>
      <div className="button-container">
        <button className="button">Review</button>
        <button className="button">Search</button>
      </div>
    </SearchBarStyles>
  )
}

export default SearchBar;