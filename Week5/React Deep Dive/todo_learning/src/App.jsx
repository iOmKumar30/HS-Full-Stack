import { useState } from "react";

// whenever a parent component re-renders its child also re-render as well
function App() {
  const [todos, setTodos] = useState([
    /* {
      title: "Go to gym",
      description: "Go to gym from 7-9",
      completed: false,
    },
    {
      title: "Study DSA",
      description: "Study DSA form 9-100",
      completed: true,
    },
    {
      title: "Study DSA",
      description: "Study DSA form 9-100",
      completed: true,
    }, */
    // let the todos array be empty initally
  ]);

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    // in react whenever we have to update the state we do it using the second function i.e. the set function
    setTodos([
      ...todos,
      {
        title: "new Todo",
        description: "desc of new todo",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })}
      <DummyButton />
    </div>
  );
}

function DummyButton() {
  console.log("Dummy button is re-rendered.");
  return <button>Dummy</button>;
}
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
