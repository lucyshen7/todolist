// Type Declaration File (global to the project)

interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

// Declare the type AddTodo: each new todo will start off incomplete, so we just need a text prop to create one.
type AddTodo = (text: string) => void;