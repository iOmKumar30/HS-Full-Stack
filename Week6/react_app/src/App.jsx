import { useState, useMemo } from "react";
import React from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(0);

  const sum = useMemo(() => {
    return (num * (num + 1)) / 2;
  }, [num]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter number to calculate sum"
        style={{
          width: "300px",
          height: "30px",
          fontSize: "20px",
          padding: "5px",
          margin: "10px",
          borderRadius: "5px",
        }}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value)) {
            setNum(value);
            setCounter(counter + 1);
          }
        }}
      />
      <br />
      {num > 0 && (
        <>
          <span style={{ fontSize: "20px", margin: "10px" }}>
            Sum of 1 to {num} is : {sum}
          </span>
          <br />
        </>
      )}
      <button
        style={{
          fontSize: "20px",
          padding: "5px",
          margin: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "magenta",
          color: "white",
        }}
        onClick={() => setCounter(counter + 1)}
      >
        Counter {counter}
      </button>
    </div>
  );
}

export default App;
