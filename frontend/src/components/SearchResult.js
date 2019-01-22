import React from 'react';

const SearchResult = props => {
  return (
    <div>
      <h1>{props.business.id}</h1>
      <h2>{props.business.rating}</h2>
      {/* {props.business.photos.map(photo => (
        <h1>map</h1>
      ))} */}
    </div>
  );
};
export default SearchResult;
