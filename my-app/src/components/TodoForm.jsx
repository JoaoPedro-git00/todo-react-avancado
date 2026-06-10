import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoForm() {
  const [text, setText] = useState("");

  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Adicionar
      </button>
    </form>
  );
}