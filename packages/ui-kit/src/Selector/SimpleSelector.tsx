import React, { useRef, useLayoutEffect } from 'react';
import cn from 'clsx';
import styles from './simpleSelector.module.css';
import type { OptionType} from './Option';
import { Option } from './Option';

interface SimpleSelectorProps {
  orientation?: 'vertical' | 'horizontal';
  options: OptionType[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  multi?: boolean;
  checkSelected: (value: OptionType) => boolean;
  small?: boolean;
  stopPropagation?: boolean;
  onHover;
}

export const SimpleSelector = ({
  options,
  className,
  checkSelected,
  onChange,
  orientation = 'vertical',
  small = false,
  stopPropagation = false,
  onHover,
}: SimpleSelectorProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (stopPropagation) {
      const handler = (e) => {
        e.stopPropagation();
        e.target.value && onChange(e); // Prevent double event emit (second for label)
      };
      ref.current?.addEventListener('click', handler);
      return () => ref.current?.removeEventListener('click', handler);
    }
    return;
  }, [ref, stopPropagation]);

  return (
    <div className={cn(styles.selector, className, styles[orientation])} ref={ref}>
      {options.map((opt) => (
        <Option
          key={opt.value}
          label={opt.label}
          value={opt.value}
          hint={opt.hint}
          onChange={opt.disabled ? undefined : onChange}
          disabled={opt.disabled}
          small={small}
          selected={checkSelected(opt)}
          onMouseOver={onHover}
          className={orientation === 'horizontal' ? styles.center : ''}
        />
      ))}
    </div>
  );
};
