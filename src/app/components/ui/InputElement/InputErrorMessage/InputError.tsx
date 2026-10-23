import React, { CSSProperties, FC } from 'react';
import styles from './inputErrorMassage.module.css'

type Props = {
  errorMessage: string;
  style?: CSSProperties;
  className?: string;
};

const InputErrorMessage: FC<Props> = ({ errorMessage, className, ...rest }) => {
  if (Boolean(errorMessage?.trim())) {
    return (
      <p className={`${styles.errorMsg} ${className}`} {...rest}>
        {errorMessage}
      </p>
    );
  }
  return '';
};

export default InputErrorMessage;
