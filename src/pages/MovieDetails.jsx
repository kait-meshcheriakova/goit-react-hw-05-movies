import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMovieDetails } from 'Api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import {
  Container,
  Description,
  Image,
  LinkTo,
  LinkToBack,
  List,
  ListItem,
} from './MovieDetails.styled';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const movie = await getMovieDetails(movieId);
        setMovieDetails(movie);
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
    <Container>
      <LinkTo to={backLinkLocationRef.current}>
        <HiArrowLeft />
        Back to products
      </LinkTo>
      {movieDetails && (
        <>
          <Image
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                : defaultImg
            }
            width="400"
            alt="poster"
          />

          <Description>
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
            <List>
              <ListItem>
                <LinkTo to="cast">Cast</LinkTo>
              </ListItem>
              <ListItem>
                <LinkTo to="reviews">Reviews</LinkTo>
              </ListItem>
            </List>
          </Description>
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetails;
