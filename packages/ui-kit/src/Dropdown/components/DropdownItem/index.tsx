import React from 'react';
import { useStatefulRefValue } from '../../../utils/hooks/useStatefulRefValue';
import { useDescendant } from '../../../utils/component-helpers/descendants';
import { useComposedRefs } from '../../../utils/hooks/useComposedRefs';
import { focusElement, getOwnerDocument, isRightClick, noop } from '../../../utils/helpers/helpers';
import { composeEventHandlers } from '../../../utils/helpers/events';
import { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import {
  DROPDOWN_ITEM_CLEAR_SELECTION_INDEX,
  DROPDOWN_ITEM_CLICK_MENU_ITEM,
  DROPDOWN_ITEM_SELECT_ITEM_AT_INDEX,
} from '../../constants';
import { DropdownDescendantContext, useDropdownContext, useItemId } from '../../context';
import cn from 'clsx';
import style from './style.module.css';

export function useDropdownItem({
  index: indexProp,
  isLink = false,
  onClick,
  onDragStart,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseUp,
  onSelect,
  disabled,
  onFocus,
  valueText: valueTextProp,
  ref: forwardedRef,
  ...props
}: DropdownItemProps &
  React.ComponentPropsWithoutRef<'div'> & {
    ref: React.ForwardedRef<HTMLDivElement>;
  }) {
  const {
    dispatch,
    dropdownRef,
    mouseDownStartPosRef,
    readyToSelect,
    selectCallbacks,
    triggerRef,
    state: { selectionIndex, isExpanded },
  } = useDropdownContext('useDropdownItem');

  const ownRef = React.useRef<HTMLDivElement | null>(null);
  const [valueText, setValueText] = React.useState(valueTextProp || '');

  const setValueTextFromDOM = React.useCallback(
    (node: HTMLElement) => {
      if (!valueTextProp && node?.textContent) {
        setValueText(node.textContent);
      }
    },
    [valueTextProp],
  );

  const mouseEventStarted = React.useRef(false);

  const [element, handleRefSet] = useStatefulRefValue<HTMLDivElement | null>(ownRef, null);
  const descendant = React.useMemo(() => {
    return {
      element,
      key: valueText,
      disabled,
      isLink,
    };
  }, [disabled, element, isLink, valueText]);
  const index = useDescendant(descendant, DropdownDescendantContext, indexProp);
  const isSelected = index === selectionIndex && !disabled;

  const ref = useComposedRefs(forwardedRef, handleRefSet, setValueTextFromDOM);

  // Update the callback ref array on every render
  selectCallbacks.current[index] = onSelect;

  function select() {
    focusElement(triggerRef.current);
    onSelect && onSelect();
    dispatch({ type: DROPDOWN_ITEM_CLICK_MENU_ITEM });
  }

  function handleClick(event: React.MouseEvent) {
    if (isRightClick(event.nativeEvent)) {
      return;
    }

    if (isLink) {
      if (disabled) {
        event.preventDefault();
      } else {
        select();
      }
    }
  }

  function handleDragStart(event: React.MouseEvent) {
    if (isLink) {
      event.preventDefault();
    }
  }

  function handleMouseDown(event: React.MouseEvent) {
    if (isRightClick(event.nativeEvent)) {
      return;
    }

    if (isLink) {
      mouseEventStarted.current = true;
    } else {
      event.preventDefault();
    }
  }

  function handleMouseEnter(event: React.MouseEvent) {
    const doc = getOwnerDocument(dropdownRef.current)!;
    if (!isSelected && index != null && !disabled) {
      if (dropdownRef?.current && dropdownRef.current !== doc.activeElement && ownRef.current !== doc.activeElement) {
        dropdownRef.current.focus();
      }

      dispatch({
        type: DROPDOWN_ITEM_SELECT_ITEM_AT_INDEX,
        payload: {
          index,
        },
      });
    }
  }

  function handleMouseLeave(event: React.MouseEvent) {
    // Clear out selection when mouse over a non-dropdown-item child.
    dispatch({ type: DROPDOWN_ITEM_CLEAR_SELECTION_INDEX });
  }

  function handleMouseMove(event: React.MouseEvent) {
    if (!readyToSelect.current) {
      const threshold = 8;
      const deltaX = Math.abs(event.clientX - mouseDownStartPosRef.current.x);
      const deltaY = Math.abs(event.clientY - mouseDownStartPosRef.current.y);
      if (deltaX > threshold || deltaY > threshold) {
        readyToSelect.current = true;
      }
    }
    if (!isSelected && index != null && !disabled) {
      dispatch({
        type: DROPDOWN_ITEM_SELECT_ITEM_AT_INDEX,
        payload: {
          index,
          dropdownRef,
        },
      });
    }
  }

  function handleFocus() {
    readyToSelect.current = true;
    if (!isSelected && index != null && !disabled) {
      dispatch({
        type: DROPDOWN_ITEM_SELECT_ITEM_AT_INDEX,
        payload: {
          index,
        },
      });
    }
  }

  function handleMouseUp(event: React.MouseEvent) {
    if (isRightClick(event.nativeEvent)) {
      return;
    }

    if (!readyToSelect.current) {
      readyToSelect.current = true;
      return;
    }

    if (isLink) {
      if (mouseEventStarted.current) {
        mouseEventStarted.current = false;
      } else if (ownRef.current) {
        ownRef.current.click();
      }
    } else {
      if (!disabled) {
        select();
      }
    }
  }

  React.useEffect(() => {
    if (isExpanded) {
      const id = window.setTimeout(() => {
        readyToSelect.current = true;
      }, 400);
      return () => {
        window.clearTimeout(id);
      };
    } else {
      // When the dropdown closes, reset readyToSelect for the next interaction.
      readyToSelect.current = false;
    }

    return noop;
  }, [isExpanded, readyToSelect]);

  // Any time a mouseup event occurs anywhere in the document, we reset the
  // mouseEventStarted ref so we can check it again when needed.
  React.useEffect(() => {
    const ownerDocument = getOwnerDocument(ownRef.current)!;
    ownerDocument.addEventListener('mouseup', listener);
    return () => {
      ownerDocument.removeEventListener('mouseup', listener);
    };

    function listener() {
      mouseEventStarted.current = false;
    }
  }, []);

  return {
    data: {
      disabled,
    },
    props: {
      id: useItemId(index),
      tabIndex: -1,
      ...props,
      ref,
      'data-valuetext': valueText,
      className: cn({ [style.disabled]: disabled, [style.selected]: isSelected }),
      onClick: composeEventHandlers(onClick, handleClick),
      onDragStart: composeEventHandlers(onDragStart, handleDragStart),
      onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
      onMouseEnter: composeEventHandlers(onMouseEnter, handleMouseEnter),
      onMouseLeave: composeEventHandlers(onMouseLeave, handleMouseLeave),
      onMouseMove: composeEventHandlers(onMouseMove, handleMouseMove),
      onFocus: composeEventHandlers(onFocus, handleFocus),
      onMouseUp: composeEventHandlers(onMouseUp, handleMouseUp),
    },
  };
}

/**
 * DropdownItem
 */
export interface DropdownItemProps {
  children: React.ReactNode;
  onSelect(): void;
  index?: number;
  isLink?: boolean;
  valueText?: string;
  disabled?: boolean;
}

export const DropdownItem = React.forwardRef(({ as: Comp = 'div', className, ...rest }, forwardedRef) => {
  const { props } = useDropdownItem({ ...rest, ref: forwardedRef });
  const { className: useClassName, ...restProps } = props;
  const dynamicClasses = cn({ [style.dropdownItem]: true, [props.className]: props.className, className });
  return <Comp className={dynamicClasses} {...restProps} />;
}) as ForwardRefComponent<'div', DropdownItemProps>;

DropdownItem.displayName = 'DropdownItem';
