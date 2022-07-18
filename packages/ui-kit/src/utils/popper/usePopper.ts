import { PopperInstance, PopperOptions } from './types';
import { getBoundary, getPlacement, getScrollParent, isIntersectingModifier } from './helpers';
import {
  createPopper,
  detectOverflow,
  ModifierArguments,
  ModifierPhases,
  Options,
  SideObject,
  State,
  VirtualElement,
} from '@popperjs/core';
import { MutableRefObject, useCallback, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { useCallbackRef } from '../hooks/useCallbackRef';
import { useEventCallback } from '../hooks/useEventCallback';
import { useDeepMemo } from '../hooks/useDeepMemo';
import { useFirstMount } from '../hooks/useFirstMount';

function usePopperOptions(options: PopperOptions, popperOriginalPositionRef: MutableRefObject<string>) {
  const { autoSize, flipBoundary, offset, onStateUpdate, overflowBoundary, unstable_disableTether, unstable_pinned } =
    options;

  const placement = getPlacement(options.align || 'top', options.position || 'above');
  const strategy = options.positionFixed ? 'fixed' : 'absolute';

  const handleStateUpdate = useEventCallback(({ state }: { state: Partial<State> }) => {
    if (onStateUpdate) {
      onStateUpdate(state);
    }
  });

  const offsetModifier = useMemo(
    () =>
      offset
        ? {
            name: 'offset',
            options: { offset },
          }
        : null,
    [offset],
  );
  const userModifiers = useDeepMemo(() => options.modifiers, options.modifiers);

  return useCallback(
    (target: HTMLElement | VirtualElement, container: HTMLElement, arrow: HTMLElement | null): Options => {
      const scrollParentElement: HTMLElement = getScrollParent(container);
      const hasScrollableElement = scrollParentElement
        ? scrollParentElement !== scrollParentElement.ownerDocument.body
        : false;

      const modifiers: Options['modifiers'] = [
        isIntersectingModifier,
        {
          name: 'positionStyleFix',
          enabled: true,
          phase: 'afterWrite' as ModifierPhases,
          effect: ({ state, instance }: { state: Partial<State>; instance: PopperInstance }) => {
            if (instance.isFirstRun !== false && state.elements) {
              popperOriginalPositionRef.current = state.elements.popper.style['position'];
              state.elements.popper.style['position'] = 'fixed';
            }

            // eslint-disable-next-line @typescript-eslint/no-empty-function
            return () => {};
          },
          requires: [],
        },
        { name: 'flip', options: { flipVariations: true } },
        unstable_pinned && { name: 'flip', enabled: false },
        hasScrollableElement && { name: 'flip', options: { boundary: 'clippingParents' } },
        hasScrollableElement && { name: 'preventOverflow', options: { boundary: 'clippingParents' } },
        offsetModifier,
        ...(typeof userModifiers === 'function' ? (userModifiers(target, container, arrow) as any) : userModifiers),
        unstable_disableTether && {
          name: 'preventOverflow',
          options: { altAxis: unstable_disableTether === 'all', tether: false },
        },
        flipBoundary && {
          name: 'flip',
          options: {
            altBoundary: true,
            boundary: getBoundary(container, flipBoundary),
          },
        },
        overflowBoundary && {
          name: 'preventOverflow',
          options: {
            altBoundary: true,
            boundary: getBoundary(container, overflowBoundary),
          },
        },

        {
          name: 'onUpdate',
          enabled: true,
          phase: 'afterWrite' as ModifierPhases,
          fn: handleStateUpdate,
        },

        autoSize && {
          name: 'applyMaxSize',
          enabled: true,
          phase: 'beforeWrite' as ModifierPhases,
          requiresIfExists: ['offset', 'preventOverflow', 'flip'],
          options: {
            altBoundary: true,
            boundary: overflowBoundary && getBoundary(container, overflowBoundary),
          },
          fn({ state, options: modifierOptions }: ModifierArguments<any>) {
            const overflow = detectOverflow(state, modifierOptions);
            const { x, y } = state.modifiersData.preventOverflow || { x: 0, y: 0 };
            const { width, height } = state.rects.popper;
            const [basePlacement] = state.placement.split('-');

            const widthProp: keyof SideObject = basePlacement === 'left' ? 'left' : 'right';
            const heightProp: keyof SideObject = basePlacement === 'top' ? 'top' : 'bottom';

            const applyMaxWidth =
              autoSize === 'always' ||
              autoSize === 'width-always' ||
              (overflow[widthProp] > 0 && (autoSize === true || autoSize === 'width'));
            const applyMaxHeight =
              autoSize === 'always' ||
              autoSize === 'height-always' ||
              (overflow[heightProp] > 0 && (autoSize === true || autoSize === 'height'));

            if (applyMaxWidth) {
              state.styles.popper.maxWidth = `${width - overflow[widthProp] - x}px`;
            }
            if (applyMaxHeight) {
              state.styles.popper.maxHeight = `${height - overflow[heightProp] - y}px`;
            }
          },
        },
        {
          name: 'arrow',
          enabled: !!arrow,
          options: { element: arrow },
        },
      ].filter(Boolean);

      const popperOptions: Options = {
        modifiers,

        placement,
        strategy,
        onFirstUpdate: (state) => handleStateUpdate({ state }),
      };

      return popperOptions;
    },
    [
      autoSize,
      flipBoundary,
      offsetModifier,
      overflowBoundary,
      placement,
      strategy,
      unstable_disableTether,
      unstable_pinned,
      userModifiers,

      // These can be skipped from deps as they will not ever change
      handleStateUpdate,
      popperOriginalPositionRef,
    ],
  );
}

export function usePopper(options: PopperOptions = {}): {
  targetRef: React.MutableRefObject<any>;
  containerRef: React.MutableRefObject<any>;
  arrowRef: React.MutableRefObject<any>;
} {
  const { enabled = true } = options;
  const isFirstMount = useFirstMount();

  const popperOriginalPositionRef = useRef<string>('absolute');
  const resolvePopperOptions = usePopperOptions(options, popperOriginalPositionRef);

  const popperInstanceRef = useRef<PopperInstance | null>(null);

  const handlePopperUpdate = useEventCallback(() => {
    popperInstanceRef.current?.destroy();
    popperInstanceRef.current = null;

    let popperInstance: PopperInstance | null = null;

    if (enabled) {
      if (targetRef.current && containerRef.current) {
        popperInstance = createPopper(
          targetRef.current,
          containerRef.current,
          resolvePopperOptions(targetRef.current, containerRef.current, arrowRef.current),
        );
      }
    }

    if (popperInstance) {
      const originalForceUpdate = popperInstance.forceUpdate;

      popperInstance.isFirstRun = true;
      popperInstance.forceUpdate = () => {
        if (popperInstance?.isFirstRun) {
          popperInstance.state.elements.popper.style['position'] = popperOriginalPositionRef.current;
          popperInstance.isFirstRun = false;
        }

        originalForceUpdate();
      };
    }

    popperInstanceRef.current = popperInstance;
  });

  const targetRef = useCallbackRef<HTMLElement | VirtualElement | null>(null, handlePopperUpdate, true);
  const containerRef = useCallbackRef<HTMLElement | null>(null, handlePopperUpdate, true);
  const arrowRef = useCallbackRef<HTMLElement | null>(null, handlePopperUpdate, true);

  useImperativeHandle(
    options.popperRef,
    () => ({
      updatePosition: () => {
        popperInstanceRef.current?.update();
      },
    }),
    [],
  );

  useEffect(() => {
    handlePopperUpdate();

    return () => {
      popperInstanceRef.current?.destroy();
      popperInstanceRef.current = null;
    };
  }, [options.enabled]);

  useEffect(() => {
    if (!isFirstMount && targetRef.current && containerRef.current) {
      popperInstanceRef.current?.setOptions(
        resolvePopperOptions(targetRef.current, containerRef.current, arrowRef.current),
      );
    }
  }, [resolvePopperOptions]);

  return { targetRef, containerRef, arrowRef };
}
