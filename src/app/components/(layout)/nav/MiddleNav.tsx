import Image from 'next/image';
import React from 'react';
import Button from '../../Button';
import Container from '../Container';

const MiddleNav = () => {
  return (
    <div className='bg-white text-black'>
      <Container>
        <div className='flex justify-between'>
          <Image
            src='https://dev2.growthbydesign.org/wp-content/uploads/Logo.png'
            width={257}
            height={65}
            alt='logo'
          />
          <Button btnText='Login' textClass='uppercase font-bold' />
        </div>
      </Container>
    </div>
  );
};

export default MiddleNav;
