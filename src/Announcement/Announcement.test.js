import React from 'react';
import ReactDOM from 'react-dom';

import Announcement from './Announcement';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  ReactDOM.render(<Announcement />, div);
});
