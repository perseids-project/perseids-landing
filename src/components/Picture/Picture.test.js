import React from 'react';
import ReactDOM from 'react-dom';

import Picture from './Picture';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const attributes = {
    webp: 'fake/img.webp',
    png: 'fake/img.png',
    alt: 'fake',
  };
  const component = (
    <Picture {...attributes} />
  );

  ReactDOM.render(component, div);
});
