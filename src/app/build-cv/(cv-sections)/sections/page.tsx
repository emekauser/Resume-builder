import { SIDE_BAR_BASE_PATH } from '../constant';
import SectionBox from '../sectionBox';
import ContactForm from './cvContactForm/CVContactForm';

const page = () => {
  return (
    <SectionBox>
      <ContactForm
        nestSectionDetail={{
          label: 'Work History',
          link: `${SIDE_BAR_BASE_PATH}/work-history`,
        }}
      />
    </SectionBox>
  );
};

export default page;
