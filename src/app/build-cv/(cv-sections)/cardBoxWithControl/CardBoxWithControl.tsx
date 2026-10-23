import React, { FC, ReactNode } from 'react';
import styles from './card-controls.module.css';
import { Icons } from '@/app/components/asset';
import { Tooltip } from 'react-tooltip';
import { ERROR_COLOR } from '@/app/globalConstants';

const { AddIcon, EditIcon, DeleteIcon, WorldIcon } = Icons;
const {
  content,
  subTitle,
  formBlock,
  flexAlignLeft,
  checkbox,
  add,
  addJobBtn,
  addPosition,
  controlsBtn,
  jobBox,
  jobCount,
} = styles;
type Props = {
  children: ReactNode;
  number: number;
  editAction: () => void;
  editLabel: string;
  deleteAction: () => void;
  deleteLabel: string;
};
const CardBoxWithControl: FC<Props> = ({
  children,
  number,
  editAction,
  editLabel,
  deleteAction,
  deleteLabel,
}) => {
  return (
    <div key={number} className={jobBox}>
      <div className={jobCount}>
        <span> {number}</span>
      </div>
      <div className={controlsBtn}>
        <button
          data-tooltip-id="edit"
          className={styles.control}
          onClick={editAction}
        >
          <Tooltip
            id="edit"
            place="bottom"
            className="tooltip"
            content="Edit job"
          />
          <EditIcon /> <span>{editLabel}</span>
        </button>
        <button
          data-tooltip-id="delete"
          className={styles.control}
          onClick={deleteAction}
        >
          <Tooltip
            id="delete"
            place="bottom"
            className="tooltip"
            content="Delete job"
          />
          <DeleteIcon color={ERROR_COLOR} />
          {deleteLabel}
        </button>
      </div>

      {children}
    </div>
  );
};

export default CardBoxWithControl;
