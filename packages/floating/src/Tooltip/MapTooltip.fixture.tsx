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

type Map = {
  on: (
    type: 'click' | 'move',
    cb: (e: { point: { x: number; y: number }; target: { transform?: { width: number; height: number } } }) => void,
  ) => void;
  off: (
    type: 'click' | 'move',
    cb: (e: { point: { x: number; y: number }; target: { transform?: { width: number; height: number } } }) => void,
  ) => void;
  project: (pos: { lng: number; lat: number }) => { x: number; y: number };
};

function useMap(ref) {
  const [map, setMap] = useState<null | Map>(null);
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

class MapPositionTracker {
  map: Map;
  private moveTooltip = (point: { x: number; y: number }) => {
    /* Will be replaced in positionChanged */
  };
  private onMapMove = (e: { target: { transform?: { width: number; height: number } } }) => {
    /* Will be replaced in positionChanged */
  };

  constructor(map: MapPositionTracker['map']) {
    this.map = map;
  }

  public trackPointPosition(pos: { lng: number; lat: number }) {
    this.onMapMove = (e) => {
      const { width, height } = e.target.transform ?? {};
      requestAnimationFrame(() => {
        const { x, y } = this.map.project(pos);
        if (width && height) {
          this.moveTooltip({ x: Math.min(Math.max(0, x), width), y: Math.min(Math.max(0, y), height) });
        } else {
          this.moveTooltip({ x, y });
        }
      });
    };
    this.map.on('move', this.onMapMove);
  }

  public positionChanged(cb: (point: { x: number; y: number }) => void) {
    this.moveTooltip = cb;
  }

  public destroy() {
    this.map.off('move', this.onMapMove);
  }
}

const tooltipService = new TooltipService();

function MapTooltip() {
  const mapEl = useRef(null);
  const map = useMap(mapEl);
  const tooltip = useTooltip();

  useEffect(() => {
    if (!map) return;
    const tracker = new MapPositionTracker(map);
    const createTooltipOnClickPosition = (e) => {
      tooltip.close();
      tooltip.show(
        {
          x: e.point.x,
          y: e.point.y,
        },
        'blabla',
      );
      tracker.trackPointPosition(e.lngLat);
      tracker.positionChanged(({ x, y }) => tooltip.move({ x, y }));
    };

    map.on('click', createTooltipOnClickPosition);
    return () => {
      map.off('click', createTooltipOnClickPosition);
      tracker.destroy();
      tooltip.close();
    };
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
