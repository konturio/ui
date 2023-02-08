import clsx from 'clsx';
import { useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import { arrow, autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { TooltipContent } from '../TooltipContent/TooltipContent';
import s from './Tooltip.module.css';
import { calculatePlacement } from './calculatePlacement';
import type { CSSProperties, MutableRefObject } from 'react';
import type { LegacyRef, PropsWithChildren } from 'react';
import type { PlacementFn, TooltipCoords, TooltipPlacement } from '../types';
import type { Placement } from '@floating-ui/react-dom';

export type MouseClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

export type TooltipProps = PropsWithChildren<{
  position?: TooltipCoords | null;
  onClose?: (e: MouseClickEvent) => void;
  transitionRef?: LegacyRef<any>;
  placement?: Placement;
  /** @deprecated please use `plecement instead, `getPlacement` will be removed in future versions */
  getPlacement?: TooltipPlacement | PlacementFn;
  hoverBehavior?: boolean;
  classes?: { popupContent?: string };
  onOuterClick?: (e: MouseClickEvent) => void;
  triggerRef?: MutableRefObject<any>;
  open?: boolean;
  offset?: number;
}>;

const defaultPlacement = 'top';

export function Tooltip({
  children,
  position,
  transitionRef,
  placement: placementProp,
  getPlacement,
  classes,
  hoverBehavior = false,
  onOuterClick,
  onClose,
  triggerRef,
  open = true, // required for backward compatibility
  offset: offsetValue = 7, // include arrow size which equals sqrt(5^2 + 5^2) = 7.07 ~ 7,
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

      onClose?.(e);
    },
    [hoverBehavior, onOuterClick, onClose],
  );

  const arrowRef = useRef<HTMLDivElement | null>(null);

  const placement = useMemo(
    () => calculatePlacement(getPlacement, placementProp, position) || defaultPlacement,
    [getPlacement, placementProp, position],
  );

  const {
    refs,
    x: floatingX,
    y: floatingY,
    strategy,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    placement: finalPlacement,
  } = useFloating({
    placement: placement,
    open,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetValue),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift({ padding: 5 }),
      arrow({ element: arrowRef }),
    ],
  });

  useLayoutEffect(() => {
    if (triggerRef) refs.setReference(triggerRef.current);
  }, [triggerRef, refs]);

  useLayoutEffect(() => {
    if (position)
      refs.setReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: position.x,
            y: position.y,
            top: position.y,
            left: position.x,
            right: position.x,
            bottom: position.y,
          };
        },
      });
  }, [position, refs]);

  const x = floatingX ?? 0;
  const y = floatingY ?? 0;

  const positionVariables = useMemo<CSSProperties>(
    () =>
      ({
        '--tooltip-arrox-x-position': arrowX != null ? `${arrowX}px` : '',
        '--tooltip-arrow-y-position': arrowY != null ? `${arrowY}px` : '',
        '--tooltip-x-position': `${x}px`,
        '--tooltip-y-position': `${y}px`,
        '--tooltip-placement': strategy,
      } as CSSProperties),
    [arrowX, arrowY, strategy, x, y],
  );

  const arrowSide = useMemo(() => {
    const side = finalPlacement.split('-')[0] || defaultPlacement;
    return `arrow-${side}`;
  }, [finalPlacement]);

  if (!open) return null;

  if (!triggerRef && !position) throw new Error('Tooltip: either triggerRef or position should be provided.');
  if (!!position && !!triggerRef) throw new Error('Tooltip: only one of triggerRef or position should be provided.');

  return (
    <div
      ref={transitionRef}
      className={clsx(s.tooltipContainer, { [s.hoverTooltip]: hoverBehavior })}
      onClick={onClickOuter}
      style={positionVariables}
    >
      <TooltipContent
        ref={refs.setFloating}
        className={classes?.popupContent}
        onClose={hoverBehavior ? undefined : onClose}
      >
        {children}
        <div ref={arrowRef} className={clsx(s.arrow, s[arrowSide])}></div>
      </TooltipContent>
    </div>
  );
}
