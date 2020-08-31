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
  vertical?: boolean;
}

export function TableHeading({ className, entries, vertical = false }: TableHeadingProps) {
  const getClasses = (cell: TableHeading) =>
    cn(
      s.axisRecord,
      cell.highlight && s.highlight,
      cell.selected && s.selected,
      vertical ? s.column : s.row,
      vertical && s.verticalText,
      className,
    );

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
