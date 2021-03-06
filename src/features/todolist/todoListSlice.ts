import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type TodoFilterType = 'All' | 'Active' | 'Completed';
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoListState {
  todoFilter: TodoFilterType;
  todos: Array<Todo>;
}

const initialState: TodoListState = {
  todoFilter: 'All',
  todos: [
    {
      id: '4d90c13d-54d2-44a9-a474-054a725ad2b6',
      text: 'Do the laundry',
      completed: true,
    },
  ]
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload)
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
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].completed = !state.todos[index].completed;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
    updateTodoFilter: (state, action: PayloadAction<TodoFilterType>) => {
      state.todoFilter = action.payload;
    },
  },
});

export const { createTodo, completeTodo, deleteTodo, updateTodoFilter } = todoListSlice.actions;

export const selectTodos = (state: RootState) => {
  return [...state.todoList.todos];
};

export const selectTodoFilter = (state: RootState) => {
  return state.todoList.todoFilter;
}

export default todoListSlice.reducer;
