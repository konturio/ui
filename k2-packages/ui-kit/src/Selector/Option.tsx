import React, { ReactElement } from 'react';
import clsx from 'clsx';
import styles from './option.module.css';

export interface OptionElement extends OptionType {
  selected: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMouseOver?: (value: string | number, event: React.MouseEvent<HTMLLabelElement>) => void;
}

export type OptionType = {
  label: string | ReactElement;
  value: string;
  disabled?: boolean;
  small?: boolean;
  hint?: string;
};

export const Option = ({
  selected,
  onChange,
  value,
  label,
  disabled = false,
  small,
  onMouseOver,
  hint,
}: OptionElement) => {
  return (
    <div
      key={value}
      className={clsx({
        [styles.line]: true,
        [styles.selected]: selected,
        [styles.disabled]: disabled,
        [styles.small]: small,
      })}
    >
      <label
        key={value}
        className={styles.option}
        onMouseOver={(e) => onMouseOver && onMouseOver(value, e)}
        title={hint}
      >
        {label}
        <input name={value} value={value} type="checkbox" checked={selected} onChange={onChange} disabled={disabled} />
      </label>
    </div>
  );
};
