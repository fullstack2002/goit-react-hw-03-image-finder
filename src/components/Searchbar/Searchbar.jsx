import { ReactComponent as Icon } from '../imgs/icon.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, InputStyles, FormStyled, LabelStyled, Search } from './Searchbar.styled';
import { Formik, Form, Field } from 'formik';
import { Container } from 'components/App/Container.styled';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    if (values.inputValue === '') {
      toast('Please, enter what do you want to find!');
    } else {
      onSubmit(values);
    }
  };
  return (
    <Search>
      <Container>
        <Formik initialValues={{ inputValue: '' }} onSubmit={handleSubmit}>
          <FormStyled>
            <Form>
              <LabelStyled>
                <Field
                name="inputValue"
                as={InputStyles}
                placeholder="Search images and photos"
                autocomplete="off"/>
              </LabelStyled>
              <Button type="submit">
                <Icon width="20" height="20" />
              </Button>
            </Form>
          </FormStyled>
       </Formik>
      </Container>
    </Search>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;