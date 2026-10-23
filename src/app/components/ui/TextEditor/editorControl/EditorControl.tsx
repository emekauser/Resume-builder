/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { FC, ReactNode, useState } from 'react';
import styles from './editorControl.module.css';
import { Editor } from '@tiptap/core';

import Modal from '../../modal/Modal';
import FormInput from '../../InputElement/FormInput';
import useFormData from '../../../hooks/useFormData';

import { TbListNumbers as FormatListNumbered } from 'react-icons/tb';
import { LuCode as CodeIcon } from 'react-icons/lu';

import { FaAlignCenter as AlignCenterIcon } from 'react-icons/fa';
import { CgUndo as UndoIcon } from 'react-icons/cg';
import { CgRedo as RedoIcon } from 'react-icons/cg';
import { MdMoreVert as MoreIcon } from 'react-icons/md';
import { FaAlignRight as AlignRightIcon } from 'react-icons/fa6';
import { HiMiniH2 as H2Icon } from 'react-icons/hi2';
import { HiMiniH3 as H3Icon } from 'react-icons/hi2';

import { PiListBulletsBold as BulletsListIcon } from 'react-icons/pi';
import { HiMiniBold as BoldIcon } from 'react-icons/hi2';
import { FaLink as LinkIcon } from 'react-icons/fa6';
import { AiOutlineStrikethrough as StrikethroughIcon } from 'react-icons/ai';
import { LuItalic as ItalicIcon } from 'react-icons/lu';
import useOutSideClick from '@/app/components/hooks/useOutSideClick';
import { appLicationError } from '@/app/errorAndCourse';


const {
  wrapper,
  headingDropdown,
  iconBox,
  menuDropdown,
  menuOption,
  isActive,
} = styles;

// const {
//   BoldIcon,
//   LinkIcon,
//   StrikethroughIcon,
//   ItalicIcon,
//   FormatListNumbered,
//   BulletsListIcon,
//   CodeIcon,
//   AlignCenterIcon,
//   AlignRightIcon,
//   H2Icon,
//   H3Icon,
//   MoreIcon,
//   UndoIcon,
//   RedoIcon,
// } = Icons;

const HEADING = 'heading';

type MenuOption = {
  name: string;
  id?: number | string;
  isDefaultSelection?: boolean;
  isSelected?: boolean;
  Icon?: ReactNode;
  className?: (editor: Editor) => void;
  action?: (editor: Editor) => void;
};

type Prop = {
  editor: Editor;
};

const BULLET_LIST = 'bulletList';
const ORDER_LIST = 'orderedList';
const CODE = 'code';
const LINK = 'link';

const controls = {
  block_0: [
    {
      name: 'Heading',
      Icon: <H2Icon size={'1.3rem'} />,
      action: (editor: Editor) => {
        editor.chain().focus().toggleHeading({ level: 2 }).run();
      },
      className: (editor: Editor) => {
        return editor.isActive(HEADING, {
          level: 2,
        })
          ? isActive
          : '';
      },
    },
    {
      name: 'SubHeading',
      Icon: <H3Icon size={'1.3rem'} />,
      action: (editor: Editor) => {
        editor.chain().focus().toggleHeading({ level: 3 }).run();
      },
      className: (editor: Editor) => {
        return editor.isActive(HEADING, {
          level: 3,
        })
          ? isActive
          : '';
      },
    },
  ],
  block_1: [
    {
      name: 'bold',
      camelcaseName: 'bold',
      Icon: <BoldIcon size={'1rem'} />,
      action: (editor: Editor) => {
        editor.chain().focus().toggleBold().run();
      },
      className: (editor: Editor) => {
        return editor.isActive('bold') ? isActive : '';
      },
    },
    {
      name: 'strike',
      camelcaseName: 'strike',
      Icon: <StrikethroughIcon size={'1.2rem'} />,
      action: (editor: Editor) => {
        editor.chain().focus().toggleStrike().run();
      },
      className: (editor: Editor) => {
        return editor.isActive('strike') ? isActive : '';
      },
    },
    {
      name: 'italic',
      camelcaseName: 'italic',
      Icon: <ItalicIcon />,
      action: (editor: Editor) => {
        editor.chain().focus().toggleItalic().run();
      },
      className: (editor: Editor) => {
        return editor.isActive('italic') ? isActive : '';
      },
    },
    {
      name: CODE,
      camelcaseName: CODE,
      Icon: <CodeIcon />,
      action: (editor: Editor) => {
        editor.chain().focus().toggleCode().run();
      },
      className: (editor: Editor) => {
        return editor.isActive(CODE) ? isActive : '';
      },
    },
    {
      name: LINK,
      camelcaseName: LINK,
      Icon: <LinkIcon size={'1rem'} />,
      action: (editor: Editor, cb?: () => void) => {
        cb && cb();
      },
      className: (editor: Editor) => {
        return editor.isActive(LINK) ? isActive : '';
      },
    },
  ],
  block_2: [
    {
      name: 'Ordered list',
      camelcaseName: 'orderedList',
      Icon: <FormatListNumbered size={'1.2rem'} />,
      action: (editor: Editor) => {
        editor.chain().focus().toggleOrderedList().run();
      },
      className: (editor: Editor) => {
        return editor.isActive('orderedList') ? isActive : '';
      },
    },
    {
      name: 'bullet list',
      camelcaseName: 'bulletList',
      Icon: <BulletsListIcon size={'1.2rem'} />,
      action: (editor: Editor) => {
        editor.chain().focus().toggleBulletList().run();
      },
      className: (editor: Editor) => {
        return editor.isActive('bulletList') ? isActive : '';
      },
    },
    {
      name: 'align center',
      camelcaseName: 'alignCenter',
      Icon: <AlignCenterIcon size={'1rem'} />,
      action: (editor: Editor) => {
        editor.chain().focus().setTextAlign('center').run();
      },
      className: (editor: Editor) => {
        return editor.isActive({ textAlign: 'center' }) ? isActive : '';
      },
    },
    {
      name: 'align right',
      camelcaseName: 'alignRight',
      Icon: <AlignRightIcon size={'1rem'} />,
      action: (editor: Editor) => {
        editor.chain().focus().setTextAlign('right').run();
      },
      className: (editor: Editor) => {
        return editor.isActive({ textAlign: 'right' }) ? isActive : '';
      },
    },
  ],
  block_3: [
    {
      name: 'undo',
      camelcaseName: 'undo',
      Icon: <UndoIcon size={'1.4rem'} />,
      action: (editor: Editor) => {
        editor.chain().focus().undo().run();
      },
      className: (editor: Editor) => {
        return '';
      },
    },
    {
      name: 'redo',
      camelcaseName: 'redo',
      Icon: <RedoIcon size={'1.4rem'} />,
      action: (editor: Editor) => {
        editor.chain().focus().redo().run();
      },
      className: (editor: Editor) => {
        return '';
      },
    },
  ],
};

