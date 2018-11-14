import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './Contact';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  ReactDOM.render(<Contact />, div);
});
