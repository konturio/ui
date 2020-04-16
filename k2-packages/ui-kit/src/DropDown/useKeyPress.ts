import {
  useCallback, useEffect,
} from 'react';

export function useKeyPress(action?: (e) => void, enable = true) {
  const onKeyPressHandler = useCallback(
    e => typeof action === 'function' ? action(e.keyCode) : undefined,
    [action],
  );
  useEffect(() => {
    if (enable && typeof onKeyPressHandler === 'function') {
      window.addEventListener('keyup', onKeyPressHandler);
      return () => window.removeEventListener('keyup', onKeyPressHandler);
    } else {
      window.removeEventListener('keyup', onKeyPressHandler);
      return () => {};
    }
  }, [action, enable]);
}