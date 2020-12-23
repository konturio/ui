import React from 'react';
import styles from './tableHeading.module.css';
import clsx from 'clsx';

interface TableHeadingProps {
  className?: string;
  selectedIndex?: number;
  hoveredIndex?: number;
  entries: (string | React.ReactElement)[];
  vertical?: boolean;
}

export const TableHeading = React.memo(
  ({ className, entries, vertical = false, selectedIndex = -1, hoveredIndex = -1 }: TableHeadingProps) => (
    <>
      {entries.map((headerCell, index) => (
        <div
          key={index}
          className={clsx({
            [className || '']: className,
            [styles.axisRecord]: true,
            [styles.hovered]: hoveredIndex === index,
            [styles.selected]: selectedIndex === index,
            [styles.column]: vertical,
            [styles.row]: !vertical,
            [styles.verticalText]: vertical,
          })}
        >
          {headerCell}
        </div>
      ))}
    </>
  ),
);
