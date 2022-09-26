import { tabbable } from 'tabbable';
import type { CSSProperties, ReactNode, RefObject} from 'react';
import { forwardRef, useEffect, useRef } from 'react';
import { useComposedRefs } from '../utils/hooks/useComposedRefs';
import { getOwnerDocument } from '../utils/helpers/helpers';
import type { ForwardRefComponent } from '../utils/component-helpers/polymorphic';
import { Portal } from '../Portal';
import type { Position} from '../utils/position/position';
import { positionDefault } from '../utils/position/position';
import type { PRect} from '../utils/position/rect';
import { useRect } from '../utils/position/rect';
import cn from 'clsx';
import style from './style.module.css';

type PossibleNode = null | undefined | HTMLElement | SVGElement;

/**
 * Popover
 */
interface PopoverProps {
  children: ReactNode;
  targetRef: RefObject<PossibleNode>;
  position?: Position;
  hidden?: boolean;
}

export const Popover = forwardRef(function Popover(props, ref) {
  return (
    <Portal>
      <PopoverImpl ref={ref} {...props} />
    </Portal>
  );
}) as ForwardRefComponent<'div', PopoverProps>;

Popover.displayName = 'Popover';

const PopoverImpl = forwardRef(function PopoverImpl(
  { as: Comp = 'div', targetRef, position = positionDefault, className, ...props },
  forwardedRef,
) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const popoverRect = useRect(popoverRef, { observe: !props.hidden });
  const targetRect = useRect(targetRef, { observe: true });
  const ref = useComposedRefs(popoverRef, forwardedRef);

  useSimulateTabNavigationForReactTree(targetRef as any, popoverRef);

  const dynamicClasses = cn({
    [style.popover]: true,
    className,
  });

  return (
    <Comp
      ref={ref}
      {...props}
      style={{
        position: 'absolute',
        ...getStyles(position, targetRect, popoverRect),
        ...props.style,
      }}
      className={dynamicClasses}
    />
  );
}) as ForwardRefComponent<'div', PopoverProps>;

PopoverImpl.displayName = 'PopoverImpl';

function getStyles(position: Position, targetRect: PRect | null, popoverRect: PRect | null): CSSProperties {
  return popoverRect ? position(targetRect, popoverRect) : { visibility: 'hidden' };
}

function useSimulateTabNavigationForReactTree<T extends HTMLElement, P extends HTMLElement>(
  triggerRef: React.RefObject<T>,
  popoverRef: React.RefObject<P>,
) {
  const ownerDocument = getOwnerDocument(triggerRef.current)!;

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab' && popoverRef.current && tabbable(popoverRef.current).length === 0) {
      return;
    }

    if (event.key === 'Tab' && event.shiftKey) {
      if (shiftTabbedFromElementAfterTrigger(event)) {
        focusLastTabbableInPopover(event);
      } else if (shiftTabbedOutOfPopover(event)) {
        focusTriggerRef(event);
      } else if (shiftTabbedToBrowserChrome(event)) {
        disableTabbablesInPopover();
      }
    } else if (event.key === 'Tab') {
      if (tabbedFromTriggerToPopover()) {
        focusFirstPopoverTabbable(event);
      } else if (tabbedOutOfPopover()) {
        focusTabbableAfterTrigger(event);
      } else if (tabbedToBrowserChrome(event)) {
        disableTabbablesInPopover();
      }
    }
  }

  useEffect(() => {
    ownerDocument.addEventListener('keydown', handleKeyDown);
    return () => {
      ownerDocument.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getElementAfterTrigger() {
    const elements = tabbable(ownerDocument as any);
    const targetIndex = elements && triggerRef.current ? elements.indexOf(triggerRef.current) : -1;
    const elementAfterTrigger = elements && elements[targetIndex + 1];
    return popoverRef.current && popoverRef.current.contains(elementAfterTrigger || null) ? false : elementAfterTrigger;
  }

  function tabbedFromTriggerToPopover() {
    return triggerRef.current ? triggerRef.current === ownerDocument.activeElement : false;
  }

  function focusFirstPopoverTabbable(event: KeyboardEvent) {
    const elements = popoverRef.current && tabbable(popoverRef.current);
    if (elements && elements[0]) {
      event.preventDefault();
      elements[0].focus();
    }
  }

  function tabbedOutOfPopover() {
    const inPopover = popoverRef.current ? popoverRef.current.contains(ownerDocument.activeElement || null) : false;
    if (inPopover) {
      const elements = popoverRef.current && tabbable(popoverRef.current);
      return Boolean(elements && elements[elements.length - 1] === ownerDocument.activeElement);
    }
    return false;
  }

  function focusTabbableAfterTrigger(event: KeyboardEvent) {
    const elementAfterTrigger = getElementAfterTrigger();
    if (elementAfterTrigger) {
      event.preventDefault();
      elementAfterTrigger.focus();
    }
  }

  function shiftTabbedFromElementAfterTrigger(event: KeyboardEvent) {
    if (!event.shiftKey) return;
    const elementAfterTrigger = getElementAfterTrigger();
    return event.target === elementAfterTrigger;
  }

  function focusLastTabbableInPopover(event: KeyboardEvent) {
    const elements = popoverRef.current && tabbable(popoverRef.current);
    const last = elements && elements[elements.length - 1];
    if (last) {
      event.preventDefault();
      last.focus();
    }
  }

  function shiftTabbedOutOfPopover(event: KeyboardEvent) {
    const elements = popoverRef.current && tabbable(popoverRef.current);
    if (elements) {
      return elements.length === 0 ? false : event.target === elements[0];
    }
    return false;
  }

  function focusTriggerRef(event: KeyboardEvent) {
    event.preventDefault();
    triggerRef.current?.focus();
  }

  function tabbedToBrowserChrome(event: KeyboardEvent) {
    const elements = popoverRef.current
      ? tabbable(ownerDocument as any).filter((element) => !popoverRef.current!.contains(element))
      : null;
    return elements ? event.target === elements[elements.length - 1] : false;
  }

  function shiftTabbedToBrowserChrome(event: KeyboardEvent) {
    return event.target === tabbable(ownerDocument as any)[0];
  }

  const restoreTabIndexTuples: [HTMLElement | SVGElement, number][] = [];

  function disableTabbablesInPopover() {
    const elements = popoverRef.current && tabbable(popoverRef.current);
    if (elements) {
      elements.forEach((element) => {
        restoreTabIndexTuples.push([element, element.tabIndex]);
        element.tabIndex = -1;
      });
      ownerDocument.addEventListener('focusin', enableTabbablesInPopover);
    }
  }

  function enableTabbablesInPopover() {
    ownerDocument.removeEventListener('focusin', enableTabbablesInPopover);
    restoreTabIndexTuples.forEach(([element, tabIndex]) => {
      element.tabIndex = tabIndex;
    });
  }
}
