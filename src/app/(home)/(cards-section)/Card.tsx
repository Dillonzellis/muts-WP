import React from 'react';

const Card = () => {
  return (
    <div className='inline-flex rounded-xl border-2 border-slate-600 bg-white p-4 text-black shadow-md'>
      <div className='flex flex-col gap-4'>
        <div className='text-black'>Card Title</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sequi
          laudantium praesentium nihil deserunt, ipsa eum deleniti.
        </div>
        <div>Learn More</div>
      </div>
    </div>
  );
};

export default Card;
