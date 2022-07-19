import React from 'react';
import { DropdownDescendant, DropdownState } from '../types';
import { DropdownDescendantContext, DropdownProvider, DropdownProviderProps } from '../context';
import { DescendantProvider, useDescendantsInit } from '../../utils/component-helpers/descendants';
import { nanoid } from 'nanoid';
import { focusElement, makeId } from '../../utils/helpers/helpers';
import { dropdownReducer } from '../reducer';
import { DROPDOWN_DISABLE_TOOLTIPS } from '../constants';
import { isFunction } from '../../utils/helpers/typecheck';

const initialState: DropdownState = {
  triggerId: null,
  isExpanded: false,
  typeaheadQuery: '',
  selectionIndex: -1,
};

export const DropdownProviderContainer: React.FC<DropdownProviderProps> = ({ id, children }) => {
  const triggerRef = React.useRef(null);
  const dropdownRef = React.useRef(null);
  const popoverRef = React.useRef(null);
  const [descendants, setDescendants] = useDescendantsInit<DropdownDescendant>();
  const _id = nanoid(4);
  const dropdownId = id || makeId('menu', _id);
  const triggerId = makeId('menu-button', dropdownId);
  const [state, dispatch] = React.useReducer(dropdownReducer, {
    ...initialState,
    triggerId,
  });

  const triggerClickedRef = React.useRef(false);
  const selectCallbacks = React.useRef([]);
  const readyToSelect = React.useRef(false);
  const mouseDownStartPosRef = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    if (state.isExpanded) {
      window[DROPDOWN_DISABLE_TOOLTIPS] = true;
      window.requestAnimationFrame(() => {
        focusElement(dropdownRef.current);
      });
    } else {
      window[DROPDOWN_DISABLE_TOOLTIPS] = false;
    }
  }, [state.isExpanded]);

  return (
    <DescendantProvider context={DropdownDescendantContext} items={descendants} set={setDescendants}>
      <DropdownProvider
        dispatch={dispatch}
        dropdownId={dropdownId}
        dropdownRef={dropdownRef}
        mouseDownStartPosRef={mouseDownStartPosRef}
        popoverRef={popoverRef}
        readyToSelect={readyToSelect}
        selectCallbacks={selectCallbacks}
        state={state}
        triggerClickedRef={triggerClickedRef}
        triggerRef={triggerRef}
      >
        {isFunction(children)
          ? children({
              isExpanded: state.isExpanded,
              isOpen: state.isExpanded,
            })
          : children}
      </DropdownProvider>
    </DescendantProvider>
  );
};
