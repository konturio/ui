import { getPlacement } from './helpers';
import { PopperChildrenFn, PopperProps, PopperRefHandle } from './types';
import { usePopper } from './usePopper';
import { isRefObject } from '../ref/utils';
import { Children, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Placement, VirtualElement } from '@popperjs/core';
import { Ref } from '../ref/Ref';
import { useMergedRefs } from '../hooks/useMergedRefs';

export const Popper = (props: PopperProps) => {
  const usesRenderProps: boolean = typeof props.children === 'function';

  const proposedPlacement = getPlacement(props.align || 'top', props.position || 'above', false);
  const latestPlacement = useRef<Placement>(proposedPlacement);
  const [computedPlacement, setComputedPlacement] = useState<Placement>(proposedPlacement);

  const currentPopperRef = useRef<PopperRefHandle | null>(null);
  const { targetRef, containerRef, arrowRef } = usePopper({
    ...props,

    popperRef: useMergedRefs(props.popperRef, currentPopperRef),
    onStateUpdate: (state) => {
      // PopperJS performs computations that might update the computed placement: auto positioning, flipping the
      // placement in case the popper box should be rendered at the edge of the viewport and does not fit
      if (state.placement && state.placement !== latestPlacement.current) {
        latestPlacement.current = state.placement;

        // A state change has sense only if renderProps are passed, otherwise a state value is unused
        if (usesRenderProps) {
          setComputedPlacement(state.placement);
        }
      }
    },
  });

  useEffect(() => {
    // A way to sync refs, is needed as Popper component accepts refs as params
    // Does not make anything worse as Popper component does not have proper handing for ref updates ¯\_(ツ)_/¯
    targetRef.current = isRefObject(props.targetRef)
      ? (props.targetRef as RefObject<Element>).current
      : (props.targetRef as VirtualElement);
    arrowRef.current = props.pointerTargetRef?.current as HTMLElement;
  });

  const scheduleUpdate = useCallback(() => {
    currentPopperRef.current?.updatePosition();
  }, []);

  const child = usesRenderProps
    ? (props.children as PopperChildrenFn)({
        placement: computedPlacement,
        scheduleUpdate,
      })
    : (props.children as React.ReactElement);

  return child ? <Ref innerRef={containerRef}>{Children.only(child)}</Ref> : null;
};

Popper.defaultProps = {
  enabled: true,
  modifiers: [],
  positionFixed: false,
  positioningDependencies: [],
};
