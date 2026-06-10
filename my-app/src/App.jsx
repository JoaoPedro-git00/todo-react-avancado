import { useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

function App() {
  const [filter, setFilter] =
    useState("all");

  return (
    <div>
      <h1 className="titulo">LISTA DE TAREFAS</h1>

      <TodoForm />

      <TodoFilters
        filter={filter}
        setFilter={setFilter}
      />

      <TodoList filter={filter} />
    </div>
  );
}

export default App;