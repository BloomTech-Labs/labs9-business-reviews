import React from 'react';
import styled from 'styled-components';

const ModalStyles = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(4, 0, 0, 0.7);
	.review-modal {
		width: 60%;
		height: 200px;
		border: 1px solid grey;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		background-color: white;
	}
`;
function AddReviewModal({toggleReviewing}) {
	return (
		<ModalStyles>
			<div className="review-modal">
        <h1>Add A Review</h1>
				<form>
					<label htmlFor="review-title">Title</label>
					<input className="review-title" />
					<label htmlFor="review-body" />
					<input className="review-body" />
					<button>Submit Review</button>
					<button onClick={toggleReviewing}>Cancel</button>
				</form>
			</div>
		</ModalStyles>
	);
}

export default AddReviewModal;
