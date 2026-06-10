import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", []);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        removeTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}