'use client';
import FormInput from '@/app/components/ui/InputElement/FormInput';
import { Editor } from '@tiptap/react';
import SectionTitle from '../SectionTitle';
import styles from './work-history.module.css';
import PreviewAndNextButton from '../previewAndNextButton';
import { useRef, useState } from 'react';
import Modal from '@/app/components/ui/modal/Modal';
import Button from '@/app/components/ui/Button';
import GoBack from '../goBackButton';
import SectionBox from '../../sectionBox';
import Link from 'next/link';
import { EDUCATION, SIDE_BAR_BASE_PATH } from '../../constant';
import useFormData from '@/app/components/hooks/useFormData';
import InputLabel from '@/app/components/ui/InputElement/InputLabel/InputLabel';
import TextEditor from '@/app/components/ui/TextEditor';
import { ERROR_COLOR, PRIMARY_COLOR } from '@/app/globalConstants';
import { IJob } from '@/app/types';

import { Icons } from '@/app/components/asset';
import { Tooltip } from 'react-tooltip';
import { getUUID } from '@/app/utils/utils';
import { countryList } from '@/app/components/listOfCountries';
import SelectDropDown from '@/app/components/ui/selectDropDown/SelectDropDown';
import JobCard from '@/app/components/ui/jobCard';
import DateInput from '@/app/components/ui/InputElement/DateInput/DateInput';
const { AddIcon, EditIcon, DeleteIcon, WorldIcon} = Icons;
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
  jobTitle: '',
  employerName: '',
  city: '',
  jobResponsibilities: '',
  endMonth: '',
  endYear: '',
  startMonth: '',
  startYear: '',
};

