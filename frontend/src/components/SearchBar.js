import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchBarStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    input {
      width: 60%;
      height: 30px;
      padding-left: 15px;
    }

    .search__input {
      color: white;
      height: 50px;
      width: 550px;
      font-size: 1.4rem;
      margin-right: 30px;
      border: none;

      background-color: rgba(0, 0, 0, 0.5);
      ::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    .button {
      background-color: #eed974;
      font-size: 1.1rem;
      height: 55px;
      width: 120px;
      margin-right: 10px;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;

class SearchBar extends React.Component {
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
    });
  }

  render() {
    return (
      <SearchBarStyles>
        <form>
          <input
            className='search__input'
            id='dropdown'
            placeholder='What are you looking for?'
          />
          <Link to={`/business/${this.state.business.place_id}`}>
            <button className='button'>search</button>
          </Link>
        </form>
      </SearchBarStyles>
    );
  }
}

export default SearchBar;
