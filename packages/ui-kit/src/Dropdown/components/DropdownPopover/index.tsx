import React from 'react';
import cn from 'clsx';
import { Popover } from '../../../Popover';
import { useComposedRefs } from '../../../utils/hooks/useComposedRefs';
import { elementContainsEventTarget, getOwnerDocument } from '../../../utils/helpers/helpers';
import { DROPDOWN_ITEM_CLOSE_MENU } from '../../constants';
import { composeEventHandlers } from '../../../utils/helpers/events';
import { useDropdownContext } from '../../context';
import style from './style.module.css';
import type { Position } from '../../../utils/position/position';
import type { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';

export function useDropdownPopover({
  onBlur,
  portal = true,
  position,
  ref: forwardedRef,
  ...props
}: DropdownPopoverProps &
  React.ComponentPropsWithoutRef<'div'> & {
    ref: React.ForwardedRef<HTMLDivElement>;
  }) {
  const {
    triggerRef,
    triggerClickedRef,
    dispatch,
    dropdownRef,
    popoverRef,
    state: { isExpanded },
  } = useDropdownContext('useDropdownPopover');

  const ref = useComposedRefs(popoverRef, forwardedRef);

  React.useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const ownerDocument = getOwnerDocument(popoverRef.current)!;
    function listener(event: MouseEvent | TouchEvent) {
      if (triggerClickedRef.current) {
        triggerClickedRef.current = false;
      } else if (!elementContainsEventTarget(popoverRef.current, event.target)) {
        // We on want to close only if focus rests outside the dropdown
        dispatch({ type: DROPDOWN_ITEM_CLOSE_MENU });
      }
    }
    ownerDocument.addEventListener('mousedown', listener);
    return () => {
      ownerDocument.removeEventListener('mousedown', listener);
    };
  }, [triggerClickedRef, triggerRef, dispatch, dropdownRef, popoverRef, isExpanded]);

  return {
    data: {
      portal,
      position,
      targetRef: triggerRef,
      isExpanded,
    },
    props: {
      ref,
      hidden: !isExpanded,
      onBlur: composeEventHandlers(onBlur, (event) => {
        if (event.currentTarget.contains(event.relatedTarget as Node)) {
          return;
        }
        dispatch({ type: DROPDOWN_ITEM_CLOSE_MENU });
      }),
      ...props,
    },
  };
}

export interface DropdownPopoverProps {
  children: React.ReactNode;
  portal?: boolean;
  position?: Position;
}

export const DropdownPopover = React.forwardRef(({ as: Comp = 'div', className, ...rest }, forwardedRef) => {
  const {
    data: { portal, targetRef, position },
    props,
  } = useDropdownPopover({ ...rest, ref: forwardedRef });

  const dynamicClasses = cn({ [style.dropdownPopover]: true, [style.hidden]: props.hidden, className });

  return portal ? (
    <Popover {...props} className={dynamicClasses} as={Comp} targetRef={targetRef as any} position={position} />
  ) : (
    <Comp className={dynamicClasses} {...props} />
  );
}) as ForwardRefComponent<'div', DropdownPopoverProps>;

DropdownPopover.displayName = 'DropdownPopover';
