// Type Declaration File (global to the project)

interface Todo {
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;