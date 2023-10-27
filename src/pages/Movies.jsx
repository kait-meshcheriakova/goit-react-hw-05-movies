import { useState } from 'react';
import { SearchForm } from '../components/Form/Form';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { handleSearch } from 'Api';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [loading, setLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };
  useEffect(() => {
    const search = async () => {
      try {
        const movie = await handleSearch(movieName);
        setSearchResults(movie);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName, loading]);
  return (
    <div>
      <SearchForm value={movieName} onChange={updateQueryString} />
      {loading ? (
        <Loader />
      ) : searchResults.length === 0 && movieName ? (
        <h2> Nothing found</h2>
      ) : (
        <MovieList films={searchResults} />
      )}
    </div>
  );
};
export default Movies;
