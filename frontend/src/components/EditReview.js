import React, { Component } from 'react';
import Axios from 'axios';
import { backendLink } from '../assets/config';
import styled from 'styled-components';

const StyledEdit = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;

  form {
    filter: drop-shadow(1px 1px 1px black);
    padding: 10px;
    border: 1px solid black;
    background: #f1f1f1;
    height: auto;
    line-height: 0.2;
    text-decoration: none;
    color: black;
    box-sizing: border-box;
    padding: 10px;
    margin-top: 35px;
    width: 60%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    border-radius: 5px;
    h1 {
      width: 100%;
    }
    input {
      width: 55%;
      height: 30px;
      margin: 0 10%;
      margin-bottom: 20px;
    }
    textarea {
      width: 55%;
      height: 200px;
      margin: 0 10%;
      resize: none;
    }
    select {
      width: 10%;
      margin: 0 10%;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    form {
      padding-top: 30px;
      width: 80%;
      height: auto;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      h1 {
        width: 100%;
      }
      input {
        width: 80%;
        height: 30px;
        margin-bottom: 15px;
      }
      textarea {
        width: 80%;
        height: 200px;
        border: 1px solid whitesmoke;
        margin-bottom: 15px;
        resize: none;
      }
      select {
        width: 10%;
        margin: 0 5%;
      }
    }
  }
`;

export default class EditReview extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      rating: 1
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { reviewId } = this.props.match.params;
    Axios.put(`${backendLink}/api/review/${reviewId}`, {
      title: this.state.title,
      body: this.state.body,
      rating: this.state.rating,
      reviewer_id: `${this.props.match.params.userId}`
    })
      .then(res => {
        console.log('Success!', res.status);
        this.setState({ title: '', body: '', rating: 1 });
      })
      .catch(err => console.log('error', err));
  };
  componentDidMount() {
    const { reviewId } = this.props.match.params;
    Axios.get(`${backendLink}/api/review/${reviewId}`)
      .then(res => this.setState(...res.data))
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state);
    return (
      <StyledEdit className='edit-container'>
        <form onSubmit={this.handleSubmit}>
          <h1>Edit your review</h1>
          <input
            onChange={this.changeHandler}
            name='title'
            value={this.state.title}
            className='review-title'
          />
          <textarea
            onChange={this.changeHandler}
            name='body'
            value={this.state.body}
            className='review-body'
          />
          <select
            onChange={this.changeHandler}
            name='rating'
            value={this.state.rating}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option defaultValue='5'>5</option>
          </select>
          <button onClick={this.handleSubmit}>Submit Review</button>
          <button onClick={this.props.toggleReviewing}>Cancel</button>
        </form>
      </StyledEdit>
    );
  }
}
