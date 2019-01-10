import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(4, 0, 0, 0.7);
  .modal{
    width: 350px;
    height: 500px;
    border: 1px solid grey;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: white;
  }
`;

class Modal extends Component {
  constructor() {
    super();
  }

  render () {
    if(!this.props.show) {
      return null;
    }

    return (
      <BackdropStyle>
        <div className="modal">
          {this.props.children}
          <div>
            <h1>A Business</h1>
            <p>Review by: ReviewGuy</p>
              <form>
              <textarea>
                This place sucks!
              </textarea>
            </form>
          </div>
          <div className="footer">
            <button className="close-button" onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </BackdropStyle>
        
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;