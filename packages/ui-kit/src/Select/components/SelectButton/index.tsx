import type { ReactNode} from 'react';
import React, { useCallback } from 'react';
import { ChevronDown16, ChevronUp16, Close16 } from '@konturio/default-icons';
import type { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import cn from 'clsx';
import style from './style.module.css';
import type { MultiselectType, SelectItemType } from '../../types';
import { MULTISELECT_TYPE_AGGREGATE, MULTISELECT_TYPE_CHIPS } from '../../types';
import { MultiselectChip } from '../MultiselectChip';

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
  multiselect?: MultiselectType;
  open?: boolean;
  item?: string | { title: string; value: SelectItemType['value'] }[];
  classes?: SelectButtonClasses;
  disabled?: boolean;
  error?: boolean | string;
  type: 'classic' | 'inline';
  reset: (val?: SelectItemType['value']) => void;
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
      reset,
      multiselect,
      ...props
    },
    ref,
  ) => {
    const dynamicClasses = cn('selectButton', className, {
      [style.root]: true,
      [style.disabled]: disabled,
      [style.error]: error,
      [style.inline]: type === 'inline',
    });

    const onReset = useCallback(
      (e: React.MouseEvent) => {
        reset();
        e.stopPropagation();
      },
      [reset],
    );

    let placeholderContent: ReactNode;
    if (item) {
      if (multiselect === MULTISELECT_TYPE_AGGREGATE && item && typeof item === 'string') {
        placeholderContent = <MultiselectChip onBtnClick={reset}>{item}</MultiselectChip>;
      } else if (multiselect === MULTISELECT_TYPE_CHIPS && Array.isArray(item)) {
        placeholderContent = item.map((itm, index) => (
          <MultiselectChip key={`${itm.value}_${index}`} value={itm.value} onBtnClick={reset}>
            {itm.title}
          </MultiselectChip>
        ));
      } else {
        placeholderContent = <span className={style.textContent}>{String(item)}</span>;
      }
    } else {
      placeholderContent = <span className={style.textContent}>{children}</span>;
    }

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
          className={cn('selectBox', style.selectBox, classes?.selectBox)}
        >
          <div
            className={cn({
              [style.placeholder]: true,
              [style.nonInteractable]:
                multiselect !== MULTISELECT_TYPE_AGGREGATE && multiselect !== MULTISELECT_TYPE_CHIPS,
              [style.noValue]: !item,
              [classes?.placeholder || '']: classes?.placeholder,
            })}
          >
            {placeholderContent}
          </div>

          <div className={cn(style.buttonsContainer, 'buttonsContainer')}>
            {withResetButton &&
            item &&
            multiselect !== MULTISELECT_TYPE_AGGREGATE &&
            multiselect !== MULTISELECT_TYPE_CHIPS ? (
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
