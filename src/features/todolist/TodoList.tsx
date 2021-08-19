import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectTodos } from './todoListSlice';

import TodoForm from '../../components/todoForm/TodoForm';
import TodoToolbar from '../../components/todoToolbar/TodoToolbar';
import TodoItem from './TodoItem';

import {
  StyledTaskList,
} from './styled';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItem {
  todo: Todo;
}

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);
  let date = new Date();

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
