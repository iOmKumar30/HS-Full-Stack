import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to gym",
      description: "Go to gym from 7-9",
    },
    {
      id: 2,
      title: "Study DSA",
      description: "Study DSA form 9-10",
    },
    {
      id: 3,
      title: "Cook dinner",
      description: "Cook chicken rice for dinner",
    },
  ]);

  return (
    <div>
      <h1>All Todos</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
      <br />
      <h1>Add Todo</h1>
      {/* Everytime the button is clicked a new random TODO will be added */}
      <button onClick={addTodo}>Tap to Add</button>
    </div>
  );

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: Math.random().toString(36).substring(3),
        description: Math.random().toString(36).substring(3),
      },
    ]);
  }
}

function Todo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
