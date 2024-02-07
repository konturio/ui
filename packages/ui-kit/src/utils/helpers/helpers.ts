export const noop = () => null;

export function makeId(...args: (string | number | null | undefined)[]) {
  return args.filter((val) => val != null).join('--');
}

export function isRightClick(nativeEvent: MouseEvent | PointerEvent | TouchEvent) {
  return 'which' in nativeEvent
    ? nativeEvent.which === 3
    : 'button' in nativeEvent
      ? (nativeEvent as any).button === 2
      : false;
}

export function getOwnerDocument<T extends Element>(element: T | null | undefined) {
  return element ? element.ownerDocument : document;
}

export function focusElement<T extends HTMLElement = HTMLElement>(element: T | undefined | null) {
  element && element.focus();
}

export function elementContainsEventTarget(
  parentElement: HTMLElement | null,
  target: HTMLElement | EventTarget | null,
) {
  return !!(parentElement && parentElement.contains(target as HTMLElement));
}
