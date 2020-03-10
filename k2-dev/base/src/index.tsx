import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';

// Modules:
import Module from '@k2-packages/module';
import Geocoder from '@k2-packages/geocoder';
import UI from '@k2-packages/ui-kit';

/* !not-delete! cli:import */

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
              <Link to="/kit">UI Kit</Link>
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
            <Route path="/kit">
              <form className="inputs">
                <div>Default</div>
                <UI.Input placeholder="Some text" />
                <div>Successes</div>
                <UI.Input successes={true} />
                <div>Error</div>
                <UI.Input error={true} />
                <div>Error with message</div>
                <UI.Input error={true} errorMessage="Something bag happen" />
                <div>Disabled</div>
                <UI.Input disabled />
                <div>With icon</div>
                <UI.Input>
                  <div>: )</div>
                </UI.Input>
              </form>
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
