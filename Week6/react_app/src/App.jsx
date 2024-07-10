import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./App.css";

/* Task:
* Create a component that takes a todo id as input 
* And renders it by fetching it from the server 
* The parent component should have a button, clicking on which the next 
todo is fetched */
function App() {
  const [id, setId] = useState(0);

  return (
    <div>
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>
      <button onClick={() => setId(4)}>4</button>
      <button onClick={() => setId(5)}>5</button>
      <br />
      id : {id}
      {id > 0 && <Todo id={id} />}
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        setTodo(response.data.todo);
      } catch (error) {
        console.error("Error fetching the todo:", error);
      }
    };

    fetchTodo();
  }, [id]);
  return (
    <div>
      <h2>{todo.title}</h2>
      <h5>{todo.description}</h5>
    </div>
  );
}

export default App;
