import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import store from './store';

// Modules:
import Module from '@k2-packages/module';
/* !not-delete! cli:import */

const LoadingState = (
    <div style={{ background: 'aqua', width: '100px', height: '100px' }}>
        Loading...
    </div>
);

const LazyGeocoder = Loadable({
    loader: () => import('@k2-packages/geocoder'),
    loading: () => <div>Loading Scripts...</div>,
});

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
                        {/* !not-delete! cli:link */}
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/">
                            <Module />
                        </Route>
                        <Route path="/geocoder">
                            <LazyGeocoder />
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
