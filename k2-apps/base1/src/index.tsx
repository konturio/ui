import Module from '@k2-packages/module';
import React, { Suspense } from 'react';
import { render } from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';

// const routePrefix = '/k2-front-end';

// Create an async wrapper around Module component.
// We only want to load this component on the '/async' path
// const LoadableAsyncModule = React.lazy(() => {
    // We are intentionally ignoring here as this module is in JS not TS. This is useful
    // if you want to progressively update your packages over to TS.
    // @ts-ignore
    // return import(/* webpackChunkName: 'module' */ '@k2-packages/async')
// });
/* tslint:enable */

const LoadingState = (
    <div style={{ background: 'aqua', width: '100px', height: '100px' }}>
        Loading...
    </div>
);

const BasicRouting = () => (
    <Suspense fallback={LoadingState}>
        {/*<BrowserRouter>*/}
            <h2>Base11</h2>
            <Module>
                {/*<a href={`${routePrefix}/async`}>Hard redirect to /async</a>*/}
                {/*<br />*/}
                {/*<a href={`${routePrefix}/`}>Hard redirect to /</a>*/}
                {/*<br />*/}
                {/*<br />*/}


                {/* We can still use external routing (e.g. page redirects) to load components. */}
                {/*<Route exact={true} path={routePrefix} component={Module} />*/}
                {/*<Route path={`${routePrefix}/async`} component={LoadableAsyncModule} />*/}
            </Module>
        {/*</BrowserRouter>*/}
    </Suspense>
);

const container = document.getElementById('react-root');
render(<BasicRouting />, container);
