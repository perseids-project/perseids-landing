import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const component = (
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
