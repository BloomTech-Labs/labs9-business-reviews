import React, { Component } from 'react';
import Axios from 'axios';
import {backendLink} from '../assets/config'

export default class EditReview extends Component {
  constructor(){
    super();
    this.state={
      reviews: []
    } 
  }
  componentDidMount(){
    const {id} = this.props.match.params;
    Axios.get(`${backendLink}/api/review/${id}`)
			.then((res) => this.setState({ reviews: res.data }))
			.catch((err) => console.log(err));
  }
  render() {
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
