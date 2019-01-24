import React, { Component } from 'react';
import Axios from 'axios';
import {backendLink} from '../assets/config'

export default class EditReview extends Component {
  constructor(){
    super();
    this.state={
      title:'',
      body:'',
      rating:1
    } 
  }
  changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    
  }
  componentDidMount(){
    const {reviewId} = this.props.match.params;
    Axios.get(`${backendLink}/api/review/${reviewId}`)
			.then((res) => this.setState(...res.data))
			.catch((err) => console.log(err));
  };
  render() {
    console.log(this.state)
    return (
      <div className="edit-container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="review-title">Title</label>
          <input
            onChange={this.changeHandler}
            name="title"
            value={this.state.title}
            className="review-title"
          />
          <label htmlFor="review-body" />
          <textarea
            onChange={this.changeHandler}
            name="body"
            value={this.state.body}
            className="review-body"
          />
          <select onChange={this.changeHandler} name="rating" value={this.state.rating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option defaultValue="5">5</option>
          </select>
          <button onClick={this.handleSubmit}>Submit Review</button>
          <button onClick={this.props.toggleReviewing}>Cancel</button>
        </form>
      </div>
    )
  }
}
