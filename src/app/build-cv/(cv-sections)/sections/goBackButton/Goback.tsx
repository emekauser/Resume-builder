'use client';
import { Icons } from '@/app/components/asset';
import React from 'react';
import styles from './go-back.module.css';
import { useRouter } from 'next/navigation';

const { ArrowBackIcon } = Icons;
const { goBackBtn } = styles;
const GoBack = () => {
  const router = useRouter();
  return (
    <button className={goBackBtn} onClick={() => router.back()}>
      <ArrowBackIcon size={'1rem'} className={styles.icon} />
      Go Back
    </button>
  );
};

export default GoBack;
