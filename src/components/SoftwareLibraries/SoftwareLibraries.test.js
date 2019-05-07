import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import SoftwareLibraries from './SoftwareLibraries';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const component = (
    <MemoryRouter>
      <SoftwareLibraries />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
