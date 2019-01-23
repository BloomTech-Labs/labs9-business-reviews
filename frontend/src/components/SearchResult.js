import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const StyledBusiness = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .business-card {
    border: 1px solid grey;
    background: white;
    border-radius: 5px;
    width: 80%;
    margin-top: 40px;
    padding: 15px;
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    .review-container {
      display: flex;
      width: 100%;
      flex-flow: row wrap;
      h1 {
        width: 100%;
      }
      .reviews {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .review {
          width: 25%;
          .review-img1 {
            width: 85%;
            height: 100px;
            background: blue;
          }
          .review-img2 {
            width: 85%;
            height: 100px;
            background: red;
          }
          .review-img3 {
            width: 85%;
            height: 100px;
            background: green;
          }
        }
      }
    }
  }
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

  render() {
    if (!this.state.business) return <p>Loading business...</p>;
    else {
      return (
        <StyledBusiness>
          <div className='business-card'>
            <h1>{this.state.business.name}</h1>
            <h2>{this.state.business.rating} stars</h2>
            {/* {open.open_now?<p>Open Now</p>:<p>Closed Now</p>} */}
            <p>{this.state.business.formatted_address}</p>
            <p>{this.state.business.formatted_phone_number}</p>
            {this.state.business.website ? (
              <a href={this.state.business.website}>Website</a>
            ) : null}

            <div className='review-container'>
              <h1>Reviews</h1>
              <div className='reviews'>
                <div className='review'>
                  <div className='review-img1' />
                  <p>
                    <span role='img' aria-label='stars'>
                      ⭐⭐⭐
                    </span>
                  </p>
                  <h3>@eddbunk</h3>
                </div>
                <div className='review'>
                  <div className='review-img2' />
                  <p>
                    <span role='img' aria-label='stars'>
                      ⭐⭐⭐⭐⭐
                    </span>
                  </p>
                  <h3>@alixjones</h3>
                </div>
                <div className='review'>
                  <div className='review-img3' />
                  <p>
                    <span role='img' aria-label='stars'>
                      ⭐⭐
                    </span>
                  </p>
                  <h3>@carloG</h3>
                </div>
              </div>
            </div>
          </div>
        </StyledBusiness>
      );
    }
  }
}

export default SearchResult;