const Page = () => {
  const [openModal, setOpenModal] = useState(false);
  const [workHistory, setWorkHistory] = useState<IJob[]>([]);
  const [isCurrentWork, setIsCurrentWork] = useState(false);
  const { formInputs, handleFormData, setFormData, resetForm } =
    useFormData<IJob>(initialFormData, {
      removeWhiteSpace: false,
    });
  const [workHistoryFormIsHidden, setWorkHistoryFormIsHidden] = useState(false);
  const [isEditingWokHistory, setIsEditWokHistory] = useState(false);
  const ref = useRef(null);

  const handleModalOpening = () => {
    setOpenModal(true);
  };
  const handleModalClosing = () => {
    setOpenModal(false);
  };
  const {
    jobTitle,
    employerName,
    city,
    startMonth,
    startYear,
    endMonth,
    endYear,
    country,
    jobResponsibilities,
  } = formInputs;
  console.log('formInputs', formInputs);

  const updateFormToEditJob = (job: IJob) => {
    setFormData(job);

    setWorkHistoryFormIsHidden(false);
    setIsEditWokHistory(true);
    // resetForm();
  };

  const addJob = () => {
    if (setWorkHistory.length === 0) {
      handleModalOpening();
      return;
    }
    const { startMonth, startYear, endMonth, endYear } = formInputs;
    setWorkHistoryFormIsHidden(true);
    setWorkHistory((oldState) => [
      ...oldState,
      {
        id: getUUID(),
        employerName,
        startMonth,
        startYear,
        endMonth,
        endYear,
        jobTitle,
        city,
        country,
        jobResponsibilities,
      },
    ]);
    resetForm();
  };

  const deleteJob = (job: IJob) => {
    setWorkHistory(() => workHistory.filter((el) => el.id !== job.id));
  };

  const saveUpdateJob = () => {
    const newHistory = workHistory.map((el) => {
      if (el.id == formInputs?.id) {
        return {
          id: getUUID(),
          employerName,
          startMonth,
          startYear,
          endMonth,
          endYear,
          jobTitle,
          city,
          country,
          jobResponsibilities,
        };
      }
      return el;
    });

    setWorkHistory(newHistory);
    setIsEditWokHistory(false);
    setWorkHistoryFormIsHidden((o) => !o);
    resetForm();
  };
  return (
    <SectionBox>
      <div className={content}>
        <GoBack />

        <>
          {workHistoryFormIsHidden ? (
            <>
              <SectionTitle label="Work history summary" />
              {workHistory.length > 0
                ? workHistory.map((job, index) => (
                    <div key={job.id} className={jobBox}>
                      <div className={jobCount}>
                        <span> {index + 1}</span>
                      </div>
                      <div className={controlsBtn}>
                        <button
                          data-tooltip-id="edit-job"
                          className={styles.control}
                          onClick={() => updateFormToEditJob(job)}
                        >
                          <Tooltip
                            id="edit-job"
                            place="bottom"
                            className="tooltip"
                            content="Edit job"
                          />
                          <EditIcon /> <span>Edit</span>
                        </button>
                        <button
                          data-tooltip-id="delete-job"
                          className={styles.control}
                          onClick={() => deleteJob(job)}
                        >
                          <Tooltip
                            id="delete-job"
                            place="bottom"
                            className="tooltip"
                            content="Delete job"
                          />
                          <DeleteIcon color={ERROR_COLOR} /> Delete
                        </button>
                      </div>

                      <JobCard
                        job={job}
                        templateDetail={{ color: PRIMARY_COLOR }}
                      />
                    </div>
                  ))
                : null}
              <button
                onClick={() => setWorkHistoryFormIsHidden((o) => !o)}
                className={addPosition}
              >
                <AddIcon size={'1rem'} /> Add another position
              </button>
            </>
          ) : (
            <>
              {isEditingWokHistory ? (
                <SectionTitle label="Edit This Work History" />
              ) : (
                <>
                  <SectionTitle label="Tell us about your work history" />
                  <p className={`secondary-color ${subTitle}`}>
                    Start with your most recent job and work backwards
                  </p>
                </>
              )}

              <form action="">
                <div className={formBlock}>
                  <FormInput
                    label="Job Title"
                    name="jobTitle"
                    onChange={handleFormData}
                    value={jobTitle}
                    placeholder="e.g. Software Engineer"
                  />
                  <FormInput
                    label="Employer"
                    name=" employerName"
                    onChange={handleFormData}
                    value={employerName}
                    placeholder="e.g. Sneed & Mitchell LLP"
                  />
                </div>
                <div className={formBlock}>
                  <FormInput
                    label="City/Town"
                    name="city"
                    onChange={handleFormData}
                    value={city}
                    placeholder="e.g. New York"
                  />
                  <div>
                    <InputLabel>Country</InputLabel>
                    <SelectDropDown
                      options={countryList}
                      isSearchable
                      removeIndicator
                      value={(() => {
                        if (country) {
                          return { label: country, value: country };
                        }
                        return null; // means the placeholder will show in place of the value
                      })()}
                      onChange={(values) => {
                        setFormData((oldState: IJob) => ({
                          ...oldState,
                          country: values?.value,
                        }));
                      }}
                      placeholder={
                        <div className="r-select-placeholder">
                          <WorldIcon />
                          <span>e.g. Canada</span>
                        </div>
                      }
                    />
                  </div>
                </div>
                <div className={formBlock}>
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

                <div className={flexAlignLeft}>
                  <label htmlFor="currentlyWorkingHere">
                    <input
                      className={checkbox}
                      id="currentlyWorkingHere"
                      type="checkbox"
                      name=""
                      onChange={() => setIsCurrentWork((o) => !o)}
                    />
                    <span>I currently work here</span>
                  </label>
                </div>
                <InputLabel>Describe your experience</InputLabel>
                <TextEditor
                  content={jobResponsibilities}
                  getEditorContent={(editor: Editor) => {
                    setFormData((oldState) => ({
                      ...oldState,
                      jobResponsibilities: editor.getHTML(),
                    }));
                  }}
                />
              </form>
              <div className={addJobBtn}>
                {isEditingWokHistory ? (
                  <Button onClick={saveUpdateJob}>Save Changes</Button>
                ) : (
                  <>
                    <Link
                      className={styles.noExp}
                      href={`${SIDE_BAR_BASE_PATH}/${EDUCATION.toLowerCase()}`}
                    >
                      I don&lsquo;t have any work experience
                    </Link>
                    <Button onClick={addJob}>Add Position</Button>
                  </>
                )}
              </div>
            </>
          )}
        </>
        {isCurrentWork || workHistory.length > 0 ? (
          <PreviewAndNextButton nextLabel="Next: education" />
        ) : null}

        {/* MODAL */}
        <Modal
          onOpen={handleModalOpening}
          onClose={handleModalClosing}
          isOpen={openModal}
        >
          <div className={styles.modalContent}>
            <h3>More information needed</h3>
            <p className={styles.desc}>
              It looks like you haven&lsquo;t entered any work history details.
              We recommend you add at least one position if possible, be it paid
              or not.
            </p>
            <Button onClick={handleModalClosing} className={add}>
              Add Position
            </Button>{' '}
            <br />
            <div className={styles.noExp}>
              <Link
                className={styles.noExp}
                href={`${SIDE_BAR_BASE_PATH}/${EDUCATION.toLowerCase()} `}
              >
                I don&lsquo;t have any work experience
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    </SectionBox>
  );
};
// Work history
export default Page;
{
  /* <SelectDropDown
                        options={monthsFull}
                        isSearchable
                        removeIndicator
                        isDisabled={isCurrentWork}
                        onChange={(values) => {
                          setFormData((oldState) => ({
                            ...oldState,
                            endMonth: values?.value,
                          }));
                        }}
                        placeholder={
                          <div className={styles.placeholder}>
                            <CalendarIcon />
                            <span>Month</span>
                          </div>
                        }
                      />
                      <SelectDropDown
                        options={yearList_}
                        isSearchable
                        removeIndicator
                        isDisabled={isCurrentWork}
                        onChange={(values) => {
                          setFormData((oldState) => ({
                            ...oldState,
                            endYear: values?.value,
                          }));
                        }}
                        placeholder={
                          <div className={styles.placeholder}>
                            <CalendarIcon />
                            <span>Year</span>
                          </div>
                        }
                      /> */
}
//  const monthsObjLong: { [key: string]: string } = {
//   '1': 'January',
//   '2': 'February',
//   '3': 'March',
//   '4': 'April',
//   '5': 'May',
//   '6': 'June',
//   '7': 'july',
//   '8': 'August',
//   '9': 'September',
//   '10': 'October',
//   '11': 'November',
//   '12': 'December',
// };
// const monthsObjShort: { [key: string]: string } = {
//   '1': 'Jan',
//   '2': 'Feb',
//   '3': 'Mar',
//   '4': 'Apr',
//   '5': 'May',
//   '6': 'Jun',
//   '7': 'Jul',
//   '8': 'Aug',
//   '9': 'Sep',
//   '10': 'Oct',
//   '11': 'Nov',
//   '12': 'Dec',
// };
// const monthShortToNumber: { [key: string]: number } = {
//   Jan: 1,
//   Feb: 2,
//   Mar: 3,
//   Apr: 4,
//   may: 5,
//   Jun: 6,
//   Jul: 7,
//   Aug: 8,
//   Sep: 9,
//   Oct: 10,
//   Nov: 11,
//   Dec: 12,
// };
// const formateDate = (date: string) => {
//   // date  '2025-07'
//   const arr = date.split('-'); // ['2025', '07']
//   return `${monthsObjShort[parseInt(arr[1], 10)]} ${arr[0]}`;
// };
// const formatDateToISO = (date: string) => {
//   // ISO Date ~> YYYY-MM-DDTHH:mm:ss.sssZ
//   if (!date) return '';
//   const splitDate = date.split(/\s/);
//   const year = splitDate[1];
//   const month = monthShortToNumber[splitDate[0]];
//   return `${year}-${String(month).padStart(2, '0')}`;
// };
