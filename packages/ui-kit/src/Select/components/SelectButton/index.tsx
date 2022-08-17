import React, {ReactNode, useCallback, useEffect} from 'react';
import { ChevronDown16, ChevronUp16, Close16 } from '@konturio/default-icons';
import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import cn from 'clsx';
import style from './style.module.css';
import { MULTISELECT_TYPE_AGGREGATE, MULTISELECT_TYPE_CHIPS, MultiselectType, SelectItemType } from '../../types';
import { MultiselectChip } from '../MultiselectChip';
import { MultiselectSearchInput } from '../MultiselectSearchInput';

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
  searchable?: boolean;
  open?: boolean;
  item?: string | { title: string; value: SelectItemType['value'] }[];
  classes?: SelectButtonClasses;
  disabled?: boolean;
  error?: boolean | string;
  type: 'classic' | 'inline';
  reset: (val?: SelectItemType['value']) => void;
  onInputChange?: (val: string) => void;
  nonExpandable?: boolean;
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
      searchable = false,
      error,
      type,
      withResetButton = true,
      reset,
      multiselect,
      onInputChange,
      nonExpandable = false,
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

    let placeholderContent: ReactNode;
    if (item) {
      if (multiselect === MULTISELECT_TYPE_AGGREGATE && item) {
        placeholderContent = <MultiselectChip onBtnClick={reset}>{item}</MultiselectChip>;
      } else if (multiselect === MULTISELECT_TYPE_CHIPS && Array.isArray(item)) {
        placeholderContent = item.map((itm, index) => (
          <MultiselectChip key={`${itm.value}_${index}`} value={itm.value} onBtnClick={reset}>
            {itm.title}
          </MultiselectChip>
        ));
      } else if (searchable) {
        placeholderContent = <MultiselectSearchInput onChange={onInputChange}>{item as string}</MultiselectSearchInput>;
      } else {
        placeholderContent = <span className={style.textContent}>{item}</span>;
      }
    } else if (searchable) {
      placeholderContent = <MultiselectSearchInput onChange={onInputChange} placeholder={children as string} />;
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
          className={cn(style.selectBox, classes?.selectBox)}
        >
          <div
            className={cn({
              [style.placeholder]: true,
              [style.nonInteractable]:
                multiselect !== MULTISELECT_TYPE_AGGREGATE && multiselect !== MULTISELECT_TYPE_CHIPS && !searchable,
              [style.noValue]: !item,
              [classes?.placeholder || '']: classes?.placeholder,
            })}
          >
            {placeholderContent}
          </div>

          <div className={style.buttonsContainer}>
            {withResetButton &&
            item &&
            multiselect !== MULTISELECT_TYPE_AGGREGATE &&
            multiselect !== MULTISELECT_TYPE_CHIPS ? (
              <Close16 className={style.resetIcon} onClick={onReset} />
            ) : null}
            {!nonExpandable ? open ? <ChevronUp16 /> : <ChevronDown16 /> : null}
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
