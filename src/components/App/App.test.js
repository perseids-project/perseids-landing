import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from './App';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<App />, div);
});

it('renders project name in title and footer', () => {
  const { getAllByText } = render(<App />);

  expect(getAllByText('The Perseids Project')[0]).toBeInTheDocument();
  expect(getAllByText('The Perseids Project')[0]).toBeInTheDocument();
});

it('renders subsections and navbar', () => {
  const { queryAllByText } = render(<App />);

  expect(queryAllByText(/Perseids Platform/)).toHaveLength(3);
  expect(queryAllByText(/Digital Editions/)).toHaveLength(2);
  expect(queryAllByText(/Libraries and Tools/)).toHaveLength(2);
});

it('renders sponsors', () => {
  const { getByText } = render(<App />);

  expect(getByText('The Perseids Project would not be possible without the support of:')).toBeInTheDocument();
});

it('renders social media', () => {
  const { getByTitle } = render(<App />);

  expect(getByTitle('View Source on Github')).toBeInTheDocument();
  expect(getByTitle('Twitter')).toBeInTheDocument();
});

describe('navbar navigation', () => {
  it('goes to the perseids platform', () => {
    const { getByText, getAllByText } = render(<App />);

    expect(window.location.pathname).toEqual('/');

    fireEvent.click(getAllByText('Perseids Platform')[0]);

    expect(window.location.pathname).toEqual('/perseids-platform');
    expect(getByText('The Perseids Platform')).toBeInTheDocument();
  });

  it('goes to the digital editions', () => {
    const { getAllByText } = render(<App />);

    expect(window.location.pathname).toEqual('/perseids-platform');

    fireEvent.click(getAllByText('Digital Editions')[0]);

    expect(window.location.pathname).toEqual('/digital-editions');
    expect(getAllByText('Digital Editions')[0]).toBeInTheDocument();
    expect(getAllByText('Digital Editions')[1]).toBeInTheDocument();
  });

  it('renders the page in French', () => {
    const { getAllByText } = render(<App />);

    expect(window.location.pathname).toEqual('/digital-editions');

    fireEvent.click(getAllByText('FR')[0]);

    expect(window.location.pathname).toEqual('/fr/digital-editions');
    expect(getAllByText('Éditions numériques')[0]).toBeInTheDocument();
    expect(getAllByText('Éditions numériques')[1]).toBeInTheDocument();
  });

  it('renders links in French', () => {
    const { getAllByText } = render(<App />);

    expect(window.location.pathname).toEqual('/fr/digital-editions');

    fireEvent.click(getAllByText('La plateforme Perseids')[0]);

    expect(window.location.pathname).toEqual('/fr/perseids-platform');
    expect(getAllByText('La plateforme Perseids')[0]).toBeInTheDocument();
    expect(getAllByText('La plateforme Perseids')[1]).toBeInTheDocument();
  });
});
