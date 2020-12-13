import React from 'react';
import styles from './tableHeading.module.css';
import clsx from 'clsx';

export type TableHeading = {
  label: string;
  id: string;
  highlight?: boolean;
  selected?: boolean;
  hovered?: boolean;
  quality?: number;
};

interface TableHeadingProps {
  className?: string;
  entries: TableHeading[];
  vertical?: boolean;
}

export const TableHeading = React.memo(({ className, entries, vertical = false }: TableHeadingProps) => (
  <>
    {entries.map((headerCell) => (
      <div
        key={headerCell.label}
        className={clsx({
          [className || '']: className,
          [styles.axisRecord]: true,
          [styles.highlight]: headerCell.highlight,
          [styles.hovered]: headerCell.hovered,
          [styles.selected]: headerCell.selected,
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
));
