import React from 'react';
import ReactDOM from 'react-dom';

import Sponsors from './Sponsors';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  ReactDOM.render(<Sponsors />, div);
});
