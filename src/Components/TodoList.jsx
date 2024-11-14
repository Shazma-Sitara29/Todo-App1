import React from "react";
import TodoItem from "./TodoItems";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div className="w-full max-w-md">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
