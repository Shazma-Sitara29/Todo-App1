import React, { useState } from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newText.trim()) {
      editTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  // This function will handle the Enter key to save the edit
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div
      className={`flex items-center justify-between p-4 mb-3 rounded-lg ${
        todo.completed ? "bg-gray-700" : "bg-gray-800"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="form-checkbox text-purple-600"
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={handleKeyDown} // Trigger save on Enter key
            className="ml-3 px-2 py-1 rounded-lg bg-gray-700 text-white outline-none"
          />
        ) : (
          <span
            className={`ml-3 ${
              todo.completed ? "line-through text-gray-500" : "text-white"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {isEditing ? (
          <button onClick={handleSave} className="text-green-400 hover:text-green-600">
            <FaSave />
          </button>
        ) : (
          <button onClick={handleEdit} className="text-blue-400 hover:text-blue-600">
            <FaEdit />
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
