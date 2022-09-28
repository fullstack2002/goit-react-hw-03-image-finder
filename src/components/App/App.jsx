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
    loadMore: false,
    totalQuantity: 0,
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
        totalQuantity: 0,
        loadMore: false,
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
    const { value, page, totalQuantity } = this.state;
    this.setState({ loading: true });
    try {
      const imgs = await fetchData(value, page);

      if (imgs.totalHits === 0) {
        toast(`No results found`)
      }

      const newTotalQuantity = totalQuantity + 12;
      this.setState(({ images }) => {
        return {
          images: [...images, ...imgs.hits],
          totalQuantity: newTotalQuantity,
        }
      });
      
      if (newTotalQuantity < imgs.totalHits) {
        this.setState({loadMore: true})
      }
      else {
        this.setState({loadMore: false})
      }

    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };


  render() {
    const { images, loading, loadMore } = this.state;
    const data = Boolean(images.length);
    return (
      <div>
        <Global styles={GlobalStyles} />
        <Searchbar onSubmit={this.addValue} />
        {data && <ImageGallery items={images} />}
        {loadMore && <Button onClick={this.loadMore} />}
        {loading && <Loader/>}
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
};

export default App;