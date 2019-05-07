import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import Sponsors from './Sponsors';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const component = (
    <MemoryRouter>
      <Sponsors />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
