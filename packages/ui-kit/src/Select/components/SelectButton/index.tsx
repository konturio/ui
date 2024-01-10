import React, { useCallback } from 'react';
import { ChevronDown16, ChevronUp16, Close16 } from '@konturio/default-icons';
import cn from 'clsx';
import { Text } from '../../../Text';
import { checkSelectionModeInteractivity } from '../../checkSelectionModeInteractivity';
import style from './style.module.css';
import { SelectContent } from './SelectContent';
import { Placeholder } from './Placeholder';
import type { SelectableItem, SelectMode } from '../../types';
import type { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';

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
  withResetButton?: boolean;
  selectMode: SelectMode;
  value?: SelectableItem;
  open?: boolean;
  item?: string | { title: string; value: SelectableItem['value'] }[];
  classes?: SelectButtonClasses;
  disabled?: boolean;
  error?: boolean | string;
  type: 'classic' | 'inline';
  remove: (val: SelectableItem) => void;
  reset?: () => void;
  alwaysShowPlaceholder?: boolean;
}

export const SelectButton = React.forwardRef(
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
      disabled,
      error,
      type,
      withResetButton = true,
      remove,
      selectMode,
      value,
      alwaysShowPlaceholder,
      reset,
      ...props
    },
    ref,
  ) => {
    const onReset = useCallback(
      (e: React.MouseEvent) => {
        reset?.();
        e.stopPropagation();
      },
      [reset],
    );

    const isInteractiveSelectionMode = checkSelectionModeInteractivity(selectMode);

    return (
      <div
        className={cn('selectButton', className, {
          [style.root]: true,
          [style.disabled]: disabled,
          [style.error]: error,
          [style.inline]: type === 'inline',
        })}
        {...props}
        ref={ref}
      >
        {label && (
          <Text type="label">
            <label className={cn(style.label, classes?.label)} {...labelProps}>
              {label}
            </label>
          </Text>
        )}
        <button
          disabled={disabled}
          type="button"
          aria-label="toggle menu"
          {...toggleProps}
          className={cn('selectBox', style.selectBox, classes?.selectBox)}
        >
          <div
            className={cn(
              style.placeholderWrap,
              item === null || item === undefined || (Array.isArray(item) && !item.length)
                ? style.noValue
                : style.hasValue,
              {
                [style.nonInteractable]: !isInteractiveSelectionMode,
                [style.alwaysShowPlaceholder]: alwaysShowPlaceholder,
                className,
              },
            )}
          >
            <SelectContent
              selectMode={selectMode}
              onRemove={remove}
              onReset={reset}
              placeholder={<Placeholder>{children}</Placeholder>}
              alwaysShowPlaceholder={alwaysShowPlaceholder}
            >
              {item}
            </SelectContent>
          </div>

          <div className={cn(style.buttonsContainer, 'buttonsContainer')}>
            {withResetButton && item && !isInteractiveSelectionMode ? (
              <Close16 className={style.resetIcon} onClick={onReset} />
            ) : null}
            {open ? <ChevronUp16 /> : <ChevronDown16 />}
          </div>
        </button>
        {error && typeof error === 'string' ? (
          <div className={cn('errorMessage', style.errorMessage, classes?.error)}>{error}</div>
        ) : null}
      </div>
    );
  },
) as ForwardRefComponent<'div', SelectButtonProps>;

SelectButton.displayName = 'SelectButton';
