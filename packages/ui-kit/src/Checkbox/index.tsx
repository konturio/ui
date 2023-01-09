import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { Finish16 } from '@konturio/default-icons';
import cn from 'clsx';
import { LineItem } from '../LineItem';
import style from './style.module.css';
import type { ChangeEvent } from 'react';
import type { ForwardRefComponent } from '../utils/component-helpers/polymorphic';

interface CheckboxProps {
  id: string;
  name?: string;
  label?: React.ReactChild | React.ReactChild[];
  className?: string;
  onChange?: (isChecked: boolean) => void;
  block?: boolean;
  classes?: {
    input?: string;
    icon?: string;
    disabled?: string;
  };
}

export const Checkbox = forwardRef(
  (
    {
      name,
      checked: checkboxChecked = false,
      onChange,
      label,
      className = '',
      block = true,
      id,
      classes,
      disabled,
      ...nativeProps
    },
    ref,
  ) => {
    const [checked, setChecked] = useState<boolean | undefined>(checkboxChecked);

    useEffect(() => {
      setChecked(checkboxChecked);
    }, [checkboxChecked]);

    const onCheckboxChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        if (onChange && typeof onChange === 'function') {
          onChange(e.target.checked);
        }
      },
      [setChecked, onChange],
    );

    return (
      <LineItem
        id={id}
        label={label}
        className={cn(className, disabled && classes?.disabled)}
        block={block}
        cursor="pointer"
      >
        <input
          id={id}
          name={name}
          type="checkbox"
          className={cn(style.checkbox, classes?.input)}
          checked={checked}
          onChange={onCheckboxChange}
          ref={ref}
          disabled={disabled}
          {...nativeProps}
        />
        <div className={cn(style.icon, classes?.input)}>
          <Finish16 />
        </div>
      </LineItem>
    );
  },
) as ForwardRefComponent<'input', CheckboxProps>;

Checkbox.displayName = 'Checkbox';
