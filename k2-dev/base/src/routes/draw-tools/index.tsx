import React, { useRef, useEffect } from 'react';
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

const mapStyle = {
  version: 0,
  center: [-74, 40.76],
  zoom: 11,
};

export default function DrawToolsRoute(): JSX.Element {
  const deckRef = useRef();
  const mapBoxRef = useRef();
  const drawToolsRef = useRef();
  useEffect(() => {
    console.log('deckRef', deckRef.current);
    console.log('mapBoxRef', mapBoxRef.current);
    console.log('drawToolsRef', drawToolsRef.current);
  }, []);

  return (
    <DrawTools>
      <DeckGl ref={deckRef}>
        <MapboxMap
          style={mapboxConfig.style}
          mapStyle={mapStyle}
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
      </DeckGl>
    </DrawTools>
  );
}
