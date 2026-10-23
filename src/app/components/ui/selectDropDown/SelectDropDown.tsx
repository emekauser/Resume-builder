import { FC, ReactNode } from 'react';
import Select, {
  ClearIndicatorProps,
  components,
  ControlProps,
} from 'react-select';
import styles from './selectDropDown.module.css';
import InputLabel from '../InputElement/InputLabel/InputLabel';
import { COMPANY_NAME, PRIMARY_COLOR } from '@/app/globalConstants';

export interface OptionType  { value: any; [key: string]: any; id?: any };

type ActionTypes =
  | 'clear'
  | 'create-option'
  | 'deselect-option'
  | 'pop-value'
  | 'remove-value'
  | 'select-option'
  | 'set-value';

type Prop = {
  placeholder?: string | ReactNode;
  options: { value: any; [key: string]: any; id?: any }[];
  hasValue?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  value?: OptionType | OptionType[] | null;
  getStyles?: (arg: string, arg2: any) => void;
  setValue?: (arg: OptionType[], arg2: ActionTypes) => void;
  clearValue?: () => void;
  onChange?: (values: any) => void;
  onMenuClose?: () => void;
  closeMenuOnSelect?: boolean;
  components?: any;
  onMenuClear?: () => void;
  useControlBorder?: string;
  removeIndicator?: boolean;
  label?: string;
  requiredSign?: boolean;
  isDisabled?:boolean
};

const ControlComponent = (props: ControlProps<OptionType>) => {
  // console.log(' controlClassName', props.selectProps);
  return (
    <components.Control {...props} className="nijaJobs-select-dropdown_c" />
  );
};

const ClearIndicator = (props: ClearIndicatorProps<OptionType>) => {
  const {
    children = <>Clear all</>,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref} className={styles.clearIndicator}>
      {children}
    </div>
  );
};

const IndicatorSeparator = () => {
  return '';
};

const SelectDropDown: FC<Prop> = ({
  placeholder,
  useControlBorder,
  removeIndicator,
  label,
  requiredSign,
  ...rest
}) => {
  // any value from the options selected automatically
  //  becomes the value of the dropdown, you don't need to pass "value" prop to component
  let component = {};
  if (removeIndicator) {
    component = {
      ClearIndicator,
      Control: ControlComponent,
      IndicatorSeparator,
    };
  } else {
    component = {
      ClearIndicator,
      Control: ControlComponent,
    };
  }
  return (
    <div>
      {label ? (
        <InputLabel
          label={label as string}
          requiredSign={requiredSign as boolean}
        />
      ) : null}

      <Select
        {...rest}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // controlClassName={  controlClassName}
        useControlBorder={useControlBorder}
        components={component}
        className="react-select-container"
        classNamePrefix={`${COMPANY_NAME}-select-dropdown`}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary25: '#e5e7eb',
            primary: PRIMARY_COLOR,
          },
        })}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectDropDown;
