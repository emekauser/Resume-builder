import React, { FC } from 'react';
import styles from './build-cv.module.css';
import SideBar from './sidebar/SideBar';


const { content, mainBlock } = styles;

type Prop = {
  children: React.ReactNode;
};

const layout: FC<Prop> = ({ children }) => {
  return (
    <div className={content}>
      <SideBar />
      <section className={mainBlock}>{children}</section>
    </div>
  );
};

export default layout;
//http://localhost:3000/build-cv/sections/skills
