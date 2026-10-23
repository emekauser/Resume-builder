import { FC, ReactNode } from 'react';
import styles from './pageError.module.css';
import Button from '../button/Button';
import Header from '../basicHeader';
const { block,icon, subTitle, returnBackBtn, errMessage } = styles;

type Props = {
  error: {
    type: 'client' | 'server';
    title?: string;
    Icon?: ReactNode;
    whatNext?: ReactNode;
    code: number;
    cause?: string;
    message: string;
    returnLabel?: string;
    returnPath?: string;
    
  };
};

const ErrorPage: FC<Props> = ({ error }) => {
  const { type, code, title, message, whatNext, returnLabel, returnPath, Icon } =
    error;
  return (
    <div>
      <Header />
      <div className={block}>
        <div className={icon}>       {Icon}</div>
 
        <h3 className={subTitle}>
          <b>{code}</b>: {type == 'client' ? 'Client error.' : 'Server error.'}
        </h3>
        <p style={{ fontWeight: 500 }}> {title}</p>
        <p className={errMessage}>{message}</p>
        {whatNext ? (
          <>{whatNext}</>
        ) : (
          <Button
            className={returnBackBtn}
            type="link"
            href={returnPath ? returnPath : '/'}
          >
            {returnLabel ? returnLabel : 'Return back to home page'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
