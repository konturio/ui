import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules-react';
import { connect, ConnectedProps } from 'react-redux';
import getModule from './redux/module';
import { setFoo } from './redux/actions';
import { selectAppState } from './redux/selectors/appState';
// import MapboxMap from '@k2-packages/mapbox-map';
import style from './style.styl';

// const mapboxConfig: {
//   accessToken: string;
//   style: string;
// } = {
//   accessToken: 'pk.eyJ1IjoibnNoa3V0b3YiLCJhIjoiY2s2Y2ExODFvMGpoaDNrb3ZueXYyMDBmZiJ9.d2VPRqEfvCd4fvH7edB6tg',
//   style: 'mapbox://styles/nshkutov/ck6ca2wfb397m1imrknjlqd2l',
// };

function Map({ foo, setFoo }: PropsFromRedux): JSX.Element {
  return (
    <div>
      <button onClick={() => setFoo('Activated')} className={style.btn}>
        Send Request
      </button>
      foo: {foo}
    </div>
    // <MapboxMap
    //   style={mapboxConfig.style}
    //   accessToken={mapboxConfig.accessToken}
    //   className={style.Map}
    //   onClick={console.log}
    //   onLoad={console.log}
    //   bounds={[
    //     [27.24, 53.81],
    //     [27.83, 54.01],
    //   ]}
    //   boundsOptions={{
    //     padding: 50,
    //   }}
    // />
  );
}

const connector = connect((state) => ({ foo: selectAppState(state).foo }), {
  setFoo: (payload) => setFoo(payload),
});

export type PropsFromRedux = ConnectedProps<typeof connector>;
const ConnectedMap = connector(Map);

export default function MapModule() {
  return (
    <DynamicModuleLoader modules={[getModule()]}>
      <ConnectedMap />
    </DynamicModuleLoader>
  );
}
