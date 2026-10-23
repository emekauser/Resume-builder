
import { cvData } from './data';
import Traditional from './Traditional/Traditional';
import {
  ADDRESS,
  EMAIL,
  GITHUB,
  PHONE,
  PORTFOLIO,
} from '@/app/globalConstants';
import { Icons } from '../../../components/asset';
import { TEMPLATES_ENUM } from '@prisma/client';

export const getTemplate = (templateType: TEMPLATES_ENUM) => {
  switch (templateType) {
    case TEMPLATES_ENUM.Traditional:
      return <Traditional cvData={cvData} />;

    default:
      return <p> please chose a template</p>;
  }
};

const { PhoneIcon, LocationIcon, EmailIcon, GitHub, WorldIcon } = Icons;
export const getContactIcon = (input: string) => {
  switch (input) {
    case ADDRESS:
      return LocationIcon;
    case EMAIL:
      return EmailIcon;
    case PHONE:
      return PhoneIcon;
    case GITHUB:
      return GitHub;
    case PORTFOLIO:
      return WorldIcon;
    default:
      return 'span';
  }
};
