import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const component = (
    <MemoryRouter initialEntries={['/']}>
      <Route path="/" component={Navbar} />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
