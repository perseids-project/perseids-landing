import React from 'react';
import ReactDOM from 'react-dom';

import SocialMedia from './SocialMedia';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  ReactDOM.render(<SocialMedia />, div);
});
