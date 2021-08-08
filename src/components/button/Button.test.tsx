import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

test('renders a button element', () => {
  const { getByRole } = render(
    <Button>Click me!</Button>
  );

  expect(getByRole('button')).toBeInTheDocument();
});

test('rendered button triggers click event', () => {
  let clicked = false;
  const handleClick = () => {
    clicked = true;
  };

  render(<Button onClick={handleClick}>Click me!</Button>);

  const button = screen.getByRole('button');
  fireEvent.click(button);

  expect(clicked).toBe(true);
});
