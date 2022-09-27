import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import { GalleryItemImg } from '../ImageGalleryItem/ImageGalleryItem.styled';
import PropTypes from 'prop-types';

  class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  state = {
    showModal: false,
    };
    
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <div>
        <GalleryItemImg
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        ;
        {this.state.showModal && (
          <Modal
            image={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

export default ImageGalleryItem;