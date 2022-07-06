import React, {forwardRef, PropsWithChildren, useState} from 'react';
import cn from 'clsx';
import s from './style.module.css';
import {ChevronDown16, ChevronUp16} from '@konturio/default-icons';

interface Option {
  label: string | React.ReactChild | React.ReactChild[];
  value: string | number;
  disabled?: boolean;
}

export interface DropdownProps {
  options: Option[];
  onChange: (value: Option['value']) => void;
  label?: string | React.ReactChild | React.ReactChild[];
  value?: Option['value'];
  className?: string;
  placeholder?: string;
  classes?: {
    label?: string;
    selectBox?: string;
    placeholder?: string;
  };
}

function DropdownComponent(
  { children, options, onChange, label, className, placeholder = 'Select Select', classes }: PropsWithChildren<DropdownProps>,
  ref,
) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn(s.root, className)}>
      {label && <div className={cn(s.label, classes?.label)}>{label}</div>}
      {children && <div className={s.icons}>{children}</div>}
      <div className={cn(s.selectBox, classes?.selectBox)}>
        <div className={cn(s.placeholder, classes?.placeholder)}>{placeholder}</div>
        <div onClick={toggleOpen} className={s.openToggle}>
          {isOpen ? <ChevronUp16 /> : <ChevronDown16 />}
        </div>
      </div>
    </div>
  );
}

export const DropDown = forwardRef(DropdownComponent);
