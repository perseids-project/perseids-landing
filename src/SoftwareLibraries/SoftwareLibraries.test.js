import React from 'react';
import ReactDOM from 'react-dom';

import SoftwareLibraries from './SoftwareLibraries';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SoftwareLibraries />, div);
});
