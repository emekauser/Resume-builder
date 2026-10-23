import SectionBox from '../../sectionBox';
import GoBack from '../goBackButton';
// import PreviewAndNextButton from '../previewAndNextButton';
// import SectionTitle from '../SectionTitle';
import EductionForm from './EductionForm';

const page = () => {
  return (
    <SectionBox>
      <GoBack /> 
   

      <EductionForm />
    </SectionBox>
  );
};

export default page;
