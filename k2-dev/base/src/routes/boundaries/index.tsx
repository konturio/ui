import React, { useState, useEffect, useRef } from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules-react';
import { connect, ConnectedProps } from 'react-redux';
import getModule from './redux/module';
import { setPosition } from './redux/actions';
import { selectAppState } from './redux/selectors/appState';
import MapboxMap from '@k2-packages/mapbox-map';
import style from './style.styl';

const mapboxConfig: {
  accessToken: string;
  style: string;
} = {
  accessToken: 'pk.eyJ1IjoibnNoa3V0b3YiLCJhIjoiY2s2Y2ExODFvMGpoaDNrb3ZueXYyMDBmZiJ9.d2VPRqEfvCd4fvH7edB6tg',
  style: 'mapbox://styles/nshkutov/ck6ca2wfb397m1imrknjlqd2l',
};

function Map({ onClick, markers, sources, layers }: PropsFromRedux): JSX.Element {
  const mapBoxRef = useRef();
  const [mapStyle, setMapStyle] = useState({ version: 8 });

  /* Sources and layers effect */
  useEffect(() => {
    setMapStyle((current) => ({
      ...current,
      sources: sources || {},
      layers: layers || [],
    }));
  }, [sources, layers]);

  return (
    <MapboxMap
      ref={mapBoxRef}
      style={mapboxConfig.style}
      mapStyle={mapStyle}
      accessToken={mapboxConfig.accessToken}
      className={style.Map}
      onClick={onClick}
      markers={markers}
      onLoad={console.log}
    />
  );
}

const connector = connect(
  (state) => {
    const { markers, layers, sources } = selectAppState(state);

    return { markers, layers, sources };
  },
  (dispatch) => ({
    onClick: (e) => {
      const { lngLat } = e;
      dispatch(setPosition([lngLat.lng, lngLat.lat]));
    },
  }),
);

export type PropsFromRedux = ConnectedProps<typeof connector>;
const ConnectedMap = connector(Map);

export default function MapModule() {
  return (
    <DynamicModuleLoader modules={[getModule()]}>
      <ConnectedMap />
    </DynamicModuleLoader>
  );
}
