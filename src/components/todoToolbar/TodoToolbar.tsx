import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectTodos,
  selectFilter,
  updateFilter,
} from '../../features/todo-list/todoListSlice';

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
  const todoFilterState = useAppSelector(selectFilter);
  const [todoFilter, setTodoFilter] = useState<string>(todoFilterState);

  let todoCountText = todoCount === 1 ? `${todoCount} task` : `${todoCount} tasks`;

  const handleFilterClick = (text: filterTypes) => {
    setTodoFilter(text);
    dispatch(updateFilter(text));
  }

  const FilterButton: React.FC<FilterButton> = ({
    text,
  }) => {

    if (todoFilter === text) {
      return (
        <StyledFilterActive
          onClick={() => handleFilterClick(text)}
        >
          {text}
        </StyledFilterActive>
      )
    }

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
