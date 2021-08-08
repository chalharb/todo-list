import React from 'react';

interface TodoProps {
  children: string;
  onClick?: () => void;
}

const Todo: React.FC<TodoProps> = ({
  children,
  onClick
}) => {
  return (
    <button onClick={onClick}>{children}</button>
  );
};

export default Todo;
