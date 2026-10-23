import React, { FC, useState } from 'react';
import styles from './toast.module.css';
import { Icons } from '../../asset';
import { ERROR_COLOR, PRIMARY_COLOR } from '@/app/globalConstants';
const { show, toast, body } = styles;

const { ErrorIcon, CheckIcon, WarningIcon, InformationIcon } = Icons;

type Variant = 'error' | 'success' | 'warning' | 'info';

type Props = {
  message: string;
  title?: string;
  preventDuplicate?: boolean;
  onClose?: () => void;
  hideIconVariant?: boolean;
  className?: string; // Ignores displaying multiple snackbars with the same `message`
  variant?: 'error' | 'success' | 'warning' | 'info';
};

const getToastIcon = (variant: Variant) => {
  switch (variant) {
    case 'error':
      return <ErrorIcon color={ERROR_COLOR} size={'1.5rem'} />;
    case 'warning':
      return <WarningIcon size={'1.5rem'} color={ERROR_COLOR} />;
    case 'info':
      return <InformationIcon size={'1.5rem'} color={PRIMARY_COLOR} />;
    default:
      return <CheckIcon size={'1.5rem'} color={'teal'} />;
  }
};

const Toast: FC<Props> = ({ message, title, hideIconVariant, variant }) => {
  return (
    <div className={`${toast} ${Boolean(message) && show}`}>
      <div>
        {hideIconVariant ? '' : getToastIcon(variant as Variant)}
        <div className={body}>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
/* 
Snackbar, Toast, Alert, Flag or Notification are all different names that refer to 
the same concept. They are used to display confirmation, alert or acknowledgement 
about a task carried out by the app. These event-driven messages, usually appear 
on the corner of center of the screen over the app content, and require minimal
 user interaction to disappear.
*/
export default Toast;
