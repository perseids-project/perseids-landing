import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const component = (
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
