import React from 'react';
import Axios from 'axios';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    Axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyCJBfHA6unIW_6p7vl9KMjTVgEbt0o9XsE&placeid=${id}`
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>testin'</h1>
        {/* <h1>{props.business.id}</h1>
        <h2>{props.business.rating}</h2> */}
        {/* {props.business.photos.map(photo => (
          <h1>map</h1>
        ))} */}
      </div>
    );
  }
}

export default SearchResult;