const EditorControl: FC<Prop> = ({ editor }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref: dropDownRef } = useOutSideClick(closeDropDown);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { formInputs, handleFormData } = useFormData({ linkURL: '' });

  const { linkURL } = formInputs;

  function closeDropDown() {
    setIsExpanded(false);
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeOnly = () => {
    setModalIsOpen(false);
  };

  const closeModal = () => {
    // cancelled
    if (linkURL === null) {
      return;
    }

    // empty
    if (linkURL === '') {
      editor.chain().focus().extendMarkRange(LINK).unsetLink().run();
      setModalIsOpen(false);
      return;
    }

    // update link
    try {
      editor
        .chain()
        .focus()
        .extendMarkRange(LINK)
        .setLink({ href: linkURL })
        .run();
    } catch (e: any) {
      alert(appLicationError.CLIENT_SIDE_ERROR);
    } finally {
      setModalIsOpen(false);
    }
  };

  const { block_0, block_1, block_2, block_3 } = controls;
  return (
    <div className={`${wrapper} `}>
      <Modal isOpen={modalIsOpen}>
        {/* Add Link Modal */}
        <FormInput
          label="Insert Hyperlink"
          placeholder="Enter your url"
          onChange={handleFormData}
          name="linkURL"
          value={linkURL}
        />
        <div className={styles.insertLinkBtn}>
          <button type="button" onClick={closeOnly}>
            Cancel
          </button>{' '}
          <button className="primary-button" type="button" onClick={closeModal}>
            Add Link
          </button>
        </div>
      </Modal>

      <section className={styles.unit}>
        {block_0.map(({ name, Icon, action, className }) => (
          <li
            key={name}
            className={`${menuOption} ${className && className(editor)}`}
            onClick={() => {
              action && action(editor);
            }}
          >
            <span> {Icon}</span>
          </li>
        ))}
      </section>
      <hr className={`${styles.divider}`} />

      <section className={styles.unit}>
        {block_1.map(({ name, Icon, action, className }) => (
          <div
            key={name}
            onClick={() => {
              if (name === LINK) {
                action(editor, openModal);
                return;
              }
              action(editor);
            }}
            className={`${iconBox} ${className && className(editor)}`}
          >
            {Icon}
          </div>
        ))}
      </section>

      <React.Fragment>
        <hr className={`${styles.divider}`} />
        <section className={`${styles.unit} ${styles.hideOnMobile}`}>
          {controls.block_2.map(({ name, Icon, action, className }) => (
            <div
              key={name}
              onClick={() => action(editor)}
              className={`${iconBox} ${className && className(editor)}`}
            >
              {Icon}
            </div>
          ))}
        </section>

        <hr className={`${styles.divider} ${styles.hideDivider}`} />
        <section className={`${styles.unit} ${styles.hideOnMobile}`}>
          {block_3.map(({ name, Icon, action, className }) => (
            <div
              key={name}
              onClick={() => action(editor)}
              className={`${iconBox} ${className && className(editor)}`}
            >
              {Icon}
            </div>
          ))}
        </section>
      </React.Fragment>

      {/* MORE OPTION */}
      <div className={styles.moreOptions} ref={dropDownRef}>
        <div className={`${headingDropdown}`}>
          <button
            type="button"
            className={`${styles.ellipse}`}
            onClick={() => setIsExpanded((oldState) => !oldState)}
          >
            <span className={styles.m}>
              <MoreIcon size={'1.2rem'} />
            </span>
          </button>

          {isExpanded ? (
            <div className={menuDropdown}>
              {[...block_2, ...block_3].map(
                ({ name, Icon, action, className }: MenuOption) => (
                  <li
                    key={name}
                    className={`${menuOption} ${
                      className && className(editor)
                    }`}
                    onClick={() => {
                      action && action(editor);
                      setIsExpanded(false);
                    }}
                  >
                    <span> {Icon}</span> <span>{name}</span>
                  </li>
                )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default EditorControl;

// const [menuOptions_] = useState(menuOptions);
// const [selectedOption, setSelectedOption] = useState(menuOptions[0]);
