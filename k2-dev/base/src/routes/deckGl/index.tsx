import React, { useRef, useEffect } from 'react';
import DeckGl from '@k2-packages/deck-gl';
import MapboxMap from '@k2-packages/mapbox-map';
import style from './style.styl';

const mapboxConfig: {
  accessToken: string;
  style: string;
} = {
  accessToken: 'pk.eyJ1IjoibnNoa3V0b3YiLCJhIjoiY2s2Y2ExODFvMGpoaDNrb3ZueXYyMDBmZiJ9.d2VPRqEfvCd4fvH7edB6tg',
  style: 'mapbox://styles/nshkutov/ck6ca2wfb397m1imrknjlqd2l',
};

export default function DeckGlRoute(): JSX.Element {
  const deckRef = useRef();
  useEffect(() => {
    console.log(deckRef.current);
  }, []);

  return (
    <DeckGl ref={deckRef}>
      <MapboxMap
        style={mapboxConfig.style}
        accessToken={mapboxConfig.accessToken}
        className={style.Map}
        onClick={() => {
          /* Do nothing */
        }}
        onLoad={() => {
          /* Do nothing */
        }}
        bounds={[
          [27.24, 53.81],
          [27.83, 54.01],
        ]}
        boundsOptions={{
          padding: 50,
        }}
      />
    </DeckGl>
  );
}
