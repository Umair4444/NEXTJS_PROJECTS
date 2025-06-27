"use client";

import { useEffect, useState } from "react";

type Todo = {
  id: number;
  task: string;
};

export default function Dashboard() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch todos on load
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("/api/todo");
        const data = await res.json();
        // console.log("first", data);
        setTodos(data.result);
      } catch (err) {
        setError("Failed to fetch todos.");
      }
    };

    fetchTodos();
  }, []);

  // Submit new task
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task }),
      });

      if (!res.ok) throw new Error("Failed to add task");

      setTask("");
      const data = await res.json();
      console.log(data);

      // Re-fetch todos
      const todosRes = await fetch("/api/todo");
      const updated = await todosRes.json();
      setTodos(updated.result);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-gradient-to-tr from-orange-800 to bg-pink-800 ">
      <div className="min-h-screen text-white flex flex-col items-center justify-start">
        <h1 className="text-3xl font-bold mb-6">📝 Todo List</h1>

        <div className=" bg-red-500 rounded-xl p-8">
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md gap-2 mb-6"
          >
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task..."
              className="flex-1 px-4 py-2 rounded-lg text-black"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-semibold"
            >
              {loading ? "Adding..." : "Add"}
            </button>
          </form>

          {error && <p className="text-red-400 mb-4">{error}</p>}

          <ul className="w-full max-w-md space-y-2 text-black">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="bg-white px-4 py-2 rounded-lg shadow-sm list-disc list-inside marker:text-red-500 marker:text-xl capitalize"
              >
                {todo.task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
