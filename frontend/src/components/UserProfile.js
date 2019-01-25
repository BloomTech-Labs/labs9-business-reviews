import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import MyReviews from './MyReviews';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: auto;
  margin-top: 20px;
`;

class UserProfile extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <StyledContainer>
          <SideBar />
          <MyReviews id={id} />
        </StyledContainer>
      </div>
    );
  }
}

export default UserProfile;
