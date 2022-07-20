import { Descendant } from '../utils/component-helpers/descendants';

export type DropdownDescendant = Descendant<HTMLElement> & {
  key: string;
  isLink: boolean;
  disabled?: boolean;
};

export interface DropdownState {
  isExpanded: boolean;
  selectionIndex: number;
  triggerId: null | string;
  typeaheadQuery: string;
}

export interface DropdownContextValue {
  isExpanded: boolean;
}
