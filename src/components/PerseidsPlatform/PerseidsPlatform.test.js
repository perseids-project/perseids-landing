import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import PerseidsPlatform from './PerseidsPlatform';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const component = (
    <MemoryRouter>
      <PerseidsPlatform />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
