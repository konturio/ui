
import React from 'react';
import clsx from 'clsx';
import style from './style.styl';

interface ISelectableElement {
  children: string | React.ReactChild | React.ReactChild[];
  onChange: (e) => void
  value: string | number;
  id: string;
  isSelected?: boolean;
  badge?: string | React.ReactChild | React.ReactChild[];
  badgeClass?: string;
}

export default function SelectableElement({
  children, value, id, isSelected, badge, onChange, badgeClass
}: ISelectableElement) {
  return (
    <div
      className={clsx(style.selectable, {
        [style.selected]: isSelected,
      })}
    >
      <input
        type="radio"
        id={id}
        name={id}
        value={value}
        checked={isSelected}
        onChange={onChange}
        className={style.radio}
      />
      <label htmlFor={id} className={style.option}>
        { badge && <span className={clsx(style.badge, badgeClass)}>{badge}</span> }
        <div> {children} </div> 
      </label>
    </div>
  );
}
