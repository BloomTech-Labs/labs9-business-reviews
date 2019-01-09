import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div>
                This is a modal!
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