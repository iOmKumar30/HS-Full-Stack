import React, { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}
function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Button setCount={setCount} />
    </div>
  );
}

function Button({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

export default App;
