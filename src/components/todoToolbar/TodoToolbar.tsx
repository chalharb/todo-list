import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { TodoFilterType, updateTodoFilter, selectTodos, selectTodoFilter } from '../../features/todolist/todoListSlice';
import { StyledToolbar, StyledTodoCount } from './styled';
import { HorizontalNav, HorizontalNavItem } from '../horizontalNav';
import Pill from '../pill';

const TodoToolbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const todoCount = useAppSelector(selectTodos).length;
  const todoFilter = useAppSelector(selectTodoFilter);
  const todoCountText = todoCount === 1 ? `${todoCount} task` : `${todoCount} tasks`;

  const handleFilterUpdate = (filter: TodoFilterType) => {
    dispatch(updateTodoFilter(filter));
  }

  return (
    <StyledToolbar>
      <StyledTodoCount>{todoCountText}</StyledTodoCount>
      <HorizontalNav>
        <HorizontalNavItem>
          <Pill text="All" active={todoFilter === 'All'} onClick={() => handleFilterUpdate('All')} />
        </HorizontalNavItem>
        <HorizontalNavItem>
          <Pill text="Active" active={todoFilter === 'Active'} onClick={() => handleFilterUpdate('Active')} />
        </HorizontalNavItem>
        <HorizontalNavItem>
          <Pill text="Completed" active={todoFilter === 'Completed'} onClick={() => handleFilterUpdate('Completed')} />
        </HorizontalNavItem>
      </HorizontalNav>
    </StyledToolbar>
  );
};

export default TodoToolbar;
