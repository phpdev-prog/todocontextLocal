import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => {
        prevTodo.id === todo.id ? todo : prevTodo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== todo.id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  return <></>;
}

export default App;
