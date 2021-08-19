import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type filterTypes = 'All' | 'Active' | 'Completed';

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export interface TodoListState {
  filter: filterTypes;
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
