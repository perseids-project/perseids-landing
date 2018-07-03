import React from 'react';
import ReactDOM from 'react-dom';

import SoftwareLibraries from './SoftwareLibraries';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  ReactDOM.render(<SoftwareLibraries />, div);
});
