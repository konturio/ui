import type { SelectItemType } from '../../types';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback } from 'react';
import type { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import { Close16 } from '@konturio/default-icons';
import cn from 'clsx';
import style from './style.module.css';

export interface MultiselectChipProps extends HTMLAttributes<HTMLSpanElement> {
  value?: SelectItemType['value'];
  onBtnClick?: (val?: SelectItemType['value']) => void;
  className?: string;
}

export const MultiselectChip = forwardRef(({ children, value, onBtnClick, className, ...rest }, ref) => {
  const onClick = useCallback(
    (ev: React.MouseEvent<any>) => {
      ev.stopPropagation();

      onBtnClick && onBtnClick(value);
    },
    [value, onBtnClick],
  );

  return (
    <span className={cn('multiselectChip', style.root, className)} ref={ref} {...rest}>
      <span className={cn('textContainer', style.textContainer)}>{children}</span>
      {onBtnClick && (
        <span className={cn('btnContainer', style.btnContainer)}>
          <Close16 className={style.resetBtn} onClick={onClick} />
        </span>
      )}
    </span>
  );
}) as ForwardRefComponent<'span', MultiselectChipProps>;

MultiselectChip.displayName = 'MultiselectChip';
