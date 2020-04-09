import React from 'react';
import clsx from 'clsx';
import style from './style.styl';
import HighlightSpan from './HighlightSpan';
import SelectableElement from './SelectableElement';
/**
 * Blur event trigger closing dropdown before onClick fired.
 * For fix that we must reorder events: 'click' before 'blur'
 * More:
 * https://stackoverflow.com/questions/17769005/onclick-and-onblur-ordering-issue
 */
// const stopBlurEvent = e => e.preventDefault();

interface IOption {
  label: string;
  value: string | number;
}

interface IDropDownProps {
  onChange(event): void;
  selected?: IOption['value'] | null;
  options: IOption[];
  highlightText?: string;
  isFocused?: boolean;
}

export default function DropDown({
  options,
  selected,
  onChange,
  highlightText,
  isFocused,
}: IDropDownProps) {
  return (
    <div className={clsx(style.root, { [style.focus]: isFocused })}>
      {options.map(({ value, label }, i) => (
        <SelectableElement
          // eslint-disable-next-line react/no-array-index-key
          key={`${value}-${i}`}
          id={`${value}-${i}`}
          value={value}
          onChange={onChange}
          isSelected={value === selected}
          badge={
            i < 9 ? <span className={style.bind}>{i + 1}</span> : undefined
          }
        >
          {
            highlightText
              ? <HighlightSpan highlight={highlightText}>{label}</HighlightSpan>
              : label
            }
        </SelectableElement>
      ))}
    </div>
  );
}
