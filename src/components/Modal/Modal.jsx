import React, { Component } from 'react';
import { Overlay, ModalWindow, ModalImg } from './Modal.styled';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };
  
  handleClickByEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  
   handleClickOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

   componentDidMount() {
    window.addEventListener('keydown', this.handleClickByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClickByEsc);
  }

  render() {
    const { image, tags } = this.props;
    return (
      <Overlay onClick={this.handleClickOnBackdrop}>
        <ModalWindow>
          <ModalImg src={image} alt={tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;