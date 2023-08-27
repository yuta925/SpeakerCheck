import React, { useEffect, useState } from 'react';
import { getManuscript, Manuscript } from '../yuta/Manuscript';

const ReviewComponent: React.FC<{ bookId: string }> = ({ bookId }) => {
  const [reviews, setReviews] = useState<Manuscript[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getManuscript(bookId);
      setReviews(fetchedReviews);
      console.log(fetchedReviews)
    };

    fetchReviews();
  }, [bookId]);
  
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((review) => (
        <div>
          <p>Content: {review.title}</p>
          <p>Rating: {review.text}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ReviewComponent;
