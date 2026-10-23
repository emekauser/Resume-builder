import React from 'react';
import OTP from './OTP';
import Header from '@/app/components/ui/header/Header';

const page = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <OTP email="example@gmail.com" />
    </div>
  );
};

export default page;
