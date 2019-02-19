import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import DigitalEditions from './DigitalEditions';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const component = (
    <MemoryRouter>
      <DigitalEditions />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
