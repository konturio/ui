import { MenuItemProps } from './components/MenuItem/MenuItem';
import { AccessibilityAttributes } from '../utils/accessibility';
import { createContext } from '../utils/context/createContext';

export type MenuContextValue = {
  activeIndex: number;
  vertical: boolean;
  onItemClick: ((e: React.KeyboardEvent | React.MouseEvent, itemProps: MenuItemProps) => void) | null;
  onItemSelect: ((e: React.KeyboardEvent | React.MouseEvent, itemIndex: number) => void) | null;

  slotProps: {
    item: Record<string, unknown>;
    divider: Record<string, unknown>;
  };

  behaviors: {
    item?: AccessibilityAttributes;
    divider?: AccessibilityAttributes;
  };
};

export type MenuItemSubscribedValue = Pick<MenuContextValue, 'onItemClick' | 'onItemSelect' | 'vertical'> & {
  item: MenuContextValue['slotProps']['item'];
  accessibility: MenuContextValue['behaviors']['item'];
  active: boolean;
};

export type MenuDividerSubscribedValue = {
  divider: MenuContextValue['slotProps']['divider'];
  accessibility: MenuContextValue['behaviors']['divider'];
};

export const MenuContext = createContext<MenuContextValue>({
  activeIndex: -1,
  vertical: false,
  onItemClick: null,
  onItemSelect: null,
  slotProps: {
    item: {},
    divider: {},
  },
  behaviors: {
    item: undefined,
    divider: undefined,
  },
});

export const MenuContextProvider = MenuContext.Provider;
