import React, { useState, forwardRef, useEffect, useCallback, useRef, useImperativeHandle } from 'react';
import cn from 'clsx';
import s from './style.module.css';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onType?: (text: string) => void;
  className?: string;
  successes?: boolean;
  loading?: boolean;
  error?: boolean;
  message?: string;
  isFocused?: boolean;
}

/* Cancel default behavior and extend it */
function createOnType(onType: InputProps['onType']) {
  return ({ target }) => onType && onType((target as HTMLInputElement).value);
}

function preventDefault(e: { preventDefault?: () => void }): void {
  /* istanbul ignore if */
  if (e.preventDefault) e.preventDefault();
}

function isFunc<T>(maybeFn: any): maybeFn is (T) => void {
  return typeof maybeFn === 'function';
}

function InputComponent(
  {
    className,
    error,
    successes,
    loading,
    children,
    message,
    onChange,
    onFocus,
    onBlur,
    onType,
    disabled,
    isFocused,
    ...props
  }: InputProps,
  ref,
): JSX.Element {
  const onTypeHandler = createOnType(onType);
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
    [s.successes]: successes,
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
        <input
          {...props}
          ref={inputRef}
          onChange={(e) => (onChange && onChange(e), onTypeHandler(e))}
          onFocus={nativeFocusEventHandler}
          onBlur={nativeBlurEventHandler}
          disabled={disabled}
        />
        <div className={s.icons}>{children}</div>
      </div>
      {message && <div className={s.message}>{message}</div>}
    </div>
  );
}

export const Input = forwardRef(InputComponent);
