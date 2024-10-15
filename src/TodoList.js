import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
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
