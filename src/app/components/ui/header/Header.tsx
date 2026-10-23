import Image from 'next/image';
import React from 'react';
import {  images } from '../../asset';
const { logo } = images;

const Header = () => {
  return (
    <div className="page-width">
      <Image alt="logo" src={logo} className="header-logo" />
    </div>
  );
};

export default Header;
