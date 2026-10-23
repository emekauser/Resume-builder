'use client';
import React, { FC } from 'react';
import { FormInputProps } from '../FormInput';
import { Icons } from '@/app/components/asset';
import SelectDropDown from '../../selectDropDown/SelectDropDown';
const { CalendarIcon } = Icons;

const monthsArray = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const getMonths = (): { value: string; label: string }[] => {
  return monthsArray.map((el) => ({
    value: el,
    label: el,
  }));
};
const getListOfYear = (): {
  value: string | number;
  label: string | number;
}[] => {
  const startingFrom = new Date().getFullYear() - 1960 + 1;
  let yearList = [];

  for (let count = 0; count < startingFrom; count++) {
    yearList.push(`${1960 + count}`);
  }
  return yearList.reverse().map((el) => ({
    value: el,
    label: el,
  }));
};

const getDays = (): { value: string; label: string }[] => {
  let days = [];

  for (let count = 0; count < 31; count++) {
    days.push(`${count + 1}`);
  }
  return days.map((el) => ({
    value: el,
    label: el,
  }));
};
const days = getDays();
const yearList = getListOfYear();
const months = getMonths();

interface Props extends FormInputProps {
  type?: 'month' | 'day' | 'year';
  handleChange?: (values: { value: string; label: string }) => void;
}
const DateInput: FC<Props> = (props) => {
  const {
    label,
    value,
    hasError,
    handleChange,
    requiredSign,
    errorMessage,
    type,
    ...rest
  } = props;

  switch (type) {
    case 'month':
      return (
        <SelectDropDown
          options={months}
          isSearchable
          removeIndicator
          value={(() => {
            if (value) {
              return { label: value, value: value };
            }
            return null;
          })()}
          {...rest}
          onChange={(values) => {
            handleChange && handleChange(values);
          }}
          placeholder={
            <div className='r-select-placeholder'>
              <CalendarIcon />
              <span>Month</span>
            </div>
          }
        />
      );
    case 'year':
      return (
        <SelectDropDown
          options={yearList}
          isSearchable
          removeIndicator
          value={(() => {
            if (value) {
              return { label: value, value: value };
            }
            return null;
          })()}
          {...rest}
          onChange={(values) => {
            handleChange && handleChange(values);
          }}
          placeholder={
            <div className='r-select-placeholder'>
              <CalendarIcon />
              <span>Year</span>
            </div>
          }
        />
      );
    default:
      return (
        <SelectDropDown
          options={days}
          isSearchable
          removeIndicator
          value={(() => {
            if (value) {
              return { label: value, value: value };
            }
            return null;
          })()}
          {...rest}
          onChange={(values) => {
            handleChange && handleChange(values);
          }}
          placeholder={
            <div className='r-select-placeholder'>
              <CalendarIcon />
              <span>Day</span>
            </div>
          }
        />
      );
  }
};

export default DateInput;
// return (
//   <div className={styles.wrapper}>
//     <InputLabel
//       requiredSign={requiredSign as boolean}
//       label={label as string}
//     />
//     <div
//       className={`${inputBox} ${
//         hasError || Boolean(errorMessage) ? errorBorder : ''
//       }`}
//     >
//       <input {...rest} type="date" />
//     </div>

//     {hasError || Boolean(errorMessage) ? (
//       <p className={styles.errorMsg}>{errorMessage}</p>
//     ) : null}
//   </div>
// );
