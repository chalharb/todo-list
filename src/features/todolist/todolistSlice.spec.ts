import todoListReducer, {
  TodoListState,
  Todo,
  updateFilter,
  addTodo,
  deleteTodo,
} from './todoListSlice';
import { v4 as uuid } from 'uuid';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';

describe('TodoList reducer', () => {
  const initialState: TodoListState = {
    todoFilter: 'All',
    todos: [],
  };

  it('should handle initial state', () => {
    expect(todoListReducer(undefined, { type: 'unkown' })).toEqual(
      {
        todoFilter: 'All',
        todos: [{
          id: '4d90c13d-54d2-44a9-a474-054a725ad2b6',
          title: 'Do the laundry',
          done: true,
        }]
      }
    )
  });

  it('should handle updating filter', () => {
    const actual = todoListReducer(initialState, updateFilter('Active'))
    expect(actual.todoFilter).toEqual('Active');
  });

  it('should handle adding a new todo', () => {
    const todo = {
      id: uuid(),
      title: 'Test Todo',
      done: false
    };

    const actual = todoListReducer(initialState, addTodo(todo))
    expect(actual.todos[0]).toEqual(todo);
  });

  it('should handle deleting a todo', () => {
    const todo = {
      id: uuid(),
      title: 'Test Todo',
      done: false
    };


    todoListReducer(initialState, addTodo(todo))
    const actual = todoListReducer(initialState, deleteTodo(todo))
    expect(actual.todos).toEqual([]);
  });
});
