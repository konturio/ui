import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Geocoder, { geocoderStateField } from '@k2-packages/geocoder';
import MapboxMap from '@k2-packages/mapbox-map';
import AppLayout, { ISlots } from './AppLayout';

import style from './style.module.scss';

const mapboxConfig: {
  accessToken: string;
  style: string;
} = {
  accessToken:
    'pk.eyJ1IjoibnNoa3V0b3YiLCJhIjoiY2s2Y2ExODFvMGpoaDNrb3ZueXYyMDBmZiJ9.d2VPRqEfvCd4fvH7edB6tg',
  style: 'mapbox://styles/nshkutov/ck6ca2wfb397m1imrknjlqd2l',
};

function FireBrigadeApp({ selected }) {
  const [bounds, setBounds] = useState();

  useEffect(() => {
    if (selected) {
      setBounds(selected.bounds);
    }
  }, [selected]);

  const slots: ISlots = {
    background: (
      <MapboxMap
        style={mapboxConfig.style}
        accessToken={mapboxConfig.accessToken}
        className={style.map}
        onClick={console.log}
        onLoad={console.log}
        bounds={bounds}
      />
    ),
    topLeft: (
      <Geocoder
        className={style.search}
      />
    ),
  };

  return <AppLayout slots={slots} />;
}

function mapStateToProps(state) {
  const geocoderState = state[geocoderStateField];
  return {
    selected: geocoderState?.selected,
  };
}
const ConnectedGeoCoderComponent = connect(mapStateToProps)(FireBrigadeApp);
export default ConnectedGeoCoderComponent;
