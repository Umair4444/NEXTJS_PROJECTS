"use client";

import { useState } from "react";
import { useTodos } from "@/context/TodoContext2";

const TodoInput = () => {
  const [task, setTask] = useState("");
  const { addTodo } = useTodos();

  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="border p-2 rounded w-full"
        placeholder="Add a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 rounded"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
