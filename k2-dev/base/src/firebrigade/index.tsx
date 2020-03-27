import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import Geocoder, { geocoderStateField, GeocoderState } from '@k2-packages/geocoder';
import MapboxMap from '@k2-packages/mapbox-map';
import AppLayout, { ISlots } from './AppLayout';
import List from './components/List';
import { IFireBrigadeApp, bbox } from './types';
import useFireStations from './api/useFireStations';

import style from './style.styl';

const mapboxConfig: {
  accessToken: string;
  style: string;
} = {
  accessToken:
    'pk.eyJ1IjoibnNoa3V0b3YiLCJhIjoiY2s2Y2ExODFvMGpoaDNrb3ZueXYyMDBmZiJ9.d2VPRqEfvCd4fvH7edB6tg',
  style: 'mapbox://styles/nshkutov/ck6ca2wfb397m1imrknjlqd2l',
};

const MINSK_BOUNDS: [number, number, number, number] = [27.33330, 53.98395, 28.10165, 53.78159];

function FireBrigadeApp({ selected }: IFireBrigadeApp) {
  const [bounds, setBounds] = useState<bbox | undefined>();
  const fireStations = useFireStations(selected?.center);

  useEffect(() => {
    if (selected && selected.bounds !== undefined) {
      setBounds(selected.bounds);
    }
  }, [selected]);
  const searchBoxRef = useRef();
  const slots: ISlots = {
    background: (
      <MapboxMap
        style={mapboxConfig.style}
        accessToken={mapboxConfig.accessToken}
        className={style.map}
        onClick={() => {
          // do nothing
        }}
        onLoad={() => {
          // do nothing
        }}
        bounds={bounds}
      />
    ),
    left: (
      <Geocoder
        className={style.search}
        bounds={MINSK_BOUNDS}
        inputRef={searchBoxRef}
      />
    ),
    right: (
      fireStations ? <List items={fireStations} /> : undefined
    ),
  };

  return <AppLayout slots={slots} />;
}

function mapStateToProps(state): IFireBrigadeApp {
  const geocoderState: GeocoderState = state[geocoderStateField];
  return {
    selected: geocoderState?.selected,
  };
}
const ConnectedFireBrigadeComponent = connect(mapStateToProps)(FireBrigadeApp);
export default ConnectedFireBrigadeComponent;
