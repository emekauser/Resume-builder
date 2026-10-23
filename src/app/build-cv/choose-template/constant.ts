;
import { getUUID } from '@/app/utils/utils';
import { CVTemplate, TEMPLATES_ENUM } from '@/app/types';
import { v4 as uuidv4 } from 'uuid';

/* CV SECTIONS */
export const SUMMARY = 'Summary';
export const WORK_HISTORY = 'Work History';
export const SKILLS = 'Skills';
export const EDUCATION = 'Education';
export const PROJECTS='Projects'
export const CERTIFICATIONS = 'Certifications';
export const PERSONAL_PROJECTS = 'Personal Projects';
export const HOBBIES_N_INTEREST = 'Hobbies/Interest';
export const CV_HEADING = 'cv contacts';
export const CHOOSE_TEMPLATE = 'choose template';

export const TEMPLATES: CVTemplate[] = [
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Smart],
    templateId: uuidv4(),
    tag: 'Most Popular',
  },
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Traditional],
    templateId: uuidv4(),
    tag: 'Most Popular',
  },
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Strong],
    templateId: uuidv4(),
    tag: 'Most Popular',
  },
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Trusted],
    templateId: uuidv4(),
  },
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Trusted],
    templateId: uuidv4(),
  },
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Smart],
    templateId: uuidv4(),
  },
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Smart],
    templateId: uuidv4(),
  },
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Smart],
    templateId: uuidv4(),
  },
  {
    name: TEMPLATES_ENUM[TEMPLATES_ENUM.Smart],
    templateId: uuidv4(),
  },
];

export const templateColors = [
  {
    colour: '#102A73',
    colorId: getUUID(),
  },
  {
    colour: '#99327b',
    colorId: getUUID(),
  },
  {
    colour: '#102A73',
    colorId: getUUID(),
  },
  {
    colour: '#3d58a4',
    colorId: getUUID(),
  },
  {
    colour: '#ff7aac',
    colorId: getUUID(),
  },
];
