import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import scriptLoader from 'react-async-script-loader';
=======
import { Route, Link } from 'react-router-dom';
>>>>>>> d87c8f32b96343c6df08e0f6450deeec7175bb6e

const SearchBarStyles = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  form {
    display: flex;
    justify-content: center;
    width: 100%;
    input {
      width: 60%;
      height: 30px;
      padding-left: 15px;
    }
  }
  .button-container {
    margin-top: 20px;
    .button {
      height: 40px;
      width: 120px;
      background: whitesmoke;
      margin-right: 20px;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;

class SearchBar extends React.Component {
<<<<<<< HEAD
=======
  constructor() {
    super();
    this.state = {
      business: [
        {
          id: '',
          adr_address: '',
          photos: [],
          place_id: '',
          rating: 0,
          website: ''
        }
      ]
    };
  }

  componentDidMount() {
    const input = document.querySelector('#dropdown'); /// yooooooooo
    const dropdown = new window.google.maps.places.Autocomplete(input);
    dropdown.addListener('place_changed', () => {
      const place = dropdown.getPlace();
      this.setState({ business: place });
      console.log(this.state.business.id);
      // id, adr_address, photos, place_id, rating, website
    });
  }

>>>>>>> d87c8f32b96343c6df08e0f6450deeec7175bb6e
  render() {
    return (
      <SearchBarStyles>
        <form>
<<<<<<< HEAD
          <input placeholder="Search..." id="dropdown" />
        </form>
        <div className="button-container">
          <button className="button">Review</button>
          <button className="button">Search</button>
=======
          <input id='dropdown' placeholder='Search...' />
        </form>
        <div className='button-container'>
          <button className='button'>Review</button>
          <Link to={`/business/${this.state.business.place_id}`}>
            <button className='button'>Search</button>
          </Link>
>>>>>>> d87c8f32b96343c6df08e0f6450deeec7175bb6e
        </div>
      </SearchBarStyles>
    );
  }
}

export default SearchBar;
