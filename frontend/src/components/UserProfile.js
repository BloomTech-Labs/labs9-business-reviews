import React from 'react';
import ProfileNav from './ProfileNav';
import SideBar from './SideBar';
import MyReviews from './MyReviews';
import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 600px;
	margin-top: 20px;
	.openModal {
		width: 200px;
		height: 100px;
	}
`;

function UserProfile() {
	return (
		<div>
			<ProfileNav />
			<StyledContainer>
				<SideBar />
				<MyReviews />
			</StyledContainer>
		</div>
	);
}

export default UserProfile;
