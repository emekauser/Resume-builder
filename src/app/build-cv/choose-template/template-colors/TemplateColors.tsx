'use client'
import styles from './template-colors.module.css';
import { templateColors } from '../constant';
import { FC } from 'react';

const { colors, selectedColor } = styles;

type Props = {
  templateColorId: string;
  selectColor?: (arg: { colour: string; colorId: string }) => void;
};

const TemplateColors: FC<Props> = ({ selectColor, templateColorId }) => {
  return (
    <ul className={colors}>
      {templateColors.map((el) => (
        <li
          className={`${el.colorId == templateColorId && selectedColor}`}
          style={{
            backgroundColor: el.colour,
            outline: `2px solid ${el.colour}`,
          }}
          key={el.colorId}
          onClick={() => {
            selectColor && selectColor(el);
          }}
        ></li>
      ))}
    </ul>
  );
};

export default TemplateColors;
