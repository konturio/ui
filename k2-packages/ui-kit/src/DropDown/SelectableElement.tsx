import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { scrollIntoView } from './scrollIntoView';
import style from './style.styl';

interface SelectableElement {
  children: string | React.ReactChild | React.ReactChild[];
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string | number;
  id: string;
  isSelected?: boolean;
  isFocused?: boolean;
  badge?: string | React.ReactChild | React.ReactChild[];
  badgeClass?: string;
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function SelectableElement({
  children,
  value,
  id,
  isSelected,
  isFocused,
  badge,
  onChange,
  badgeClass,
  onFocus,
}: SelectableElement) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isFocused === true) {
      inputRef.current?.focus();
    }
    if (isFocused === false) {
      inputRef.current?.blur();
    }
  }, [isFocused]);

  useEffect(() => {
    if (isSelected) {
      scrollIntoView(inputRef.current);
    }
  }, [isSelected]);

  return (
    <div
      className={clsx(style.selectable, {
        [style.selected]: isSelected,
      })}
    >
      <input
        type="radio"
        ref={inputRef}
        id={id}
        name={id}
        value={value}
        checked={isSelected}
        onChange={onChange}
        className={style.radio}
        onFocus={onFocus}
      />
      <label htmlFor={id} className={style.option}>
        {badge && <span className={clsx(style.badge, badgeClass)}>{badge}</span>}
        <div> {children} </div>
      </label>
    </div>
  );
}
