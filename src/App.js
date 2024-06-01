import "./App.css";
import React from "react";
import Form from "./Form";
import Header from "./Header";
import TodoHero from "./TodoHero";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const total_todos = todos.length;

  const todos_completed = todos.filter((todo) => todo.is_completed === true)
    .length;

  return (
    <div className="wrapper">
      <Header />
      <TodoHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
