import React from 'react';
import { v4 as uuid } from 'uuid';
import { render, fireEvent, screen } from '@testing-library/react';
import Todo from './Todo';

test('It should render a todo component', () => {
  let clicked = false;
  const handleClick = () => {
    clicked = true;
  };

  render(
    <Todo
      key={uuid()}
      id={uuid()}
      title="Todo Title"
      description="Todo Description"
      done={false}
      deleteClick={handleClick}
    />
  );

  const title = screen.getByText(/Todo Title/i);
  const description = screen.getByText(/Todo Description/i);
  const done = screen.getByText(/false/i);
  const button = screen.getByRole('button');
  fireEvent.click(button);

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(done).toBeInTheDocument();
  expect(clicked).toBe(true);
});
