import React, { FC } from 'react';
import styles from './pageLoader.module.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { PRIMARY_COLOR } from '@/app/globalConstants';
const { modalOverlay, modalContent_m, processing } = styles;

type Props = {
  loading: boolean;
};
const PageLoader: FC<Props> = ({ loading }) => {
  return (
    <div className={`${modalOverlay} ${loading ? styles.show : ''}`}>
      <div className={modalContent_m}>
        <ClipLoader loading={loading} color={PRIMARY_COLOR} />
        <span className={processing}> Processing...</span>
      </div>
    </div>
  );
};

export default PageLoader;
