import React from 'react';
import ReactDOM from 'react-dom';
import Dummy from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dummy />, div);
  ReactDOM.unmountComponentAtNode(div);
});
