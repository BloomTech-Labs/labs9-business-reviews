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
  margin: 0 auto;
	display: flex;
  flex-flow: row wrap;
  justify-content: space-around;  
  height: auto;
<<<<<<< HEAD

  h1 {
    text-align: center;
    width: 100%;
    font-weight: 100;
    padding-bottom: 20px;
  }
  .link {
    text-decoration: none;
    color: black;
  }
  .business {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: Roboto;
    font-weight: 800;
    margin: 20px;
    filter: drop-shadow(1px 1px 3px black);
    background: rgba(255, 255, 255, 0.8);
    margin-bottom: 50px;
    text-decoration: none;

    :hover {
      animation: shadow 0.2s;
      animation-fill-mode: forwards;
    }
    /* max-height: 380px;
    max-width: 380px; */
    width: 380px;
    height: 380px;

    @media (max-width: 850px) {
      height: 80%;
      width: 80%;
      background-color: white;
    }

    .business__img {
      .business__img--image {
        width: 100%;
        height: 100%;
      }
    }

    .business__text {
      padding: 10px;
      .business__text--name {
        display: flex;
        align-items: flex-end;
        color: white;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.75);
        width: 100%;
        height: 40px;
        font-size: 1.4rem;
        transform: translateY(-30px);
      }
      .business__text--rating {
        font-size: 2rem;
        transform: translateY(-30px);
      }
    }
  }

  @keyframes shadow {
    0% {
      box-shadow: none;
    }
    100% {
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
=======
  padding: 30px;
	h1 {
		text-align: center;
		width: 100%;
		font-weight: 100;
		padding-bottom: 10px;
	}
	.business {
		width: 22.5%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
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
>>>>>>> b92086080a79cfd2b062667bea1dc993737a25a6
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
