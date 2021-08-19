import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectTodos,
} from '../../features/todolist/todoListSlice';

import {
  StyledToolbar,
  StyledTodoCount,
  StyledFiltersWrapper,
  StyledFilterActive,
  StyledFilter,
} from './styled';

interface FilterButton {
  text: filterTypes;
}

type filterTypes = 'All' | 'Active' | 'Completed';

const TodoToolbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const todoCount = useAppSelector(selectTodos).length;

  let todoCountText = todoCount === 1 ? `${todoCount} task` : `${todoCount} tasks`;

  const handleFilterClick = (text: filterTypes) => {}

  const FilterButton: React.FC<FilterButton> = ({
    text,
  }) => {
    return (
      <StyledFilter
        onClick={() => handleFilterClick(text)}>
          {text}
      </StyledFilter>
    )
  }

  return (
    <StyledToolbar>
      <StyledTodoCount>{todoCountText}</StyledTodoCount>
      <StyledFiltersWrapper>
        <FilterButton text="All"/>
        <FilterButton text="Active"/>
        <FilterButton text="Completed"/>
      </StyledFiltersWrapper>
    </StyledToolbar>
  );
};

export default TodoToolbar;
