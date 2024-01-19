import { useMemo } from 'react';

export function useContainer(modalContainer: string | HTMLElement) {
  return useMemo(() => {
    const target = typeof modalContainer === 'string' ? document?.getElementById(modalContainer) : modalContainer;
    if (!target) {
      console.error('Modal container not found');
    }
    return target;
  }, [modalContainer]);
}
