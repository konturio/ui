import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import cn from 'clsx';
import { Eye16, EyeOff16 } from '@konturio/default-icons';
import s from './style.module.css';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: boolean | string;
  message?: string;
  isFocused?: boolean;
  showTopPlaceholder?: boolean;
  renderLabel?: JSX.Element | string;
  classes?: {
    inputBox?: string;
    input?: string;
    topPlaceholder?: string;
    placeholder?: string;
    label?: string;
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
    renderLabel,
    onChange,
    onFocus,
    onBlur,
    disabled,
    isFocused,
    classes,
    showTopPlaceholder = false,
    type,
    placeholder,
    value,
    ...props
  }: InputProps,
  ref,
): JSX.Element {
  const [focus, setFocus] = useState(isFocused);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

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
    [s.topPlaceholderValue]: showTopPlaceholder && value,
    [s.topPlaceholderWrapper]: showTopPlaceholder,
    [s.password]: type === 'password',
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: (): void => inputRef.current?.focus(),
    blur: (): void => inputRef.current?.blur(),
    selectText: (): void => inputRef.current?.select(),
  }));

  const onInputChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(ev);
    },
    [onChange],
  );

  const onPasswordVisibleClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  const getPlaceholder = () => {
    if (!placeholder) return;

    if (!showTopPlaceholder) {
      if (value) return;
      return <div className={cn(s.placeholder, classes?.placeholder)}>{placeholder}</div>;
    }

    return (
      <div className={cn(s.placeholder, classes?.topPlaceholder, value && showTopPlaceholder && s.topPlaceholder)}>
        {placeholder}
      </div>
    );
  };

  return (
    <div className={cn(s.root, className, dynamicClasses)}>
      {renderLabel && <div className={cn(s.label, classes?.label)}>{renderLabel}</div>}
      <div className={cn(s.inputBox, classes?.inputBox, children && s.inputBoxIcon)}>
        {getPlaceholder()}

        {children && <div className={s.icons}>{children}</div>}
        <input
          {...props}
          value={value}
          ref={inputRef}
          onChange={onInputChange}
          onFocus={nativeFocusEventHandler}
          onBlur={nativeBlurEventHandler}
          disabled={disabled}
          className={classes?.input}
          type={type === 'password' && passwordVisible ? 'input' : type}
        />
        {type === 'password' && (
          <div onClick={onPasswordVisibleClick} className={s.passwordVisibility}>
            {passwordVisible ? <Eye16 /> : <EyeOff16 />}
          </div>
        )}
      </div>
      {message && <div className={s.message}>{message}</div>}
      {error && typeof error === 'string' ? <div className={cn(s.errorMessage, classes?.error)}>{error}</div> : null}
    </div>
  );
}

export const Input = forwardRef(InputComponent);
