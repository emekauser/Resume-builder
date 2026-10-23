import React, { FC, ReactNode } from 'react';
import styles from './section-box.module.css';

const { sectionContainer } = styles;
type Props = {
  children: ReactNode;
};
const SectionBox: FC<Props> = ({ children }) => {
  return <div className={sectionContainer}>{children}</div>;
};

export default SectionBox;
