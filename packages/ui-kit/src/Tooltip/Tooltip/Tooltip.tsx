import clsx from 'clsx';
import { useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import { arrow, autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { Close16 } from '@konturio/default-icons';
import s from './Tooltip.module.css';
import { calculatePlacement } from './calculatePlacement';
import type { CSSProperties } from 'react';
import type { TooltipProps } from '../types';

export type MouseClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

const defaultPlacement = 'top';

export function Tooltip({
  children,
  position,
  triggerRef,
  transitionRef,
  placement: placementProp,
  getPlacement,
  classes,
  hoverBehavior = false,
  onOuterClick,
  onClose,
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
    middleware: [offset(offsetValue), flip(), shift({ padding: 5 }), arrow({ element: arrowRef })],
  });

  const positionVariables = useMemo<CSSProperties>(
    () =>
      ({
        '--tooltip-arrox-x-position': arrowX != null ? `${arrowX}px` : '',
        '--tooltip-arrow-y-position': arrowY != null ? `${arrowY}px` : '',
        '--tooltip-x-position': `${floatingX ?? 0}px`,
        '--tooltip-y-position': `${floatingY ?? 0}px`,
        '--tooltip-placement': strategy,
      }) as CSSProperties,
    [arrowX, arrowY, floatingX, floatingY, strategy],
  );

  const arrowSide = useMemo(() => {
    const side = finalPlacement.split('-')[0] || defaultPlacement;
    return `arrow-${side}`;
  }, [finalPlacement]);

  useLayoutEffect(() => {
    if (triggerRef) {
      refs.setReference(triggerRef.current);
    } else if (position) {
      const { x, y } = position;
      refs.setReference({
        getBoundingClientRect() {
          return { width: 0, height: 0, x, y, top: y, left: x, right: x, bottom: y };
        },
      });
    }
  }, [position, refs, triggerRef]);

  if (position && triggerRef) {
    console.error('Both position and triggerRef are provided. Tooltip will be rendered with triggerRef');
  }

  if (!position && !triggerRef) {
    console.error('Tooltip will not be rendered because neither position nor triggerRef are provided');
    return null;
  }

  if (!open) return null;

  const onCloseProp = hoverBehavior ? undefined : onClose;

  return (
    <div
      ref={transitionRef}
      className={clsx(s.tooltipContainer, { [s.hoverTooltip]: hoverBehavior })}
      onClick={onClickOuter}
      style={positionVariables}
    >
      <div ref={refs.setFloating} className={s.tooltipContent}>
        <div className={clsx(s.contentBody, clsx)}>
          <div>
            {children}
            <div className={s.bodyBottom}></div>
          </div>

          {onCloseProp && (
            <div className={s.closeIcon} onClick={onCloseProp}>
              <Close16 />
            </div>
          )}
        </div>
        <div ref={arrowRef} className={clsx(s.arrow, s[arrowSide])}>
          <div className={s.arrowInner} />
        </div>
      </div>
    </div>
  );
}
