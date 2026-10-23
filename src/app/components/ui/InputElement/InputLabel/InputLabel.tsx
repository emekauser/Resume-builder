import { CSSProperties, FC, ReactNode } from 'react';
import styles from './Input-label.module.css';
const { inputLabel, required } = styles;

type Label = {
  label?: string;
  requiredSign?: boolean;
  htmlFor?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

const InputLabel: FC<Label> = ({
  label = '',
  requiredSign,
  className,
  children,
  ...rest
}) => {
  const label_ = label.trim();
  if (label_.length > 0) {
    return (
      <label className={`${inputLabel} ${className}`} {...rest}>
        <span>{label}</span>{' '}
        {requiredSign && label_ ? <span className={required}>*</span> : ''}
      </label>
    );
  }
  if (children) {
    return (
      <label className={`${inputLabel} ${className}`} {...rest}>
        {children}
      </label>
    );
  }
  return '';
};
export default InputLabel;
