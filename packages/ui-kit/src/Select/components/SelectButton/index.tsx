import React from 'react';
import { ChevronDown16, ChevronUp16 } from '@konturio/default-icons';
import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import cn from 'clsx';
import s from './style.module.css';
import { SelectItem } from '../../types';

export interface SelectButtonClasses {
  label?: string;
  selectBox?: string;
  placeholder?: string;
}

export interface SelectButtonProps {
  label?: string | React.ReactChild | React.ReactChild[];
  className?: string;
  placeholder?: string;
  toggleProps: any;
  labelProps: any;
  open?: boolean;
  value: SelectItem | null;
  classes?: SelectButtonClasses;
}

export const SelectButton = React.forwardRef(
  (
    { value, open = false, label, className, placeholder = 'Select', classes, toggleProps, labelProps, ...props },
    ref,
  ) => {
    return (
      <div className={cn(s.root, className)} {...props}>
        {label && (
          <label className={cn(s.label, classes?.label)} {...labelProps}>
            {label}
          </label>
        )}
        <div {...toggleProps} className={cn(s.selectBox, classes?.selectBox)}>
          <div className={cn(s.placeholder, classes?.placeholder)}>{value?.title || placeholder}</div>
          <div className={s.openToggle}>{open ? <ChevronUp16 /> : <ChevronDown16 />}</div>
        </div>
      </div>
    );
  },
) as ForwardRefComponent<'div', SelectButtonProps>;

SelectButton.displayName = 'SelectButton';
