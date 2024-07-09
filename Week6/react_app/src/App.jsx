import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // the below setInterval will fetch the todos in every 5 seconds starting from the first time we run the app

  /*   useEffect(() => {
    setInterval(async () => {
      try {
        const response = await axios.get(
          "https://sum-server.100xdevs.com/todos"
        );
        setTodos(response.data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }, 5000);
  }, []); */

  // if we want to fetch the todos as soon as we run the app, and then send further requests in every 5 seconds, we can do the below

  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get("https://sum-server.100xdevs.com/todos");
      setTodos(response.data.todos);
    }

    fetchTodos();

    const interval = setInterval(fetchTodos, 5000);

    return () => clearInterval(interval);
  },[]);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </ul>
    </div>
  );

  function Todo({ title, description }) {
    return (
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    );
  }
}

export default App;
