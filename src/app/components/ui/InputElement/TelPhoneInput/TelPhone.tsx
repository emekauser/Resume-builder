/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'
import InputLabel from '../InputLabel/InputLabel';
import InputErrorMessage from '../InputErrorMessage/InputError';
import { FormInputProps } from '../FormInput';

const TelPhone: FC<FormInputProps>  = (
    {
        label,
        className,
        style,requiredSign,
        ...rest
      }
) => {
    return (
        <></>
        // <div className={styles.wrapper} ref={wrapperRef}>
        //      <InputLabel
        //       requiredSign={requiredSign as boolean}
        //       label={label as string}
        //     />
        //   <div
        //     ref={inputBoxRef}
        //     className={`${inputBox} ${hasClickedInside && focusInputEl} ${
        //       hasError || Boolean(errorMessage) ? errorBorder : ''
        //     }`}
        //   >
        //     <Icon iconPosition={iconPosition} InputIcon={InputIcon} />
        //     <input type={type} value={value} className={inputEl} {...rest} />
        //     <Icon iconPosition={iconPosition} InputIcon={InputIcon} />
        //   </div>
        //   <InputErrorMessage
        //     hasError={hasError}
        //     errorMessage={errorMessage as string}
        //   />
        // </div>
      );
}

export default TelPhone