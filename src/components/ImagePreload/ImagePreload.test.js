import React from 'react';
import ReactDOM from 'react-dom';

import ImagePreload from './ImagePreload';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  ReactDOM.render(<ImagePreload />, div);
});
