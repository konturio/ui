import { Descendant } from '../utils/component-helpers/descendants';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export const TABS_KEYBOARD_ACTIVATION_AUTO = 'auto';
export const TABS_KEYBOARD_ACTIVATION_MANUAL = 'auto';

export type TabsKeyboardActivation = typeof TABS_KEYBOARD_ACTIVATION_AUTO | typeof TABS_KEYBOARD_ACTIVATION_MANUAL;

export const TABS_ORIENTATION_HORIZONTAL = 'horizontal';
export const TABS_ORIENTATION_VERTICAL = 'vertical';

export type TabsOrientation = typeof TABS_ORIENTATION_HORIZONTAL | typeof TABS_ORIENTATION_VERTICAL;

export type TabDescendant = Descendant<HTMLElement> & {
  disabled: boolean;
};

export type TabPanelDescendant = Descendant<HTMLElement>;

export interface TabsContextValue {
  focusedIndex: number;
  id: string;
  selectedIndex: number;
}

export interface InternalTabsContextValue {
  focusedIndex: number;
  id: string;
  isControlled: boolean;
  keyboardActivation: TabsKeyboardActivation;
  onFocusPanel: () => void;
  onSelectTab: (index: number) => void;
  onSelectTabWithKeyboard: (index: number) => void;
  orientation: TabsOrientation;
  selectedIndex: number;
  selectedPanelRef: MutableRefObject<HTMLElement | null>;
  setFocusedIndex: Dispatch<SetStateAction<number>>;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
}
