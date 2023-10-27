import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'Api';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      getTrendingMovies()
        .then(trendingFilms => {
          setTrendingMovies(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);
  return (
    <div>
      <h2>Trending Movies</h2>

      <MovieList films={trendingMovies} />
      {loading && <Loader />}
    </div>
  );
};
export default Home;
