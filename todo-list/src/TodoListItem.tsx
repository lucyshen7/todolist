import React from 'react';

interface Props {
  todo: Todo;
}

// the TodoListItem component will take a todo item as a prop. The todo item has a text & boolean property.

export const TodoListItem: React.FC<Props> = ( {todo} ) => { // Declare TodoListItem as a functional component (React.FC) and pass Props as a generic
  return (
    <li>
      <label 
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input type="checkbox" checked={todo.complete} /> {todo.text}
      </label>
    </li>
  );
}