import cn from 'clsx';
import styles from './DropdownSearchInput.module.css';
import { ChangeEvent } from 'react';

interface DropdownSearchInputProps {
  /** An input can have the auto complete. */
  autoComplete?: string;

  /** Additional classes. */
  className?: string;

  /** An input can receive focus. */
  tabIndex?: number;

  /** The HTML input type. */
  type?: string;

  /** Stored value. */
  value: number | string;

  /**
   * Called on change.
   */
  onChange: (ev: ChangeEvent, val: number | string, inputValue: string) => void;
}

export function DropdownSearchInput({
  autoComplete = 'off',
  className,
  tabIndex,
  type = 'text',
  value,
  onChange,
}: DropdownSearchInputProps) {
  const dynamicClasses = cn(styles.search, className);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    onChange(ev, value, ev.target.value);
  };

  return (
    <input
      aria-autocomplete="list"
      autoComplete={autoComplete}
      className={dynamicClasses}
      onChange={handleChange}
      tabIndex={tabIndex}
      type={type}
      value={value}
    />
  );
}
