import React, {
  ComponentClass,
  forwardRef,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  SyntheticEvent,
  useState
} from 'react';
import cn from 'clsx';
import s from './style.module.css';
import {ChevronDown16, ChevronUp16} from '@konturio/default-icons';
import {DropdownItemProps} from "./components/DropdownItem/DropdownItem";

export interface DropdownProps {
  /** Label prefixed to an option added by a user. */
  additionLabel?: FunctionComponent | ComponentClass | string;

  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition?: 'top' | 'bottom';

  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions?: boolean;

  /** A Dropdown can reduce its complexity. */
  basic?: boolean;

  /** Format the Dropdown to appear as a button. */
  button?: boolean;

  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** Using the clearable setting will let users remove their selection from a dropdown. */
  clearable?: boolean;

  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur?: boolean;

  /** Whether or not the dropdown should close when the escape key is pressed. */
  closeOnEscape?: boolean;

  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange?: boolean;

  /** A compact dropdown has no minimum width. */
  compact?: boolean;

  /** Initial value of open. */
  defaultOpen?: boolean;

  /** Initial value of searchQuery. */
  defaultSearchQuery?: string;

  /** Currently selected label in multi-select. */
  defaultSelectedLabel?: number | string;

  /** Initial value of upward. */
  defaultUpward?:  boolean;

  /** Initial value or value array if multiple. */
  defaultValue?: number | string | boolean | (number | string | boolean)[];

  /** A dropdown menu can open to the left or to the right. */
  direction?: 'left' | 'right';

  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled?: boolean;

  /** An errored dropdown can alert a user to a problem. */
  error?: boolean;

  /** A dropdown menu can contain floated content. */
  floating?: boolean;

  /** A dropdown can take the full width of its parent */
  fluid?: boolean;

  /** A dropdown menu can contain a header. */
  header?: ReactNode;

  /** Shorthand for Icon. */
  icon?: ReactNode;

  /** A dropdown can be formatted to appear inline in other content. */
  inline?: boolean;

  /** A dropdown can be formatted as a Menu item. */
  item?: boolean;

  /** A dropdown can be labeled. */
  labeled?: boolean;

  /** A dropdown can defer rendering its options until it is open. */
  lazyLoad?: boolean;

  /** A dropdown can show that it is currently loading data. */
  loading?: boolean;

  /** The minimum characters for a search to begin showing results. */
  minCharacters?: number;

  /** A selection dropdown can allow multiple selections. */
  multiple?: boolean;

  /** Message to display when there are no results. */
  noResultsMessage?: ReactNode;

  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {number | string} val - New item's value.
   */
  onAddItem?: (ev: SyntheticEvent, val: number | string) => void;

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   */
  onBlur?: (ev: SyntheticEvent) => void;

  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {number | string} data - All props and proposed value.
   */
  onChange?: (ev: SyntheticEvent, val: number | string) => void;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   */
  onClick?: (ev: SyntheticEvent) => void;

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   */
  onClose?: (ev: SyntheticEvent) => void;

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   */
  onFocus?: (ev: SyntheticEvent) => void;

  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   */
  onLabelClick?: (ev: SyntheticEvent) => void;

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   */
  onMouseDown?: (ev: SyntheticEvent) => void;

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   */
  onOpen?: (ev: SyntheticEvent) => void;

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {string} val - All props, includes current value of searchQuery.
   */
  onSearchChange: (ev: SyntheticEvent, val: string) => void;

  /** Controls whether or not the dropdown menu is displayed. */
  open?: boolean;

  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus?: boolean;

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: DropdownItemProps[];

  /** Placeholder text. */
  placeholder?: string;

  /** A dropdown can be formatted so that its menu is pointing. */
  pointing?: boolean | 'left' | 'right' | 'top' | 'top left' | 'top right' | 'bottom' | 'bottom left' | 'bottom right';

  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {DropdownItemProps} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel?: (item: DropdownItemProps, index: number, defaultLabelProps: unknown) => ReactNode;

  /** A dropdown can have its menu scroll. */
  scrolling?: boolean;

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search?: boolean | ((val: string) => DropdownItemProps),

  /** A shorthand for a search input. */
  searchInput?: ReactNode;

  /** Current value of searchQuery. Creates a controlled component. */
  searchQuery?: string;

  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur?: string;

  /**
   * Whether or not to change the value when navigating the menu using arrow keys.
   * Setting to false will require enter or left click to confirm a choice.
   */
  selectOnNavigation?: string;

  /** Currently selected label in multi-select. */
  selectedLabel?: string | number;

  /** A dropdown can be used to select between choices in a form. */
  selection?: boolean;

  /** A simple dropdown can open without Javascript. */
  simple?: boolean;

  /** A dropdown can receive focus. */
  tabIndex?: number;

  /** The text displayed in the dropdown, usually for the active item. */
  text?: string;

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger?: ReactNode;

  /** Current value or value array if multiple. Creates a controlled component. */
  value?: boolean | string | number | (boolean | string | number)[];

  /** Controls whether the dropdown will open upward. */
  upward?: boolean;

  /**
   * A dropdown will go to the last element when ArrowUp is pressed on the first,
   * or go to the first when ArrowDown is pressed on the last( aka infinite selection )
   */
  wrapSelection?: boolean;

  options: Option[];
  onChange: (value: Option['value']) => void;
  label?: string | React.ReactChild | React.ReactChild[];
  value?: Option['value'];
  className?: string;
  placeholder?: string;
  classes?: {
    label?: string;
    selectBox?: string;
    placeholder?: string;
  };
}

function DropdownComponent(
  { children, options, onChange, label, className, placeholder = 'Select Select', classes }: PropsWithChildren<DropdownProps>,
  ref,
) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn(s.root, className)}>
      {label && <div className={cn(s.label, classes?.label)}>{label}</div>}
      {children && <div className={s.icons}>{children}</div>}
      <div className={cn(s.selectBox, classes?.selectBox)}>
        <div className={cn(s.placeholder, classes?.placeholder)}>{placeholder}</div>
        <div onClick={toggleOpen} className={s.openToggle}>
          {isOpen ? <ChevronUp16 /> : <ChevronDown16 />}
        </div>
      </div>
    </div>
  );
}

export const DropDown = forwardRef(DropdownComponent);
