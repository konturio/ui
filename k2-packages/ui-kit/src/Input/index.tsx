import React, {
  useState, forwardRef, useEffect, useCallback,
} from 'react';
import clsx from 'clsx';
import style from './style.styl';

export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  onType?: (text: string) => void;
  className?: string;
  successes?: boolean;
  loading?: boolean;
  error?: boolean;
  message?: string;
  isFocused?: boolean;
}

function createOnType(onType: IInputProps['onType']) {
  return ({ target }) => onType && onType((target as HTMLInputElement).value);
}

function Input({
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
}: IInputProps, ref) {
  const onTypeHandler = createOnType(onType);
  const [focus, setFocus] = useState(isFocused);

  useEffect(() => {
    setFocus(isFocused);
  }, [isFocused]);

  useEffect(() => {
    if (ref?.current?.focus) {
      if (focus) {
        ref.current.focus();
      } else {
        ref.current.blur();
      }
    }
  }, [focus]);

  const nativeFocusEventHandler = useCallback(e => {
    e.preventDefault(); // Cancel default behavior and extend it
    if (typeof onFocus === 'function') {
      onFocus(e);
    }
    setFocus(true); // Delegate default behavior to effect
  }, [onFocus]);

  const nativeBlurEventHandler = useCallback(e => {
    e.preventDefault(); // Cancel default behavior and extend it
    if (typeof onBlur === 'function') {
      onBlur(e);
    }
    setFocus(false); // Delegate default behavior to effect
  }, [onBlur]);

  const dynamicClasses = {
    [style.successes]: successes,
    [style.error]: error,
    [style.focus]: focus,
    [style.disabled]: disabled,
  };

  return (
    <div className={clsx(style.root, dynamicClasses)}>
      <div className={clsx(style.inputBox, className)}>
        <input
          {...props}
          ref={ref}
          onChange={e => ((onChange && onChange(e), onTypeHandler(e)))}
          onFocus={nativeFocusEventHandler}
          onBlur={nativeBlurEventHandler}
          disabled={disabled}
        />
        <div className={style.icons}>{children}</div>
      </div>
      {message && <div className={style.message}>{message}</div>}
    </div>
  );
}

export default forwardRef(Input);
