import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const NotFound = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div
              className="flex flex-col items-center justify-center md:py-24 lg:py-32"
            >
              <h1 className="font-bold text-blue-600 text-9xl">404</h1>
              <p
                className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
              >
                <span className="text-red-500">Oops!</span> Page not found
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <CustomLink to='/' className='bg-amber-500 py-1 px-5 md:px-10 md:py-3 rounded'>Go To Home</CustomLink>
            </div>
            <div className="mt-4 hidden  md:block">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"
                alt="img"
                className="object-cover w-full h-full rounded shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;