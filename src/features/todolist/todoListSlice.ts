import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type filterTypes = 'All' | 'Active' | 'Completed';

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export interface TodoListState {
  todoFilter: filterTypes;
  todos: Array<Todo>;
}

const initialState: TodoListState = {
  todoFilter: 'All',
  todos: [
    {
      id: '4d90c13d-54d2-44a9-a474-054a725ad2b6',
      title: 'Do the laundry',
      done: true,
    },
  ]
};

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
