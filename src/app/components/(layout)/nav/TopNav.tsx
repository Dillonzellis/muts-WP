import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Container from '../Container';

const TopNav = () => {
  return (
    <div className='bg-zinc-100 py-4 text-black'>
      <Container>
        <div className='flex gap-12'>
          <div className='flex gap-4'>
            <div>
              <PhoneIcon className='h-6 w-6 text-brandingGreen-400' />
            </div>
            <div>(800) 771 6695</div>
          </div>
          <div className='flex gap-4'>
            <div>
              <EnvelopeIcon className='h-6 w-6 text-brandingGreen-400' />
            </div>
            <div>mutualsavingscu@mutualsavingscu.org</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
