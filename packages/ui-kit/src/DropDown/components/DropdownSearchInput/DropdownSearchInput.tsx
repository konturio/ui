import cn from 'clsx';
import styles from './DropdownSearchInput.module.css';
import { forwardRef } from 'react';
import { Input } from '../Input/Input';
import { AccessibilityAttributes } from '../../../utils/accessibility';

export interface DropdownSearchInputProps {
  /** Accessibility props for combobox slot. */
  accessibilityComboboxProps?: AccessibilityAttributes;

  /** Accessibility props for input slot. */
  accessibilityInputProps?: AccessibilityAttributes;

  /** A dropdown search input can show that it cannot be interacted with. */
  disabled?: boolean;

  /** A dropdown search input can be formatted to appear inline in the context of a Dropdown. */
  inline?: boolean;

  /** Ref for input DOM node. */
  inputRef?: React.Ref<HTMLInputElement>;

  /**
   * Called on input element focus.
   *
   * @param event - React's original SyntheticEvent.
   */
  onFocus?: (ev: React.SyntheticEvent) => void;

  /**
   * Called on input element blur.
   *
   * @param event - React's original SyntheticEvent.
   */
  onInputBlur?: (ev: React.SyntheticEvent) => void;

  /**
   * Called on input key down event.
   *
   * @param event - React's original SyntheticEvent.
   */
  onInputKeyDown?: (ev: React.SyntheticEvent) => void;

  /**
   * Called on input key up event.
   *
   * @param event - React's original SyntheticEvent.
   */
  onKeyUp?: (ev: React.SyntheticEvent) => void;

  /** A placeholder message. */
  placeholder?: string;

  className?: string;

  classes?: {
    input: string;
    wrapper: string;
  };
}

/**
 * A DropdownSearchInput represents item of 'search' Dropdown.
 * Used to display the search input field.
 */
export const DropdownSearchInput = forwardRef<HTMLInputElement, DropdownSearchInputProps>(
  (
    {
      accessibilityComboboxProps,
      accessibilityInputProps,
      inputRef,
      inline,
      placeholder,
      disabled,
      className,
      classes,
      onFocus,
      onInputBlur,
      onInputKeyDown,
      onKeyUp,
    }: DropdownSearchInputProps,
    ref,
  ) => {
    return (
      <Input
        ref={ref}
        disabled={disabled}
        inputRef={inputRef}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        wrapper={{
          className: cx(dropdownSearchInputSlotClassNames.wrapper, className),
          styles: cn(styles.wrapper, classes?.wrapper),
          ...accessibilityComboboxProps,
        }}
        input={{
          type: 'text',
          className: dropdownSearchInputSlotClassNames.input,
          styles: cn(styles.input, classes?.input, inline && styles.inline),
          placeholder,
          onBlur: onInputBlur,
          onKeyDown: onInputKeyDown,
          ...accessibilityInputProps,
        }}
      />
    );
  },
);

DropdownSearchInput.displayName = 'DropdownSearchInput';
