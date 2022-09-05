import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemWrap,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
//import Modal from 'components/Modal/Modal';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  showModal,
  id,
  largeImageURL,
}) => {
  return (
    <div>
      <ImageGalleryItemWrap key={id}>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={() => showModal({ largeImageURL, tags })}
        />
      </ImageGalleryItemWrap>
    </div>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
