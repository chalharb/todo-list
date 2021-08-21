import React from 'react';
import './App.css';
import TodoList from './features/todolist/TodoList';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  padding: 20px 10px 0px 20px;
`;

const StyledSubHeading = styled.h1`
  margin: 0;
  font-size: 16px;
  color: #8a9ca5;
  padding: 10px 20px 20px 20px;
`;

function App() {
  let date = new Date();

  return (
    <div className="App">
      <StyledHeading>Todo List</StyledHeading>
      <StyledSubHeading>{date.toDateString()}</StyledSubHeading>
      <TodoList />
    </div>
  );
}

export default App;
