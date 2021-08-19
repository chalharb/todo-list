import React from 'react';

import { useAppSelector } from '../../app/hooks';
import { selectTodos } from './todoListSlice';

import TodoForm from '../../components/todoForm/TodoForm';
import TodoToolbar from '../../components/todoToolbar/TodoToolbar';
import TodoItem from './TodoItem';

import {
  StyledTaskList,
} from './styled';

const TodoList: React.FC = () => {
  const todos = useAppSelector(selectTodos);

  return (
    <>
      <TodoToolbar />
      <TodoForm />

      <StyledTaskList>
        {todos.map(todo =>
          <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
        )}
      </StyledTaskList>
    </>
  )
}

export default TodoList;
