import React from 'react';
import s from './tableHeading.module.css';
import clsx from 'clsx';

export type TableHeading = {
  label: string;
  id: string;
  highlight?: boolean;
  selected?: boolean;
  hovered?: boolean;
};

interface TableHeadingProps {
  className?: string;
  entries: TableHeading[];
  vertical?: boolean;
}

export const TableHeading: React.FC<TableHeadingProps> = (props: TableHeadingProps) => {
  const { className, entries, vertical = false } = props;

  return (
    <>
      {entries.map((headerCell) => (
        <div
          key={headerCell.label}
          className={clsx({
            [className || '']: className,
            [s.axisRecord]: true,
            [s.highlight]: headerCell.highlight,
            [s.hovered]: headerCell.hovered,
            [s.selected]: headerCell.selected,
            [s.column]: vertical,
            [s.row]: !vertical,
            [s.verticalText]: vertical,
          })}
        >
          {headerCell.label}
        </div>
      ))}
    </>
  );
};
