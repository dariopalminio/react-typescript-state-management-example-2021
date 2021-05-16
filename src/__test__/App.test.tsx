import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const titleH1 = screen.getByText(/State management examples/i);
  expect(titleH1).toBeInTheDocument();
});
