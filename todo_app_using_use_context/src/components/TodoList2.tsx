"use client";

import { useTodos } from "@/context/TodoContext2";

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useTodos();

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center border p-2 rounded"
        >
          <span
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.task}
          </span>
          <button className="text-red-500" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
