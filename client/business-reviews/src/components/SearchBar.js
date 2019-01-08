import React from 'react'

function SearchBar() {
  return (
    <div>
      <form>
        <input placeholder="search"/>
      </form>
      <div className="button-container">
        <button className="review-button"></button>
        <button className="search-button"></button>
      </div>
    </div>
  )
}

export default SearchBar;