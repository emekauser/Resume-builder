'use client';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { cvSections, SIDE_BAR_BASE_PATH } from '../constant';
import styles from './sidebar.module.css';
import { usePathname } from 'next/navigation';
import { Icons } from '@/app/components/asset';
const {
  sidebar,
  steps,
  step,
  stepNumber,
  active_label,
  active,
  mobileView,
  mobile,
  expandMoreIcon,
  open,
  mobileStep,
  label_,
  activeMobile,
  progressBarBox,
} = styles;

const { ListCheckIcon, ExpandMoreIcon } = Icons;

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const newPath =
    pathname == SIDE_BAR_BASE_PATH
      ? 'cv-heading'
      : pathname.replaceAll('/', ' ').trim().split(' ')[2];

  const toggle = () => {
    setIsExpanded((o) => !o);
  };

  const getIndex = () => {
    const index = cvSections.findIndex((el) => el.pathname.includes(newPath));
    if (index === cvSections.length - 1) {
      return cvSections[cvSections.length-1];
    }
    return cvSections[index + 1];
  };

  const nextStep = useMemo(getIndex, [newPath]);

  return (
    <>
    {/* SIDEBAR DESKTOP VIEW */}
      <aside className={sidebar}>
        <section className={steps}>
          {cvSections.map(({ label, id, path }) => {
            const isMatch = new RegExp(`${label}`, 'gi').test(
              newPath.replaceAll('-', ' ')
            );
            return (
              <Link href={path} key={id} className={`${step} ${isMatch && styles.activePath}`}>
                <span className={`${stepNumber} ${isMatch && active} `}>
                  {id}
                </span>

                <span className={`${styles.label} ${isMatch && active_label}`}>
                  {label}
                </span>
              </Link>
            );
          })}
        </section>
      </aside>
      
      {/* SIDEBAR MOBILE VIEW */}
      <section className={`page-width ${mobileView}`}>
        <section onClick={toggle} className={` ${mobile}`}>
          <div>
            <ListCheckIcon size={'1.2rem'} />
            <div className={styles.flex}>
              <span>
                Next: <span className="gray-text">{nextStep.label}</span>
              </span>
            </div>
          </div>
          <ExpandMoreIcon
            size={'1.6rem'}
            className={` ${isExpanded && expandMoreIcon}`}
          />
        </section>

        <section className={`${styles.dropDown} ${isExpanded ? open : ''}`}>
          <div>
            {cvSections.map(({ label, id, path }, index) => {
              const isMatch = new RegExp(`${label}`, 'gi').test(
                newPath.replaceAll('-', ' ')
              );
              return (
                <div key={id} className={mobileStep}>
                  <Link
                    href={path}
                    onClick={toggle}
                    key={id}
                    className={`${label_} ${isMatch && activeMobile} `}
                  >
                    {label}
                  </Link>
                  <div className={progressBarBox}>
                    <div style={{ width: `${index}0px` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default SideBar;
