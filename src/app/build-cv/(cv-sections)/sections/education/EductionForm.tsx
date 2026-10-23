'use client';
import useFormData from '@/app/components/hooks/useFormData';
import InputLabel from '@/app/components/ui/InputElement/InputLabel/InputLabel';
import React from 'react';
import styles from './education.module.css';
import FormInput from '@/app/components/ui/InputElement/FormInput';
import DateInput from '@/app/components/ui/InputElement/DateInput/DateInput';
import PreviewAndNextButton from '../previewAndNextButton';
import SectionTitle from '../SectionTitle';
const {
  content,
  subTitle,
  formBlock,
  flexAlignLeft,
  checkbox,
  add,
  addJobBtn,
  addPosition,
  controlsBtn,
  jobBox,
  jobCount,
} = styles;
const initialFormData = {
  institutionName: '',
  qualification: '',
  honours: '',
  endMonth: '',
  endYear: '',
  startMonth: '',
  startYear: '',
  city: '',
  country: '',
  fieldOfStudy: '',
};
const EductionForm = () => {
  const { formInputs, handleFormData, setFormData, resetForm } = useFormData(
    initialFormData,
    {
      removeWhiteSpace: false,
    }
  );

  const {
    institutionName,
    qualification,
    honours,
    endMonth,
    endYear,
    startMonth,
    startYear,
    city,
    country,
    fieldOfStudy,
  } = formInputs;
  return (
    <div>
      <SectionTitle label="Tell us about your education" />
      <p className="secondary-color">
        Start with your most recent qualification and work backwards
      </p>
      <form action="" style={{marginTop:'20px'}}>
        <div className={formBlock}>
          <FormInput
            label="Institution Name"
            name="institutionName"
            onChange={handleFormData}
            value={institutionName}
            placeholder="e.g. University of Bolton"
          />
          <FormInput
            label="City/Country"
            name="country"
            onChange={handleFormData}
            value={country}
            placeholder="e.g. Bolton, United Kingdom"
          />
        </div>
        <div className={formBlock}>
          <FormInput
            label="Qualification"
            name="qualification"
            onChange={handleFormData}
            value={qualification}
            placeholder="Bachelor of science"
          />
          <FormInput
            label="Field of Study"
            name="fieldOfStudy"
            onChange={handleFormData}
            value={fieldOfStudy}
            placeholder="Bachelor of science"
          />
        </div>
        <div className={formBlock}>
          <FormInput
            label="Field of Study"
            name="fieldOfStudy"
            onChange={handleFormData}
            value={fieldOfStudy}
            placeholder="Bachelor of science"
          />
          <div className={styles.date}>
            <div>
              <InputLabel> Start Date</InputLabel>
              <div className={styles.date}>
                <DateInput
                  type="month"
                  value={startMonth}
                  handleChange={(values) => {
                    // console.log('values', values);
                    setFormData((oldState) => ({
                      ...oldState,
                      startMonth: values?.value,
                    }));
                  }}
                />
                <DateInput
                  type="year"
                  value={startYear}
                  handleChange={(values) => {
                    // console.log('values', values);
                    setFormData((oldState) => ({
                      ...oldState,
                      startYear: values?.value,
                    }));
                  }}
                />
              </div>
            </div>
            <div>
              <InputLabel> End Date</InputLabel>
              <div className={styles.date}>
                <DateInput
                  type="month"
                  value={endMonth}
                  handleChange={(values) => {
                    // console.log('values', values);
                    setFormData((oldState) => ({
                      ...oldState,
                      endMonth: values?.value,
                    }));
                  }}
                />
                <DateInput
                  type="year"
                  value={endYear}
                  handleChange={(values) => {
                    // console.log('values', values);
                    setFormData((oldState) => ({
                      ...oldState,
                      endYear: values?.value,
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={flexAlignLeft}>
          <label htmlFor="currentlyWorkingHere">
            <input
              className={checkbox}
              id="currentlyWorkingHere"
              type="checkbox"
              name=""
              // onChange={() => setIsCurrentWork((o) => !o)}
            />
            <span>currently </span>
          </label>
        </div>
        <PreviewAndNextButton nextLabel="Next: skills" />
      </form>
    </div>
  );
};

export default EductionForm;
