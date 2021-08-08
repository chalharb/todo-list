import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { v4 as uuid } from 'uuid';
import TodoProps from '../../components/todo/model';

export interface TodoListState {
  todos: Array<TodoProps>;
}

const initialState: Array<TodoProps> = [
  {
    id: uuid(),
    title: 'Test 1',
    description: 'Lorem Ipsum dolor sit...',
    done: true
  },
  {
    id: uuid(),
    title: 'Test 2',
    description: 'Lorem Ipsum dolor sit...',
    done: true
  },
];

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoProps>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<TodoProps>) => {
      console.log('here')
      return state.filter(todo => todo.id !== action.payload.id)
    },
    updateTodo: (state, action: PayloadAction<TodoProps>) => {
      return state.map(item => {
        if (item.title === action.payload.title) {
          return {
            ...item,
            title: action.payload.title,
            description: action.payload.description,
            done: action.payload.done,
          };
        }

        return item;
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoListSlice.actions;
export const selectTodos = (state: RootState) => {
  return [...state.todos];
}

export default todoListSlice.reducer;
