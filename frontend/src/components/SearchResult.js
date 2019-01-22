import React, { Component } from 'react';

class SearchResult extends Component {
  constructor({ business }) {
    super();
    this.state = {
      business: business
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.business.id}</h1>
        <img src={this.props.business.photos[0]} alt='bruh' />
        <h2>{this.props.business.rating}</h2>
        <h3>{this.props.business.adr_address}</h3>
      </div>
    );
  }
}
export default SearchResult;
