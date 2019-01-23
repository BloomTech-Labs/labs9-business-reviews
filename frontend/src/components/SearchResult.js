import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const StyledBusiness = styled.div`
`;

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      business: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    Axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyCJBfHA6unIW_6p7vl9KMjTVgEbt0o9XsE&placeid=${id}`
    )
      // .then(res => console.log(res.data.result.formatted_phone_number))
      .then(res => this.setState({ business: res.data.result }))
      // .then(this.state.business.photo.map(photo => {
      // 	photoRefs.push(photo.photo_reference)
      // }))
      .catch(err => console.log(err));
  }

}

export default SearchResult;
