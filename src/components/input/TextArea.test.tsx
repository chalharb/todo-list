import React, { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TextArea from './TextArea';

const TestInput = () => {
  const [value, setValue] = useState('Testing');
  return <TextArea value={value} onChange={(e) => setValue(e.target.value)} />
}

const setup = () => {
  const utils = render(<TestInput />)
  const input = utils.getByRole('textbox')
  return {
    input,
    ...utils,
  }
}

test('It should render an textarea field', () => {
  const {input} = setup();
  expect(input).toBeInTheDocument();
});

test('It should render an textarea field with an initial value', () => {
  const {input} = setup();
  expect(input.value).toBe('Testing');
});

test('It should render an textareaw field and update value', () => {
  const {input} = setup();
  fireEvent.change(input, {target: {value: 'Updated text'}});
  expect(input.value).toBe('Updated text');
});
