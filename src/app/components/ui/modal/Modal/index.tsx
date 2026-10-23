'use client'
import { FC, ReactNode, useRef } from 'react';
import styles from './modal.module.css';

export declare type ButtonVariation =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'icon'
  | 'success'
  | 'danger'
  | 'danger-secondary'
  | 'list-item'
  | 'banner'
  | 'banner-secondary';

export interface SpinnerButtonProps {
  className?: string;
  spinning?: boolean;
  inline?: boolean;
  loadingMessage?: string;
  loadingMessageAlignment?: 'flex-start' | 'center';
}
type Props = {
  onClose?: () => void;
  onOpen?: () => void;
  children?: ReactNode;
  title?: ReactNode | string;
  isOpen?: boolean;
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
};

const Modal: FC<Props> = (props) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const {
    title,
    children,
    isOpen,
    primaryButtonLabel,
    onClose,
  } = props;
//  const [modalIsOpen, setModalIsOpen]= useState(isOpen)
  const handleModalClosing = () => {
    onClose && onClose();
  };
//   console.log('   isOpen90', isOpen);
//   if (typeof window !== 'undefined') {
//     document.addEventListener('click', (e: any) => {
//       const clickIsInsideModalContent = modalContentRef.current?.contains(
//         e.target
//       );
//       if (isOpen) {
//         console.log('RUN', isOpen);
//         console.log('clickOutModalContent', clickIsInsideModalContent);
//         if (!clickIsInsideModalContent) {
//           handleModalClosing();
//         }
//       } else {
//       }
//     });
//   }

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.show : ''}`}>
      <div
        className={`${styles.modalContent_m} ${isOpen && styles.hide_content} `}
        ref={modalContentRef}
      >
        <div
          className={styles.closeBar}
          role="button"
          onClick={() => handleModalClosing()}
        />
        <div>{title}</div>
        <div>{children}</div>
        {primaryButtonLabel ? (
          <button
            className={styles.pryBtn}
            onClick={() => handleModalClosing()}
          >
            {primaryButtonLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
