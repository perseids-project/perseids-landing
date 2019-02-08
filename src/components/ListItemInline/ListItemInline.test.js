import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import ListItemInline from './ListItemInline';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const attributes = {
    title: 'hello',
    id: 'hello',
    text: 'some text',
    link: 'http://localhost:3000/example',
    linkText: 'example link',
  };
  const component = (
    <MemoryRouter>
      <ListItemInline {...attributes} />
    </MemoryRouter>
  );

  ReactDOM.render(component, div);
});
