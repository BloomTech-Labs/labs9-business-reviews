import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { backendLink } from '../assets/config';
import PlaceHolderReviews from './PlaceHolderReviews';

const StyledReviews = styled.div`
  width: 80%;
  height: auto;
	display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  border: 1px solid blue;
	.review {
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid black;
    background:white;
    height: auto;
    width: 30%;
    display: flex;
    flex-direction: column;
    .review-img {
      width: 80%;
      height: 100px;
      background: darkmagenta;
      border: 1px solid black;
    }
    h4 {
      width: 100%;
      text-align: center;
      border: 1px solid black;
    }
  }
`;

class MyReviews extends Component {
	constructor() {
		super();
		this.state = {
			reviews: []
		};
	}
	componentDidMount() {
		const id = this.props.id;
		Axios.get(`${backendLink}/api/user/${id}/reviews`)
			.then((res) => this.setState({ reviews: res.data }))
			.catch((err) => console.log(err));
	}
	render() {
		return (
			<StyledReviews>
				{this.state.reviews ? (
					this.state.reviews.map(({ title, body, image, id, rating }) => (
						<div key={id} className="review">
							<div className="review-img" />
							<h4>{title}</h4>
							<p>{body}</p>
							<h4>{`${rating} stars`}</h4>
						</div>
					))
				) : (
					<PlaceHolderReviews />
				)}
			</StyledReviews>
		);
	}
}

export default MyReviews;
