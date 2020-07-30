import React, { useRef, useEffect, useState } from 'react';
import DeckGl from '@k2-packages/deck-gl';
import DrawTools from '@k2-packages/map-draw-tools';
import MapboxMap from '@k2-packages/mapbox-map';
import style from './style.styl';

const mapboxConfig: {
  accessToken: string;
  style: string;
} = {
  accessToken: 'pk.eyJ1IjoibnNoa3V0b3YiLCJhIjoiY2s2Y2ExODFvMGpoaDNrb3ZueXYyMDBmZiJ9.d2VPRqEfvCd4fvH7edB6tg',
  style: 'mapbox://styles/nshkutov/ck6ca2wfb397m1imrknjlqd2l',
};

const initData: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-73.97592544555664, 40.78840505276722],
            [-73.97111892700195, 40.77423686505074],
            [-73.95712852478027, 40.774171866400636],
            [-73.94648551940917, 40.78216622323578],
            [-73.9515495300293, 40.79230402360135],
            [-73.95472526550293, 40.782491176741395],
            [-73.95961761474608, 40.793343710490795],
            [-73.96785736083983, 40.78678041401646],
            [-73.96940231323242, 40.793408690380836],
            [-73.97592544555664, 40.78840505276722],
          ],
        ],
      },
    },
  ],
};
const MODES = {
  MeasureAreaMode: true,
  MeasureDistanceMode: true,
  DrawPolygonMode: true,
  DownloadMode: true,
  UploadMode: true,
};

const MAP_STYLE = {
  version: 8,
  center: [-74, 40.76],
  zoom: 11,
  layers: undefined,
};
const update = (obj, location, val) => {
  obj[location] = val;
  return obj;
};

export default function DrawToolsRoute(): JSX.Element {
  const mapBoxRef = useRef();
  useEffect(() => {
    console.log('mapBoxRef', mapBoxRef.current);
  }, []);

  const [data, setData] = useState(initData);
  const [mode, setMode] = useState<any>('DrawPolygonMode');
  return (
    <div style={{ height: '100%' }}>
      <div className={style.btns}>
        {Object.keys(MODES).map((mode) => (
          <button key={mode} onClick={() => setMode(mode)}>
            {mode}
          </button>
        ))}
      </div>
      <DrawTools
        geoJSON={data}
        mode={mode}
        onEdit={(e) => setData(e.updatedData)}
        modeConfig={{
          MeasureDistanceMode: {
            turfOptions: { units: 'kilometers' },
            formatTooltip: (distance: number) => {
              return distance > 1 ? `${distance.toPrecision(3)} km.` : `${(distance * 1000).toPrecision(3)} m.`;
            },
          },
        }}
      >
        {({ editableLayer }) => (
          <DeckGl layers={editableLayer && [editableLayer]}>
            {({ layers }) => (
              <MapboxMap
                options={{ center: [-74, 40.76], zoom: 11 }}
                style={mapboxConfig.style}
                mapStyle={update(MAP_STYLE, 'layers', layers)}
                accessToken={mapboxConfig.accessToken}
                className={style.Map}
                onClick={() => {
                  /* Do nothing */
                }}
                onLoad={() => {
                  /* Do nothing */
                }}
                ref={mapBoxRef}
              />
            )}
          </DeckGl>
        )}
      </DrawTools>
    </div>
  );
}
