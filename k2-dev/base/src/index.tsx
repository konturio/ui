import React, { Suspense } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

// Modules:
import Module from '@k2-packages/module';
import Geocoder from '@k2-packages/geocoder';
import UI from '@k2-packages/ui-kit';
import MapboxMap from '@k2-packages/mapbox-map';
import FireBrigade from './firebrigade';
import NavigationMenu from './NavigationMenu';

/* !not-delete! cli:import */

import store from './store';

// Styles
import './base.scss';
import style from './index.module.scss';


const mapboxConfig: {
  accessToken: string;
  style: string;
} = {
  accessToken:
    'pk.eyJ1IjoibnNoa3V0b3YiLCJhIjoiY2s2Y2ExODFvMGpoaDNrb3ZueXYyMDBmZiJ9.d2VPRqEfvCd4fvH7edB6tg',
  style: 'mapbox://styles/nshkutov/ck6ca2wfb397m1imrknjlqd2l',
};

const LoadingState = (
  <div style={{ background: 'aqua', width: '100px', height: '100px' }}>
    Loading...
  </div>
);

const BasicRouting = () => (
  <Suspense fallback={LoadingState}>
    <Provider store={store}>
      <Router>
        <NavigationMenu
          links={[
            /* eslint-disable no-multi-spaces */
            { to: '/',             label: 'Module', exact: true },
            { to: '/geocoder',     label: 'Geocoder' },
            { to: '/kit',          label: 'UI Kit' },
            { to: '/mapbox-map',   label: 'Mapbox-map' },
            { to: '/fire-brigade', label: 'Fire brigade' },
            /* eslint-enable no-multi-spaces */
          ]}
        />

        <Switch>
          <Route exact path="/">
            <Module />
          </Route>
          <Route path="/geocoder">
            <Geocoder />
          </Route>
          <Route path="/kit">
            <form className={style.inputs}>
              <div>Default</div>
              <UI.Input placeholder="Some text" />
              <div>Successes</div>
              <UI.Input successes />
              <div>Error</div>
              <UI.Input error />
              <div>Error with message</div>
              <UI.Input error errorMessage="Something bag happen" />
              <div>Disabled</div>
              <UI.Input disabled />
              <div>With icon</div>
              <UI.Input>
                <div>: )</div>
              </UI.Input>
            </form>
          </Route>
          <Route path="/mapbox-map">
            <MapboxMap
              style={mapboxConfig.style}
              accessToken={mapboxConfig.accessToken}
              className={style.Map}
              onClick={console.log}
              onLoad={console.log}
            />
          </Route>
          <Route path="/fire-brigade">
            <FireBrigade />
          </Route>
          {/* !not-delete! cli:route */}
        </Switch>
      </Router>
    </Provider>
  </Suspense>
);

const container = document.getElementById('react-root');
render(<BasicRouting />, container);
