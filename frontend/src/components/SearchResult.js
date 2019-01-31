import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import AddReviewModal from './AddReviewModal';
import { backendLink } from '../assets/config';
import NavBar from './NavBar';
import image from '../assets/white-waves.png';
import map from '../assets/map.svg';
import phone from '../assets/phone.svg';
import calendar from '../assets/calendar.svg';
import web from '../assets/web.svg';

const API_KEY = process.env.REACT_APP_API_KEY;

const StyledBusiness = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${image});
  line-height: 1.2;
  margin-bottom: 50px;
  font-family: Roboto;

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
      font-family: 'Patua One';
      font-size: 4rem;
    }
    .business__rating {
      font-size: 4rem;
      margin-top: -3.1rem;
    }

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

    .business__details--hours {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .business__details--website {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      padding-right: 2rem;
      .business__website--text {
        text-decoration: none;
      }
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

          .review__title {
            font-family: Roboto;
          }

          .review__rating {
            margin-top: -1.3rem;
          }

          .review__img {
            width: 85%;
            height: 100px;
          }
        }
      }
    }

    .svg {
      height: 35px;
      width: 35px;
      margin-right: 1.7rem;
    }

    .btn {
      background-color: #eed974;
      height: 40px;
      width: 120px;
      margin-right: 20px;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .openNow {
      color: limegreen;
    }

    .closedNow {
      color: red;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;

      @media (max-width: 1250px) {
        grid-template-columns: repeat(1, 1fr);
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
      reviews: [],
      hours: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=${id}`
    )
      .then(res => this.setState({ business: res.data.result }))
      .catch(err => console.log(err));
    Axios.get(`${backendLink}/api/business/${id}/reviews`)

      .then(res => this.setState({ reviews: res.data }))
      .catch(err => console.log(err));
  }

  addBusiness = () => {
    let imageCC = '';
    if (this.state.business.photos) {
      const photos = this.state.business.photos;
      const references = [];
      photos.map(photo => references.push(photo.photo_reference));
      imageCC = references[0];
    }

    const { id } = this.props.match.params;
    Axios.post(`${backendLink}/api/business`, {
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
    // creates a variable- imageCC- to store the Places ID for first image provided of the // // business from the Places API and then appends that ID to a string which is used for
    // the image href source

    let imageCC = '';
    let imageURL = '';
    if (this.state.business.photos) {
      const photos = this.state.business.photos;
      const references = [];
      photos.map(photo => references.push(photo.photo_reference));
      imageCC = references[0];
      imageURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${imageCC}&key=${API_KEY}`;
    }

    // creates a boolean variable- isOpen- that determines if the business is open
    let isOpen;
    if (!this.state.business) return <p>Loading business...</p>;
    else {
      if (
        this.state.business &&
        this.state.business.opening_hours !== undefined
      ) {
        // openBoolean = this.state.business.opening_hours.open_now;
        isOpen = 'Open';
      } else {
        isOpen = 'Closed';
      }

      // creates an array- 'hours'- of hours for each day of the week
      let hours = [];
      if (
        this.state.business &&
        this.state.business.opening_hours !== undefined
      ) {
        hours = this.state.business.opening_hours.weekday_text;
      }

      console.log(hours[0]);

      return (
        <div>
          <NavBar />
          <StyledBusiness>
            <div className='card'>
              <img src={imageURL} alt='Business' />
              <h1 className='business__name'>{this.state.business.name}</h1>

              <h1 className='business__rating'>
                {this.state.business.rating} / 5
              </h1>

              <div className='grid'>
                <div className='business__details--address'>
                  <img className='svg' src={map} alt='map' />
                  {this.state.business.formatted_address}
                </div>

                <div className='business__details--phone'>
                  <img className='svg' src={phone} alt='phone' />
                  {this.state.business.formatted_phone_number}
                </div>

                <div className='business__details--hours'>
                  <img className='svg' src={calendar} alt='calendar' />
                  <div className='business__details--hours--week'>
                    {/* this will map out the hours for each day  */}
                    {hours.map(hour => {
                      return <div>{hour}</div>;
                    })}
                  </div>
                </div>

                <div className='business__details--website'>
                  <img className='svg' src={web} alt='web' />
                  <a
                    className='business__website--text'
                    href={this.state.business.website}
                  >
                    {this.state.business.website}
                  </a>
                </div>
              </div>
              <div className='review-container'>
                <h1>Reviews</h1>
                <div className='reviews'>
                  {this.state.reviews.map(
                    ({ title, business_image, id, rating }) => (
                      <div key={id} className='review'>
                        <p className='review__title'>{title}</p>
                        <p className='review__rating'>{`${rating} stars`}</p>
                        <img
                          src={business_image}
                          alt='reviewed business'
                          className='review__img'
                        />
                      </div>
                    )
                  )}
                </div>
                <button className='btn' onClick={this.toggleReviewing}>
                  Add a Review
                </button>
              </div>
            </div>
            {this.state.reviewing ? (
              <AddReviewModal
                imageURL={imageURL}
                businessName={this.state.business.name}
                addBusiness={this.addBusiness}
                businessId={this.state.business.place_id}
                toggleReviewing={this.toggleReviewing}
              />
            ) : null}
          </StyledBusiness>
        </div>
      );
    }
  }
}

export default SearchResult;
