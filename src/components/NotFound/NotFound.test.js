import React from 'react';
import ReactDOM from 'react-dom';

import NotFound from './NotFound';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  ReactDOM.render(<NotFound />, div);
});
