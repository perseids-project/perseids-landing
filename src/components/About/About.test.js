import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import About from './About';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const component = (
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
