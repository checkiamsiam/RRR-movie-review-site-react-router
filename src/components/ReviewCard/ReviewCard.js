import React from 'react';

const ReviewCard = ({ data }) => {
  return (
    <div className='md:w-1/2'>
      <div className="max-w-md w-full md:max-w-full md:flex md:m-10 mb-3">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              {data.rating > 4.4 ? 'Public' : 'Only Member'}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">{data.rating} Out Of 5</div>
            <p className="text-gray-700 text-base uppercase">{data.reviewed}</p>
          </div>
          <div className="flex items-center">
            <img src={data.img} alt="" className="w-10 h-10 rounded-full mr-4" />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{data.name}</p>
                <p className="text-gray-600">{data.date}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;