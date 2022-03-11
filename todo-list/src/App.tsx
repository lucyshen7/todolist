import { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { Container } from "@mui/material";
import axios from "axios";
import "./App.scss";

const initialTodos: Todo[] = [];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    // fetch todos
    axios
      .get("http://localhost:8080/api/todos")
      .then((response) => {
        const todos = response.data.todos;
        setTodos(todos);
      })
      .catch((err) => console.log("err fetching data!!!!", err.message));
  }, []);

  const toggleTodo = (selectedTodo: Todo) => {
    axios
      .post("http://localhost:8080/api/todos", {
        id: selectedTodo.id,
        complete: !selectedTodo.complete,
      })
      .then((res) => {
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
      });
  };

  const addTodo: AddTodo = (text: string) => {
    axios
    .post("http://localhost:8080/api/todos/add", {
      text: text
    })
    .then((res) => {
      const newTodo = res.data.response[0];
      setTodos([...todos, newTodo]);
    });
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
