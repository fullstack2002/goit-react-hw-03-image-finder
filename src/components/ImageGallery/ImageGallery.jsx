import { Container } from 'components/App/Container.styled';
import { ImageGalleryList, GalleryBox } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ items }) => {
  return (
    <GalleryBox>
      <Container>
      <ImageGalleryList>
        {items.map(({ id, ...restProps }) => (
          <li key={id}>
            <ImageGalleryItem {...restProps} />
          </li>
        ))}
      </ImageGalleryList>
    </Container>
    </GalleryBox>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;