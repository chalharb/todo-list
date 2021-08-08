import React, { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Input from './Input';

const TestInput = () => {
  const [value, setValue] = useState('Testing');
  return <input value={value} onChange={(e) => setValue(e.target.value)} />
}

const setup = () => {
  const utils = render(<TestInput />)
  const input = utils.getByRole('textbox')
  return {
    input,
    ...utils,
  }
}

test('It should render an input field', () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

test('It should render an input field with an initial value', () => {
  const { input } = setup();
  expect(input.value).toBe('Testing');
});

test('It should render an input field and update value', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'Updated text' } });
  expect(input.value).toBe('Updated text');
});
