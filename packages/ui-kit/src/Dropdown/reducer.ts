import { getOwnerDocument } from '../utils/helpers/helpers';
import {
  DROPDOWN_ITEM_CLEAR_SELECTION_INDEX,
  DROPDOWN_ITEM_CLICK_MENU_ITEM,
  DROPDOWN_ITEM_CLOSE_MENU,
  DROPDOWN_ITEM_OPEN_MENU_AT_FIRST_ITEM,
  DROPDOWN_ITEM_OPEN_MENU_AT_INDEX,
  DROPDOWN_ITEM_OPEN_MENU_CLEARED,
  DROPDOWN_ITEM_SEARCH_FOR_ITEM,
  DROPDOWN_ITEM_SELECT_ITEM_AT_INDEX,
  DROPDOWN_ITEM_SET_BUTTON_ID,
} from './constants';
import type React from 'react';
import type { DropdownState } from './types';

export type DropdownAction =
  | { type: typeof DROPDOWN_ITEM_CLICK_MENU_ITEM }
  | { type: typeof DROPDOWN_ITEM_CLOSE_MENU }
  | { type: typeof DROPDOWN_ITEM_OPEN_MENU_AT_FIRST_ITEM }
  | { type: typeof DROPDOWN_ITEM_OPEN_MENU_AT_INDEX; payload: { index: number } }
  | { type: typeof DROPDOWN_ITEM_OPEN_MENU_CLEARED }
  | {
      type: typeof DROPDOWN_ITEM_SELECT_ITEM_AT_INDEX;
      payload: {
        dropdownRef?: React.RefObject<HTMLElement | null>;
        index: number;
        max?: number;
        min?: number;
      };
    }
  | { type: typeof DROPDOWN_ITEM_CLEAR_SELECTION_INDEX }
  | { type: typeof DROPDOWN_ITEM_SET_BUTTON_ID; payload: string }
  | { type: typeof DROPDOWN_ITEM_SEARCH_FOR_ITEM; payload: string };

export function dropdownReducer(state: DropdownState, action: DropdownAction = {} as DropdownAction): DropdownState {
  switch (action.type) {
    case DROPDOWN_ITEM_CLICK_MENU_ITEM:
      return {
        ...state,
        isExpanded: false,
        selectionIndex: -1,
      };
    case DROPDOWN_ITEM_CLOSE_MENU:
      return {
        ...state,
        isExpanded: false,
        selectionIndex: -1,
      };
    case DROPDOWN_ITEM_OPEN_MENU_AT_FIRST_ITEM:
      return {
        ...state,
        isExpanded: true,
        selectionIndex: 0,
      };
    case DROPDOWN_ITEM_OPEN_MENU_AT_INDEX:
      return {
        ...state,
        isExpanded: true,
        selectionIndex: action.payload.index,
      };
    case DROPDOWN_ITEM_OPEN_MENU_CLEARED:
      return {
        ...state,
        isExpanded: true,
        selectionIndex: -1,
      };
    case DROPDOWN_ITEM_SELECT_ITEM_AT_INDEX: {
      const { dropdownRef = { current: null } } = action.payload;
      if (action.payload.index >= 0 && action.payload.index !== state.selectionIndex) {
        if (dropdownRef.current) {
          const doc = getOwnerDocument(dropdownRef.current);
          if (dropdownRef.current !== doc?.activeElement) {
            dropdownRef.current.focus();
          }
        }

        return {
          ...state,
          selectionIndex:
            action.payload.max != null
              ? Math.min(Math.max(action.payload.index, 0), action.payload.max)
              : Math.max(action.payload.index, 0),
        };
      }
      return state;
    }
    case DROPDOWN_ITEM_CLEAR_SELECTION_INDEX:
      return {
        ...state,
        selectionIndex: -1,
      };
    case DROPDOWN_ITEM_SET_BUTTON_ID:
      return {
        ...state,
        triggerId: action.payload,
      };
    case DROPDOWN_ITEM_SEARCH_FOR_ITEM:
      if (typeof action.payload !== 'undefined') {
        return {
          ...state,
          typeaheadQuery: action.payload,
        };
      }
      return state;
    default:
      return state;
  }
}
