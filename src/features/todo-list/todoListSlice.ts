import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { v4 as uuid } from 'uuid';

type filterTypes = 'All' | 'Active' | 'Completed';

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

interface TodoListState {
  todoFilter: filterTypes;
  todos: Array<Todo>;
}

const initialState = {
  todoFilter: 'All',
  todos: [
    {
      id: uuid(),
      title: 'Do the laundry',
      done: true,
    },
    {
      id: uuid(),
      title: 'Take out the trash',
      done: false,
    },
  ]
} as TodoListState

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    updateFilter(state, action: PayloadAction<filterTypes>) {
      state.todoFilter = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos.filter(todo => todo.id !== action.payload.id)];
    },
  },
});

export const { updateFilter, addTodo, deleteTodo } = todoListSlice.actions;

export const selectTodos = (state: RootState) => {
  return [...state.todoList.todos];
};

export const selectFilter = (state: RootState) => {
  return state.todoList.todoFilter
};

export default todoListSlice.reducer;
