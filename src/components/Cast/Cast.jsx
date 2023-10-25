import { getMovieCast } from 'Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ImgFilm, Item, List } from './Cast.styled';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieActors = async () => {
      try {
        const response = await getMovieCast(movieId);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    };
    movieActors();
  }, [movieId]);
  return (
    <>
      {cast.length !== 0 && (
        <div>
          <h2>Movie cast </h2>
          <List>
            {cast.map(actor => (
              <Item key={actor.id}>
                <ImgFilm
                  width="200px"
                  height="300px"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : defaultImg
                  }
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </Item>
            ))}
          </List>
        </div>
      )}
      {cast.length !== 0 && (
        <div> We haven't information about cast of this movie </div>
      )}
    </>
  );
};
