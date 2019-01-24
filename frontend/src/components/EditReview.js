import React, { Component } from 'react';
import Axios from 'axios';
import {backendLink} from '../assets/config'

export default class EditReview extends Component {
  constructor(){
    super();
    this.state={
      review: []
    } 
  }
  componentDidMount(){
    const {reviewId} = this.props.match.params;
    Axios.get(`${backendLink}/api/review/${reviewId}`)
			.then((res) => this.setState({ review: res.data }))
			.catch((err) => console.log(err));
  }
  render() {
    console.log(this.state.review)
    return (
      <div className="edit-container">
        <form>
          <input />
          <textarea />
        </form>
      </div>
    )
  }
}
