import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';

// Modules:
import Module from '@k2-packages/module';
import Geocoder from '@k2-packages/geocoder';
import Input from '@k2-packages/input';
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
                                <Input successes={true} />
                                <Input error={true} />
                                <Input error={true} errorMessage="something bag happen"/>
                                <Input loading={true} />
                                <Input disabled />
                                <Input>
                                    <div>: )</div>
                                </Input>
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
