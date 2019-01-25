import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(4, 0, 0, 0.7);
  .review__modal {
    width: 70%;
    padding: 20px;
    height: 200px;
    border: 20px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;

    .review__modal--form {
      border: 5px solid blue;
      display: flex;
      flex-direction: column;
    }

    .review__modal--label {
      color: red;
    }
  }
`;
class AddReviewModal extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      rating: 0
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    Axios.post(`http://localhost:9000/api/review`, {
      title: this.state.title,
      body: this.state.body,
      rating: this.state.rating,
      business_image: this.props.imageUrl,
      business_name: this.props.businessName,
      business_id: this.props.businessId,
      reviewer_id: 69
    })
      .then(res => {
        console.log('Success!', res.status);
        this.setState({ title: '', body: '', rating: 0 });
      })
      .catch(err => console.log('error', err));
    this.props.addBusiness();
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <ModalStyles>
        <div className='review__modal'>
          <h1>Add a Review</h1>
          <form className='review__modal--form' onSubmit={this.handleSubmit}>
            <label className='review__modal--label'>Title</label>
            <input
              onChange={this.changeHandler}
              name='title'
              value={this.state.title}
              className='review__form--title'
            />
            <label htmlFor='review-body' />
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
        </div>
      </ModalStyles>
    );
  }
}

export default AddReviewModal;
