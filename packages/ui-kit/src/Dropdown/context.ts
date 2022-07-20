import React from 'react';
import { createDescendantContext } from '../utils/component-helpers/descendants';
import { createContext } from '../utils/helpers/context';
import { DropdownAction } from './reducer';
import { DropdownContextValue, DropdownDescendant, DropdownState } from './types';
import { makeId } from '../utils/helpers/helpers';

type TriggerRef = React.RefObject<null | HTMLButtonElement>;
type DropdownRef = React.RefObject<null | HTMLDivElement>;
type PopoverRef = React.RefObject<null | HTMLDivElement>;

interface InternalDropdownContextValue {
  dispatch: React.Dispatch<DropdownAction>;
  dropdownId: string | undefined;
  dropdownRef: DropdownRef;
  mouseDownStartPosRef: React.MutableRefObject<{ x: number; y: number }>;
  popoverRef: PopoverRef;
  readyToSelect: React.MutableRefObject<boolean>;
  selectCallbacks: React.MutableRefObject<(() => void)[]>;
  state: DropdownState;
  triggerClickedRef: React.MutableRefObject<boolean>;
  triggerRef: TriggerRef;
}

export interface DropdownProviderProps {
  children:
    | React.ReactNode
    | ((
        props: DropdownContextValue & {
          isOpen: boolean;
        },
      ) => React.ReactNode);
  id?: string;
}

export function useItemId(index: number | null) {
  const { dropdownId } = useDropdownContext('useItemId');
  return index != null && index > -1 ? makeId(`option-${index}`, dropdownId) : undefined;
}

const DropdownDescendantContext = createDescendantContext<DropdownDescendant>('DropdownDescendantContext');
const [DropdownProvider, useDropdownContext] = createContext<InternalDropdownContextValue>('Dropdown');

export { DropdownProvider, useDropdownContext, DropdownDescendantContext };
