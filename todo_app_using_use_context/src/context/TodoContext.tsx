'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoState = {
  todos: Todo[];
};

type Action =
  | { type: 'ADD'; text: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'DELETE'; id: number };

const TodoContext = createContext<{
  state: TodoState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const todoReducer = (state: TodoState, action: Action): TodoState => {
  switch (action.type) {
    case 'ADD':
      const newTodo: Todo = {
        id: Date.now(),
        text: action.text,
        completed: false,
      };
      return { todos: [...state.todos, newTodo] };
    case 'TOGGLE':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'DELETE':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodos must be used within TodoProvider');
  return context;
};
