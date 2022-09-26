import React from 'react';
import { DropdownDescendantContext, useDropdownContext, useItemId } from '../../context';
import { useDescendantKeyDown, useDescendants } from '../../../utils/component-helpers/descendants';
import { useComposedRefs } from '../../../utils/hooks/useComposedRefs';
import {
  DROPDOWN_ITEM_CLICK_MENU_ITEM,
  DROPDOWN_ITEM_CLOSE_MENU,
  DROPDOWN_ITEM_SEARCH_FOR_ITEM,
  DROPDOWN_ITEM_SELECT_ITEM_AT_INDEX,
} from '../../constants';
import { usePrevious } from '../../../utils/hooks/usePrevious';
import { composeEventHandlers } from '../../../utils/helpers/events';
import { focusElement } from '../../../utils/helpers/helpers';
import { isString } from '../../../utils/helpers/typecheck';
import type { ForwardRefComponent } from '../../../utils/component-helpers/polymorphic';
import type { DropdownDescendant } from '../../types';
import cn from 'clsx';
import style from './style.module.css';

function findItemFromTypeahead(items: DropdownDescendant[], string = '') {
  if (!string) {
    return null;
  }

  const found = items.find((item) => {
    return item.disabled ? false : item.element?.dataset?.valuetext?.toLowerCase().startsWith(string);
  });
  return found ? items.indexOf(found) : null;
}

export function useDropdownItems({
  id,
  onKeyDown,
  ref: forwardedRef,
  ...props
}: DropdownItemsProps &
  React.ComponentPropsWithoutRef<'div'> & {
    ref: React.ForwardedRef<HTMLDivElement>;
  }) {
  const {
    dispatch,
    triggerRef,
    dropdownRef,
    selectCallbacks,
    dropdownId,
    state: { isExpanded, triggerId, selectionIndex, typeaheadQuery },
  } = useDropdownContext('useDropdownItems');

  const items = useDescendants(DropdownDescendantContext);
  const ref = useComposedRefs(dropdownRef, forwardedRef);

  React.useEffect(() => {
    // Respond to user char key input with typeahead
    const match = findItemFromTypeahead(items, typeaheadQuery);
    if (typeaheadQuery && match != null) {
      dispatch({
        type: DROPDOWN_ITEM_SELECT_ITEM_AT_INDEX,
        payload: {
          index: match,
          dropdownRef,
        },
      });
    }
    const timeout = window.setTimeout(
      () => typeaheadQuery && dispatch({ type: DROPDOWN_ITEM_SEARCH_FOR_ITEM, payload: '' }),
      1000,
    );
    return () => window.clearTimeout(timeout);
  }, [dispatch, items, typeaheadQuery, dropdownRef]);

  const prevItemsLength = usePrevious(items.length);
  const prevSelected = usePrevious(items[selectionIndex]);
  const prevSelectionIndex = usePrevious(selectionIndex);

  React.useEffect(() => {
    if (selectionIndex > items.length - 1) {
      dispatch({
        type: DROPDOWN_ITEM_SELECT_ITEM_AT_INDEX,
        payload: {
          index: items.length - 1,
          dropdownRef,
        },
      });
    } else if (
      prevItemsLength !== items.length &&
      selectionIndex > -1 &&
      prevSelected &&
      prevSelectionIndex === selectionIndex &&
      items[selectionIndex] !== prevSelected
    ) {
      dispatch({
        type: DROPDOWN_ITEM_SELECT_ITEM_AT_INDEX,
        payload: {
          index: items.findIndex((i) => i.key === prevSelected?.key),
          dropdownRef,
        },
      });
    }
  }, [dropdownRef, dispatch, items, prevItemsLength, prevSelected, prevSelectionIndex, selectionIndex]);

  const handleKeyDown = composeEventHandlers(
    function handleKeyDown(event: React.KeyboardEvent) {
      const { key } = event;

      if (!isExpanded) {
        return;
      }

      switch (key) {
        case 'Enter':
        case ' ':
          const selected = items.find((item) => item.index === selectionIndex);
          // For links, the Enter key will trigger a click by default, but for
          // consistent behavior across items we'll trigger a click when the
          // spacebar is pressed.
          if (selected && !selected.disabled) {
            event.preventDefault();
            if (selected.isLink && selected.element) {
              selected.element.click();
            } else {
              // Focus the button first by default when an item is selected.
              // We fire the onSelect callback next so the app can manage
              // focus if needed.
              focusElement(triggerRef.current);
              selectCallbacks.current[selected.index] && selectCallbacks.current[selected.index]();
              dispatch({ type: DROPDOWN_ITEM_CLICK_MENU_ITEM });
            }
          }
          break;
        case 'Escape':
          focusElement(triggerRef.current);
          dispatch({ type: DROPDOWN_ITEM_CLOSE_MENU });
          break;
        case 'Tab':
          // prevent leaving
          event.preventDefault();
          break;
        default:
          // Check if a user is typing some char keys and respond by setting
          // the query state.
          if (isString(key) && key.length === 1) {
            const query = typeaheadQuery + key.toLowerCase();
            dispatch({
              type: DROPDOWN_ITEM_SEARCH_FOR_ITEM,
              payload: query,
            });
          }
          break;
      }
    },
    useDescendantKeyDown(DropdownDescendantContext, {
      currentIndex: selectionIndex,
      orientation: 'vertical',
      rotate: false,
      filter: (item) => !item.disabled,
      callback: (index: number) => {
        dispatch({
          type: DROPDOWN_ITEM_SELECT_ITEM_AT_INDEX,
          payload: {
            index,
            dropdownRef,
          },
        });
      },
      key: 'index',
    }),
  );

  return {
    data: {
      activeDescendant: useItemId(selectionIndex) || undefined,
      triggerId,
    },
    props: {
      tabIndex: -1,
      ...props,
      ref,
      id: dropdownId,
      onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
    },
  };
}

/**
 * DropdownItems
 */
export interface DropdownItemsProps {
  children: React.ReactNode;
}

export const DropdownItems = React.forwardRef(({ as: Comp = 'div', className, ...rest }, forwardedRef) => {
  const { props } = useDropdownItems({ ...rest, ref: forwardedRef });
  return <Comp className={cn({ [style.dropdownItems]: true, className })} {...props} />;
}) as ForwardRefComponent<'div', DropdownItemsProps>;

DropdownItems.displayName = 'DropdownItems';
