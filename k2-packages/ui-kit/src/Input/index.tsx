import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import cn from 'clsx';
import s from './style.module.css';
import clsx from 'clsx';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: boolean | string;
  message?: string;
  isFocused?: boolean;
  showTopPlaceholder?: boolean;
  classes?: {
    input?: string;
    topPlaceholder?: string;
    error?: string;
  };
}

function preventDefault(e: { preventDefault?: () => void }): void {
  e.preventDefault && e.preventDefault();
}

function isFunc<T>(maybeFn: unknown): maybeFn is (T) => void {
  return typeof maybeFn === 'function';
}

function InputComponent(
  {
    className,
    error,
    children,
    message,
    onChange,
    onFocus,
    onBlur,
    disabled,
    isFocused,
    classes,
    showTopPlaceholder = false,
    ...props
  }: InputProps,
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
  }, [focus, ref]);

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
    [s.error]: !!error,
    [s.focus]: focus,
    [s.disabled]: disabled,
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: (): void => inputRef.current?.focus(),
    blur: (): void => inputRef.current?.blur(),
    selectText: (): void => inputRef.current?.select(),
  }));

  const [value, setValue] = useState<string>('');

  const onInputChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setValue(ev.target.value);
      onChange && onChange(ev);
    },
    [onChange],
  );

  return (
    <div className={cn(s.root, dynamicClasses)}>
      <div className={cn(s.inputBox, className)}>
        {value.length && showTopPlaceholder && props.placeholder ? (
          <div className={clsx(s.topPlaceholder, classes?.topPlaceholder)}>{props.placeholder}</div>
        ) : null}
        {children && <div className={s.icons}>{children}</div>}
        <input
          {...props}
          ref={inputRef}
          onChange={onInputChange}
          onFocus={nativeFocusEventHandler}
          onBlur={nativeBlurEventHandler}
          disabled={disabled}
          className={classes?.input}
        />
      </div>
      {message && <div className={s.message}>{message}</div>}
      {error && typeof error === 'string' ? <div className={clsx(s.errorMessage, classes?.error)}>{error}</div> : null}
    </div>
  );
}

export const Input = forwardRef(InputComponent);
