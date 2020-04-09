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

/* Cancel default behavior and extend it */
function createOnType(onType: IInputProps['onType']) {
  return ({ target }) => onType && onType((target as HTMLInputElement).value);
}

function preventDefault(e: { preventDefault?: () => void }): void {
  /* istanbul ignore if */
  if (e.preventDefault) e.preventDefault();
}

function isFunc<T>(maybeFn: any): maybeFn is (T) => {} {
  return typeof maybeFn === 'function';
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
    if (ref?.current) {
      if (focus) {
        isFunc(ref.current.focus) && ref.current.focus()
      } else {
        isFunc(ref.current.blur) && ref.current.blur()
      }
    }
  }, [focus]);

  const nativeFocusEventHandler = useCallback(e => {
    preventDefault(e); 
    isFunc<typeof e>(onFocus) && onFocus(e)
    setFocus(true); // Delegate default behavior to effect
  }, [onFocus]);

  const nativeBlurEventHandler = useCallback(e => {
    preventDefault(e); 
    isFunc<typeof e>(onBlur) && onBlur(e)
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
