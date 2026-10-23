import React, { FC } from 'react';
import styles from './sections.module.css';
const { title, title_b } = styles;

type Props = {
  label: string;
};
const SectionTitle: FC<Props> = ({ label }) => {
  return (
    <div className={title_b}>
      <p className={title}>{label}</p>
    </div>
  );
};

export default SectionTitle;
