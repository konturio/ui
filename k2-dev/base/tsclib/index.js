import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Module from '@k2-packages/module';
import Dummy from '@k2-packages/dummy';
const routePrefix = '/';
const LoadingState = (React.createElement("div", { style: { background: 'aqua', width: '100px', height: '100px' } }, "Loading..."));
const BasicRouting = () => (React.createElement(Suspense, { fallback: LoadingState },
    React.createElement("h2", null, "Base app"),
    React.createElement(BrowserRouter, null,
        React.createElement("div", null,
            React.createElement(Route, { exact: true, path: routePrefix, component: Module }),
            React.createElement(Route, { exact: true, path: routePrefix + 'dummy', component: Dummy })))));
const container = document.getElementById('react-root');
render(React.createElement(BasicRouting, null), container);
//# sourceMappingURL=index.js.map