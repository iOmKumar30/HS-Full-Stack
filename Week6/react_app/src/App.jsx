import React from "react";
import "./App.css";
import useCounter from "./useCounter";

function App() {
  // let's understand custom hooks in React
  // we will create a counter using custom hooks
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          color: "black",
          margin: "20px",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "5px",
          padding: "10px",
          backgroundColor: "lightblue",
        }}
      >
        Count: {count}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            margin: "10px",
            padding: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "lightgreen",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={increment}
        >
          Increment
        </button>
        <button
          style={{
            margin: "10px",
            padding: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "red",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          style={{
            margin: "10px",
            padding: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "white",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
