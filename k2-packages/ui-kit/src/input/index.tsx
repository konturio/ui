import React, { useState } from "react";
import clsx from "clsx";
import styles from "./style.styl";

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  onType?: (text: string) => void;
  className?: string;
  successes?: boolean;
  loading?: boolean;
  error?: boolean;
  errorMessage?: string;
}

function createOnType(onType: IInputProps["onType"]) {
  return ({ target }) => onType && onType((target as HTMLInputElement).value);
}

export default function Input({
  className,
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
    [styles.successes]: successes,
    [styles.error]: error,
    [styles.focus]: focus,
    [styles.disabled]: disabled
  };

  return (
    <div className={clsx(styles.root, dynamicClasses)}>
      <div className={clsx(styles.inputBox, className)}>
        <input
          {...props}
          onChange={e => (onChange && onChange(e), onTypeHandler(e))}
          onFocus={e => (onFocus && onFocus(e), setFocus(true))}
          onBlur={e => (onBlur && onBlur(e), setFocus(false))}
          disabled={disabled}
        />
        <div className={styles.icons}>{children}</div>
      </div>
      {errorMessage && <div className={styles.message}>{errorMessage}</div>}
    </div>
  );
}
