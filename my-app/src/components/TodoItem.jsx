import React from "react";

function TodoItem({ todo, toggleTodo, removeTodo }) {
  console.log("Renderizou:", todo.text);

  return (
    <li >
      <span className="itens"
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration:
            todo.completed
              ? "line-through"
              : "none",
          cursor: "pointer"
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() => removeTodo(todo.id)}
      >
        X
      </button>
    </li>
  );
}

export default React.memo(TodoItem);