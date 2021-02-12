import React from 'react';
import styles from './tableHeading.module.css';
import clsx from 'clsx';

const getHeadingPositionStyle = (isColum: boolean, index: number) => {
  const styles: any = {
    gridColumn: isColum ? `${index + 3} / ${index + 4}` : '1',
    gridRow: isColum ? '1' : `${index + 3} / ${index + 4}`,
  };

  // if (isColum) {
  //   styles.height = `${100 + index * 40}px`;
  // } else {
  //   styles.width = `${100 + index * 40}px`;
  // }

  return styles;
};

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
          style={getHeadingPositionStyle(vertical, index)}
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
          <div className={styles.corner}></div>
          {headerCell}
        </div>
      ))}
    </>
  ),
);
