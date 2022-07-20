import React, { useLayoutEffect } from 'react';
import { isBoolean } from '../helpers/typecheck';
import { observeRect } from './observeRect';

export type UseRectOptions = {
  observe?: boolean;
  onChange?: (rect: PRect) => void;
};

export type PRect = Partial<DOMRect> & {
  readonly bottom: number;
  readonly height: number;
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly width: number;
};

type RectProps = UseRectOptions & {
  children(args: { rect: PRect | null; ref: React.RefObject<unknown> }): JSX.Element;
};

export const Rect = ({ onChange, observe = true, children }: RectProps) => {
  const ref = React.useRef<HTMLElement | null>(null);
  const rect = useRect(ref, { observe, onChange });
  return children({ ref, rect });
};

export function useRect<T extends Element = HTMLElement>(
  nodeRef: React.RefObject<T | undefined | null>,
  observeOrOptions?: boolean | UseRectOptions,
): null | DOMRect {
  let observe: boolean;
  let onChange: UseRectOptions['onChange'];
  if (isBoolean(observeOrOptions)) {
    observe = observeOrOptions;
  } else {
    observe = observeOrOptions?.observe ?? true;
    onChange = observeOrOptions?.onChange;
  }

  const [element, setElement] = React.useState(nodeRef.current);
  const initialRectIsSet = React.useRef(false);
  const initialRefIsSet = React.useRef(false);
  const [rect, setRect] = React.useState<DOMRect | null>(null);
  const onChangeRef = React.useRef(onChange);

  useLayoutEffect(() => {
    onChangeRef.current = onChange;
    if (nodeRef.current !== element) {
      setElement(nodeRef.current);
    }
  });

  useLayoutEffect(() => {
    if (element && !initialRectIsSet.current) {
      initialRectIsSet.current = true;
      setRect(element.getBoundingClientRect());
    }
  }, [element]);

  useLayoutEffect(() => {
    if (!observe) {
      return;
    }

    let elem = element;
    if (!initialRefIsSet.current) {
      initialRefIsSet.current = true;
      elem = nodeRef.current;
    }

    if (!elem) {
      console.warn('You need to place the ref');
      return;
    }

    const observer = observeRect(elem, (rect) => {
      onChangeRef.current?.(rect);
      setRect(rect);
    });
    observer.observe();
    return () => {
      observer.unobserve();
    };
  }, [observe, element, nodeRef]);

  return rect;
}
