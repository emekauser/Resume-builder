import { FC, useRef, useState } from 'react';
import styles from './template-card.module.css';
import { Icons } from '@/app/components/asset';
import { CVTemplate } from '@/app/components/types';

const { CheckIcon, ZoomInIcon } = Icons;

type Prop = {
  template: CVTemplate;
  selectedTemplateID?: string;
  onClick?: () => void;
  openTemplateModal?: () => void;
};

const TemplateCard: FC<Prop> = (props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHoveringOnTemplate, setIsHoveringOnTemplate] = useState(false);

  const {
    template: { name, templateId, tag },
    onClick,
    openTemplateModal = () => {},
    selectedTemplateID,
  } = props;

  const isSelected_ = selectedTemplateID == templateId;

  return (
    <>
      <div onClick={onClick}>
        <div
          className={`${styles.template} ${
            isSelected_ && styles.onTemplateSelection
          }`}
          ref={cardRef}
          onMouseEnter={() => {
            setIsHoveringOnTemplate(true);
          }}
          onMouseLeave={() => {
            setIsHoveringOnTemplate(false);
          }}
        >
          <>
            {isSelected_ && (
              <div className={styles.selectedTemp}>
                <CheckIcon />
              </div>
            )}
          </>
          <div className="cv-template">
            {/* template */}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openTemplateModal();
            }}
            className={` ${styles.templatePreviewBtn} ${
              isHoveringOnTemplate && styles.onHovered
            }`}
          >
            <div>
              <ZoomInIcon /> <span>Preview Template</span>
            </div>
          </button>
        </div>

        {/* template name & tag */}
        <div className={styles.tempName}>
          <p> {name}</p>
          <p className={styles.tag}>{tag}</p>
        </div>
      </div>
    </>
  );
};

export default TemplateCard;
