import React, { useState, forwardRef } from 'react';
import clsx from 'clsx';
import style from './style.styl';

export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  onType?: (text: string) => void;
  className?: string;
  successes?: boolean;
  loading?: boolean;
  error?: boolean;
  message?: string;
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
  ...props
}: IInputProps, ref) {
  const onTypeHandler = createOnType(onType);
  const [focus, setFocus] = useState(false);

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
          onFocus={e => ((onFocus && onFocus(e), setFocus(true)))}
          onBlur={e => ((onBlur && onBlur(e), setFocus(false)))}
          disabled={disabled}
        />
        <div className={style.icons}>{children}</div>
      </div>
      {message && <div className={style.message}>{message}</div>}
    </div>
  );
}

export default forwardRef(Input);
