/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import style from './selectedItems.styl';
import { Option } from './Option';

export interface SelectedItems {
  options: Option[];
  placeholder?: string;
  selected?: Option['value'] | Option['value'][];
  className?: string;
  children: JSX.Element;
  checkSelected: (value: Option) => boolean;
  small: boolean;
}

const getFallbackOption = (placeholder): Option => ({
  label: placeholder,
  value: '',
  disabled: true,
});

function SelectedOption({ label, value, disabled }: Option): JSX.Element {
  return (
    <div className={clsx(style.selected, disabled && style.disabled)}>
      {label}
    </div>
  )
}

export default function SelectedItems({
  options,
  selected,
  placeholder,
  className,
  children,
  checkSelected,
  small = false
}: SelectedItems): JSX.Element {
  const fallbackOption = getFallbackOption(placeholder);
  const selectedOptions = selected ? options.filter(checkSelected) || [fallbackOption] : [fallbackOption];
  const [collapsedState, setCollapsedState] = useState(true);
  const collapse = useCallback(() => {
    /*
      This timeout need here for push action to end of call stack
      Without this dropdown closing before callback on option call.
    */
    setTimeout(() => setCollapsedState(true), 0)
  }, [setCollapsedState]);

  return (
    <div className={clsx(style.wrapper, small && style.small, !collapsedState && style.open, className )}>
      <div className={style.selectedBox} onClick={() => setCollapsedState(curr => !curr)}>
        {selectedOptions.map((sOpt) => (
          <div key={sOpt.value}>
            {selectedOptions.map(sOpt => <SelectedOption key={sOpt.value} {...sOpt} />)}
          </div>
        ))}
        <span className={style.btn}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 8L10 13L5 8" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {!collapsedState ? <div onClick={collapse}>
        {children}
      </div> : null}
    </div>
  );
}