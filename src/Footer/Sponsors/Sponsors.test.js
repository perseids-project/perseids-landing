import React from 'react';
import ReactDOM from 'react-dom';

import Sponsors from './Sponsors';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sponsors />, div);
});
