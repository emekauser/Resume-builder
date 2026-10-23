import { FC, ReactNode, useRef } from 'react';
import styles from './template-preview.module.css';

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
  children?: ReactNode;
  title?: ReactNode | string;
  isOpen?: boolean;
  mobileFullScreen?: boolean;
  primaryButton?: ReactNode | string;
  secondaryButton?: ReactNode | string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  hidePrimaryButton?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryButtonDisabled?: boolean;
  backgroundColor?: string;
  disableClickAway?: boolean;
};

const MobileModal: FC<Props> = (props) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const {
    title,
    children,
    isOpen,
    primaryButtonLabel,
    primaryButtonDisabled,
    hidePrimaryButton,
    onClose = () => {},
  } = props;

  const handleModalClosing = () => {
    onClose();
  };

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
        <div className={styles.modalTitle}>
          <span> {title}</span>
        </div>
        <div>{children}</div>
        {hidePrimaryButton ? (
          ''
        ) : primaryButtonDisabled ? (
          <></>
        ) : (
          <button
            className={styles.pryBtn}
            onClick={() => handleModalClosing()}
          >
            {primaryButtonLabel}
          </button>
        )}
        {primaryButtonDisabled ? (
          <></>
        ) : (
          <button
            className={styles.pryBtn}
            onClick={() => handleModalClosing()}
          >
            {primaryButtonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileModal;

// import React, { FC } from 'react';

// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// type Props = {
//   children?: React.ReactNode;
//   closeModal?: () => void;
//   title?: string;
//   isOpen?: boolean;
// };
// const TemplatePreviewModal: FC<Props> = (props) => {
//   let subtitle: { style: { [key: string]: string | number } };
//   const { children, title, isOpen, closeModal } = props;

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

//   return (
//     <div>
//       <Modal
//         isOpen={isOpen as boolean}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel={title}
//       >
//         {children}
//       </Modal>
//     </div>
//   );
// };
// export default TemplatePreviewModal;
