import Button from '@/app/components/Button';
import React from 'react';
import CheckItem from './CheckItem';

import ContentSection from '@/app/components/(layout)/ContentSection';

const Services = () => {
  return (
    <ContentSection>
      <div className='flex justify-center gap-12'>
        {/* Image */}
        <div>Image</div>
        {/* Content */}
        <div>
          <div>
            Check out some of the FREE Services MSCU offers its members today!
          </div>
          <CheckItem />
          <CheckItem />
          <CheckItem />
          <Button />
        </div>
      </div>
    </ContentSection>
  );
};

export default Services;
