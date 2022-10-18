import type { ReactNode } from 'react';
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
  topPlaceholder?: string;
}

export interface SelectButtonProps {
  label?: string | React.ReactChild | React.ReactChild[];
  className?: string;
  placeholder?: string;
  showTopPlaceholder?: boolean;
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
      placeholder,
      showTopPlaceholder,
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
    console.log('%c⧭ showTopPlaceholder игеещт', 'color: #00e600', showTopPlaceholder, placeholder);

    const onReset = useCallback(
      (e: React.MouseEvent) => {
        reset();
        e.stopPropagation();
      },
      [reset],
    );


    const getPlaceholderAndItem = (): ReactNode => {
      // Several options here
      // placeholder space - can be occupied with value, with placeholder(multiple options), or Select children
      // in case item is selected(presented) - top placeholder should be shown in addition
      // to the item (on top)

      let itemContent: ReactNode;
      if (item) {
        if (multiselect === MULTISELECT_TYPE_AGGREGATE && item && typeof item === 'string') {
          itemContent = <MultiselectChip onBtnClick={reset}>{item}</MultiselectChip>;
        } else if (multiselect === MULTISELECT_TYPE_CHIPS && Array.isArray(item)) {
          itemContent = item.map((itm, index) => (
            <MultiselectChip key={`${itm.value}_${index}`} value={itm.value} onBtnClick={reset}>
              {itm.title}
            </MultiselectChip>
          ));
        } else {
          itemContent = <span className={style.textContent}>{String(item)}</span>;
        }
      }
      else if (item && !placeholder) {
        itemContent = <span className={style.textContent}>{children}</span>;
      }

      if (!placeholder) return itemContent

      if (!showTopPlaceholder && item) {
        return itemContent;
      }

      return (
        <div className={style.combinedItemAndTopPlaceholder}>
          <div className={style.itemWrap}>
            {itemContent}
          </div>
          <div className={cn(
            style.topPlaceholder,
            classes?.topPlaceholder,
          )}>
            {placeholder}
          </div>
        </div>
      );
    };

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
                [style.hasValue]: item,
              [classes?.placeholder || '']: classes?.placeholder,
            })}
          >
            {getPlaceholderAndItem()}
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
