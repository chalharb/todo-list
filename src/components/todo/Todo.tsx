import React from 'react';
import TodoProps from './model';
import Button from '../button/Button';


const Todo: React.FC<TodoProps> = ({
  id,
  title,
  description,
  done,
  deleteClick
}) => {
  return (
    <div key={id}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Done: {done.toString()}</p>
      <Button onClick={deleteClick}>Delete</Button>
    </div>
  );
};

export default Todo;
