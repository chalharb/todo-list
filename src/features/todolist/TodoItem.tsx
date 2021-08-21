import React from 'react';

import { useAppDispatch } from '../../app/hooks';
import { deleteTodo, completeTodo } from './todoListSlice';

import {
  StyledTaskStatus,
  StyledTaskItem,
  StyledTaskTitle,
  StyledTaskDelete,
  StyledTaskItemCompleted,
} from './styled';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<Todo> = ({
  id,
  text,
  completed
}) => {
  const dispatch = useAppDispatch();

  if (completed) {
    return (
      <StyledTaskItemCompleted>
        <StyledTaskStatus type="checkbox" onChange={() => dispatch(completeTodo(id))}/>
        <StyledTaskTitle>{text}</StyledTaskTitle>
        <StyledTaskDelete onClick={() => dispatch(deleteTodo(id))} aria-label="Delete task"></StyledTaskDelete>
      </StyledTaskItemCompleted>
    )
  }

  return (
    <StyledTaskItem key={id}>
      <StyledTaskStatus type="checkbox" onChange={() => dispatch(completeTodo(id))}/>
      <StyledTaskTitle>{text}</StyledTaskTitle>
      <StyledTaskDelete onClick={() => dispatch(deleteTodo(id))} aria-label="Delete task"></StyledTaskDelete>
    </StyledTaskItem>
  )
}

export default TodoItem;
