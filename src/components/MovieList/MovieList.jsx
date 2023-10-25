import { List, Item, LinkDetails, ImgFilm } from './MovieList.styled';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieList = ({ films }) => {
  return (
    <List>
      {films.map(movie => (
        <Item key={movie.id}>
          <LinkDetails to={`/movies/${movie.id}`} cover={movie.poster_path}>
            <ImgFilm
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              alt="poster"
            />
            <p>{movie.title ?? movie.movieName}</p>
          </LinkDetails>
        </Item>
      ))}
    </List>
  );
};
export default MovieList;
