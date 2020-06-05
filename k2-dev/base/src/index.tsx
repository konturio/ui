import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './i18n';

// Modules:
import Module from '@k2-packages/module';
import Geocoder from '@k2-packages/geocoder';
import NavigationMenu from './NavigationMenu';
/* !not-delete! cli:import */

import store from './store';

// Styles
import './base.styl';
import '@k2-packages/ui-kit/src/reset.css';

// Routes
import Kit from './routes/kit';
import MapBoxMap from './routes/mapbox-map';
import Icons from './routes/icons';

const LoadingState = <div style={{ background: 'aqua', width: '100px', height: '100px' }}>Loading...</div>;

const BasicRouting = (): JSX.Element => (
  <Suspense fallback={LoadingState}>
    <Provider store={store}>
      <Router>
        <NavigationMenu
          links={[
            /* eslint-disable no-multi-spaces */
            { to: '/', label: 'Module', exact: true },
            { to: '/geocoder', label: 'Geocoder' },
            { to: '/kit', label: 'UI Kit' },
            { to: '/mapbox-map', label: 'Mapbox-map' },
            { to: '/fire-brigade', label: 'Fire brigade' },
            { to: '/icons', label: 'Icons' },
            /* !not-delete! cli:link */
            /* eslint-enable no-multi-spaces */
          ]}
        />
        <Switch>
          <Route exact path="/">
            <Module />
          </Route>
          <Route path="/geocoder">
            <Geocoder notFoundMessage={'Че ты там за ересь вбил'} />
          </Route>
          <Route path="/kit">
            <Kit />
          </Route>
          <Route path="/mapbox-map">
            <MapBoxMap />
          </Route>
          <Route path="/icons">
            <Icons />
          </Route>
          {/* !not-delete! cli:route */}
        </Switch>
      </Router>
    </Provider>
  </Suspense>
);

const container = document.getElementById('react-root');
render(<BasicRouting />, container);
