'use client';
import React, { FC, useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import styles from './opt.module.css';
import useAPIs from '@/app/components/hooks/useAPIs';
import Modal from '@/app/components/ui/modal/Modal';
import { truncateWord } from '@/app/utils/utils';
import Loader from '@/app/components/ui/loaders/Loader';
import {
  EMAIL_VERIFICATION_CODE_SIZE,
  PRIMARY_COLOR,
} from '@/app/globalConstants';

type Props = {
  email?: string;
};

const { formTitle, tips, resendBtn, isDisabled, box, otpInput } = styles;
const OTP: FC<Props> = ({ email }) => {
  const INPUT_SIZE = EMAIL_VERIFICATION_CODE_SIZE || 4;
  const { loading = true } = useAPIs();
  const [otp, setOtp] = useState('');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (otp.length === INPUT_SIZE) {
      console.log('size otp', otp);
      // make a network call
    }
  }, [otp]);

  const handleModalOpening = () => {
    setOpenModal(true);
  };
  const handleModalClosing = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={`form ${box}`}>
        <h3>Verify your account</h3>
        <h4 className={formTitle}>
          <span> Enter the 4-digit code sent to you at:</span>
          <br />
          {email}
        </h4>
        <div>
          <div className={styles.otpInputsBox}>
            <OtpInput
              value={otp}
              inputStyle={otpInput}
              onChange={setOtp}
              numInputs={INPUT_SIZE}
              renderInput={(props) => <input {...props} />}
            />
          </div>
        </div>
        <p className={tips}>
          Tip: Be sure to check your inbox and spam folders
        </p>

        <p>
          Can&apos;t find the code?
          {email ? (
            <button
              className={`${resendBtn}`}
              onClick={() => {
                handleModalOpening();
              }}
            >
              &nbsp;
              <span>Resend</span>
              &nbsp;
            </button>
          ) : null}
        </p>
      </div>

      {/* MODAL */}
      <Modal
        onOpen={handleModalOpening}
        onClose={handleModalClosing}
        isOpen={openModal}
      >
        <p className={styles.resendCodeDesc}>
          Resend code to: <br />
          <span> {truncateWord(email as string, 45)}</span>
        </p>

        <button
          className={`primary-button ${styles.btn} ${
            loading ? isDisabled : null
          } `}
        >
          {loading ? (
            <Loader className={styles.loader} color={PRIMARY_COLOR} />
          ) : (
            <span> Resend</span>
          )}
        </button>
        <button
          onClick={handleModalClosing}
          className={`primary-button ${styles.cancelBtn} ${
            loading ? styles.disableCancel : null
          }`}
        >
          Cancel
        </button>
      </Modal>
    </>
  );
};

export default OTP;
