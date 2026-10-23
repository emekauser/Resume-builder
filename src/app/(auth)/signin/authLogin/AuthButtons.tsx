import React, { FC } from 'react';
import styles from './authSignIn.module.css';
import { Icons } from '@/app/components/asset';
const { GoogleIcon, LinkedinAuthIcon } = Icons;

type Prop = {
  linePosition?: 'top' | 'bottom';
  label?: string;
};

const Line = () => {
  return <div className={styles.rule}>Or</div>;
};

const AuthSignIn: FC<Prop> = ({ linePosition = 'top'}) => {
  return (
    <>
      {linePosition === 'top' && <Line />}
      <div className={styles.authButtons}>
        <button>
          <GoogleIcon size="1.5rem" />
          Google
        </button>
        <button>
          <LinkedinAuthIcon size="1.5rem" color="#0073b1" />
          LinkedIn
        </button>
      </div>
      {linePosition === 'bottom' && <Line  />}
    </>
  );
};

export default AuthSignIn;
