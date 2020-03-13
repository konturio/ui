import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Geocoder, { geocoderStateField } from '@k2-packages/geocoder';
import MapboxMap from '@k2-packages/mapbox-map';
import AppLayout, { ISlots } from './AppLayout';
import List from './components/List';
import style from './style.styl';

const mapboxConfig: {
  accessToken: string;
  style: string;
} = {
  accessToken:
    'pk.eyJ1IjoibnNoa3V0b3YiLCJhIjoiY2s2Y2ExODFvMGpoaDNrb3ZueXYyMDBmZiJ9.d2VPRqEfvCd4fvH7edB6tg',
  style: 'mapbox://styles/nshkutov/ck6ca2wfb397m1imrknjlqd2l',
};

type bbox = [number, number, number, number];

interface ISelected {
  bounds: bbox
}
interface IFireBrigadeApp {
  selected: ISelected;
}

function FireBrigadeApp({ selected }: IFireBrigadeApp) {
  const [bounds, setBounds] = useState<bbox | undefined>();

  useEffect(() => {
    if (selected && selected.bounds !== undefined) {
      setBounds(selected.bounds);
    }
  }, [selected]);

  const slots: ISlots = {
    background: (
      <MapboxMap
        style={mapboxConfig.style}
        accessToken={mapboxConfig.accessToken}
        className={style.map}
        onClick={() => {}}
        onLoad={() => {}}
        bounds={bounds}
      />
    ),
    topLeft: (
      <Geocoder
        className={style.search}
      />
    ),
    topRight: (
      <List items={[
        {
          name: 'Пожарная часть №13',
          meters: 1200,
          minutes: 12,
          contacts: ['8017 123 - 45 - 67', '8017 765 - 43 - 21'],
          units: [
            { type: 'АЦ-5,0-50', count: 1 }, { type: 'АЦ 5,0-50/4', count: 2 },
          ],
        },
        {
          name: 'Пожарная часть №14',
          meters: 1200,
          minutes: 12,
          contacts: ['8017 123 - 45 - 67', '8017 765 - 43 - 21'],
          units: [
            { type: 'АЦ-5,0-50', count: 1 }, { type: 'АЦ 5,0-50/4', count: 2 },
          ],
        },
      ]}
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
