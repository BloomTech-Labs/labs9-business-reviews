import React from 'react';
import styled from 'styled-components';
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
          <MyReviews id={id} />
        </StyledContainer>
      </div>
    );
  }
}

export default UserProfile;
