import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './Hero';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const attributes = {
    title: 'hero image',
    text: 'short description',
    background: 'sunset',
  };

  ReactDOM.render(<Hero {...attributes} />, div);
});
