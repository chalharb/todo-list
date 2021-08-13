import { nanoid } from '@reduxjs/toolkit';
import todoListReducer, {
  TodoListState,
  createTodo,
  completeTodo,
  deleteTodo,
} from './todoListSlice';

describe('TodoList reducer', () => {
  it('should handle initial state', () => {
    expect(todoListReducer(undefined, { type: 'unkown' })).toEqual([])
  });

  it('should handle adding a new todo', () => {
    const initialState: TodoListState = [];
    const todoText = 'Test Todo';

    const actual = todoListReducer(initialState, createTodo(todoText))
    expect(actual[0].text).toEqual(todoText);
  });

  it('should handle deleting a todo', () => {
    const id = nanoid();
    const initialState: TodoListState = [{
      id: id,
      text: 'Test todo text',
      completed: false
    }];

    const actual = todoListReducer(initialState, deleteTodo(id))
    expect(actual).toEqual([]);
  });

  it('should handle completing a todo', () => {
    const id = nanoid();
    const initialState: TodoListState = [{
      id: id,
      text: 'Test todo text',
      completed: false
    }];

    const actual = todoListReducer(initialState, completeTodo(id))
    expect(actual[0].completed).toEqual(true);
  });
});
