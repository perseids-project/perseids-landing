import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import NotFound from './NotFound';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const component = (
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
