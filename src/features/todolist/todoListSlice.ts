import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type TodoListState = Array<Todo>;

const initialState: Array<Todo> = [];

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload)
      },
      prepare: (text: string) => ({
        payload: {
          id: nanoid(),
          text,
          completed: false,
        } as Todo,
      })
    },
    completeTodo: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state[index].completed = !state[index].completed;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    }
  },
});

export const { createTodo, completeTodo, deleteTodo } = todoListSlice.actions;

export const selectTodos = (state: RootState) => {
  return [...state.todoList];
};

export default todoListSlice.reducer;
