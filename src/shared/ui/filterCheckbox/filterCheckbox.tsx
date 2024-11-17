import { FC, ReactNode } from 'react';
import { Checkbox } from '../shadcn-ui';
import styles from './filterCheckbox.module.scss';

export interface FilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckbox: FC<FilterChecboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}) => {
  return (
    <div className={styles.wrapper}>
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className={styles.checkbox}
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label htmlFor={`checkbox-${String(name)}-${String(value)}`}>
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
