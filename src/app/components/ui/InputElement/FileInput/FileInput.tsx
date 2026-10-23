'use client';
import {
  CSSProperties,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './fileInput.module.css';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import InputErrorMessage from '../InputErrorMessage/InputError';
import { Icons } from '@/app/components/asset';

const { wrapper, file_, fileUploadBtn, fileName_n_icon, ui_label, deleteIcon } =
  styles;

const { DeleteIcon, FileIcon } = Icons;
type File = { fileName: string; fileSize: string; fileURL: string };

export const TruncateWord = (words: string, numberOfCharacter = 80) => {
  if (!words) return <></>;
  if (words.length > numberOfCharacter) {
    return (
      <div>
        <Tooltip
          id="my-tooltip-1"
          place="bottom"
          className={`tooltip`}
          content={words}
        />
        {words.slice(0, numberOfCharacter)}{' '}
        <button type="button" data-tooltip-id="my-tooltip-1">
          <b>...</b>
        </button>
      </div>
    );
  }
  return <span> {words}</span>;
};
const initialFile = { fileName: '', fileSize: '', fileURL: '' };

export type FileInputProps = {
  name?: string;
  value?: string;
  label?: string;
  UploadUI?: ReactNode;
  required?: boolean;
  id?: string;
  accept?: string;
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  onChange?: (e: unknown) => void;
};

const FileInput: FC<FileInputProps> = (props) => {
  const {
    label = 'Click to upload',
    className,
    onChange,
    UploadUI,
    style,
    errorMessage,
    ...rest
  } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFileDetail] = useState<File>(initialFile);

  const cleanUpFileFromHeap = () => {
    window && window.URL.revokeObjectURL(selectedFile.fileURL);
  };
  useEffect(() => {
    return () => {
      cleanUpFileFromHeap();
    };
  }, []);

  const removeSelectedFile = () => {
    setSelectedFileDetail(initialFile);
    cleanUpFileFromHeap();
  };

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    const { name, size } = file || {
      name: '',
      size: '',
      type: 0,
    };
    setSelectedFileDetail({
      fileName: name,
      fileSize: size,
      fileURL: window && window.URL.createObjectURL(file), // create sth like -> blob:http://localhost:3045/5dbdeb3a-835b-48da-9684-5fa99c697dee
    });
    onChange && onChange(file);
    // Files input change event fires only once, If you want to upload twice, clear file input value, else you will just be able to upload once
    e.target.value = '';
  };

  const clickFileInput = () => {
    fileInputRef?.current?.click(); // fileInputRef.current return a reference of the file input.
  };

  const { fileName, fileURL } = selectedFile;
  return (
    <div>
      <input
        type="file"
        hidden
        ref={fileInputRef}
        onChange={(e) => handleChange(e)}
        // accept=".png, .jpg, .jpeg, .svg" // Accept PNG or JPEG files   // // image/*,.pdf
        {...rest}
      />
      <div>
        {
          fileName ? (
            <div className={wrapper}>
              <Image src={fileURL} alt="" width="80" height="80" />{' '}
              <div className={fileName_n_icon} role="button">
                <div className={file_}>{TruncateWord(fileName)}</div>
                <span>
                  {' '}
                  <DeleteIcon
                    className={deleteIcon}
                    onClick={removeSelectedFile}
                    size="1em"
                  />
                </span>
              </div>
            </div>
          ) : // UploadUI || (
          UploadUI ? (
            <div onClick={clickFileInput} role="button">
              {UploadUI}
            </div>
          ) : (
            <button
              className={`${fileUploadBtn} ${className}`}
              type="button"
              style={style}
            >
              <span>
                <FileIcon size="1rem" />
                <span className={ui_label}> {label}</span>
              </span>
            </button>
          )
          // )
        }
      </div>
      <InputErrorMessage errorMessage={errorMessage as string} />
    </div>
  );
};

export default FileInput;
