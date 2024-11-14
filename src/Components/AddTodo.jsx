import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white outline-none"
      />
      <button
        type="submit"
        className="ml-3 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTodo;
