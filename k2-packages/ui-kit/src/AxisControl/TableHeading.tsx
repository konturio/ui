import React from 'react';
import s from './tableHeading.module.css';
import cn from 'clsx';

export type TableHeading = {
  label: string;
  highlight?: boolean;
  selected?: boolean;
};

export interface TableHeadingProps {
  className?: string;
  entries: TableHeading[];
}

export function TableHeading({ className, entries }: TableHeadingProps) {
  const getClasses = (cell: TableHeading) =>
    cn(s.axisRecord, cell.highlight && s.highlight, cell.selected && s.selected, className);

  return (
    <>
      {entries.map((headerCell) => (
        <div key={headerCell.label} className={getClasses(headerCell)}>
          {headerCell.label}
        </div>
      ))}
    </>
  );
}