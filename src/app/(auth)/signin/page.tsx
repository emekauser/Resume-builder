import React from 'react';
import SignIn from './SignIn';
import Header from '@/app/components/ui/header/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign in',
};

const page = () => {
  return (
    <div>
      <Header />
      <SignIn />
    </div>
  );
};

export default page;
