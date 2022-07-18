import { Alignment, Boundary, Position } from './types';
import { Placement, Boundary as PopperBoundary, detectOverflow, Modifier } from '@popperjs/core';

enum PlacementParts {
  top = 'top',
  bottom = 'bottom',
  start = 'start',
  end = 'end',
  left = 'left',
  right = 'right',
  center = '',
}

const getPositionMap = (rtl: boolean): Record<Position, PlacementParts> => ({
  above: PlacementParts.top,
  below: PlacementParts.bottom,
  before: rtl ? PlacementParts.right : PlacementParts.left,
  after: rtl ? PlacementParts.left : PlacementParts.right,
});

const getAlignmentMap = (rtl: boolean): Record<Alignment, PlacementParts> => ({
  start: rtl ? PlacementParts.end : PlacementParts.start,
  end: rtl ? PlacementParts.start : PlacementParts.end,
  top: PlacementParts.start,
  bottom: PlacementParts.end,
  center: PlacementParts.center,
});

const shouldAlignToCenter = (p: Position, a: Alignment) => {
  const positionedVertically = p === 'above' || p === 'below';
  const alignedVertically = a === 'top' || a === 'bottom';

  return (positionedVertically && alignedVertically) || (!positionedVertically && !alignedVertically);
};

/**
 * | position | alignment | placement       | placement RTL
 * -----------------------------------------------------------------
 * | above    | start     |  top-start      |  top-end
 * | above    | center    |  top            |  top
 * | above    | end       |  top-end        |  top-start
 * | below    | start     |  bottom-start   |  bottom-end
 * | below    | center    |  bottom         |  bottom
 * | below    | end       |  bottom-end     |  bottom-start
 * | before   | top       |  left-start     |  right-start
 * | before   | center    |  left           |  right
 * | before   | bottom    |  left-end       |  right-end
 * | after    | top       |  right-start    |  left-start
 * | after    | center    |  right          |  left
 * | after    | bottom    |  right-end      |  left-end
 */
export const getPlacement = (align: Alignment, position: Position, rtl = false): Placement => {
  const alignment: Alignment = shouldAlignToCenter(position, align) ? 'center' : align;
  const computedPosition = getPositionMap(rtl)[position];
  const computedAlignment = getAlignmentMap(rtl)[alignment];
  const stringifiedAlignment = computedAlignment && `-${computedAlignment}`;

  return `${computedPosition}${stringifiedAlignment}` as Placement;
};

export const getParentNode = (node: HTMLElement): HTMLElement => {
  if (node.nodeName === 'HTML') return node;
  return node.parentNode || (node as any).host;
};

const getStyleComputedProperty = (node: HTMLElement): Partial<CSSStyleDeclaration> => {
  if (node.nodeType !== 1) return {};

  const window = node.ownerDocument.defaultView;
  // @ts-ignore
  return window.getComputedStyle(node, null);
};

export const getScrollParent = (node: Document | HTMLElement): HTMLElement => {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  const parentNode = node && getParentNode(node as HTMLElement);
  // eslint-disable-next-line
  if (!parentNode) return document.body;

  switch (parentNode.nodeName) {
    case 'HTML':
    case 'BODY':
      return parentNode.ownerDocument.body;
    case '#document':
      return (parentNode as unknown as Document).body;
  }

  // If any of the overflow props is defined for the node then we return it as the parent
  const { overflow = '', overflowX, overflowY } = getStyleComputedProperty(parentNode);
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) return parentNode;

  return getScrollParent(parentNode);
};

export function getBoundary(element: HTMLElement, boundary: Boundary): PopperBoundary {
  if (boundary === 'window') {
    return element.ownerDocument.documentElement;
  }

  if (boundary === 'scrollParent') {
    let boundariesNode = getScrollParent(element);

    if (boundariesNode.nodeName === 'BODY') {
      boundariesNode = element.ownerDocument.documentElement;
    }

    return boundariesNode as HTMLElement;
  }

  return boundary;
}

export const isIntersectingModifier: IsIntersectingModifier = {
  name: 'is-intersecting-modifier',
  enabled: true,
  phase: 'main',
  requires: ['preventOverflow'],
  fn: ({ state, name }) => {
    const popperRect = state.rects.popper;
    const popperAltOverflow = detectOverflow(state, { altBoundary: true });

    const isIntersectingTop = popperAltOverflow.top < popperRect.height && popperAltOverflow.top > 0;
    const isIntersectingBottom = popperAltOverflow.bottom < popperRect.height && popperAltOverflow.bottom > 0;

    const isIntersecting = isIntersectingTop || isIntersectingBottom;

    state.modifiersData[name] = {
      isIntersecting,
    };
    state.attributes.popper = {
      ...state.attributes.popper,
      'data-popper-is-intersecting': isIntersecting,
    };
  },
};

type IsIntersectingModifier = Modifier<'is-intersecting-modifier', never>;
