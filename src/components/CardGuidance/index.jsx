/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

const index = ({ icon, title, text }) => {
  return (
    <div className='grow h-96 basis-56 flex flex-col gap-3 items-center justify-center bg-Anatonelly-Primary rounded-md shadow-lg shadow-white/20 lg:hover:shadow-white/50 lg:hover:bg-Anatonelly-Secundary lg:hover:scale-105 transition-all duration-300 p-6 border border-yellow-500'>
      <div className='flex flex-col items-center justify-center'>
        {icon}
        <span className='font-bold text-lg text-white'>{title}</span>
      </div>
      <span className='text-center text-white'>{text}</span>
    </div>
  );
};

export default index;
