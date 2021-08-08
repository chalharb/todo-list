import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Label from '../../components/label/Label';
import Todo from '../../components/todo/Todo';
import Input from '../../components/input/Input';
import TextArea from '../../components/input/TextArea';
import Button from '../../components/button/Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  addTodo,
  deleteTodo,
  selectTodos,
} from './todoListSlice';

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAddTodo = (title: string, description: string) => {
    dispatch(addTodo({
      id: uuid(),
      title: title,
      description: description,
      done: false
    }))
  }

  return (
    <div>
      <Label labelFor="title">Title: </Label>
      <Input
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setTitle(e.target.value)}
      />
      <Label labelFor="description">Description: </Label>
      <TextArea
        value={description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setDescription(e.target.value)}
      />
      <Button onClick={() => handleAddTodo(title, description)}>Create Todo</Button>

      {todos.map(todo =>
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          done={todo.done}
          deleteClick={() => dispatch(deleteTodo(todo))}
        />
      )}
    </div>
  );
};

export default TodoList;
