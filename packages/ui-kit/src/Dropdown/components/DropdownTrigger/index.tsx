import React, {useRef} from 'react';
import { DropdownDescendantContext, useDropdownContext } from '../../context';
import { useComposedRefs } from '../../../utils/hooks/useComposedRefs';
import { useDescendants } from '../../../utils/component-helpers/descendants';
import {
  DROPDOWN_ITEM_CLOSE_MENU,
  DROPDOWN_ITEM_OPEN_MENU_AT_FIRST_ITEM,
  DROPDOWN_ITEM_OPEN_MENU_AT_INDEX,
  DROPDOWN_ITEM_OPEN_MENU_CLEARED,
  DROPDOWN_ITEM_SET_BUTTON_ID,
} from '../../constants';
import { isRightClick } from '../../../utils/helpers/helpers';
import { composeEventHandlers } from '../../../utils/helpers/events';
import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import cn from 'clsx';
import style from './style.module.css';

export interface DropdownTriggerProps {
  children?: React.ReactNode;
  isExpanded?: boolean;
  onDropdownClose?: () => void;
}

export function useDropdownTrigger({
  onKeyDown,
  onMouseDown,
  id,
  isExpanded: isDropdownExpanded = false,
  onDropdownClose,
  ref: forwardedRef,
  ...props
}: DropdownTriggerProps &
  React.ComponentPropsWithoutRef<'button'> & {
    ref: React.ForwardedRef<HTMLButtonElement>;
  }) {
  const {
    dispatch,
    dropdownId,
    mouseDownStartPosRef,
    triggerClickedRef,
    triggerRef,
    state: { triggerId, isExpanded },
  } = useDropdownContext('useDropdownTrigger');
  const ref = useComposedRefs(triggerRef, forwardedRef);
  const items = useDescendants(DropdownDescendantContext);
  const firstNonDisabledIndex = React.useMemo(() => items.findIndex((item) => !item.disabled), [items]);

  const isExpandedRef = useRef<boolean>(isExpanded);
  if (isExpandedRef.current !== isExpanded) {
    isExpandedRef.current = isExpanded;
    if (!isExpanded && onDropdownClose && typeof onDropdownClose === 'function') {
      onDropdownClose();
    }
  }

  React.useEffect(() => {
    if (isDropdownExpanded !== isExpanded) {
      if (isDropdownExpanded) {
        dispatch({
          type: DROPDOWN_ITEM_OPEN_MENU_AT_FIRST_ITEM,
        });
      } else {
        dispatch({
          type: DROPDOWN_ITEM_CLOSE_MENU,
        });
      }
    }
  }, [isDropdownExpanded]);

  React.useEffect(() => {
    if (id != null && id !== triggerId) {
      dispatch({
        type: DROPDOWN_ITEM_SET_BUTTON_ID,
        payload: id,
      });
    }
  }, [triggerId, dispatch, id]);

  function handleKeyDown(event: React.KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        event.preventDefault(); // prevent scroll
        dispatch({
          type: DROPDOWN_ITEM_OPEN_MENU_AT_INDEX,
          payload: { index: firstNonDisabledIndex },
        });
        break;
      case 'Enter':
      case ' ':
        dispatch({
          type: DROPDOWN_ITEM_OPEN_MENU_AT_INDEX,
          payload: { index: firstNonDisabledIndex },
        });
        break;
      default:
        break;
    }
  }

  function handleMouseDown(event: React.MouseEvent) {
    if (isRightClick(event.nativeEvent)) {
      return;
    }

    mouseDownStartPosRef.current = {
      x: event.clientX,
      y: event.clientY,
    };

    if (!isExpanded) {
      triggerClickedRef.current = true;
    }
    if (isExpanded) {
      dispatch({ type: DROPDOWN_ITEM_CLOSE_MENU });
    } else {
      dispatch({ type: DROPDOWN_ITEM_OPEN_MENU_CLEARED });
    }
  }

  return {
    data: {
      isExpanded,
      controls: dropdownId,
    },
    props: {
      ...props,
      ref,
      id: triggerId || undefined,
      onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
      onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
      type: 'button' as const,
    },
  };
}

export const DropdownTrigger = React.forwardRef(
  ({ as: Comp = 'button', children, className, ...rest }, forwardedRef) => {
    const { props } = useDropdownTrigger({ ...rest, ref: forwardedRef });
    const dynamicClasses = cn({
      [style.dropdownTrigger]: true,
      className,
    });
    return (
      <Comp {...props} className={dynamicClasses}>
        {children}
      </Comp>
    );
  },
) as ForwardRefComponent<'button', DropdownTriggerProps>;

DropdownTrigger.displayName = 'DropdownTrigger';
