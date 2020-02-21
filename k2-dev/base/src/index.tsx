import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
// import Dummy from '@k2-packages/dummy';
import Module from '@k2-packages/module';

const LoadingState = (
    <div style={{ background: 'aqua', width: '100px', height: '100px' }}>
        Loading...
    </div>
);

const BasicRouting = () => (
    <Suspense fallback={LoadingState}>
        <h2>Base app111</h2>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Module</Link>
                    </li>
                    <li>
                        <Link to="/dummy">Dummy</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/">
                        <Module />
                    </Route>
                    <Route path="/dummy">
                        {/*<Dummy />*/}
                    </Route>
                </Switch>
            </div>
        </Router>
    </Suspense>
);

const container = document.getElementById('react-root');
render(<BasicRouting />, container);
