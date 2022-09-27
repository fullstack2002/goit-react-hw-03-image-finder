import axios from 'axios';

const fetchData = async (value, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=29208432-6a5cd8309506d586e27a98af9&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );
  return response.data;
}
export default fetchData;