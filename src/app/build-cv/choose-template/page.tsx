'use client';
import styles from './choose-template.module.css';
import TemplateCard from './templateCards/TemplateCard';
import { useEffect, useState } from 'react';
import { Icons } from '@/app/components/asset';
import { useRouter } from 'next/navigation';
import TemplatePreviewModal from '@/app/components/ui/templatePreviewModal/TemplatePreviewModal';
import TemplateColors from './template-colors/TemplateColors';
import PageLoader from '@/app/components/ui/loaders/PageLoader';
import { SIDE_BAR_BASE_PATH } from '../(cv-sections)/constant';
import useAPIs from '@/app/components/hooks/useAPIs';
import Toast from '@/app/components/ui/toast/Toast';

const { templates, actions, backBtn, skipBtn, isDisable } = styles;
const { BackArrow } = Icons;

type ChosenTemplateDetail = {
  templateColorId: string;
  templateId: string;
};
type Error = {
  message: string;
  code?: string | number;
};
const Page = () => {
  const [chosenTemplate, setChosenTemplate] = useState<ChosenTemplateDetail>(
    {} as ChosenTemplateDetail
  );
  const [CVtemplates, setCVtemplates] = useState([]);
  const router = useRouter();
  const { fetchData,  loading } = useAPIs();
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [serverResponseError, setServerError] = useState<Error>();

  const { templateId, templateColorId } = chosenTemplate;

  const fetchTemplates = async () => {
    const { data, error } = (await fetchData(`/api/templates`)) 
    if (data) {
      setCVtemplates(data?.data);
      return;
    }
    setServerError(error as Error);
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  const handleTemplateSelection = (id: string) => {
    if (templateId == id) {
      setChosenTemplate((preState) => ({
        ...preState,
        templateId: '',
      }));
      return;
    }
    setChosenTemplate((preState) => ({
      ...preState,
      templateId: id,
    }));
  };

  function openModal() {
    setOpenPreviewModal(true);
  }

  function closeModal() {
    setOpenPreviewModal(false);
  }

  const createGustUser = async () => {
    const res = await fetchData('/api/createGuestUser', {
      method: 'POST',
      body: chosenTemplate,
    });
    
    if (!res.data) {
      setServerError({
        message: res.error?.message as string,
        code: res.error?.code as number,
      });
      setTimeout(() => {
        setServerError({
          message: '',
        });
      }, 5000);
      return;
    }
    router.push(SIDE_BAR_BASE_PATH);
    return;
  };

  return (
    <div className="page-width">
      <PageLoader loading={loading} />
      <Toast
        variant="warning"
        message={serverResponseError?.message as string}
      />
      <div className={styles.chooseTemplate}>
        <div>
          <p>How do you want your CV to look like?</p>
          <p>Scroll to view all styles and click to select a specific style.</p>
        </div>
        <TemplateColors
          templateColorId={templateColorId}
          selectColor={({ colorId }) => {
            setChosenTemplate((preState) => ({
              ...preState,
              templateColorId: colorId,
            }));
          }}
        />
      </div>

      <TemplatePreviewModal
        onClose={closeModal}
        title="Template Preview modal"
        hidePrimaryButton={true}
        isOpen={openPreviewModal}
        primaryButtonLabel={'Choose Template'}
      >
        <section className={styles.modalContent}>
          <div className={styles.modalTemplate}></div>
          <TemplateColors
            templateColorId={templateColorId}
            selectColor={({ colorId }) => {
              setChosenTemplate((preState) => ({
                ...preState,
                templateColorId: colorId,
              }));
            }}
          />
        </section>
      </TemplatePreviewModal>

      <section className={templates}>
        {CVtemplates.map((template) => {
          const { templateId } = template;
          return (
            <TemplateCard
              openTemplateModal={openModal}
              selectedTemplateID={chosenTemplate.templateId}
              onClick={() => {
                handleTemplateSelection(templateId);
              }}
              key={templateId}
              template={template}
            />
          );
        })}
      </section>
      <section className={`${actions} page-width`}>
        <button className={backBtn} onClick={() => router.back()}>
          <BackArrow /> <span>Back</span>
        </button>
        <div>
          <button className={skipBtn}>Skip for now</button>

          <button
            onClick={() => createGustUser()}
            className={`link-button ${
              chosenTemplate.templateId ? '' : isDisable
            }`}
          >
            Choose this template
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
// choose-template?template=17383399_smart&color#tyye:
// min-height: 40vh;
// transform: scale(0.282918);
//     transform-origin: 0 0 0;




