import { type PropsWithChildren, useCallback } from 'react';
import { Close16 } from '@konturio/default-icons';
import cn from 'clsx';
import style from './style.module.css';

export interface MultiselectChipProps<Item> {
  value: Item;
  onBtnClick?: (val: Item) => void;
  className?: string;
}

export function MultiselectChip<Item>({
  children,
  value,
  onBtnClick,
  className,
}: PropsWithChildren<MultiselectChipProps<Item>>) {
  const onClick = useCallback(
    (ev: React.MouseEvent<any>) => {
      ev.stopPropagation();
      onBtnClick && onBtnClick(value);
    },
    [value, onBtnClick],
  );

  return (
    <span className={cn('multiselectChip', style.root, className)}>
      <span className={cn('textContainer', style.textContainer)}>{children}</span>
      {onBtnClick && (
        <span className={cn('btnContainer', style.btnContainer)}>
          <Close16 className={style.resetBtn} onClick={onClick} />
        </span>
      )}
    </span>
  );
}
