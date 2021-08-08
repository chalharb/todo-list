import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Label from './Label'

test('renders a label element', () => {
  render(<Label labelFor="test-label">Label Text</Label>);

  const label = screen.getByText(/Label Text/i);

  expect(label).toBeInTheDocument();
});
