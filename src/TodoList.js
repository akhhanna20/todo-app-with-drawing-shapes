import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: "Doctor Appointment",
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Meeting at School",
  //     completed: false,
  //   },
  // ]);

  //const [newTask, setNewTask] = useState("");

  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((todo, index) => (
          <TodoItem key={index} todos={todos} setTodos={setTodos} todo={todo} />
        ))
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

export default TodoList;
