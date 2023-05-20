import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../../Button';
import Container from '../Container';

const MiddleNav = () => {
  return (
    <div className='bg-white py-2'>
      <Container>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image
              src='https://dev2.growthbydesign.org/wp-content/uploads/Logo.png'
              width={257}
              height={65}
              alt='logo'
            />
          </Link>
          <Button btnText='Login' textClass='uppercase font-bold' link='#' />
        </div>
      </Container>
    </div>
  );
};

export default MiddleNav;
