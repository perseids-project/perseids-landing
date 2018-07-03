import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './Footer';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  ReactDOM.render(<Footer />, div);
});
