import React, { FC } from 'react';
import styles from './preview-next-btn.module.css'
import Button from '@/app/components/ui/Button';
const { buttons } = styles;

type Prop = {
  previewLabel?: string;
  previewAction?: () => void;
  nextAction?: () => void;
  nextLabel?: string;
};

const PreviewAndNextButton: FC<Prop> = ({
  previewAction,
  previewLabel,
  nextAction,
  nextLabel,
}) => {
  return (
    <section className={buttons}>
      <Button type='button' onClick={previewAction}>{previewLabel || 'Preview'}</Button>{' '}
      <Button type='button' onClick={nextAction}>{nextLabel || 'Next'}</Button>
    </section>
  );
};

export default PreviewAndNextButton;
