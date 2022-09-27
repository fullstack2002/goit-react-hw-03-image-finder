import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import fetchData from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles.styled';

class App extends Component {
  state = {
    value: '',
    images: [],
    page: 1,
    loading: false,
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.value !== this.state.value
    ) {
      this.fetchImgs();
    }
  };

  addValue = ({ inputValue }) => {
    if (inputValue !== this.state.value) {
      this.setState({
        value: inputValue,
        images: [],
        page: 1,
      });
    } else {
      this.setState({
        value: inputValue,
      });
    }
  };

   loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  fetchImgs = async () => {
    try {
      this.setState({ loading: true });
      const imgs = await fetchData(this.state.value, this.state.page);
      imgs.hits.length === 0
        ? toast(`No results found`)
        : this.setState(prevState => ({
            images: [...prevState.images, ...imgs.hits],
          }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
   }
  };
  
  render() {
    const { images, loading } = this.state;
    return (
      <div>
        <Global styles={GlobalStyles}/>
        <Searchbar onSubmit={this.addValue} />
        {loading && images.length === 0 ? (
          <Loader />
        ) : (
          <ImageGallery items={images} />
        )}
        {images.length % 2 === 0 && images.length !== 0 ? (
          <Button onClick={this.loadMore} />
        ) : (
          ''
        )}
        <ToastContainer autoClose={5000}/>
      </div>
    );
  }
};

export default App;