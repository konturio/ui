import React from 'react';
import { ChevronRight16 } from '@konturio/default-icons';
import cn from 'clsx';
import { Text } from '../Text';
import styles from './BreadcrumbItem.module.css';

interface BreadcrumbItemProps {
  label: string;
  value: string;
  active?: boolean;
  onClick: (value: string) => void;
  separator?: React.ReactNode;
  isLastItem?: boolean;
}

const BreadcrumbItem = React.memo(
  ({
    label,
    value,
    active = false,
    onClick,
    separator = <ChevronRight16 />,
    isLastItem = false,
  }: BreadcrumbItemProps) => {
    return (
      <li className={cn(styles.breadcrumbItem)}>
        <button className={cn(styles.button, { [styles.active]: active })} onClick={() => onClick(value)}>
          <Text type="caption" className={styles.breadcrumbLabel}>
            {label}
          </Text>
        </button>
        {!isLastItem && <div className={styles.separator}>{separator}</div>}
      </li>
    );
  },
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;
