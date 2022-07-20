import React, { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { useForceUpdate } from '../utils/hooks/useForceUpdate';

export interface PortalProps {
  children: React.ReactNode;
  type?: string;
  containerRef?: React.RefObject<Node>;
}

/**
 * Portal
 */
export const Portal = ({ children, type = 'portal', containerRef }: PortalProps) => {
  const mountNode = React.useRef<HTMLDivElement | null>(null);
  const portalNode = React.useRef<HTMLElement | null>(null);
  const forceUpdate = useForceUpdate();

  React.useEffect(() => {
    if (containerRef != null) {
      if (typeof containerRef !== 'object' || !('current' in containerRef)) {
        console.warn('[portal]: Invalid value passed to the `containerRef` of a portal');
      } else if (containerRef.current == null) {
        console.warn(
          '[portal]: A ref was passed to the `containerRef` prop of a portal, but no DOM node was attached to it',
        );
      }
    }
  }, [containerRef]);

  useLayoutEffect(() => {
    // This ref may be null when a hot-loader replaces components on the page
    if (!mountNode.current) return;
    const ownerDocument = mountNode.current!.ownerDocument;
    const body = containerRef?.current || ownerDocument.body;
    portalNode.current = ownerDocument.createElement(type)!;
    body.appendChild(portalNode.current);
    forceUpdate();
    return () => {
      if (portalNode.current && body) {
        body.removeChild(portalNode.current);
      }
    };
  }, [type, forceUpdate, containerRef]);

  return portalNode.current ? createPortal(children, portalNode.current) : <span ref={mountNode} />;
};
