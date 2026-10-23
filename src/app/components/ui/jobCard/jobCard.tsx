import { Icons } from '@/app/components/asset';
import React, { FC } from 'react';
import styles from './job.module.css';
import parse from 'html-react-parser';
import { IJob } from '@/app/types';

const { job_, company_name, comp_location, job_title, job_duration } = styles;
const { LocationIcon } = Icons;

type Prop = {
  templateDetail: {
    color: string;
  };
  job: IJob;
};
const JobCard: FC<Prop> = ({ job, templateDetail }) => {
  const {
    id,
    jobTitle,
    startMonth,
    startYear,
    endMonth,
    endYear,
    employerName,
    city,
    country,
    jobResponsibilities,
  } = job;
  return (
    <div className={`${job_} `} key={id}>
      <div className={job_duration}>
        <h4 className={job_title}>
          <span>{jobTitle}</span>
        </h4>
        &nbsp; &nbsp;
        <em>
          <span>
            {startMonth} {startYear}
          </span>
          {endYear || endYear ? (
            <span>
              - {endMonth} {endYear}
            </span>
          ) : null}
        </em>
      </div>
      <span
        className={company_name}
        style={{ color: `${templateDetail.color}` }}
      >
        {employerName} &nbsp; &nbsp;
        <>
          {(country || city) && (
            <span className={comp_location}>
              <LocationIcon size={'0.7rem'} />
              <span>
                {city ? `${city},` : null} {country?.replaceAll('-', ' ')}
              </span>
            </span>
          )}
        </>
      </span>
      <section className={styles.description_}>
        {parse(jobResponsibilities as string)}
      </section>
    </div>
  );
};

export default JobCard;
