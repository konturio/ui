import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FloatingProvider } from '../OverlayService/FloatingProvider/FloatingProvider';
import { useTooltip } from '../OverlayService';
import { TooltipService } from './TooltipService';

const crtElm = <T extends keyof HTMLElementTagNameMap>(
  tag: T,
  props: Partial<HTMLElementTagNameMap[T]>,
): HTMLElementTagNameMap[T] & { _loadingPromise: Promise<void> } => {
  const el = document.createElement(tag);
  // @ts-ignore
  el._loadingPromise = new Promise<void>((res, rej) => {
    el.onload = () => res();
    el.onerror = (e) => rej(e);
  });
  Object.entries(props).forEach(([k, v]) => {
    el[k] = v;
  });
  // @ts-ignore
  return el;
};

function useMap(ref) {
  const [map, setMap] = useState<null | {
    on: (type: 'click', cb: (e: { point: { x: number; y: number } }) => void) => void;
  }>(null);
  useLayoutEffect(() => {
    const loadings = [
      crtElm('script', {
        src: 'https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.js',
      }),
      crtElm('link', {
        href: 'https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css',
        rel: 'stylesheet',
      }),
    ].map((node) => {
      document.head.appendChild(node);
      return node._loadingPromise;
    });
    Promise.all(loadings)
      .then(() => {
        // @ts-expect-error
        const map = new maplibregl.Map({
          container: ref.current,
          style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
          center: [-74.5, 40], // starting position [lng, lat]
          zoom: 9, // starting zoom
        });
        setMap(map);
      })
      .catch(console.error);
  }, [ref]);
  return map;
}

const tooltipService = new TooltipService();

function MapTooltip() {
  const mapEl = useRef(null);
  const map = useMap(mapEl);
  const tooltip = useTooltip();

  useEffect(() => {
    if (!map) return;

    map.on('click', (e) => {
      tooltip.close();
      tooltip.show(
        {
          x: e.point.x,
          y: e.point.y,
        },
        'blabla',
      );
    });
  }, [map, tooltip]);

  return <div ref={mapEl} style={{ width: '100%', height: '100%' }}></div>;
}

export default function MapTooltipFixture() {
  return (
    <FloatingProvider tooltipService={tooltipService}>
      <MapTooltip />
    </FloatingProvider>
  );
}
