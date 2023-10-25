import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMovieDetails } from 'Api';
import { useEffect } from 'react';
import { useState } from 'react';
// import Loader from 'components/Loader/Loader';
import { useRef } from 'react';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  //   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const movieDetails = async () => {
      try {
        // setLoading(true);
        const movie = await getMovieDetails(movieId);
        setMovieDetails(movie);
        // setLoading(false);
      } catch (error) {
        toast.warning(`Sorry! We don't have information about this film`);
      }
    };
    movieDetails();
  }, [movieId]);
  if (!movieDetails) {
    return navigate('/', { replace: true });
  }
  return (
    <div>
      <Link to={backLinkLocationRef.current}>Back to products</Link>
      {movieDetails && (
        <>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                : defaultImg
            }
            width="400"
            alt="poster"
          />

          <div>
            <h2>
              {movieDetails.title} (
              {movieDetails.release_date &&
                movieDetails.release_date.slice(0, 4)}
              )
            </h2>
            <p>
              User Score:
              {movieDetails.vote_average &&
                Math.floor(movieDetails.vote_average * 10)}
              %
            </p>

            <h2>Overview:</h2>
            <p> {movieDetails.overview}</p>
            <h3>Genres: </h3>
            <p>
              {movieDetails.genres.map(genre => (
                <span key={genre.id}> {genre.name}</span>
              ))}
            </p>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to="cast">Cast</Link>{' '}
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
};
// export default MovieDetails;
