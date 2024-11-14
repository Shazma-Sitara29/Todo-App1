import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function ItemTodo({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
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
            onBlur={handleSave}
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
        <button onClick={handleEdit} className="text-blue-400 hover:text-blue-600">
          <FaEdit />
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default ItemTodo;
