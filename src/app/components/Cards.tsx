import Image from 'next/image';
import React from 'react';
import Container from './Container';

const Cards = () => {
  return (
    <div>
      Cards
      <div>
        <Image src='https://dev2.growthbydesign.org/wp-content/uploads/home-cta.jpg' alt='1' width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Cards;
