import React, { ChangeEvent, forwardRef, useCallback } from 'react';
import { LineItem } from '../LineItem';
import style from './style.module.css';
import cn from 'clsx';
import { ForwardRefComponent } from '../utils/component-helpers/polymorphic';

interface RadioProps {
  id: string;
  name?: string;
  label?: React.ReactChild | React.ReactChild[];
  className?: string;
  block?: boolean;
  onChange?: (isChecked: boolean) => void;
  classes?: {
    input?: string;
    disabled?: string;
  };
}

export const Radio = forwardRef(
  ({ id, name, label, className = '', block = true, onChange, classes, disabled, ...nativeProps }, ref) => {
    const onRadioChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange && typeof onChange === 'function') {
          onChange(e.target.checked);
        }
      },
      [onChange],
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
          type="radio"
          className={cn(style.radio, classes?.input)}
          onChange={onRadioChange}
          disabled={disabled}
          ref={ref}
          {...nativeProps}
        />
      </LineItem>
    );
  },
) as ForwardRefComponent<'input', RadioProps>;

Radio.displayName = 'Radio';
