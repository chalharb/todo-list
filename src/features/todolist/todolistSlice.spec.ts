import { nanoid } from '@reduxjs/toolkit';
import todoListReducer, {
  TodoListState,
  createTodo,
  completeTodo,
  deleteTodo,
} from './todoListSlice';

describe('TodoList reducer', () => {
  const initialState = {
    todoFilter: 'All',
    todos: [
      {
        id: '4d90c13d-54d2-44a9-a474-054a725ad2b6',
        text: 'Do the laundry',
        completed: true,
      },
    ]
  };

  it('should handle initial state', () => {
    expect(todoListReducer(undefined, { type: 'unkown' })).toEqual(initialState)
  });

  it('should handle adding a new todo', () => {
    const initialState: TodoListState = {
      todoFilter: 'All',
      todos: [],
    };
    const todoText = 'Test Todo';

    const actual = todoListReducer(initialState, createTodo(todoText))
    expect(actual.todos[0].text).toEqual(todoText);
  });

  it('should handle deleting a todo', () => {
    const id = nanoid();
    const initialState: TodoListState = {
      todoFilter: 'All',
      todos: [
        {
          id: id,
          text: 'Test todo text',
          completed: false
        }
      ]
    };

    const actual = todoListReducer(initialState, deleteTodo(id))
    expect(actual.todos).toEqual([]);
  });

  it('should handle completing a todo', () => {
    const id = nanoid();
    const initialState: TodoListState = {
      todoFilter: 'All',
      todos: [
        {
          id: id,
          text: 'Test todo text',
          completed: false
        }
      ]
    };

    const actual = todoListReducer(initialState, completeTodo(id))
    expect(actual.todos[0].completed).toEqual(true);
  });
});
