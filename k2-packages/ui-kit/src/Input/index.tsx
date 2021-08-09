import React, { useState, forwardRef, useEffect, useCallback, useRef, useImperativeHandle } from 'react';
import cn from 'clsx';
import s from './style.module.css';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: boolean;
  message?: string;
  isFocused?: boolean;
}

function preventDefault(e: { preventDefault?: () => void }): void {
  e.preventDefault && e.preventDefault();
}

function isFunc<T>(maybeFn: any): maybeFn is (T) => void {
  return typeof maybeFn === 'function';
}

function InputComponent(
  { className, error, children, message, onChange, onFocus, onBlur, disabled, isFocused, ...props }: InputProps,
  ref,
): JSX.Element {
  const [focus, setFocus] = useState(isFocused);

  useEffect(() => {
    setFocus(isFocused);
  }, [isFocused]);

  useEffect(() => {
    if (ref?.current) {
      if (focus) {
        isFunc(ref.current.focus) && ref.current.focus();
      } else {
        isFunc(ref.current.blur) && ref.current.blur();
      }
    }
  }, [focus]);

  const nativeFocusEventHandler = useCallback(
    (e) => {
      preventDefault(e);
      isFunc<typeof e>(onFocus) && onFocus(e);
      setFocus(true); // Delegate default behavior to effect
    },
    [onFocus],
  );

  const nativeBlurEventHandler = useCallback(
    (e) => {
      preventDefault(e);
      isFunc<typeof e>(onBlur) && onBlur(e);
      setFocus(false); // Delegate default behavior to effect
    },
    [onBlur],
  );

  const dynamicClasses = {
    [s.error]: error,
    [s.focus]: focus,
    [s.disabled]: disabled,
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: (): void => inputRef.current?.focus(),
    blur: (): void => inputRef.current?.blur(),
    selectText: (): void => inputRef.current?.select(),
  }));

  return (
    <div className={cn(s.root, dynamicClasses)}>
      <div className={cn(s.inputBox, className)}>
        {children && <div className={s.icons}>{children}</div>}
        <input
          {...props}
          ref={inputRef}
          onChange={onChange}
          onFocus={nativeFocusEventHandler}
          onBlur={nativeBlurEventHandler}
          disabled={disabled}
        />
      </div>
      {message && <div className={s.message}>{message}</div>}
    </div>
  );
}

export const Input = forwardRef(InputComponent);
