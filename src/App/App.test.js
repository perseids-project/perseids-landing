import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import App from './App';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<App />, div);
});

it('renders title', () => {
  const { getByText } = render(<App />);

  expect(getByText('The New Name Project')).toBeInTheDOM();
});

it('renders announcement', () => {
  const { getByText } = render(<App />);

  expect(getByText("We're having a Perseids User Summit on August 21, 2018.")).toBeInTheDOM();
});

it('renders subsections and navbar', () => {
  const { queryAllByText } = render(<App />);

  expect(queryAllByText('Perseids Platform')).toHaveLength(2);
  expect(queryAllByText('Digital Editions')).toHaveLength(2);
  expect(queryAllByText('Libraries and Tools')).toHaveLength(2);
});

it('renders sponsors', () => {
  const { getByText } = render(<App />);

  expect(getByText('The Perseids Project would not be possible without the support of:')).toBeInTheDOM();
});

it('renders social media', () => {
  const { getByText } = render(<App />);

  expect(getByText('© The New Name Project 2018')).toBeInTheDOM();
});

describe('navbar navigation', () => {
  it('goes to the perseids platform', () => {
    const { getByText, getByAltText } = render(<App />);

    expect(window.location.pathname).toEqual('/');

    fireEvent.click(getByText('Perseids Platform'));

    expect(window.location.pathname).toEqual('/perseids-platform');
    expect(getByText('The Perseids Platform')).toBeInTheDOM();

    fireEvent.click(getByAltText('perseids logo'));
  });

  it('goes to the digital editions', () => {
    const { getByText, getByAltText } = render(<App />);

    expect(window.location.pathname).toEqual('/');

    fireEvent.click(getByText('Digital Editions'));

    expect(window.location.pathname).toEqual('/digital-editions');
    expect(getByText('Digital Editions')).toBeInTheDOM();

    fireEvent.click(getByAltText('perseids logo'));
  });
});