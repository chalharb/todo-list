import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useAppDispatch } from '../../app/hooks';
import {
  createTodo,
} from '../../features/todolist/todoListSlice';

import {
  StyledForm,
  StyledFormInput,
  StyledFormButton,
} from './styled';

const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>("");

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(createTodo(text));

    setText('');
  }

  return (
    <StyledForm onSubmit={(e) => handleFormSubmission(e)}>
      <StyledFormInput placeholder="Add a new task..." onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setText(e.target.value)} value={text} />
      <StyledFormButton>Add Task</StyledFormButton>
    </StyledForm>
  );
};

export default TodoForm;
