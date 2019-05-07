import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import Contact from './Contact';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const component = (
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
