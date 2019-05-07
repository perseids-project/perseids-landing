import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import Hero from './Hero';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const attributes = {
    title: 'hero image',
    text: 'short description',
    background: 'sunset',
  };
  const component = (
    <MemoryRouter>
      <Hero {...attributes} />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
