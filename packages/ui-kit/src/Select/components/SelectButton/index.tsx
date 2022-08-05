import React, { useCallback } from 'react';
import { ChevronDown16, ChevronUp16, Close16 } from '@konturio/default-icons';
import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import { SelectItemType } from '../../types';
import cn from 'clsx';
import style from './style.module.css';

export interface SelectButtonClasses {
  label?: string;
  selectBox?: string;
  placeholder?: string;
  error?: string;
}

export interface SelectButtonProps {
  label?: string | React.ReactChild | React.ReactChild[];
  className?: string;
  placeholder?: string;
  toggleProps: Record<string, unknown>;
  labelProps: Record<string, unknown>;
  open?: boolean;
  value: SelectItemType | null;
  classes?: SelectButtonClasses;
  disabled?: boolean;
  error?: boolean | string;
  type: 'classic' | 'inline';
  reset: () => void;
}

export const SelectButton = React.forwardRef(
  (
    {
      children = 'Select',
      value,
      open = false,
      label,
      className,
      classes,
      toggleProps,
      labelProps,
      disabled,
      error,
      type,
      reset,
      ...props
    },
    ref,
  ) => {
    const dynamicClasses = cn({
      [style.root]: true,
      [style.disabled]: disabled,
      [style.error]: error,
      [style.inline]: type === 'inline',
      className,
    });

    const onReset = useCallback(
      (e: React.MouseEvent) => {
        reset();
        e.stopPropagation();
      },
      [reset],
    );

    const title = value?.title;

    return (
      <div className={dynamicClasses} {...props} ref={ref}>
        {label && (
          <label className={cn(style.label, classes?.label)} {...labelProps}>
            {label}
          </label>
        )}
        <button
          disabled={disabled}
          type="button"
          aria-label="toggle menu"
          {...toggleProps}
          className={cn(style.selectBox, classes?.selectBox)}
        >
          <div className={cn(style.placeholder, !title && style.noValue, classes?.placeholder)}>
            {title || children}
          </div>

          <div className={style.openToggle}>
            {title ? (
              <Close16 className={style.closeIcon} onClick={onReset} />
            ) : open ? (
              <ChevronUp16 />
            ) : (
              <ChevronDown16 />
            )}
          </div>
        </button>
        {error && typeof error === 'string' ? (
          <div className={cn(style.errorMessage, classes?.error)}>{error}</div>
        ) : null}
      </div>
    );
  },
) as ForwardRefComponent<'div', SelectButtonProps>;

SelectButton.displayName = 'SelectButton';
