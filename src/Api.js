import axios from 'axios';

const API_KEY = '7b34a3c54007436dcc2939a589b7d72f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};
export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`, params);
  return response.data.results;
};
export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, params);
  return response.data;
};
export const getMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`, params);
  return response.data.cast;
};
export const getMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`, params);
  return response.data.results;
};

export const handleSearch = async movieName => {
  const response = await axios.get(`/search/movie?query=${movieName}`, params);
  return response.data.results;
};
