import React from 'react';
import ReactDOM from 'react-dom';

import PerseidsPlatform from './PerseidsPlatform';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  ReactDOM.render(<PerseidsPlatform />, div);
});
