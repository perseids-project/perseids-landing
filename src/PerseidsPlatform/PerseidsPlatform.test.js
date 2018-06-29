import React from 'react';
import ReactDOM from 'react-dom';

import PerseidsPlatform from './PerseidsPlatform';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PerseidsPlatform />, div);
});
