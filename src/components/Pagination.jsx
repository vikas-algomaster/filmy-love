import React from 'react';

const Pagination = ({pageNumber, goToNextPage, goToPreviousPage}) => {

  return <div className='mt-8 mb-6 md:mt-12 md:mb-8'>
      <div className='flex justify-center'>
      <button onClick={goToPreviousPage} className='bg-blue-600 rounded-l-xl py-1 md:py-2 px-2 md:px-4 text-white outline-none'>Previous</button>
      <button className='py-2 px-4 border-y-2 border-blue-400 outline-none'>{pageNumber}</button>
      <button onClick={goToNextPage} className='bg-blue-600 rounded-r-xl py-1 md:py-2 px-2 md:px-4 text-white outline-none'>Next</button>
      </div>
  </div>;
};

export default Pagination;
