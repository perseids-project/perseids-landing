import React from 'react';
import ReactDOM from 'react-dom';

import ListItem from './ListItem';

import treebank from '../img/treebank.png';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const attributes = {
    title: 'hello',
    id: 'hello',
    text: 'some text',
    image: treebank,
    alt: 'treebank',
  };

  ReactDOM.render(<ListItem {...attributes} />, div);
});