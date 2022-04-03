import React from 'react';
import rrrPoser from '../../image/rrr-poster.jpg'
import CustomLink from '../CustomLink/CustomLink';

const Home = () => {
  return (
    <div>
      <div className="container flex md:flex-row flex-col-reverse p-10 md:p-20 gap-12">
        <div className='text-left font-mono md:p-20 shadow-lg rounded'>
          <h1 className='text-5xl font-bold text-lime-400'>RRR-Rise Roar Revolt</h1>
          <h1 className='text-4xl font-bold text-amber-500'>A film by SS Rajamolli</h1>
          <p className='py-4 text-xl mb-5'>RRR is the one of the big project of SS Rajamoli , he spends 4 year in this project with very high budget , he cast two popular south indian actor in lead roles with one A-listed bollywood actor in cameo.</p>
          <CustomLink to='/dashboard' className='bg-amber-500 p-5 rounded'>Checkout box-Office</CustomLink>
        </div>
        <div>
          <img className='rounded shadow-2xl' src={rrrPoser} alt="rrr-poster" />
        </div>
      </div>
      <div className="container">
        <h1>Top Reviews</h1>
      </div>
    </div>
  );
};

export default Home;