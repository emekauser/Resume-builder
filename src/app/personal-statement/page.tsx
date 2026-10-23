'use client';
import { useRef } from 'react';
import styles from './personal-statement.module.css';

import { useReactToPrint } from 'react-to-print';
import { cvActions } from '../build-cv/choose-template/templates/data';
import { Tooltip } from 'react-tooltip';

const { p_statement, title } = styles;

const PersonalStatement = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: 'Personal statement',
  });

  // Ulster UNIVERSITY
  const school = 'Ulster university';
  const courseAndLocation =
    'MSc Computer Science and Technology - Birmingham Louisa Ryland House Branch - Daytime';
  const course = 'MSc Computer Science and Technology';

  const modules = [
    'Big data & infrastructure',
    'Data Science & Machine Learning',
    'Digital Transformation',
  ]; // ulster modules

  // // BOLTON UNIVERSITY
  // const course = 'Software Engineering';// bolton
  // const school = 'University of Bolton';
  // const modules = [
  //   'Advanced Software Development',
  //   'Data Analysis and Visualization',
  //   'DevOps',
  // ];
  return (
    <>
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

      <div className={p_statement} ref={contentRef}>
        <h1 className={title}>Personal Statement For Master Program</h1>
        <p>
          I am excited to apply for {courseAndLocation} program at{' '}
          <span>{school}</span>, as it aligns perfectly with my professional
          goals.
        </p>
        <p>
          My interest in studying {course} was first aroused during my
          undergraduate studies at Enugu State University of science &
          technology, where I was studying chemical engineering. Because of the
          keen interest and love for career in software development, I had to
          obtain certification in Software development, with competency in HTML,
          CSS, Javascript, Java & SQL in 2010, with this skill set, I started
          working as software developer, after graduating from my university in
          2014, and since then to the time of writing this statement, I have
          been working as a software engineer. Going for masters in
          <span> Computer Science and Technology</span>, will help me broaden my knowledge &
          understanding of computer and the IT industries in general.
        </p>
        <p>
          I choose to study {course} at <span>{school}</span>, to extend my
          knowledge of <span>Software and the IT industries in general </span>
          {/* I choose to study computer science at <span>{school}</span>  */}
          because <span>{school}</span> values practical learning, and
          innovation, <span>{school}</span> offers students the opportunity to
          work on cutting-edge projects, {school} have modern learning
          environments and facilities,{' '}
          {/* <span>{school}</span> offers cheapest
          tuition fees and student accommodation in the UK, */}
          in the areas of career prospect <span>{school}</span> alumni have an
          advantage in the job market, <span>{school}</span> invests more in
          research each year and is in the top 25% of UK universities for
          research power. <span>{school}</span> focus on, hand on &
          purpose-built teaching facilities that prepare students for the
          professional atmosphere and technological environment they can expect
          when they start their careers. In summary, affordability, teaching
          approach, research, facilities, and career support are reasons why I
          chose <span>{school}</span>.
        </p>

        <p>
          What I hope to do in future career is to build cutting edge software
          products and also help improve the mind of those wishing to learn
          programming in west Africa, starting from Nigeria. In summary, i hope
          to become an employee of labor with the added skill set from{' '}
          <span>{school}</span>.
        </p>
        <p>
          The course is relevant to my plan because knowledge I will acquire
          from the modules that are included in the program like{' '}
          {modules.map((el, index) => (
            <>
              <span style={{ textDecoration: 'underline' }} key={index}>
                {el}
              </span>
              ,{' '}
            </>
          ))}{' '}
          will helps me boost my creative thinking, problem-solving and
          decision-making skills, and I am confident that the skills and
          knowledge I will acquire will enable me to make a positive impact in
          the IT sector.
        </p>
        <p>
          I choosing to study in the UK because the country is home to some of
          the best universities in the world, UK universities have high
          standards of teaching and facilities, UK is a multicultural society
          with many faiths, religions, and languages, International students
          have access to the National Health Service (NHS), Graduates from UK
          universities are sought after by employers around the world, above all
          the UK’s thriving tech ecosystem, combined with its strong emphasis on
          innovation and research, makes it the perfect environment for me to
          expand my knowledge and network with professionals in the field of IT.
        </p>
        <p>
          In conclusion, I believe that <span>{school}</span>’s{' '}
          <span>{course} </span>
          program will provide me with the perfect platform to develop both
          academically and professionally. I am committed to making the most of
          my time at <span>{school}</span> as I work towards achieving my career
          goals.
        </p>
        <p>Thanks in advance for considering my application.</p>
      </div>
    </>
  );
};

export default PersonalStatement;
