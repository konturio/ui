import React from 'react';
import ReactDOM from 'react-dom';
import {{ pascalCase moduleName }} from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<{{ pascalCase moduleName }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
