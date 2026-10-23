import { cvData } from '@/app/build-cv/choose-template/templates/data';
import { getTemplate } from '@/app/build-cv/choose-template/templates/utils';

const page = () => {
  return (
    <div>
      finalize page
      {getTemplate(cvData.templateDetail.templateType)}
    </div>
  );
};

export default page;
