import { useEffect } from 'react';

export function useKeyboard(
  key: KeyboardEvent['key'],
  cb: () => void,
  event: 'keyup' | 'keydown' | 'keypress' = 'keyup',
) {
  useEffect(() => {
    if (cb) {
      const onKeyPress = (event: KeyboardEvent) => {
        if (event.key === key) cb();
      };
      document.addEventListener(event, onKeyPress);
      return () => document.removeEventListener(event, onKeyPress);
    }
  }, [cb, key, event]);
}
