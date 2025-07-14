import { TodoProvider } from "@/context/TodoContext2";
import TodoInput from "@/components/TodoInput2";
import TodoList from "@/components/TodoList2";

export default function Home() {
  return (
    <TodoProvider>
      <main className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <TodoInput />
        <TodoList />
      </main>
    </TodoProvider>
  );
}
