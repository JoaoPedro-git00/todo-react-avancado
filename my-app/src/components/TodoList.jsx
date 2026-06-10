import {
  useContext,
  useMemo
} from "react";

import { TodoContext } from "../context/TodoContext";

import TodoItem from "./TodoItem";

export default function TodoList({
  filter
}) {
  const {
    todos,
    toggleTodo,
    removeTodo
  } = useContext(TodoContext);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "completed":
        return todos.filter(
          todo => todo.completed
        );

      case "pending":
        return todos.filter(
          todo => !todo.completed
        );

      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <ul className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}