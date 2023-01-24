import clsx from 'clsx';
import { useCallback } from 'react';
import { TooltipAnchor } from '../TooltipAnchor/TooltipAnchor';
import { TooltipContent } from '../TooltipContent/TooltipContent';
import s from './Tooltip.module.css';
import type { LegacyRef, PropsWithChildren } from 'react';
import type { PlacementFn, TooltipCoords, TooltipPlacement } from '../types';

export type MouseClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

export type TooltipProps = PropsWithChildren<{
  position: TooltipCoords;
  onClose?: (e: MouseClickEvent) => void;
  transitionRef?: LegacyRef<any>;
  getPlacement?: TooltipPlacement | PlacementFn;
  hoverBehavior?: boolean;
  classes?: { popupContent?: string };
  onOuterClick?: (e: MouseClickEvent) => void;
}>;

const stopPropagation = (e: MouseClickEvent) => e.stopPropagation();

export function Tooltip({
  children,
  position,
  transitionRef,
  getPlacement,
  classes,
  hoverBehavior = false,
  onOuterClick,
  onClose,
}: TooltipProps) {
  const onClickOuter = useCallback(
    (e: MouseClickEvent) => {
      if (onOuterClick && hoverBehavior === true) {
        return;
      }

      if (onOuterClick) {
        onOuterClick(e);
        return;
      }

      onClose && onClose(e);
    },
    [hoverBehavior, onOuterClick, onClose],
  );

  return (
    <div
      ref={transitionRef}
      className={clsx(s.tooltipContainer, hoverBehavior && s.hoverTooltip)}
      onClick={onClickOuter}
    >
      {position && (
        <TooltipAnchor position={position} onClick={stopPropagation} getPlacement={getPlacement}>
          <TooltipContent className={classes?.popupContent} onClose={hoverBehavior ? undefined : onClose}>
            {children}
          </TooltipContent>
        </TooltipAnchor>
      )}
    </div>
  );
}
