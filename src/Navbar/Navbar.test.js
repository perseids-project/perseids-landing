import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './Navbar';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const component = (
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
