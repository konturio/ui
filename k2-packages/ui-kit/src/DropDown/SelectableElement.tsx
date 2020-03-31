
import React from 'react';
import clsx from 'clsx';
import style from './style.styl';

interface ISelectableElement {
  children: string | React.ReactChild | React.ReactChild[];
  onChange: (e) => void
  value: string | number;
  id: string;
  isSelected: boolean;
  badge?: string | React.ReactChild | React.ReactChild[];
}

export default function SelectableElement({
  children, value, id, isSelected, badge, onChange,
}: ISelectableElement) {
  return (
    <div
      className={clsx({
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
        <span className={style.badge}>{badge}</span>
        <div>
          {children}
        </div>
      </label>
    </div>
  );
}
