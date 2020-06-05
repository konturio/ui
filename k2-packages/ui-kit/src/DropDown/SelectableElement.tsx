import React, { useEffect, useRef, useCallback, useState } from 'react';
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
  disabled?: boolean;
  focusAsSelect?: boolean;
}

const doNothing = (): void => {
  /* Do nothing */
};

// Safari suck https://bugs.webkit.org/show_bug.cgi?id=13724
const fixSafariBug = (e): void => e.target.focus();

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
  disabled = false,
  focusAsSelect = false,
}: SelectableElement): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  /* Convert boolean props isFocused to native DOM api calls */
  useEffect(() => {
    if (isFocused === true) {
      inputRef.current?.focus();
    }
    if (isFocused === false) {
      inputRef.current?.blur();
    }
  }, [isFocused]);

  /**
   * For support `focusAsSelect` prop I must change 'checked' state of input when it got focus.
   * I see three ways:
   * 1) use internal checked stated and change it on focus
   * 2) simulate user click when it in focus
   * 3) Just switch onFocus to onChange
   * Last one looks more clear for me/
   */
  const focusHandler = useCallback(
    (e) => {
      if (onFocus) onFocus(e);
      if (focusAsSelect) onChange(e);
    },
    [focusAsSelect, onFocus, onChange],
  );

  /* Focus when programmatically select outside */
  useEffect(() => {
    if (focusAsSelect && isSelected && !isFocused) {
      inputRef.current?.focus();
    }
  }, [focusAsSelect, isSelected, isFocused]);

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
        onChange={focusAsSelect ? doNothing : onChange}
        onClick={fixSafariBug}
        className={style.radio}
        onFocus={focusHandler}
        disabled={disabled}
      />
      <label htmlFor={id} className={style.option}>
        {badge && <span className={clsx(style.badge, badgeClass)}>{badge}</span>}
        <div> {children} </div>
      </label>
    </div>
  );
}
