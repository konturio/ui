/* eslint-disable prettier/prettier */
import React, { ReactElement } from 'react';
import cn from 'clsx';
import s from './option.module.css';

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
  onChange = (): void => {
    /* nothing */
  },
  value,
  label,
  disabled = false,
  small,
  onMouseOver,
  hint,
}: OptionElement) => {
  return (
    <div key={value} className={cn(s.line, selected && s.selected, disabled && s.disabled, small && s.small)}>
      <label key={value} className={s.option} onMouseOver={(e) => onMouseOver && onMouseOver(value, e)} title={hint}>
        {label}
        {/* eslint-disable-next-line prettier/prettier */}
        <input name={value} value={value} type="checkbox" checked={selected} onChange={onChange} disabled={disabled} />
      </label>
    </div>
  );
};
