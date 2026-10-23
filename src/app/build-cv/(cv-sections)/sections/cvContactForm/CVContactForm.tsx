'use client';
import { Icons } from '@/app/components/asset';
import React, { FC, useState } from 'react';
import styles from './cv-contact-form.module.css';
import { additionalInformation_, initialContactDetail } from './constant';
import { emailIsNotValid } from '@/app/utils/utils';
import FormInput from '@/app/components/ui/InputElement/FormInput';
import PreviewAndNextButton from '../previewAndNextButton';
import SectionTitle from '../SectionTitle';

const {
  moreDetails,
  inputBox,
  box,
  addMore,
  moreInfo,
  marginB,
  moreInputDeleteIcon,
  wrapper,
  cvPreview,
} = styles;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { AddIcon, DeleteIcon } = Icons;

type Props = {
  nestSectionDetail: {
    label: string;
    link: string;
  };
};

type MoreDetail = {
  label: string;
  placeholder: string;
  id: number;
  isAdded?: boolean;
};

const ContactForm: FC<Props> = (props) => {
  const [newEntriesInCV, setNewEntriesInCV] = useState<MoreDetail[]>([]);
  const [moreDataToBeAddedToCV, setMoreDataToBeAddedToCV] = useState<
    MoreDetail[]
  >(additionalInformation_);
  const [formData, setFormData] = useState(initialContactDetail);
  const [formError, setFormError] = useState({
    emailError: '',
    hasError: false,
  });

  const {} = props;

  const addMoreDetail = (input: MoreDetail) => {
    const { id } = input;
    setNewEntriesInCV((oldState) => [...oldState, input]);
    setMoreDataToBeAddedToCV((oldState) =>
      oldState.map((el) => {
        if (el.id == id) {
          el.isAdded = true;
          return el;
        }
        return el;
      })
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const removedAddedDetail = (input: MoreDetail) => {
    const { id } = input;
    setNewEntriesInCV(newEntriesInCV.filter((el) => el.id != id));
    setMoreDataToBeAddedToCV(
      moreDataToBeAddedToCV.map((el) => {
        if (el.id == id) {
          el.isAdded = false;
          return el;
        }
        return el;
      })
    );
  };
  const handleChange = (e: any) => {
    //React.ChangeEvent<HTMLInputElement>
    setFormData((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleFormError = () => {
    let error = {
      emailError: '',
      hasError: false,
    };
    if (emailIsNotValid(formData.email)) {
      error = { emailError: 'Please provide an email address', hasError: true };
      setFormError((oldState) => ({
        ...oldState,
        ...error,
      }));
      return;
    }
    error = { emailError: '', hasError: false };
    setFormError((oldState) => ({
      ...oldState,
      ...error,
    }));
    return error;
  };

  const handleFormSubmission = () => {
    const error = handleFormError();
    console.log('error-', error);
  };

  return (
    <section>
      <SectionTitle label="What’s the best way for employers to contact you?" />
      <p className="secondary-color">
        We suggest including an email and phone number
      </p>
      <div className={wrapper}>
        <div className={box}>
          <section className={inputBox}>
            <FormInput
              type="text"
              label="First Name"
              placeholder="Alex"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <FormInput
              type="text"
              label="Last Name"
              placeholder="Henry"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </section>
          <section className={marginB}>
            <FormInput
              type="text"
              label="Street Address"
              name="streetAddress"
              value={formData.streetAddress}
              placeholder="e.g. 25 Nortwest Street"
              onChange={handleChange}
            />
          </section>
          <section className={inputBox}>
            <FormInput
              type="text"
              label="County/State"
              placeholder="Region"
              name="region"
              value={formData.region}
              onChange={handleChange}
            />
            <FormInput
              type="text"
              label="City/Town"
              placeholder="New York"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <FormInput
              type="text"
              label="Postcode"
              placeholder=" e.g. 102678"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </section>
          <section className={inputBox}>
            <FormInput
              type="text"
              label="Phone Number"
              placeholder="e.g. +44078990866"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <FormInput
              type="text"
              label="Email Address"
              placeholder="e.g. example@domain.com"
              name="email"
              value={formData.email}
              // hasError={formError.hasError}
              errorMessage={formError.emailError}
              onChange={handleChange}
            />
          </section>

          <section className={moreInfo}>
            {newEntriesInCV.map(({ label, placeholder, id }) => (
              <FormInput
                key={id}
                type="text"
                label={label}
                name={label.toLowerCase()}
                iconPosition="end"
                placeholder={placeholder}
                InputIcon={
                  <DeleteIcon
                    className={moreInputDeleteIcon}
                    onClick={() => {
                      removedAddedDetail({ label, placeholder, id });
                    }}
                  />
                }
              />
            ))}
          </section>

          <p>
            <span>Add additional information to your CV (Optional)</span>{' '}
            {/* <InformationIcon size={'1.2rem'} /> */}
          </p>
          {/* ADD OPTIONAL FIELDS */}
          <section className={moreDetails}>
            {moreDataToBeAddedToCV.map(
              ({ label, id, placeholder, isAdded }) => (
                <button
                  key={id}
                  className={`${addMore} ${isAdded && 'is-disable'}`}
                  onClick={() => {
                    addMoreDetail({ label, id, placeholder });
                  }}
                >
                  <AddIcon /> <span>{label}</span>
                </button>
              )
            )}
          </section>
        </div>
        <div className={cvPreview}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            fugiat accusantium cupiditate soluta dolorem odio id vitae unde
            rerum sequi, amet eligendi adipisci quis molestias! Facilis
            excepturi accusantium recusandae nostrum.
          </div>
          <button>Change Template</button>
        </div>
      </div>
      <PreviewAndNextButton nextAction={handleFormSubmission} nextLabel='Next: Work history'/>
    </section>
  );
};

export default ContactForm;
