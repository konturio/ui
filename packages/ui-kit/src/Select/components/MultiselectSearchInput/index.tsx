import {
  ChangeEvent,
  forwardRef,
  KeyboardEvent,
  memo,
  MouseEvent,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import style from './style.module.css';

interface MultiselectSearchInputProps {
  children?: string;
  placeholder?: string;
  onChange?: (val: string) => void;
  focused?: boolean;
}

export const MultiselectSearchInput = memo(
  forwardRef(({ children, placeholder, onChange, focused = false }: MultiselectSearchInputProps, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = children || '';
      }
    }, [children]);

    function onInputClick(ev: MouseEvent<HTMLInputElement>) {
      ev.stopPropagation();
    }

    function onInputChange(ev: ChangeEvent<HTMLInputElement>) {
      ev.stopPropagation();
      const val = ev.target.value;
      onChange && onChange(val);
    }

    function onKeyUp(ev: KeyboardEvent<HTMLInputElement>) {
      if (ev.key !== 'ArrowDown') {
        ev.stopPropagation();
      }
    }

    function onKeyDown(ev: KeyboardEvent<HTMLInputElement>) {
      if (ev.key !== 'ArrowDown') {
        ev.stopPropagation();
      }
    }

    return (
      <input
        ref={inputRef}
        placeholder={placeholder}
        className={style.root}
        onClick={onInputClick}
        onChange={onInputChange}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
      />
    );
  }),
);

MultiselectSearchInput.displayName = 'MultiselectSearchInput';
