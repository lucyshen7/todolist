import React, { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { Container } from "@mui/material";
import "./App.scss";
import axios from "axios";

const initialTodos: Todo[] = [
  {
    text: "Walk the dog!!",
    complete: false,
  },
  {
    text: "Write app!!",
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    // fetch todos
    axios
      .get('/api/todos')
      .then((response) => {
        console.log("response!!!", response);
      })
      .catch((err) => console.log("err fetching data!", err.message));
  }, []);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        width: "30%",
        height: "75%",
        borderRadius: "5%",
        backgroundColor: "#8897c1",
        overflow: "auto",
      }}
    >
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </Container>
  );
}

export default App;
