import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor() {
    super();
  }

  render () {
    if(!this.props.show) {
      return null;
    }

    const backdropStyle = {

    };

    const modalStyle = {

    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;