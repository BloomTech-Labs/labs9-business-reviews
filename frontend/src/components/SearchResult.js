import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import AddReviewModal from './AddReviewModal';
import PlaceHolderReviews from './PlaceHolderReviews';
import { backendLink } from '../assets/config';
const API_KEY = process.env.REACT_APP_API_KEY;

const StyledBusiness = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: Quicksand;
  line-height: 1.75;
  .card {
    border: 1px solid grey;
    background: white;
    border-radius: 5px;
    width: 60%;
    margin-top: 40px;
    padding: 15px;
    display: flex;
    flex-flow: column wrap;
    .business__name {
      font-size: 2.6rem;
    }
    .business__rating {
      font-size: 2.6rem;
      margin-top: -2rem;
    }
    .business__details {
      .business__details--address {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }
      .business__details--phone {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }
      .business__details--website {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        .business__website--text {
          text-decoration: none;
        }
      }
    }
    svg {
      height: 35px;
      width: 35px;
      margin-right: 1.7rem;
    }
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
      business: [],
      reviewing: false,
      reviews: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    Axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=${id}`
    )
      // .then(res => console.log(res.data.result.formatted_phone_number))
      .then(res => this.setState({ business: res.data.result }))
      .catch(err => console.log(err));
      Axios.get(
        `${backendLink}/api/business/${id}/reviews`
      )
        // .then(res => console.log(res.data.result.formatted_phone_number))
        .then(res => this.setState({ reviews: res.data }))
        .catch(err => console.log(err));  
  }
  addBusiness =()=> {
    let imageCC ='';
    if(this.state.business.photos){
      const photos = this.state.business.photos;
      const references = [];
      photos.map(photo => references.push(photo.photo_reference));
      imageCC = references[0];
    } 

    const { id } = this.props.match.params;
    Axios.post(`http://localhost:9000/api/business`, {
      id: `${id}`,
      name: this.state.business.name,
      rating: this.state.business.rating,
      image: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${imageCC}&key=${API_KEY}`
    })
      .then(res => {
        console.log('Successfully sent business to db!', res.status);
      })
      .catch(err => console.log('error', err));
  };
  toggleReviewing = e => {
    e.preventDefault();
    this.setState({ reviewing: !this.state.reviewing });
  };

  render() {  
    if (!this.state.business) return <p>Loading business...</p>;
    else {
      return (
        <StyledBusiness>
          <div className='card'>
            <h1 className='business__name'>{this.state.business.name}</h1>

            <h1 className='business__rating'>{this.state.business.rating}</h1>

            <div className='business__details'>
              <div className='business__details--address'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z' />
                </svg>
                {this.state.business.formatted_address}
              </div>

              <div className='business__details--phone'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z' />
                </svg>
                {this.state.business.formatted_phone_number}
              </div>

              <div className='business__details--website'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z' />
                </svg>
                <a
                  className='business__website--text'
                  href={this.state.business.website}
                >
                  Website
                </a>
              </div>
            </div>
            <div className='review-container'>
              <h1>Reviews</h1>
              <div className="reviews">
                {this.state.reviews?this.state.reviews.map(({title, image, id, rating}) => (                <div key={id}className='review'>
                      <h4>{title}</h4>
                      <div className='review-img1' />
                      <p>{`${rating} stars`}</p>            
                    </div>                  
                )):<PlaceHolderReviews/>}
              </div>
              <button onClick={this.toggleReviewing}>Add a Review</button>
            </div>
          </div>
          {this.state.reviewing ? (
            <AddReviewModal
              addBusiness={this.addBusiness}
              businessId={this.props.match.params}
              toggleReviewing={this.toggleReviewing}
            />
          ) : null}
        </StyledBusiness>
      );
    }
  }
}

export default SearchResult;
