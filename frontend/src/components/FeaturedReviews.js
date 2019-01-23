import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { backendLink } from '../assets/config';

export const FeaturedReviewStyles = styled.div`
	margin: 0 auto;
	display: flex;
	flex-flow: row wrap;
	width: 80%;
	height: auto;
	@media (max-width: 900px) {
		background-color: white;
		width: 100%;
		justify-content: space-around;
	}
	h1 {
		width: 100%;
	}
`;

export const CardStyle = styled.div`
	margin-left: 15px;
	@media (max-width: 900px) {
		width: 40%;
		margin: 0;
	}
	img {
		width: 200px;
		height: 200px;
		@media (max-width: 900px) {
			width: 400px;
			height: 400px;
		}
	}
	a {
		text-decoration: none;
		color: black;
	}
`;

class FeaturedReviews extends Component {
	constructor() {
		super();
		this.state = {
			reviews: []
		};
	}
	componentDidMount() {
		Axios.get(`${backendLink}/api/review`)
			.then((response) => {
				//save response data in a new variable
				const data = [ ...response.data ];
				//sorts and slices correct number of businesses
				const sorted = data.slice(0, 4);
				//sets sorted array to this.state.businesses
				this.setState(() => ({ reviews: sorted }));
			})
			.catch((err) => {
				console.error('Error:', err);
			});
	}
	render() {
		return (
			<FeaturedReviewStyles>
				<h1>Featured Reviews</h1>
				{this.state.reviews.map(({ id, title, image, poster }) => (
					<CardStyle key={id}>
						<img src={image} alt="reviewed business" />
						<p>{title}</p>
						<p>{poster}</p>
					</CardStyle>
				))}
			</FeaturedReviewStyles>
		);
	}
}

export default FeaturedReviews;
