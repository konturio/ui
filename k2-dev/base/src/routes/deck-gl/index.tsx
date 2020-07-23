import React, { useRef, useEffect } from 'react';
import DeckGl from '@k2-packages/deck-gl';
import MapboxMap from '@k2-packages/mapbox-map';
import { ScatterplotLayer } from '@deck.gl/layers';
import style from './style.styl';

const mapboxConfig: {
  accessToken: string;
  style: string;
} = {
  accessToken: 'pk.eyJ1IjoibnNoa3V0b3YiLCJhIjoiY2s2Y2ExODFvMGpoaDNrb3ZueXYyMDBmZiJ9.d2VPRqEfvCd4fvH7edB6tg',
  style: 'mapbox://styles/nshkutov/ck6ca2wfb397m1imrknjlqd2l',
};

const MALE_COLOR: [number, number, number] = [0, 128, 255];
const FEMALE_COLOR: [number, number, number] = [255, 0, 128];

export default function DeckGlRoute(): JSX.Element {
  const deckRef = useRef();
  const mapBoxRef = useRef();
  useEffect(() => {
    console.log('deckRef', deckRef.current);
    console.log('mapBoxRef', mapBoxRef.current);
  }, []);

  const layers = [
    {
      type: ScatterplotLayer,
      id: 'scatter-plot',
      data: ('https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/scatterplot/manhattan.json' as unknown) as [
        number,
        number,
        number,
      ][],
      radiusMinPixels: 1,
      getPosition: (d) => [d[0], d[1]],
      getFillColor: (d) => (d[2] === 1 ? MALE_COLOR : FEMALE_COLOR),
    },
  ];

  return (
    <DeckGl layers={layers}>
      {({ layers }) => (
        <MapboxMap
          options={{ center: [-74, 40.76] }}
          style={mapboxConfig.style}
          mapStyle={{
            version: 0,
            center: [-74, 40.76],
            zoom: 11,
            layers: layers ? layers : [],
          }}
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
  );
}
