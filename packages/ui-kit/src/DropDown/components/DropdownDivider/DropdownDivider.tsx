import cn from 'clsx';
import styles from './DropdownDivider.module.css';

interface DropdownDividerProps {
  className?: string;
}

export function DropdownDivider({ className }: DropdownDividerProps) {
  return <div className={cn(styles.divider, className)} />;
}
