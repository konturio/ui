import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Module from '@k2-packages/module';
import Module1 from '@k2-packages/module1';
/* !not-delete! cli:import */

const LoadingState = (
    <div style={{ background: 'aqua', width: '100px', height: '100px' }}>
        Loading...
    </div>
);

const BasicRouting = () => (
    <Suspense fallback={LoadingState}>
        <h2>Base app</h2>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/module">Module</Link>
                    </li>
                    <li>
                        <Link to="/module1">Module1</Link>
                    </li>
                    {/* !not-delete! cli:link */}
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/module">
                        <Module />
                    </Route>
                    <Route exact path="/module1">
                        <Module1 />
                    </Route>
                    {/* !not-delete! cli:route */}
                </Switch>
            </div>
        </Router>
    </Suspense>
);

const container = document.getElementById('react-root');
render(<BasicRouting />, container);
