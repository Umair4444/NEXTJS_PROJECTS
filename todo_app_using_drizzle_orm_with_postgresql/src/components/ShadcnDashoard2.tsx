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

export default function ShadcnDashboard2() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const contentRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [alert, setAlert] = useState("");

  const showAlert = (message: string) => {
    setAlert(message);
    setTimeout(() => setAlert(""), 5000); // Hide after 5 seconds
  };

  function capitalizeWords(str: string): string {
    return str.length > 0
      ? str[0].toUpperCase() + str.slice(1).toLowerCase()
      : "";
  }

  // To make every character to uppercase seperated by space
  //   return str
  //     .split(" ")
  //     .map(word =>
  //       word.length > 0 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : ""
  //     )
  //     .join(" ");

  // Scroll check on data change
  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      const checkScrollable = el.scrollHeight > el.clientHeight;
      setIsScrollable(checkScrollable);
    }
  }, [todos]);

  const handleScroll = () => {
    const el = contentRef.current;
    if (el) {
      const isBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 10;
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

  // Fetch todos on mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("/api/todo");

        if (!res.ok) {
          const data = await res.json();
          setError(data.error || "Fetching Failed");
          return;
        }
        const data = await res.json();
        // console.log("-------",data)
        setTodos(data.result);
        setError("");
      } catch (err) {
        setError("Failed to fetch todos.");
      }
    };

    fetchTodos();
  }, []);

  // Add a new task
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

      // console.log("resp", res);

      if (!res.ok) throw new Error("Failed to add task");

      setTask("");
      showAlert("Task added successfully");

      // TO MAKE THE PAGE GRAB FRESH DATA AFTER ADDING TASK EVERYTIME
      const todosRes = await fetch("/api/todo");
      console.log("todosRes", todosRes);
      const updated = await todosRes.json();
      console.log("updated", updated);
      setTodos(updated.result);

      // Scroll to bottom
      contentRef.current?.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: "smooth",
      });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // Delete a task
  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/todo`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error("Failed to delete task");

      setTodos((prev) => prev.filter((todo) => todo.id !== id)); // check the working
      showAlert("Task deleted successfully");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Update a task
  const handleUpdate = async (id: number) => {
    const existing = todos.find((t) => t.id === id);
    if (!existing) return;

    const updatedTask = prompt("Update task:", existing.task);
    if (!updatedTask || updatedTask === existing.task) return;

    
    try {
      const res = await fetch("/api/todo", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, task: updatedTask }),
      });
      
      if (!res.ok) throw new Error("Failed to update task");
      
      const updatedData = await res.json(); //
      const updatedTaskFromServer = updatedData["updated Task"]; // ← Capitalized
      console.log('***********',updatedTaskFromServer)

      setTodos((prev) =>
        prev.map(
          (todo) =>
            todo.id === id ? { ...todo, task: updatedTaskFromServer } : todo // change here
        )
      );
      showAlert("Task updated successfully");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-tr from-orange-800 to-pink-800  text-white flex flex-col items-center justify-start px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">📝 Todo List</h1>

      <Card className="bg-gradient-to-br from-red-500/50 to-pink-700/50 backdrop-blur-3xl w-full max-w-xl relative">
        <CardHeader>
          <CardTitle className="text-white text-xl">Add a Task</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-2 mb-4 capitalize"
          >
            <Input
              value={capitalizeWords(task)}
              onChange={(e) => setTask(capitalizeWords(e.target.value))}
              placeholder="Enter a task..."
              className="text-white font-bold placeholder:text-black"
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

          {alert && (
            <div className="mb-4 px-4 py-2 bg-green-600 text-white font-semibold rounded shadow-md animate-pulse">
              {alert}
            </div>
          )}

          {error && (
            <div className="mb-4 px-4 py-2 bg-white text-red-500 text-center font-semibold rounded shadow-md animate-pulse">
              {error}
            </div>
          )}

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
                    className="bg-white px-4 py-2 rounded-lg shadow-sm list-disc list-inside marker:text-red-500 marker:text-xl text-black flex items-center justify-between"
                  >
                    <span>{todo.task}</span>
                    <div className="space-x-2 ml-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleUpdate(todo.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleDelete(todo.id)}
                      >
                        Delete
                      </Button>
                    </div>
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
              <ChevronDown className="w-4 h-4 text-slate-950" />
            )}
          </div>
        )}
      </Card>
    </main>
  );
}
