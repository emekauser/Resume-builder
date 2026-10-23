export const BUILD_CV_PATH = '/build-cv';
export const SIDE_BAR_BASE_PATH = `${BUILD_CV_PATH}/sections`;

export const EDUCATION = 'Education';
const CV_HEADINGS = 'CV heading';
const SKILLS = 'Skills';
const PROFESSIONAL_SUMMARY = 'Professional summary';
const WORK_HISTORY = 'Work history';
const FINALIZE = 'Finalize';

type Section = {
  label: string;
  path: string;
  pathname: string;
  id?: number;
};

export const replaceUnderscore = (str: string) => {
  if (!str) return '';
  return str.toLowerCase().replaceAll('-', ' ');
};

export const replaceSpaceWithHyphen = (str: string) => {
  if (!str) return '';
  return str.toLowerCase().replaceAll(' ', '-');
};

export const cvSections: Section[] = [
  {
    label: CV_HEADINGS,
    path: `${SIDE_BAR_BASE_PATH}/`,
    id: 1,
    pathname: `${replaceSpaceWithHyphen(CV_HEADINGS)}`,
  },
  {
    label: WORK_HISTORY,
    id: 2,
    path: `${SIDE_BAR_BASE_PATH}/${replaceSpaceWithHyphen(WORK_HISTORY)}`,
    pathname: `${replaceSpaceWithHyphen(WORK_HISTORY)}`,
  },
  {
    label: EDUCATION,
    id: 3,
    path: `${SIDE_BAR_BASE_PATH}/${EDUCATION.toLowerCase()}`,
    pathname: `${EDUCATION.toLowerCase()}`,
  },
  {
    label: SKILLS,
    id: 4,
    path: `${SIDE_BAR_BASE_PATH}/${SKILLS.toLowerCase()}`,
    pathname: `${SKILLS.toLowerCase()}`,
  },
  {
    label: PROFESSIONAL_SUMMARY,
    id: 5,
    path: `${SIDE_BAR_BASE_PATH}/${replaceSpaceWithHyphen(
      PROFESSIONAL_SUMMARY
    )}`,
    pathname: `${replaceSpaceWithHyphen(PROFESSIONAL_SUMMARY)}`,
  },
  {
    label: FINALIZE,
    id: 6,
    path: `${SIDE_BAR_BASE_PATH}/${FINALIZE.toLowerCase()}`,
    pathname: FINALIZE.toLowerCase(),
  },
];
