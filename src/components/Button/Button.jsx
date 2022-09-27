import { LoadButton } from 'components/Button/Button.styled';
import PropTypes from 'prop-types'

const Button = ({ onClick }) => {
  return (
    <LoadButton type="button" onClick={onClick}>
      Load More
    </LoadButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;