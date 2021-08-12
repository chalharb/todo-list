import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { deleteTodo, selectTodos } from './todoListSlice';

import TodoForm from '../../components/todoForm/TodoForm';
import TodoToolbar from '../../components/todoToolbar/TodoToolbar';

import {
  StyledHeading,
  StyledSubHeading,
  StyledTaskList,
  StyledTaskStatus,
  StyledTaskItem,
  StyledTaskTitle,
  StyledTaskDelete,
  StyledTaskItemCompleted
} from './styled';

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

interface TodoItem {
  todo: Todo;
}

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);
  let date = new Date();

  const TodoItem: React.FC<TodoItem> = ({
    todo,
  }) => {

    if (todo.done) {
      return (
        <StyledTaskItemCompleted>
          <StyledTaskStatus type="checkbox" />
          <StyledTaskTitle>{todo.title}</StyledTaskTitle>
          <StyledTaskDelete onClick={() => dispatch(deleteTodo(todo))} aria-label="Delete task"></StyledTaskDelete>
        </StyledTaskItemCompleted>
      )
    }

    return (
      <StyledTaskItem key={todo.id}>
        <StyledTaskStatus type="checkbox" />
        <StyledTaskTitle>{todo.title}</StyledTaskTitle>
        <StyledTaskDelete onClick={() => dispatch(deleteTodo(todo))} aria-label="Delete task"></StyledTaskDelete>
      </StyledTaskItem>
    )
  }

  return (
    <>
      <StyledHeading>Todo List</StyledHeading>
      <StyledSubHeading>{date.toDateString()}</StyledSubHeading>
      <TodoToolbar />
      <TodoForm />

      <StyledTaskList>
        {todos.map(todo =>
          <TodoItem key={todo.id} todo={todo} />
        )}
      </StyledTaskList>
    </>
  )
}

export default TodoList;
