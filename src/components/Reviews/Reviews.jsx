import { getMovieReviews } from 'Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    };
    movieReviews();
  }, [movieId]);
  return (
    <>
      {reviews.length !== 0 && (
        <div>
          <h2> Movie Reviews</h2>
          {reviews.map(review => (
            <ul key={review.id}>
              <li>
                <p>Author:{review.author}</p>
                <p>{review.content}</p>
              </li>
            </ul>
          ))}
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};
