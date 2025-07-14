import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import { TodoProvider } from '@/context/TodoContext';

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
