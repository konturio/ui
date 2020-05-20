import React, { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import style from './style.styl';

type Option = {
  label: string;
  value: string;
};

type changeEvent = React.ChangeEvent<HTMLInputElement>;

interface OptionElement extends Option {
  isChecked: boolean;
  onChange: (event: changeEvent) => void;
}

function Option({ isChecked, onChange, value, label }: OptionElement): JSX.Element {
  return (
    <label key={value} className={clsx(isChecked && style.checked, style.option)}>
      {label}
      {/* eslint-disable-next-line prettier/prettier */}
      <input
        name={label}
        value={value}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
    </label>
  );
}

export interface Selector {
  options: Option[];
  onChange: (value: Option['value'], e: changeEvent) => void;
  checked: Option['value'] | Option['value'][];
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}

export default function Selector({
  options,
  onChange,
  checked,
  className,
  orientation = 'vertical',
}: Selector): JSX.Element {
  const onChangeHandler = useCallback((event: changeEvent) => onChange(event.target.value, event), [onChange]);
  const checkedValues = useMemo(() => (Array.isArray(checked) ? checked : [checked]), [checked]);
  return (
    <form className={clsx(style.form, className)}>
      {/* extra div it's form-flex fix */}
      <div className={clsx(style.selector, style[orientation])}>
        {options.map(({ label, value }) => (
          <Option
            key={value}
            label={label}
            value={value}
            onChange={onChangeHandler}
            isChecked={checkedValues.includes(value)}
          />
        ))}
      </div>
    </form>
  );
}
