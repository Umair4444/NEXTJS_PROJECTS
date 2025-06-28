"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

type Todo = {
  id: number;
  task: string;
};

export default function Dashboard() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const contentRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Scroll check on data change
  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      const checkScrollable = el.scrollHeight > el.clientHeight;
      setIsScrollable(checkScrollable);
    }
  }, [todos]);

  // Handle scroll to detect bottom
  const handleScroll = () => {
    const el = contentRef.current;
    if (el) {
      const isBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 10; // ~10px tolerance
      setIsAtBottom(isBottom);
    }
  };
  const scrollClick = () => {
    const el = contentRef.current;
    if (el) {
      el.scrollTo({
        top: isAtBottom ? 0 : el.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // Fetch todos on load
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("/api/todo");
        const data = await res.json();
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
    <main className="min-h-screen w-full bg-gradient-to-tr from-orange-800 to-pink-800 text-white flex flex-col items-center justify-start px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">📝 Todo List</h1>

      <Card className="bg-red-500 w-full max-w-xl relative">
        <CardHeader>
          <CardTitle className="text-white text-xl">Add a Task</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-2 mb-4"
          >
            <Input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task..."
              className="text-white font-bold placeholder:text-black capitalize"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto"
            >
              {loading ? "Adding..." : "Add"}
            </Button>
          </form>

          {error && <p className="text-red-200 text-sm mb-4">{error}</p>}
          <div
            className="max-h-64 overflow-y-auto scroll-smooth scrollbar-hide space-y-2"
            ref={contentRef}
            onScroll={handleScroll}
          >
            <ul className="space-y-2">
              {Array.isArray(todos) && todos.length > 0 ? (
                todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="bg-white px-4 py-2 rounded-lg shadow-sm list-disc list-inside marker:text-red-500 marker:text-xl capitalize text-black"
                  >
                    {todo.task}
                  </li>
                ))
              ) : (
                <li className="text-center text-white/70 italic">
                  No tasks yet.
                </li>
              )}
            </ul>
          </div>
        </CardContent>
        {isScrollable && (
          <div
            className="absolute bottom-3 right-3 bg-background p-1 rounded-full shadow animate-bounce cursor-pointer bg-rose-600"
            onClick={scrollClick}
          >
            {isAtBottom ? (
              <ChevronUp className="w-4 h-4 text-slate-950" />
            ) : (
              <ChevronDown className="w-4 h-4  text-slate-950" />
            )}
          </div>
        )}
      </Card>
    </main>
  );
}
