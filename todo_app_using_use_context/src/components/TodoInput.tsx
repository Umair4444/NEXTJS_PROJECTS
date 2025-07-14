'use client';

import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

const TodoInput = () => {
  const [text, setText] = useState('');
  const { dispatch } = useTodos();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD', text });
      setText('');
    }
  };

  return (
    <div className="flex gap-2">
      <input
        className="border p-2 rounded"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 rounded" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
