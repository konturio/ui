import React, { forwardRef, useCallback } from 'react';
import { ChevronDown16, ChevronUp16, Close16 } from '@konturio/default-icons';
import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import { AutocompleteItemType } from '../../types';
import cn from 'clsx';
import style from './style.module.css';

export interface AutocompleteButtonClasses {
  label?: string;
  selectBox?: string;
  placeholder?: string;
  error?: string;
}

export interface AutocompleteButtonButtonProps {
  label?: string | React.ReactChild | React.ReactChild[];
  className?: string;
  placeholder?: string;
  toggleProps: Record<string, unknown>;
  inputProps: Record<string, unknown>;
  labelProps: Record<string, unknown>;
  withResetButton?: boolean;
  open?: boolean;
  item?: string | { title: string; value: AutocompleteItemType['value'] }[];
  classes?: AutocompleteButtonClasses;
  disabled?: boolean;
  error?: boolean | string;
  type: 'classic' | 'inline';
  reset: (val?: AutocompleteItemType['value']) => void;
  children?: string;
}

export const AutocompleteButton = forwardRef(
  (
    {
      children = 'Select',
      item,
      open = false,
      label,
      className,
      classes,
      toggleProps,
      labelProps,
      inputProps,
      disabled,
      error,
      type,
      withResetButton = true,
      reset,
      ...props
    },
    ref,
  ) => {
    const dynamicClasses = cn({
      [style.autocompleteButton]: true,
      [style.disabled]: disabled,
      [style.error]: error,
      [style.inline]: type === 'inline',
    }, className);

    const onReset = useCallback(
      (e: React.MouseEvent) => {
        reset();
        e.stopPropagation();
      },
      [reset],
    );

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
          <div
            className={cn(style.placeholder, {
              [classes?.placeholder || '']: classes?.placeholder,
            })}
          >
            <input placeholder={children} className={style.input} {...inputProps} />
          </div>

          <div className={style.buttonsContainer}>
            {withResetButton && item ? <Close16 className={style.resetIcon} onClick={onReset} /> : null}
            {open ? <ChevronUp16 /> : <ChevronDown16 />}
          </div>
        </button>
        {error && typeof error === 'string' ? (
          <div className={cn(style.errorMessage, classes?.error)}>{error}</div>
        ) : null}
      </div>
    );
  },
) as ForwardRefComponent<'div', AutocompleteButtonButtonProps>;

AutocompleteButton.displayName = 'AutocompleteButton';
