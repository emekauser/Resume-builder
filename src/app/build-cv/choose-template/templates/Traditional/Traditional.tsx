"use client";
import { FC, useRef } from "react";
import { cvActions } from "../data";
import styles from "./traditional.module.css";
import { capitalize } from "@/app/utils/utils";
import {
  CERTIFICATIONS,
  EDUCATION,
  HOBBIES_N_INTEREST,
  PERSONAL_PROJECTS,
  PROJECTS,
  SKILLS,
  SUMMARY,
  WORK_HISTORY
} from "../../constant";
import { getContactIcon } from "../utils";
import { Icons } from "@/app/components/asset";
import { Tooltip } from "react-tooltip";
import { useReactToPrint } from "react-to-print";
import parse from "html-react-parser";
import { schoolCVData } from "../schoolCvData";
import { PHONE } from "@/app/globalConstants";
import Link from "next/link";
const { LocationIcon } = Icons;

const {
  template,
  template_header,
  cv_name,
  contact,
  main_skill,
  template_body,
  cv_contact,
  block,
  block_title,
  block_text,
  cv_skill,
  job,
  company_name,
  margin_0,
  comp_location,
  job_title,
  job_duration,
  school_name,
  edu_duration,
  school_inf,
  edu,
  cert_,
  awarded
} = styles;

type Props = {
  cvData: typeof schoolCVData;
};
//     transform: rotate(110deg);
const Traditional: FC<Props> = ({ cvData }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });
  const {
    templateDetail: { templateColor },
    name,
    mainSkill,
    skills,
    workHistory,
    eduction,
    certification,
    projects,
    hobbies
  } = cvData;
  return (
    <div className={styles.templateWrapper}>
      <div className={template} ref={contentRef}>
        <section
          className={template_header}
          style={{ backgroundColor: `${templateColor}` }}
        >
          <p className={cv_name}>{name}</p>
          <p className={main_skill}>{mainSkill}</p>
          <div className={contact}>
            {cvData.contacts.map(({ label, iconType, link }) => {
              const Icon = getContactIcon(iconType);
              return (
                <div className={cv_contact} key={label}>
                  <div>
                    <Icon
                      size="0.9rem"
                      color="whitesmoke"
                      className={`${iconType == PHONE && styles.rotate}`}
                    />
                  </div>
                  <a href={link}>{label}</a>
                </div>
              );
            })}
          </div>
        </section>
        <section className={template_body}>
          <section>
            <section>
              {workHistory && (
                <div className={block}>
                  <p className={block_title}>{SUMMARY}</p>
                  <hr />
                  <p className={block_text}>
                    {parse(cvData.professionalSummary)}
                  </p>
                </div>
              )}

              <div className={block}>
                {workHistory && (
                  <>
                    <p className={block_title}>{WORK_HISTORY}</p>
                    <hr />
                    {workHistory.map(
                      ({ id, duration, company, desc, title }, i, arr) => {
                        return (
                          <div
                            className={`${job} ${
                              i === arr.length - 1 && { margin_0 }
                            } hhj`}
                            key={id}
                          >
                            <div className={job_duration}>
                              <h4 className={job_title}>
                                <span>{title}</span>
                              </h4>
                              &nbsp; &nbsp;
                              <em>{duration}</em>
                            </div>

                            {/* <span className={company_name}> */}
                            <span
                              className={company_name}
                              style={{ color: `${templateColor}` }}
                            >
                              {company.name} &nbsp; &nbsp;
                              {/* </span> */}
                              <>
                                {company.location && (
                                  <span className={comp_location}>
                                    <LocationIcon size={"0.7rem"} />
                                    <span>{company.location}</span>
                                  </span>
                                )}
                              </>
                            </span>
                            <section className={styles.description_}>
                              {parse(desc)}
                            </section>
                            <section className={styles.description_}>
                              <strong>Technologies:&nbsp;</strong>
                              {company.technologies?.map((technology, i) => (
                                <span key={i}>
                                  {parse(technology)}
                                  {i === company.technologies.length - 1
                                    ? " "
                                    : ", "}
                                </span>
                              ))}
                            </section>
                          </div>
                        );
                      }
                    )}
                  </>
                )}
              </div>
              {/*  &#8226; html spacial character for dot */}
              {/*  PROJECTS */}
              {projects.length > 0 ? (
                <section className={block}>
                  <p className={block_title}>{PROJECTS}</p>
                  <div className={styles.projectList}>
                    {projects.map(({ title, link }) => (
                      <div key={title}>
                        <span>{title}</span> <span> → </span>
                        <Link href={link} target="blank">
                          {link}
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              ) : (
                <></>
              )}
              {/*  EDUCATION */}
              {eduction.length > 0 ? (
                <section className={block}>
                  <p className={block_title}>{EDUCATION}</p>
                  <hr />
                  {eduction.map(({ school, cert, duration }) => (
                    <div className={edu} key={cert}>
                      <div className={school_inf}>
                        <h4
                          className={school_name}
                          style={{ color: `${templateColor}` }}
                        >
                          {cert}
                        </h4>
                        <em className={edu_duration}>{duration}</em>
                      </div>
                      <span className={awarded}> {school} </span>
                    </div>
                  ))}
                </section>
              ) : (
                ""
              )}
            </section>
          </section>

          <section>
            {/*  TEMPLATE SECOND SECTION */}
            <div className={block}>
              {skills && (
                <>
                  <p className={block_title}>{SKILLS}</p>
                  <hr />
                  {/* className={cv_skills} */}
                  <div>
                    {skills.map(skill => {
                      return (
                        <>
                          {Object.entries(skill.skillSet).map(
                            ([title, skillSet]) => (
                              <div className={cv_skill} key={title}>
                                <b
                                  style={{
                                    textTransform: "capitalize",
                                    color: `${templateColor}`,
                                    fontWeight: 700
                                  }}
                                >
                                  {title.replaceAll("_", " ")}
                                </b>
                                &nbsp;
                                <span>{skillSet}</span>
                              </div>
                            )
                          )}
                        </>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            <section className={block}>
              {/* CERTIFICATION */}
              <p className={block_title}>{CERTIFICATIONS}</p>
              <hr />

              {certification.map(({ school, cert, completed }) => (
                <>
                  <div className={cert_} key={completed}>
                    <h4
                      className={school_name}
                      style={{ color: `${templateColor}` }}
                    >
                      {school}
                    </h4>
                    <span>{cert}</span>
                  </div>
                  <em> {completed}</em>
                </>
              ))}
            </section>
            <div>
              {!projects.length !== true && (
                <section className={block}>
                  <p className={block_title}>{PERSONAL_PROJECTS}</p>
                </section>
              )}
            </div>

            <section className={`${block}`}>
              <p className={block_title}>{HOBBIES_N_INTEREST}</p>
              <hr />
              <p>
                {hobbies.map((hobby, i, arr) => (
                  <>
                    <span>{capitalize(hobby)}</span>
                    {i === arr.length - 1 ? ". " : ", "}
                  </>
                ))}
              </p>
            </section>
          </section>
        </section>
      </div>
      {/* PRINT CV BUTTON */}
      <section className={styles.cv_actions}>
        <Tooltip
          id="my-tooltip-1"
          place="bottom"
          className="tooltip"
          content="Click to download CV"
        />
        {cvActions.map(({ label, Icon, iconSize }) => (
          <div
            key={label}
            className={styles.cvPrintBtn}
            role="button"
            onClick={() => {
              handlePrint();
            }}
            data-tooltip-id="my-tooltip-1"
          >
            <Icon size={iconSize} />
            <p>{label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Traditional;
