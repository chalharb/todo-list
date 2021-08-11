import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useAppDispatch } from '../../app/hooks';
import {
  addTodo,
} from '../../features/todo-list/todoListSlice';

import {
  StyledForm,
  StyledFormInput,
  StyledFormButton,
} from './styled';

const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addTodo({
      id: uuid(),
      title: title,
      done: false
    }));

    setTitle('');
  }

  return (
    <StyledForm onSubmit={(e) => handleFormSubmission(e)}>
      <StyledFormInput placeholder="Add a new task..." onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setTitle(e.target.value)} value={title} />
      <StyledFormButton>Add Task</StyledFormButton>
    </StyledForm>
  );
};

export default TodoForm;
