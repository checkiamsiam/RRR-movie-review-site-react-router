import React from 'react';
import useReviewData from '../../hooks/Review-data';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
  const [reviews] = useReviewData();
  return (
    <div className='md:flex flex-wrap justify-center p-5'>
      {reviews.map(review=> <ReviewCard key={review.id} data={review}></ReviewCard>)}
    </div>
  );
};

export default Reviews;