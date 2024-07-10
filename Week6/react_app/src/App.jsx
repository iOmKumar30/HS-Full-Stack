import { useEffect, useState, useMemo } from "react";
import React from "react";
import axios from "axios";
import "./App.css";

/* Task:
Create an app that has two components:
* an input box that takes a number and renders sum of 1 to that number
* a counter that increments normally on clicking but also increments whenever there is a change in the input box\
 */
function App() {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(0);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setNum(e.target.value);
          setCounter(counter + 1);
        }}
      />
      <br />
      Sum is {(parseInt(num) * (parseInt(num) + 1)) / 2} <br />
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
    </div>
  );
}

export default App;
