import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import SingleBusiness from './SingleBusiness';
import { backendLink } from '../assets/config';

export const PopularBusinessesStyles = styled.div`
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
  .link {
    text-decoration:none;
    color: black;
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


class PopularBusinesses extends Component {
	constructor() {
		super();
		this.state = {
			businesses: [],
			isOpen: false
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
					<Link className="link"key={Math.random()} to={`/business/${id}`}>
						<CardStyle  id={id}>
							<img src={image} alt="reviewed business" />
							<p>{name}</p>
							<h3>{rating}</h3>
						</CardStyle>
					</Link>
				))}
				{this.state.isOpen ? <SingleBusiness toggleModal={this.toggleModal} /> : null}
			</PopularBusinessesStyles>
		);
	}
}
export default PopularBusinesses;
