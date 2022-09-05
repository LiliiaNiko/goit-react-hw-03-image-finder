import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImagesGalleryContainer } from './ImagesGallery.styled';
import Modal from 'components/Modal/Modal';

class ImagesGallery extends Component {
  state = {
    openModal: false,
    largeImageURL: '',
    tags: '',
  };

  showModal = ({ largeImageURL, tags }) => {
    this.setState({
      openModal: true,
      largeImageURL: largeImageURL,
      tags: tags,
    });
  };

  closeModal = () => {
    this.setState({
      openModal: false,
      largeImageURL: '',
      tags: '',
    });
  };

  render() {
    const items = this.props.items;
    return (
      <>
        <ImagesGalleryContainer>
          {items.map(item => (
            <ImageGalleryItem
              key={item.id}
              id={item.id}
              webformatURL={item.webformatURL}
              largeImageURL={item.largeImageURL}
              tags={item.tags}
              showModal={this.showModal}
            />
          ))}
        </ImagesGalleryContainer>
        {this.state.openModal && (
          <Modal
            onCloseModal={this.closeModal}
            largeImageURL={this.state.largeImageURL}
            tags={this.state.tags}
          />
        )}
        ;
      </>
    );
  }
}

export default ImagesGallery;

ImagesGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
