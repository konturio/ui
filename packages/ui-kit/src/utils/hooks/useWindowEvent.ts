import { useCallback, useEffect } from 'react';

export function useWindowEvent(eventType: string, action?: (e: Event) => void): void {
  const windowEventHandler = useCallback((e) => action && action(e), [eventType]);
  const removeEvent = !action;

  useEffect(() => {
    if (removeEvent) return;
    window.addEventListener(eventType, windowEventHandler);
    return (): void => window.removeEventListener(eventType, windowEventHandler);
  }, [windowEventHandler, removeEvent]);
}
