import React from 'react';
import styles from './tableHeading.module.css';
import clsx from 'clsx';

export type TableHeadingType = {
  label: string;
  id: string;
  quality?: number;
};

interface TableHeadingProps {
  className?: string;
  selectedIndex?: number;
  hoveredIndex?: number;
  entries: TableHeadingType[];
  vertical?: boolean;
}

export const TableHeading = React.memo(
  ({ className, entries, vertical = false, selectedIndex = -1, hoveredIndex = -1 }: TableHeadingProps) => (
    <>
      {entries.map((headerCell, index) => (
        <div
          key={headerCell.label}
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
          <div>
            {headerCell.label}
            {headerCell.quality !== undefined && (
              <span className={styles.qualityLabel}> ({Math.floor(headerCell.quality * 100)})</span>
            )}
          </div>
        </div>
      ))}
    </>
  ),
);
