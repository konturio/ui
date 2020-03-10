import React, { Suspense } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router, Switch, Link, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './base.module.scss';
// Modules:
import Module from '@k2-packages/module';
import Geocoder from '@k2-packages/geocoder';
import MapboxMap from '@k2-packages/mapbox-map';
import styles from './index.module.scss';
/* !not-delete! cli:import */

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
      <h2>Base app</h2>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Module</Link>
            </li>
            <li>
              <Link to="/geocoder">geocoder</Link>
            </li>
            <li>
              <Link to="/mapbox-map">mapbox-map</Link>
            </li>
            {/* !not-delete! cli:link */}
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Module />
            </Route>
            <Route path="/geocoder">
              <Geocoder />
            </Route>
            <Route path="/mapbox-map">
              <MapboxMap
                style={mapboxConfig.style}
                accessToken={mapboxConfig.accessToken}
                className={styles.Map}
                onClick={console.log}
                onLoad={console.log}
              />
            </Route>
            {/* !not-delete! cli:route */}
          </Switch>
        </div>
      </Router>
    </Provider>
  </Suspense>
);

const container = document.getElementById('react-root');
render(<BasicRouting />, container);
