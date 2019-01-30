import React from 'react';
import styled from 'styled-components';
import MyReviews from './MyReviews';
import NavBar from './NavBar';
import image from '../assets/white-waves.png';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-image: url(${image});
  height: auto;
`;

class UserProfile extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <NavBar />
        <StyledContainer>
          <MyReviews className='header' id={id} />
        </StyledContainer>
      </div>
    );
  }
}

export default UserProfile;
