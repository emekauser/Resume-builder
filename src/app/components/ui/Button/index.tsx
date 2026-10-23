import { FC, ReactNode } from 'react';
import styles from './button.module.css';
import Link from 'next/link';
import Loader from '../loaders/Loader';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  additionStyle?: { [key: string]: string | number };
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | 'link';
  onClick?: (event: any) => void;
  href?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    disabled,
    loading,
    type,
    href,
    fullWidth,
    additionStyle,
    ...rest
  } = props;

  if (type === 'link') {
    return (
      <Link
        href={href as string}
        className={`${styles.linkButton} ${className}`}
        role="button"
      >
        <span> {loading ? 'Processing...' : children}</span>
      </Link>
    );
  }
  return (
    <button
    
      className={[
        styles.btn,
        className,
        (disabled || loading) && styles.greyBg, fullWidth && styles.full
      ].join(' ')}
      style={additionStyle}
 
      type={type}
      {...rest}
      disabled={disabled || loading}
    >
      {loading ? <Loader/> : children}
    </button>
  );
};

export default Button;
