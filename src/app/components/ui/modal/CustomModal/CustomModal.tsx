'use client';
import styles from './customModal.module.css';
import Modal from 'react-modal';
import { FC, ReactNode } from 'react';

const { ReactModal__Content_c, pryBtn } = styles;

typeof window !== 'undefined' && document.getElementById('#main') && Modal.setAppElement('#main');
// Modal.setAppElement('#main');

type Props = {
  isOpen: boolean;
  contentLabel?: string;
  onClose?: () => void;
  onOpen?: () => void;
  children?: ReactNode;
  title?: ReactNode | string;
  mobileFullScreen?: boolean;
  primaryButton?: ReactNode | string;
  secondaryButton?: ReactNode | string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryButtonDisabled?: boolean;
  backgroundColor?: string;
  disableClickAway?: boolean;
  // closeOnOutsideClick?: () => void;
  onRequestClose?: () => void;
};

const CustomModal: FC<Props> = (props) => {
  const {
    title,
    children,
    isOpen,
    primaryButtonLabel,
    contentLabel,
    onClose,
    onRequestClose,
  } = props;

  const handleModalClosing = () => {
    onClose && onClose();
  };
  return (
    <>
      <Modal
        className={ReactModal__Content_c}
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={onRequestClose}
        contentLabel={contentLabel}
      >
        <div>{title}</div>
        <div>{children}</div>
        {primaryButtonLabel ? (
          <button className={pryBtn} onClick={() => handleModalClosing()}>
            {primaryButtonLabel}
          </button>
        ) : null}
      </Modal>
    </>
  );
};
export default CustomModal;
