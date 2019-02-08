import React from 'react';
import ReactDOM from 'react-dom';

import DigitalEditions from './DigitalEditions';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  ReactDOM.render(<DigitalEditions />, div);
});
