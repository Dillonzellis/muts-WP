import React from 'react';
import MainNav from './MainNav';
import MiddleNav from './MiddleNav';
import TopNav from './TopNav';

const nav = () => {
  return (
    <div>
      <TopNav />
      <MiddleNav />

      <MainNav />
    </div>
  );
};

export default nav;
