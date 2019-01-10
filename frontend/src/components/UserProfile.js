import React from 'react'
import ProfileNav from './ProfileNav'
import SideBar from './SideBar'
import MyReviews from './MyReviews'
import styled from 'styled-components'
import Modal from './Modal'

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 600px;
  margin-top: 20px;
  .openModal{
    width: 200px;
    height: 100px;
  }
`;

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <ProfileNav />
        <StyledContainer>
          <SideBar />
          <MyReviews />
          <button className="openModal" onClick={this.toggleModal}>
            Open Modal
          </button>
          <Modal show={this.state.isOpen} onClose={this.toggleModal} />
        </StyledContainer>
      </div>
    )
  }  
}

export default UserProfile;