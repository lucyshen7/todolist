import React from "react";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

// the TodoListItem component will take a todo item as a prop. The todo item has a text & boolean property.

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  // Declare TodoListItem as a functional component (React.FC) and pass Props as a generic
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.text}
      </label>
    </li>
  );
};
