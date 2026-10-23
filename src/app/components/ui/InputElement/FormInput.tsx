'use client';
import React, { CSSProperties, FC, ReactNode, useRef, useState } from 'react';
import styles from './form-input.module.css';
import InputLabel from './InputLabel/InputLabel';
import InputErrorMessage from './InputErrorMessage/InputError';

const {
  inputEl,
  inputBox,
  errorBorder,
  focusInputEl,
  passInputBox,
  inputICon,
} = styles;

const START = 'start';
const END = 'end';

export type IconPosition = typeof START | typeof END;
export interface FormInputProps {
  name?: string;
  value?: string;
  hasError?: boolean;
  errorMessage?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  InputIcon?: ReactNode | string;
  iconPosition?: IconPosition;
  required?: boolean;
  padding?: string;
  id?: string;
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  requiredSign?: boolean;
  onKeyUp?: (e: unknown) => void;
  onChange?: (e: unknown) => void;
  onBlur?: (e: unknown) => void;
  onKeyDown?: (e: unknown) => void;
};

type InputIconProp = {
  iconPosition?: IconPosition;
  InputIcon: ReactNode | string;
};

const Icon: FC<InputIconProp> = ({ iconPosition = START, InputIcon }) => {
  switch (iconPosition) {
    case END:
      return (
        <div className={inputICon}>
          {/^end$/.test(iconPosition) && InputIcon}
        </div>
      );

    default:
      return (
        <div className={inputICon}>
          {/^start$/.test(iconPosition) && <> {InputIcon}</>}
        </div>
      );
  }
};

const FormInput: FC<FormInputProps> = (props) => {
  const {
    label,
    type = 'text',
    value,
    InputIcon,
    hasError,
    requiredSign,
    errorMessage,
    iconPosition = 'start',
    ...rest
  } = props;
  const inputBoxRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [hasClickedInside, setHasClickedInside] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  if (typeof window !== 'undefined') {
    document.addEventListener('click', (e: any) => {
      // the if block checks if the click happen inside the node stored
      // and as such, we want to toggle class when the click happen inside the element
      if (inputBoxRef?.current && inputBoxRef?.current.contains(e.target)) {
        setHasClickedInside(true);
      } else {
        setHasClickedInside(false);
      }
    });
  }

  const handlePasswordVisibility = () => {
    setIsHidden((state) => !state);
  };
  switch (type) {
    case 'password':
      return (
        <div className={styles.wrapper} ref={wrapperRef}>
          <InputLabel
            requiredSign={requiredSign as boolean}
            label={label as string}
          />
          <div
            ref={inputBoxRef}
            className={`${inputBox} ${hasClickedInside && focusInputEl} ${
              hasError || Boolean(errorMessage) ? errorBorder : ''
            }`}
          >
            <Icon iconPosition={iconPosition} InputIcon={InputIcon} />
            <div className={passInputBox} ref={inputBoxRef}>
              <input
                type={isHidden ? type : 'text'}
                value={value}
                className={inputEl}
                // required
                {...rest}
              />
              <button type="button" onClick={handlePasswordVisibility}>
                {isHidden ? 'show' : 'hide'}
              </button>
            </div>
            <Icon iconPosition={iconPosition} InputIcon={InputIcon} />
          </div>
          <InputErrorMessage
            errorMessage={errorMessage as string}
          />
        </div>
      );
    case 'textarea':
      return (
        <div ref={wrapperRef}>
          <InputLabel
            requiredSign={requiredSign as boolean}
            label={label as string}
          />
          <div
            ref={inputBoxRef}
            className={`${inputBox} ${hasClickedInside && styles.focus} ${
              hasError || Boolean(errorMessage) ? errorBorder : ''
            }`}
          >
            <textarea value={value} {...rest} spellCheck={true}></textarea>
          </div>
          <InputErrorMessage
            errorMessage={errorMessage as string}
          />
        </div>
      );

    default:
      return (
        <div className={styles.wrapper} ref={wrapperRef}>
          <InputLabel
            requiredSign={requiredSign as boolean}
            label={label as string}
          />
          <div
            ref={inputBoxRef}
            className={`${inputBox} ${hasClickedInside && focusInputEl} ${
              hasError || Boolean(errorMessage) ? errorBorder : ''
            }`}
          >
            <Icon iconPosition={iconPosition} InputIcon={InputIcon} />
            <input type={type} value={value} className={inputEl} {...rest} />
            <Icon iconPosition={iconPosition} InputIcon={InputIcon} />
          </div>
          <InputErrorMessage
            errorMessage={errorMessage as string}
          />
        </div>
      );
  }
};

export default FormInput;
