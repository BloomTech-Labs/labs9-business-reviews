import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { backendLink } from '../assets/config';
import image from '../assets/white-waves.png';

export const PopularBusinessesStyles = styled.div`
	width: 100%;
	background-image: url(${image});
	background-repeat: repeat;
	background-position: center;
	box-sizing: border-box;
	padding: 20px 40px;
	margin: 0 auto;
	display: flex;
	flex-flow: row wrap;
	height: auto;

	h1 {
		text-align: center;
		width: 100%;
		font-weight: 100;
		padding-bottom: 20px;
	}
	.business {
		width: 22.5%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin: 10px;
		background: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		color: black;
		:hover,
		:focus {
			box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
			transform: translateY(-2px);
		}
		@media (max-width: 850px) {
			height: 80%;
			width: 80%;
			background-color: white;
		}
		.business__img--image {
			width: 100%;
		}
		h1,
		h4 {
			font-family: Roboto;
			font-weight: 200;
			text-align: center;
			width: 100%;
			margin-top: 5px;
		}
	}
`;

class PopularBusinesses extends Component {
	constructor() {
		super();
		this.state = {
			businesses: []
		};
	}
	componentDidMount() {
		axios
			.get(`${backendLink}/api/business`)
			.then((response) => {
				//save response data in a new variable
				const data = [ ...response.data ];
				//sorts and slices correct number of businesses
				const sortedAndSliced = data
					.sort((a, b) => (a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0))
					.slice(0, 4);
				//sets sorted array to this.state.businesses
				this.setState(() => ({ businesses: sortedAndSliced }));
			})
			.catch((err) => {
				console.error('Error:', err);
			});
	}
	render() {
		return (
			<PopularBusinessesStyles>
				<h1>Popular Businesses</h1>
				{this.state.businesses.map(({ id, name, rating, image }) => (
					<Link className="business" key={id} to={`/business/${id}`}>
						<img className="business__img--image" src={image} alt="reviewed business" />
						<h4 className="business__text--name">{name}</h4>
						<h1 className="business__text--rating">{rating}</h1>
					</Link>
				))}
			</PopularBusinessesStyles>
		);
	}
}
export default PopularBusinesses;
