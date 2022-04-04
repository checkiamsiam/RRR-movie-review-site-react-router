import React from 'react';
import useReviewData from '../../hooks/Review-data';
import rrrPoser from '../../image/rrr-poster.jpg'
import CustomLink from '../CustomLink/CustomLink';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
  const [reviews] = useReviewData();
  const topReviews = reviews.filter(review => review.rating >= 4);
  return (
    <div>
      <div className="container flex md:flex-row flex-col-reverse p-3 md:p-20 gap-12">
        <div className='text-left font-mono md:p-20 py-5 px-1 shadow-lg rounded'>
          <h1 className='text-5xl font-bold text-lime-400'>RRR-Rise Roar Revolt</h1>
          <h1 className='text-4xl font-bold text-amber-500'>A film by SS Rajamolli</h1>
          <p className='py-4 text-xl md:mb-5'>RRR is the one of the big project of SS Rajamoli , he spends 4 year in this project with very high budget , he cast two popular south indian actor in lead roles with one A-listed bollywood actor and actress in cameo.</p>
          <CustomLink to='/dashboard' className='bg-amber-500 p-1 md:p-5 rounded'>Checkout box-Office</CustomLink>
        </div>
        <div>
          <img className='rounded shadow-2xl' src={rrrPoser} alt="rrr-poster" />
        </div>
      </div>
      <div className="container p-5">
        <h1 className='text-5xl font-bold'>Top Reviews</h1>
        <div className="review-container md:flex m-5 gap-4 ">
          {topReviews.map(top => <ReviewCard key={top.id} data={top}></ReviewCard>)}
        </div>
        <CustomLink to='/reviews' className='bg-amber-500 mb-5 px-20 py-1 rounded-lg'>See All</CustomLink>
      </div>
    </div>
  );
};

export default Home;