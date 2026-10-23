import { PRIMARY_COLOR } from '@/app/globalConstants';
import React, { FC } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

type Props = {
  loading?: boolean;
  className?: string;
  color?: string;
};
const Loader: FC<Props> = ({ loading = true, color, className }) => {
  return (
    <>
      <ClipLoader
        className={className}
        loading={loading}
        color={color?.trim() || PRIMARY_COLOR}
      />
    </>
  );
};

export default Loader;
