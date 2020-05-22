import React from 'react';
import clsx from 'clsx';
import style from './style.styl';
import HighlightSpan from './HighlightSpan';
import SelectableElement from './SelectableElement';
import { useKeyPress } from './useKeyPress';

/**
 * Blur event trigger closing dropdown before onClick fired.
 * For fix that we must reorder events: 'click' before 'blur'
 * More:
 * https://stackoverflow.com/questions/17769005/onclick-and-onblur-ordering-issue
 */
// const stopBlurEvent = e => e.preventDefault();

interface Option {
  label: string | React.ReactChild | React.ReactChild[];
  value: string | number;
}

interface DropDownProps {
  onChange(event): void;
  selected?: Option['value'] | null;
  options: Option[];
  /** Work only with string label */
  highlightText?: string;
  /** Enable onKeyPress handler */
  isFocused?: boolean;
  className?: string;
  /** Need for positioning badge in list */
  badgeClass?: string;
  /** trigger only in focused state */
  onKeyPress?: (keyCode: number) => void;
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
  /** Set focus to selected item */
  focusOnSelect?: boolean;
}

export default function DropDown({
  options,
  selected,
  onChange,
  highlightText,
  isFocused,
  className,
  badgeClass,
  onKeyPress,
  onFocus,
  focusOnSelect,
}: DropDownProps): JSX.Element {
  useKeyPress(onKeyPress, isFocused);
  return (
    <div className={clsx(className, { [style.focus]: isFocused })}>
      {options.map(({ value, label }, i) => (
        <SelectableElement
          key={value}
          id={String(value)}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          isFocused={focusOnSelect && value === selected}
          isSelected={value === selected}
          badgeClass={badgeClass}
          badge={i < 9 ? <span className={style.bind}>{i + 1}</span> : undefined}
        >
          {highlightText && typeof label === 'string' ? (
            <HighlightSpan highlight={highlightText}>{label}</HighlightSpan>
          ) : (
            label
          )}
        </SelectableElement>
      ))}
    </div>
  );
}
