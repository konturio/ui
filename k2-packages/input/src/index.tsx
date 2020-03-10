import React, { useState } from 'react';
import clsx from 'clsx';
import style from './style.module.scss';

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  onType?: (text: string) => void;
  className?: string,
  successes?: boolean;
  loading?: boolean;
  error?: boolean;
  errorMessage?: string;
}

function createOnType(onType: IInputProps['onType']) {
  return ({ target }) => onType && onType((target as HTMLInputElement).value)
}

export default function Input({
  error,
  successes, 
  loading, 
  children, 
  errorMessage, 
  onChange, 
  onFocus,
  onBlur,
  onType, 
  disabled, 
  ...props
}: IInputProps) {
  const onTypeHandler = createOnType(onType);
  const [focus, setFocus] = useState(false);

  const dynamicClasses = {
    [style.successes]: successes,
    [style.error]: error,
    [style.focus]: focus,
    [style.disabled]: disabled,
  }

  return (
    <div className={clsx(style.root, dynamicClasses)}>
      <div className={style.inputBox}>
        <input
          {...props}
          onChange={e => ((onChange && onChange(e), onTypeHandler(e)))}
          onFocus={e => ((onFocus && onFocus(e), setFocus(true)))}
          onBlur={e => ((onBlur && onBlur(e), setFocus(false)))}
          disabled={disabled}
        />
        <div className={style.icons}>{children}</div>
      </div>
      {errorMessage && <div className={style.message}>{errorMessage}</div>}
    </div>
  );
}
