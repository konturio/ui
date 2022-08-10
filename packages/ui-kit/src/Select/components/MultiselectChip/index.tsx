import { SelectItemType } from '../../types';
import { forwardRef, HTMLAttributes, useCallback } from 'react';
import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
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
    <span className={cn(style.root, className)} ref={ref} {...rest}>
      {children}
      {onBtnClick && (
        <span className={style.btnContainer}>
          <Close16 className={style.resetBtn} onClick={onClick} />
        </span>
      )}
    </span>
  );
}) as ForwardRefComponent<'span', MultiselectChipProps>;

MultiselectChip.displayName = 'MultiselectChip';
