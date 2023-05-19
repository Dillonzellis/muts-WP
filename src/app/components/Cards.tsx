import Image from 'next/image';
import React from 'react';

const Cards = () => {
  return (
    <div>
      Cards
      <div>
        <Image
          src='https://dev2.growthbydesign.org/wp-content/uploads/home-cta.jpg'
          alt='1'
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Cards;
