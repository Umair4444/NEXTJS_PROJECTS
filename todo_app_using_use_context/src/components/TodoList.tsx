'use client';

import { useTodos } from '../context/TodoContext';

const TodoList = () => {
  const { state, dispatch } = useTodos();

  return (
    <ul className="mt-4 space-y-2">
      {state.todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center border p-2 rounded">
          <span
            onClick={() => dispatch({ type: 'TOGGLE', id: todo.id })}
            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
          >
            {todo.text}
          </span>
          <button
            className="text-red-500"
            onClick={() => dispatch({ type: 'DELETE', id: todo.id })}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
